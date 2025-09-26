import { NextRequest, NextResponse } from 'next/server'
import BuscaProcessos from 'busca-processos-judiciais'
import { endpoints } from 'busca-processos-judiciais/utils/endpoints'
import { Tribunais } from 'busca-processos-judiciais/utils/types/tribunais-type'

export async function POST(request: NextRequest) {
  try {
    const { tribunal, mode, processo, cpf, classCodigo, orgaoJulgadorCodigo } = await request.json()

    const apiKey = process.env.NEXT_PUBLIC_API_KEY!
    const busca = new BuscaProcessos(tribunal as Tribunais, apiKey)

    let result
    if (mode === 'processo') {
      result = await busca.getCleanResult(processo)
    } else if (mode === 'cpf') {
      // Implementação direta da busca por CPF
      try {
        const rawResult = await fetch(endpoints[tribunal as Tribunais], {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: apiKey,
          },
          body: JSON.stringify({
            size: 50, // Limita a 50 processos
            query: {
              bool: {
                should: [
                  {
                    nested: {
                      path: "polos.polo.poloAtivo.parte",
                      query: {
                        match: {
                          "polos.polo.poloAtivo.parte.documentoPrincipal": cpf
                        }
                      }
                    }
                  },
                  {
                    nested: {
                      path: "polos.polo.poloPassivo.parte",
                      query: {
                        match: {
                          "polos.polo.poloPassivo.parte.documentoPrincipal": cpf
                        }
                      }
                    }
                  }
                ],
                minimum_should_match: 1
              }
            },
            sort: [{ "dataAjuizamento": { order: "desc" } }]
          }),
        });

        const apiResult = await rawResult.json();

        if (!apiResult.hits || apiResult.hits.hits.length === 0) {
          result = {
            processos: [],
            total: 0,
            message: "Nenhum processo encontrado para este CPF",
            cpfConsultado: cpf
          };
        } else {
          // Formata os resultados
          const processos = apiResult.hits.hits.map((hit: any) => {
            const source = hit._source;
            return {
              numeroProcesso: source.numeroProcesso,
              classeProcessual: source.classe?.nome || "Não informado",
              tribunal: tribunal,
              orgaoJulgador: source.orgaoJulgador?.nome || "Não informado",
              dataAjuizamento: source.dataAjuizamento,
              ultimaAtualizacao: source.dataHoraUltimaAtualizacao,
              grau: source.grau,
              assuntos: source.assuntos?.map((a: any) => ({
                codigo: a.codigo,
                nome: a.nome
              })) || [],
              valorCausa: source.valorCausa
            };
          });

          result = {
            processos,
            total: apiResult.hits.total?.value || processos.length,
            cpfConsultado: cpf
          };
        }
      } catch (searchError) {
        console.error('Erro na busca por CPF:', searchError)
        result = {
          processos: [],
          total: 0,
          message: "Erro ao buscar processos por CPF",
          cpfConsultado: cpf
        };
      }
    } else {
      result = await busca.getProceduralClassAndJudgingBody(parseInt(classCodigo), parseInt(orgaoJulgadorCodigo))
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('Erro geral na API:', error)
    return NextResponse.json({ error: 'Erro ao buscar' }, { status: 500 })
  }
}