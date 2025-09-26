var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// utils/endpoints.ts
var endpoints = {
  TST: "https://api-publica.datajud.cnj.jus.br/api_publica_tst/_search",
  TSE: "https://api-publica.datajud.cnj.jus.br/api_publica_tse/_search",
  STJ: "https://api-publica.datajud.cnj.jus.br/api_publica_stj/_search",
  STM: "https://api-publica.datajud.cnj.jus.br/api_publica_stm/_search",
  TRF1: "https://api-publica.datajud.cnj.jus.br/api_publica_trf1/_search",
  TRF2: "https://api-publica.datajud.cnj.jus.br/api_publica_trf2/_search",
  TRF3: "https://api-publica.datajud.cnj.jus.br/api_publica_trf3/_search",
  TRF4: "https://api-publica.datajud.cnj.jus.br/api_publica_trf4/_search",
  TRF5: "https://api-publica.datajud.cnj.jus.br/api_publica_trf5/_search",
  TRF6: "https://api-publica.datajud.cnj.jus.br/api_publica_trf6/_search",
  TRT1: "https://api-publica.datajud.cnj.jus.br/api_publica_trt1/_search",
  TRT2: "https://api-publica.datajud.cnj.jus.br/api_publica_trt2/_search",
  TRT3: "https://api-publica.datajud.cnj.jus.br/api_publica_trt3/_search",
  TRT4: "https://api-publica.datajud.cnj.jus.br/api_publica_trt4/_search",
  TRT5: "https://api-publica.datajud.cnj.jus.br/api_publica_trt5/_search",
  TRT6: "https://api-publica.datajud.cnj.jus.br/api_publica_trt6/_search",
  TRT7: "https://api-publica.datajud.cnj.jus.br/api_publica_trt7/_search",
  TRT8: "https://api-publica.datajud.cnj.jus.br/api_publica_trt8/_search",
  TRT9: "https://api-publica.datajud.cnj.jus.br/api_publica_trt9/_search",
  TRT10: "https://api-publica.datajud.cnj.jus.br/api_publica_trt10/_search",
  TRT11: "https://api-publica.datajud.cnj.jus.br/api_publica_trt11/_search",
  TRT12: "https://api-publica.datajud.cnj.jus.br/api_publica_trt12/_search",
  TRT13: "https://api-publica.datajud.cnj.jus.br/api_publica_trt13/_search",
  TRT14: "https://api-publica.datajud.cnj.jus.br/api_publica_trt14/_search",
  TRT15: "https://api-publica.datajud.cnj.jus.br/api_publica_trt15/_search",
  TRT16: "https://api-publica.datajud.cnj.jus.br/api_publica_trt16/_search",
  TRT17: "https://api-publica.datajud.cnj.jus.br/api_publica_trt17/_search",
  TRT18: "https://api-publica.datajud.cnj.jus.br/api_publica_trt18/_search",
  TRT19: "https://api-publica.datajud.cnj.jus.br/api_publica_trt19/_search",
  TRT20: "https://api-publica.datajud.cnj.jus.br/api_publica_trt20/_search",
  TRT21: "https://api-publica.datajud.cnj.jus.br/api_publica_trt21/_search",
  TRT22: "https://api-publica.datajud.cnj.jus.br/api_publica_trt22/_search",
  TRT23: "https://api-publica.datajud.cnj.jus.br/api_publica_trt23/_search",
  TRT24: "https://api-publica.datajud.cnj.jus.br/api_publica_trt24/_search",
  TREAC: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-ac/_search",
  TREAL: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-al/_search",
  TREAM: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-am/_search",
  TREAP: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-ap/_search",
  TREBA: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-ba/_search",
  TRECE: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-ce/_search",
  TREDFT: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-dft/_search",
  TREES: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-es/_search",
  TREMA: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-ma/_search",
  TREMG: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-mg/_search",
  TREMT: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-mt/_search",
  TREMS: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-ms/_search",
  TREPA: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-pa/_search",
  TREPB: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-pb/_search",
  TREPE: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-pe/_search",
  TREPI: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-pi/_search",
  TREPR: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-pr/_search",
  TRERJ: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-rj/_search",
  TRERN: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-rn/_search",
  TRERO: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-ro/_search",
  TRERR: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-rr/_search",
  TRERS: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-rs/_search",
  TRESC: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-sc/_search",
  TRESP: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-sp/_search",
  TRESE: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-se/_search",
  TRETO: "https://api-publica.datajud.cnj.jus.br/api_publica_tre-to/_search",
  TJAC: "https://api-publica.datajud.cnj.jus.br/api_publica_tjac/_search",
  TJAL: "https://api-publica.datajud.cnj.jus.br/api_publica_tjal/_search",
  TJAM: "https://api-publica.datajud.cnj.jus.br/api_publica_tjam/_search",
  TJAP: "https://api-publica.datajud.cnj.jus.br/api_publica_tjap/_search",
  TJBA: "https://api-publica.datajud.cnj.jus.br/api_publica_tjba/_search",
  TJCE: "https://api-publica.datajud.cnj.jus.br/api_publica_tjce/_search",
  TJDFT: "https://api-publica.datajud.cnj.jus.br/api_publica_tjdft/_search",
  TJES: "https://api-publica.datajud.cnj.jus.br/api_publica_tjes/_search",
  TJGO: "https://api-publica.datajud.cnj.jus.br/api_publica_tjgo/_search",
  TJMA: "https://api-publica.datajud.cnj.jus.br/api_publica_tjma/_search",
  TJMG: "https://api-publica.datajud.cnj.jus.br/api_publica_tjmg/_search",
  TJMS: "https://api-publica.datajud.cnj.jus.br/api_publica_tjms/_search",
  TJMT: "https://api-publica.datajud.cnj.jus.br/api_publica_tjmt/_search",
  TJPA: "https://api-publica.datajud.cnj.jus.br/api_publica_tjpa/_search",
  TJPB: "https://api-publica.datajud.cnj.jus.br/api_publica_tjpb/_search",
  TJPE: "https://api-publica.datajud.cnj.jus.br/api_publica_tjpe/_search",
  TJPI: "https://api-publica.datajud.cnj.jus.br/api_publica_tjpi/_search",
  TJPR: "https://api-publica.datajud.cnj.jus.br/api_publica_tjpr/_search",
  TJRJ: "https://api-publica.datajud.cnj.jus.br/api_publica_tjrj/_search",
  TJRN: "https://api-publica.datajud.cnj.jus.br/api_publica_tjrn/_search",
  TJRO: "https://api-publica.datajud.cnj.jus.br/api_publica_tjro/_search",
  TJRR: "https://api-publica.datajud.cnj.jus.br/api_publica_tjrr/_search",
  TJRS: "https://api-publica.datajud.cnj.jus.br/api_publica_tjrs/_search",
  TJSC: "https://api-publica.datajud.cnj.jus.br/api_publica_tjsc/_search",
  TJSE: "https://api-publica.datajud.cnj.jus.br/api_publica_tjse/_search",
  TJSP: "https://api-publica.datajud.cnj.jus.br/api_publica_tjsp/_search",
  TJTO: "https://api-publica.datajud.cnj.jus.br/api_publica_tjto/_search",
  TJMRS: "https://api-publica.datajud.cnj.jus.br/api_publica_tjmrs/_search",
  TJMSP: "https://api-publica.datajud.cnj.jus.br/api_publica_tjmsp/_search",
  TJMMG: "https://api-publica.datajud.cnj.jus.br/api_publica_tjmmg/_search"
};

// utils/tribunais.ts
var tribunais = {
  TST: "Tribunal Superior de Trabalho",
  TSE: "Tribunal Superior Eleitoral",
  STJ: "Superior Tribunal de Justi\xE7a",
  STM: "Superior Tribunal Militar",
  TRF1: "Tribunal Regional Federal da 1\xAA Regi\xE3o",
  TRF2: "Tribunal Regional Federal da 2\xAA Regi\xE3o",
  TRF3: "Tribunal Regional Federal da 3\xAA Regi\xE3o",
  TRF4: "Tribunal Regional Federal da 4\xAA Regi\xE3o",
  TRF5: "Tribunal Regional Federal da 5\xAA Regi\xE3o",
  TRF6: "Tribunal Regional Federal da 6\xAA Regi\xE3o",
  TRT1: "Tribunal Regional do Trabalho da 1\xAA Regi\xE3o",
  TRT2: "Tribunal Regional do Trabalho da 2\xAA Regi\xE3o",
  TRT3: "Tribunal Regional do Trabalho da 3\xAA Regi\xE3o",
  TRT4: "Tribunal Regional do Trabalho da 4\xAA Regi\xE3o",
  TRT5: "Tribunal Regional do Trabalho da 5\xAA Regi\xE3o",
  TRT6: "Tribunal Regional do Trabalho da 6\xAA Regi\xE3o",
  TRT7: "Tribunal Regional do Trabalho da 7\xAA Regi\xE3o",
  TRT8: "Tribunal Regional do Trabalho da 8\xAA Regi\xE3o",
  TRT9: "Tribunal Regional do Trabalho da 9\xAA Regi\xE3o",
  TRT10: "Tribunal Regional do Trabalho da 10\xAA Regi\xE3o",
  TRT11: "Tribunal Regional do Trabalho da 11\xAA Regi\xE3o",
  TRT12: "Tribunal Regional do Trabalho da 12\xAA Regi\xE3o",
  TRT13: "Tribunal Regional do Trabalho da 13\xAA Regi\xE3o",
  TRT14: "Tribunal Regional do Trabalho da 14\xAA Regi\xE3o",
  TRT15: "Tribunal Regional do Trabalho da 15\xAA Regi\xE3o",
  TRT16: "Tribunal Regional do Trabalho da 16\xAA Regi\xE3o",
  TRT17: "Tribunal Regional do Trabalho da 17\xAA Regi\xE3o",
  TRT18: "Tribunal Regional do Trabalho da 18\xAA Regi\xE3o",
  TRT19: "Tribunal Regional do Trabalho da 19\xAA Regi\xE3o",
  TRT20: "Tribunal Regional do Trabalho da 20\xAA Regi\xE3o",
  TRT21: "Tribunal Regional do Trabalho da 21\xAA Regi\xE3o",
  TRT22: "Tribunal Regional do Trabalho da 22\xAA Regi\xE3o",
  TRT23: "Tribunal Regional do Trabalho da 23\xAA Regi\xE3o",
  TRT24: "Tribunal Regional do Trabalho da 24\xAA Regi\xE3o",
  TREAC: "Tribunal Regional Eleitoral do Acre",
  TREAL: "Tribunal Regional Eleitoral de Alagoas",
  TREAM: "Tribunal Regional Eleitoral do Amazonas",
  TREAP: "Tribunal Regional Eleitoral do Amap\xE1",
  TREBA: "Tribunal Regional Eleitoral da Bahia",
  TRECE: "Tribunal Regional Eleitoral do Cear\xE1",
  TREDFT: "Tribunal Regional Eleitoral do Distrito Federal e Territ\xF3rios",
  TREES: "Tribunal Regional Eleitoral do Esp\xEDrito Santo",
  TREMA: "Tribunal Regional Eleitoral do Maranh\xE3o",
  TREMG: "Tribunal Regional Eleitoral de Minas Gerais",
  TREMT: "Tribunal Regional Eleitoral do Mato Grosso",
  TREMS: "Tribunal Regional Eleitoral do Mato Grosso do Sul",
  TREPA: "Tribunal Regional Eleitoral do Par\xE1",
  TREPB: "Tribunal Regional Eleitoral da Para\xEDba",
  TREPE: "Tribunal Regional Eleitoral de Pernambuco",
  TREPI: "Tribunal Regional Eleitoral do Piau\xED",
  TREPR: "Tribunal Regional Eleitoral de Paran\xE1",
  TRERJ: "Tribunal Regional Eleitoral do Rio de Janeiro",
  TRERN: "Tribunal Regional Eleitoral do Rio Grande do Norte",
  TRERO: "Tribunal Regional Eleitoral de Rond\xF4nia",
  TRERR: "Tribunal Regional Eleitoral de Roraima",
  TRERS: "Tribunal Regional Eleitoral do Rio Grande do Sul",
  TRESC: "Tribunal Regional Eleitoral de Santa Catarina",
  TRESP: "Tribunal Regional Eleitoral de S\xE3o Paulo",
  TRESE: "Tribunal Regional Eleitoral do Sergipe",
  TRETO: "Tribunal Regional Eleitoral do Tocantins",
  TJAC: "Tribunal de Justi\xE7a do Acre",
  TJAL: "Tribunal de Justi\xE7a de Alagoas",
  TJAM: "Tribunal de Justi\xE7a do Amazonas",
  TJAP: "Tribunal de Justi\xE7a do Amap\xE1",
  TJBA: "Tribunal de Justi\xE7a da Bahia",
  TJCE: "Tribunal de Justi\xE7a do Cear\xE1",
  TJDFT: "Tribunal de Justi\xE7a do Distrito Federal e Territ\xF3rios",
  TJES: "Tribunal de Justi\xE7a do Esp\xEDrito Santo",
  TJGO: "Tribunal de Justi\xE7a de Goi\xE1s",
  TJMA: "Tribunal de Justi\xE7a do Maranh\xE3o",
  TJMG: "Tribunal de Justi\xE7a de Minas Gerais",
  TJMS: "Tribunal de Justi\xE7a do Mato Grosso do Sul",
  TJMT: "Tribunal de Justi\xE7a do Mato Grosso",
  TJPA: "Tribunal de Justi\xE7a do Par\xE1",
  TJPB: "Tribunal de Justi\xE7a da Para\xEDba",
  TJPE: "Tribunal de Justi\xE7a de Pernambuco",
  TJPI: "Tribunal de Justi\xE7a do Piau\xED",
  TJPR: "Tribunal de Justi\xE7a do Paran\xE1",
  TJRJ: "Tribunal de Justi\xE7a do Rio de Janeiro",
  TJRN: "Tribunal de Justi\xE7a do Rio Grande do Norte",
  TJRO: "Tribunal de Justi\xE7a de Rond\xF4nia",
  TJRR: "Tribunal de Justi\xE7a de Roraima",
  TJRS: "Tribunal de Justi\xE7a do Rio Grande do Sul",
  TJSC: "Tribunal de Justi\xE7a de Santa Catarina",
  TJSE: "Tribunal de Justi\xE7a de Sergipe",
  TJSP: "Tribunal de Justi\xE7a de S\xE3o Paulo",
  TJTO: "Tribunal de Justi\xE7a do Tocantins",
  TJMRS: "Tribunal de Justi\xE7a Militar do Rio Grande do Sul",
  TJMSP: "Tribunal de Justi\xE7a Militar de S\xE3o Paulo",
  TJMMG: "Tribunal de Justi\xE7a Militar de Minas Gerais"
};
var siglasTribunais = {
  TST: "TST",
  TSE: "TSE",
  STJ: "STJ",
  STM: "STM",
  TRF1: "TRF1",
  TRF2: "TRF2",
  TRF3: "TRF3",
  TRF4: "TRF4",
  TRF5: "TRF5",
  TRF6: "TRF6",
  TRT1: "TRT1",
  TRT2: "TRT2",
  TRT3: "TRT3",
  TRT4: "TRT4",
  TRT5: "TRT5",
  TRT6: "TRT6",
  TRT7: "TRT7",
  TRT8: "TRT8",
  TRT9: "TRT9",
  TRT10: "TRT10",
  TRT11: "TRT11",
  TRT12: "TRT12",
  TRT13: "TRT13",
  TRT14: "TRT14",
  TRT15: "TRT15",
  TRT16: "TRT16",
  TRT17: "TRT17",
  TRT18: "TRT18",
  TRT19: "TRT19",
  TRT20: "TRT20",
  TRT21: "TRT21",
  TRT22: "TRT22",
  TRT23: "TRT23",
  TRT24: "TRT24",
  TREAC: "TREAC",
  TREAL: "TREAL",
  TREAM: "TREAM",
  TREAP: "TREAP",
  TREBA: "TREBA",
  TRECE: "TRECE",
  TREDFT: "TREDFT",
  TREES: "TREES",
  TREMA: "TREMA",
  TREMG: "TREMG",
  TREMT: "TREMT",
  TREMS: "TREMS",
  TREPA: "TREPA",
  TREPB: "TREPB",
  TREPE: "TREPE",
  TREPI: "TREPI",
  TREPR: "TREPR",
  TRERJ: "TRERJ",
  TRERN: "TRERN",
  TRERO: "TRERO",
  TRERR: "TRERR",
  TRERS: "TRERS",
  TRESC: "TRESC",
  TRESP: "TRESP",
  TRESE: "TRESE",
  TRETO: "TRETO",
  TJAC: "TJAC",
  TJAL: "TJAL",
  TJAM: "TJAM",
  TJAP: "TJAP",
  TJBA: "TJBA",
  TJCE: "TJCE",
  TJDFT: "TJDFT",
  TJES: "TJES",
  TJGO: "TJGO",
  TJMA: "TJMA",
  TJMG: "TJMG",
  TJMS: "TJMS",
  TJMT: "TJMT",
  TJPA: "TJPA",
  TJPB: "TJPB",
  TJPE: "TJPE",
  TJPI: "TJPI",
  TJPR: "TJPR",
  TJRJ: "TJRJ",
  TJRN: "TJRN",
  TJRO: "TJRO",
  TJRR: "TJRR",
  TJRS: "TJRS",
  TJSC: "TJSC",
  TJSE: "TJSE",
  TJSP: "TJSP",
  TJTO: "TJTO",
  TJMRS: "TJMRS",
  TJMSP: "TJMSP",
  TJMMG: "TJMMG"
};

// utils/classes/Processo.ts
var Processo = class {
  constructor(numeroProcesso, classeProcessual, codigoClasseProcessual, sistemaProcessual, formatoProcesso, tribunal, ultimaAtualizacao, grau, dataAjuizamento, movimentos, orgaoJulgador, codigoMunicipio, assuntos) {
    this.numeroProcesso = numeroProcesso;
    this.classeProcessual = classeProcessual;
    this.codigoClasseProcessual = codigoClasseProcessual;
    this.sistemaProcessual = sistemaProcessual;
    this.formatoProcesso = formatoProcesso;
    this.tribunal = tribunal;
    this.ultimaAtualizacao = ultimaAtualizacao;
    this.grau = grau;
    this.dataAjuizamento = dataAjuizamento;
    this.movimentos = movimentos;
    this.orgaoJulgador = orgaoJulgador;
    this.codigoMunicipio = codigoMunicipio;
    this.assuntos = assuntos;
  }
};

// index.ts
var BuscaProcessos = class {
  /**
   * @param tribunal - A sigla do tribunal. Também pode ser importada do objeto `siglasTribunais`
   * @param apiKey - A chave da API Pública do DataJud/CNJ. Pode ser encontrada [aqui](https://datajud-wiki.cnj.jus.br/api-publica/acesso).
   */
  constructor(tribunal, apiKey) {
    this.tribunal = tribunal;
    this.APIKey = apiKey;
  }
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
  getFullObject(processo) {
    return __async(this, null, function* () {
      try {
        const rawResult = yield fetch(endpoints[this.tribunal], {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: this.APIKey
          },
          body: JSON.stringify({
            query: {
              match: {
                numeroProcesso: processo
              }
            }
          })
        });
        const result = yield rawResult.json();
        return result;
      } catch (err) {
        console.log(err);
      }
    });
  }
  /**
   * Retorna um JSON em string com os dados do processo informado, por meio de requisição com o método POST para o endpoint da API.
   *
   * @param processo - O número do processo cujos dados serão buscados.
   * @returns - Uma `Promise` que resolve em um JSON do processo.
   * @throws - Erro do servidor caso um erro ocorra durante o `fetch`
   */
  getStringified(processo) {
    return __async(this, null, function* () {
      try {
        const rawResult = yield fetch(endpoints[this.tribunal], {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: this.APIKey
          },
          body: JSON.stringify({
            query: {
              match: {
                numeroProcesso: processo
              }
            }
          })
        });
        const result = yield rawResult.json();
        return JSON.stringify(result);
      } catch (err) {
        console.log(err);
      }
    });
  }
  /**
   * Busca os dados mais importantes relacionados a determinado processo
   *
   * @param processo - O número do processo cujos dados serão buscados.
   * @returns - Uma `Promise` que retorna uma instância da classe `Processo` com as informações mais relevantes do processo, extraídas do resultado da requisição.
   * @throws - Erro do servidor caso um erro ocorra durante o `fetch`
   */
  getCleanResult(processo) {
    return __async(this, null, function* () {
      const result = yield this.getFullObject(processo);
      const resultProcesso = result.hits.hits[0]._source;
      let movimentos = [];
      let assuntos = [];
      resultProcesso.movimentos.forEach((movimento) => {
        var _a;
        movimentos.push({
          nome: movimento.nome,
          dataHora: movimento.dataHora,
          complemento: ((_a = movimento.complementosTabelados) == null ? void 0 : _a.nome) || null
        });
      });
      resultProcesso.assuntos.forEach((assunto) => {
        assuntos.push({
          codigo: assunto.codigo,
          nome: assunto.nome
        });
      });
      return new Processo(
        resultProcesso.numeroProcesso,
        resultProcesso.classe.nome,
        resultProcesso.classe.codigo,
        resultProcesso.sistema.nome,
        resultProcesso.formato.nome,
        resultProcesso.tribunal,
        resultProcesso.dataHoraUltimaAtualizacao,
        resultProcesso.grau,
        resultProcesso.dataAjuizamento,
        movimentos,
        resultProcesso.orgaoJulgador.nome,
        resultProcesso.orgaoJulgador.codigoMunicipioIBGE,
        assuntos
      );
    });
  }
  /**
   * Retorna apenas os movimentos de determinado processo.
   *
   * @param processo - O número do processo cujos movimentos serão buscados.
   * @returns - Uma `Array` de movimentos. Cada movimento possui as seguintes propriedades: `nome` (string), `dataHora` (Date), and `complemento` (string or null).
   * @throws - Erro do servidor caso um erro ocorra durante o `fetch`
   */
  getMovimentos(processo) {
    return __async(this, null, function* () {
      try {
        const result = yield this.getFullObject(processo);
        const resultProcesso = result.hits.hits[0]._source;
        let movimentos = [];
        resultProcesso.movimentos.forEach((movimento) => {
          var _a;
          movimentos.push({
            nome: movimento.nome,
            dataHora: movimento.dataHora,
            complemento: ((_a = movimento.complementosTabelados) == null ? void 0 : _a.nome) || null
          });
        });
        return movimentos;
      } catch (error) {
        console.log(error);
      }
    });
  }
  /**
   * Busca uma lista de processos com base no código da Classe Processual e no código do Órgão Julgador.
   *
   * @param classCodigo - Código da Classe Processual
   * @param orgaoJulgadorCodigo - Código do órgão julgador
   * @returns - Uma `Promise` com a lista de processos judiciais de determinada classe e de determinado órgão julgador.
   */
  getProceduralClassAndJudgingBody(classCodigo, orgaoJulgadorCodigo) {
    return __async(this, null, function* () {
      try {
        const rawResult = yield fetch(endpoints[this.tribunal], {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: this.APIKey
          },
          body: JSON.stringify({
            query: {
              bool: {
                must: [
                  { match: { "classe.codigo": classCodigo } },
                  { match: { "orgaoJulgador.codigo": orgaoJulgadorCodigo } }
                ]
              }
            }
          })
        });
        const result = yield rawResult.json();
        return result;
      } catch (error) {
        console.log(error);
      }
    });
  }
  /**
   * O mesmo que `getProceduralClassAndJudgingBody`, mas com paginação de dados.
   *
   * @param classCodigo - Código da Classe Processual
   * @param orgaoJulgadorCodigo - Código do órgão julgador
   * @param sizePagination - O número de resultados por página.
   * @param searchAfter - Propriedade opcional. Deverá ser um array com o número do campo 'sort' existente no últimoprocesso do resultado anterior.
   * @returns - Uma `Promise` com a lista de processos judiciais de determinada classe e de determinado órgão julgador.
   */
  getProceduralClassAndJudgingBodyWithPagination(classCodigo, orgaoJulgadorCodigo, sizePagination, searchAfter) {
    return __async(this, null, function* () {
      try {
        const rawResult = yield fetch(endpoints[this.tribunal], {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: this.APIKey
          },
          body: JSON.stringify({
            size: sizePagination,
            query: {
              bool: {
                must: [
                  { match: { "classe.codigo": classCodigo } },
                  { match: { "orgaoJulgador.codigo": orgaoJulgadorCodigo } }
                ]
              }
            },
            sort: [{ "@timestamp": { order: "asc" } }],
            search_after: searchAfter
          })
        });
        const result = yield rawResult.json();
        if (result.hits.hits.length === 0)
          return { hits: "empty" };
        return result.hits.hits;
      } catch (error) {
        console.log(error);
      }
    });
  }
};
export {
  BuscaProcessos as default,
  siglasTribunais,
  tribunais
};
