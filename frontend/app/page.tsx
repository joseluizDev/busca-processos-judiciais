'use client'

import { useState } from 'react'
import { siglasTribunais } from 'busca-processos-judiciais/utils/tribunais'

export default function Home() {
  const [searchMode, setSearchMode] = useState<'processo' | 'class'>('processo')
  const [tribunal, setTribunal] = useState('')
  const [processo, setProcesso] = useState('')
  const [classCodigo, setClassCodigo] = useState('')
  const [orgaoJulgadorCodigo, setOrgaoJulgadorCodigo] = useState('')
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async () => {
    if (!tribunal) {
      setError('Selecione o tribunal')
      return
    }
    if (searchMode === 'processo' && !processo) {
      setError('Preencha o número do processo')
      return
    }
    if (searchMode === 'class' && (!classCodigo || !orgaoJulgadorCodigo)) {
      setError('Preencha o código da classe e do órgão julgador')
      return
    }
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tribunal,
          mode: searchMode,
          processo,
          classCodigo,
          orgaoJulgadorCodigo,
        }),
      })
      if (!response.ok) {
        throw new Error('Erro na resposta da API')
      }
      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError('Erro ao buscar')
      console.error(err)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Busca Processos Judiciais</h1>
        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="radio"
              name="searchMode"
              value="processo"
              checked={searchMode === 'processo'}
              onChange={() => setSearchMode('processo')}
              className="mr-2"
            />
            Buscar por número do processo
          </label>
          <label className="block">
            <input
              type="radio"
              name="searchMode"
              value="class"
              checked={searchMode === 'class'}
              onChange={() => setSearchMode('class')}
              className="mr-2"
            />
            Buscar por classe e órgão julgador
          </label>
        </div>
        <div className="space-y-4">
          <select
            value={tribunal}
            onChange={(e) => setTribunal(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Selecione o Tribunal</option>
            {Object.entries(siglasTribunais).map(([key, value]) => (
              <option key={key} value={value}>{key}</option>
            ))}
          </select>
          {searchMode === 'processo' ? (
            <input
              type="text"
              placeholder="Número do Processo"
              value={processo}
              onChange={(e) => setProcesso(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          ) : (
            <>
              <input
                type="number"
                placeholder="Código da Classe Processual"
                value={classCodigo}
                onChange={(e) => setClassCodigo(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="number"
                placeholder="Código do Órgão Julgador"
                value={orgaoJulgadorCodigo}
                onChange={(e) => setOrgaoJulgadorCodigo(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </>
          )}
          <button
            onClick={handleSearch}
            disabled={loading}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </div>
        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded">
            <h2 className="text-lg font-semibold mb-2">Resultado:</h2>
            {searchMode === 'processo' ? (
              <div className="space-y-2">
                <p><strong>Número do Processo:</strong> {result.numeroProcesso}</p>
                <p><strong>Classe Processual:</strong> {result.classeProcessual}</p>
                <p><strong>Tribunal:</strong> {result.tribunal}</p>
                <p><strong>Órgão Julgador:</strong> {result.orgaoJulgador}</p>
                <p><strong>Data de Ajuizamento:</strong> {new Date(result.dataAjuizamento).toLocaleDateString('pt-BR')}</p>
                <p><strong>Última Atualização:</strong> {new Date(result.ultimaAtualizacao).toLocaleDateString('pt-BR')}</p>
                <p><strong>Grau:</strong> {result.grau}</p>
                <div>
                  <strong>Assuntos:</strong>
                  <ul className="list-disc list-inside ml-4">
                    {result.assuntos?.map((assunto: any, index: number) => (
                      <li key={index}>{assunto.nome}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Movimentos:</strong>
                  <ul className="list-disc list-inside ml-4 max-h-40 overflow-y-auto">
                    {result.movimentos?.map((movimento: any, index: number) => (
                      <li key={index}>
                        {new Date(movimento.dataHora).toLocaleDateString('pt-BR')} - {movimento.nome}
                        {movimento.complemento && ` (${movimento.complemento})`}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                {result.hits?.hits?.length > 0 ? (
                  <ul className="space-y-2 max-h-60 overflow-y-auto">
                    {result.hits.hits.map((hit: any, index: number) => (
                      <li key={index} className="p-2 bg-white rounded border">
                        <p><strong>Número:</strong> {hit._source.numeroProcesso}</p>
                        <p><strong>Classe:</strong> {hit._source.classe.nome}</p>
                        <p><strong>Órgão:</strong> {hit._source.orgaoJulgador.nome}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Nenhum processo encontrado.</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}