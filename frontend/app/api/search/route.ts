import { NextRequest, NextResponse } from 'next/server'
import BuscaProcessos from 'busca-processos-judiciais'

export async function POST(request: NextRequest) {
  try {
    const { tribunal, mode, processo, classCodigo, orgaoJulgadorCodigo } = await request.json()

    const apiKey = process.env.NEXT_PUBLIC_API_KEY!
    const busca = new BuscaProcessos(tribunal, apiKey)

    let result
    if (mode === 'processo') {
      result = await busca.getCleanResult(processo)
    } else {
      result = await busca.getProceduralClassAndJudgingBody(parseInt(classCodigo), parseInt(orgaoJulgadorCodigo))
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Erro ao buscar' }, { status: 500 })
  }
}