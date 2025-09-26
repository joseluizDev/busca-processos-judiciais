declare const tribunais: {
    TST: string;
    TSE: string;
    STJ: string;
    STM: string;
    TRF1: string;
    TRF2: string;
    TRF3: string;
    TRF4: string;
    TRF5: string;
    TRF6: string;
    TRT1: string;
    TRT2: string;
    TRT3: string;
    TRT4: string;
    TRT5: string;
    TRT6: string;
    TRT7: string;
    TRT8: string;
    TRT9: string;
    TRT10: string;
    TRT11: string;
    TRT12: string;
    TRT13: string;
    TRT14: string;
    TRT15: string;
    TRT16: string;
    TRT17: string;
    TRT18: string;
    TRT19: string;
    TRT20: string;
    TRT21: string;
    TRT22: string;
    TRT23: string;
    TRT24: string;
    TREAC: string;
    TREAL: string;
    TREAM: string;
    TREAP: string;
    TREBA: string;
    TRECE: string;
    TREDFT: string;
    TREES: string;
    TREMA: string;
    TREMG: string;
    TREMT: string;
    TREMS: string;
    TREPA: string;
    TREPB: string;
    TREPE: string;
    TREPI: string;
    TREPR: string;
    TRERJ: string;
    TRERN: string;
    TRERO: string;
    TRERR: string;
    TRERS: string;
    TRESC: string;
    TRESP: string;
    TRESE: string;
    TRETO: string;
    TJAC: string;
    TJAL: string;
    TJAM: string;
    TJAP: string;
    TJBA: string;
    TJCE: string;
    TJDFT: string;
    TJES: string;
    TJGO: string;
    TJMA: string;
    TJMG: string;
    TJMS: string;
    TJMT: string;
    TJPA: string;
    TJPB: string;
    TJPE: string;
    TJPI: string;
    TJPR: string;
    TJRJ: string;
    TJRN: string;
    TJRO: string;
    TJRR: string;
    TJRS: string;
    TJSC: string;
    TJSE: string;
    TJSP: string;
    TJTO: string;
    TJMRS: string;
    TJMSP: string;
    TJMMG: string;
};
declare const siglasTribunais: {
    TST: string;
    TSE: string;
    STJ: string;
    STM: string;
    TRF1: string;
    TRF2: string;
    TRF3: string;
    TRF4: string;
    TRF5: string;
    TRF6: string;
    TRT1: string;
    TRT2: string;
    TRT3: string;
    TRT4: string;
    TRT5: string;
    TRT6: string;
    TRT7: string;
    TRT8: string;
    TRT9: string;
    TRT10: string;
    TRT11: string;
    TRT12: string;
    TRT13: string;
    TRT14: string;
    TRT15: string;
    TRT16: string;
    TRT17: string;
    TRT18: string;
    TRT19: string;
    TRT20: string;
    TRT21: string;
    TRT22: string;
    TRT23: string;
    TRT24: string;
    TREAC: string;
    TREAL: string;
    TREAM: string;
    TREAP: string;
    TREBA: string;
    TRECE: string;
    TREDFT: string;
    TREES: string;
    TREMA: string;
    TREMG: string;
    TREMT: string;
    TREMS: string;
    TREPA: string;
    TREPB: string;
    TREPE: string;
    TREPI: string;
    TREPR: string;
    TRERJ: string;
    TRERN: string;
    TRERO: string;
    TRERR: string;
    TRERS: string;
    TRESC: string;
    TRESP: string;
    TRESE: string;
    TRETO: string;
    TJAC: string;
    TJAL: string;
    TJAM: string;
    TJAP: string;
    TJBA: string;
    TJCE: string;
    TJDFT: string;
    TJES: string;
    TJGO: string;
    TJMA: string;
    TJMG: string;
    TJMS: string;
    TJMT: string;
    TJPA: string;
    TJPB: string;
    TJPE: string;
    TJPI: string;
    TJPR: string;
    TJRJ: string;
    TJRN: string;
    TJRO: string;
    TJRR: string;
    TJRS: string;
    TJSC: string;
    TJSE: string;
    TJSP: string;
    TJTO: string;
    TJMRS: string;
    TJMSP: string;
    TJMMG: string;
};

type Tribunais = keyof typeof tribunais;

declare class BuscaProcessos {
    private tribunal;
    private APIKey;
    /**
     * @param tribunal - A sigla do tribunal. Também pode ser importada do objeto `siglasTribunais`
     * @param apiKey - A chave da API Pública do DataJud/CNJ. Pode ser encontrada [aqui](https://datajud-wiki.cnj.jus.br/api-publica/acesso).
     */
    constructor(tribunal: Tribunais, apiKey: string);
    /**
     * Realiza uma requisição à API com o método POST, retornando um objeto com todas as propriedades.
     *
     * @param processo - O número do processo cujos dados serão buscados.
     * @returns - Um Objeto JSON com todas as propriedades do processo.
     * @throws - Erro do servidor caso um erro ocorra durante o `fetch`
     *
     * @example
     * ```js
     * const buscaProcessos = new BuscaProcessos(tribunal, apiKey);
     * const processo = "1234567890";
     * const result = await buscaProcessos.getFullObject(processo);
     * console.log(result);
     * ```
     */
    getFullObject(processo: string): Promise<any>;
    /**
     * Retorna um JSON em string com os dados do processo informado, por meio de requisição com o método POST para o endpoint da API.
     *
     * @param processo - O número do processo cujos dados serão buscados.
     * @returns - Uma `Promise` que resolve em um JSON do processo.
     * @throws - Erro do servidor caso um erro ocorra durante o `fetch`
     */
    getStringified(processo: string): Promise<any>;
    /**
     * Busca os dados mais importantes relacionados a determinado processo
     *
     * @param processo - O número do processo cujos dados serão buscados.
     * @returns - Uma `Promise` que retorna uma instância da classe `Processo` com as informações mais relevantes do processo, extraídas do resultado da requisição.
     * @throws - Erro do servidor caso um erro ocorra durante o `fetch`
     */
    getCleanResult(processo: string): Promise<any>;
    /**
     * Retorna apenas os movimentos de determinado processo.
     *
     * @param processo - O número do processo cujos movimentos serão buscados.
     * @returns - Uma `Array` de movimentos. Cada movimento possui as seguintes propriedades: `nome` (string), `dataHora` (Date), and `complemento` (string or null).
     * @throws - Erro do servidor caso um erro ocorra durante o `fetch`
     */
    getMovimentos(processo: string): Promise<any>;
    /**
     * Busca uma lista de processos com base no código da Classe Processual e no código do Órgão Julgador.
     *
     * @param classCodigo - Código da Classe Processual
     * @param orgaoJulgadorCodigo - Código do órgão julgador
     * @returns - Uma `Promise` com a lista de processos judiciais de determinada classe e de determinado órgão julgador.
     */
    getProceduralClassAndJudgingBody(classCodigo: number, orgaoJulgadorCodigo: number): Promise<any>;
    /**
     * O mesmo que `getProceduralClassAndJudgingBody`, mas com paginação de dados.
     *
     * @param classCodigo - Código da Classe Processual
     * @param orgaoJulgadorCodigo - Código do órgão julgador
     * @param sizePagination - O número de resultados por página.
     * @param searchAfter - Propriedade opcional. Deverá ser um array com o número do campo 'sort' existente no últimoprocesso do resultado anterior.
     * @returns - Uma `Promise` com a lista de processos judiciais de determinada classe e de determinado órgão julgador.
     */
    getProceduralClassAndJudgingBodyWithPagination(classCodigo: number, orgaoJulgadorCodigo: number, sizePagination: number, searchAfter?: number[]): Promise<any>;
}

export { BuscaProcessos as default, siglasTribunais, tribunais };
export = BuscaProcessos