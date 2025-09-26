'use client'

import { useState } from 'react'
import { tribunais } from 'busca-processos-judiciais/utils/tribunais'

export default function Home() {
  const [tribunal, setTribunal] = useState('TRF1')
  const [processo, setProcesso] = useState('')
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async () => {
    if (!tribunal) {
      setError('Selecione o tribunal')
      return
    }
    if (!processo) {
      setError('Preencha o número do processo')
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
          mode: 'processo',
          processo,
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

  const handleClear = () => {
    setProcesso('')
    setResult(null)
    setError('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-500 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg">
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Consulta Regional Federal</h1>
        </div>
        <p className="text-gray-600 mb-8">Sistema de busca de processos judiciais federais</p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
              NÚMERO DO PROCESSO
            </label>
            <input
              type="text"
              placeholder="Ex: 0000000-00.0000.0.00.0000 ou 00000000000000000000"
              value={processo}
              onChange={(e) => setProcesso(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">
              TRIBUNAL
            </label>
            <select
              value={tribunal}
              onChange={(e) => setTribunal(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white"
            >
              {Object.entries(tribunais).map(([key, value]) => (
                <option key={key} value={key}>{key} - {value}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleSearch}
              disabled={loading}
              className="flex-1 bg-purple-600 text-white p-4 rounded-lg font-semibold text-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors uppercase tracking-wide"
            >
              {loading ? 'CONSULTANDO...' : 'CONSULTAR PROCESSO'}
            </button>
            <button
              onClick={handleClear}
              className="px-8 bg-gray-200 text-gray-700 p-4 rounded-lg font-semibold text-lg hover:bg-gray-300 transition-colors uppercase tracking-wide"
            >
              LIMPAR
            </button>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-center">{error}</p>
            </div>
          )}
        </div>

        {result && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Resultado da Consulta:</h2>
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Número do Processo:</p>
                  <p className="text-lg font-mono">{result.numeroProcesso}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Tribunal:</p>
                  <p className="text-lg">{result.tribunal}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Classe Processual:</p>
                  <p className="text-lg">{result.classeProcessual}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Órgão Julgador:</p>
                  <p className="text-lg">{result.orgaoJulgador}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Data de Ajuizamento:</p>
                  <p className="text-lg">{new Date(result.dataAjuizamento).toLocaleDateString('pt-BR')}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Última Atualização:</p>
                  <p className="text-lg">{new Date(result.ultimaAtualizacao).toLocaleDateString('pt-BR')}</p>
                </div>
              </div>

              {result.assuntos && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-600 mb-2">Assuntos:</p>
                  <div className="space-y-1">
                    {result.assuntos.map((assunto: any, index: number) => (
                      <span key={index} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {assunto.nome}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {result.movimentos && (
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-800">Histórico de Movimentos</h3>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm font-medium">
                      {result.movimentos.length} movimento{result.movimentos.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="max-h-80 overflow-y-auto border border-gray-200 rounded-lg">
                    {result.movimentos.map((movimento: any, index: number) => (
                      <div key={index} className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${index === result.movimentos.length - 1 ? 'border-b-0' : ''}`}>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-3 h-3 bg-purple-400 rounded-full border-2 border-white shadow-sm"></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <p className="text-sm font-medium text-purple-600">
                                {new Date(movimento.dataHora).toLocaleDateString('pt-BR', {
                                  day: '2-digit',
                                  month: '2-digit',
                                  year: 'numeric'
                                })}
                              </p>
                              <p className="text-xs text-gray-500">
                                {new Date(movimento.dataHora).toLocaleTimeString('pt-BR', {
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </p>
                            </div>
                            <p className="font-medium text-gray-900 mb-1">{movimento.nome}</p>
                            {movimento.complemento && (
                              <p className="text-sm text-gray-600 leading-relaxed">{movimento.complemento}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-xs text-gray-500 text-center">
                    Movimentos ordenados por data (mais recente primeiro)
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}