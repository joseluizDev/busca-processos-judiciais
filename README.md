<div align="center">

<img src="https://joaotextor.com/busca-processos-judiciais/logo.png" alt="logo" height="300px"/>

[Início](#consulta-regional-federal) ⦁
[Frontend](#-frontend) ⦁
[Docker](#-docker) ⦁
[Biblioteca](#-biblioteca) ⦁
[Contribua](#-contribua-) ⦁
[Documentação](#-documentação) ⦁
[Licença](#-licença)

</div>

# Consulta Regional Federal

## 🤔 O que é?

Sistema completo para consulta de processos judiciais federais que inclui:

- **🌐 Frontend moderno** em Next.js com interface intuitiva
- **📚 Biblioteca JavaScript** que utiliza a API Pública do CNJ
- **🐳 Containerização Docker** para fácil deployment

Permite a busca de dados de processos judiciais de todas as Justiças (Estadual, Federal, Militar, Eleitoral, Trabalhista e Tribunais Superiores) do Brasil.

Possui como base de dados a [API Pública do CNJ](https://datajud-wiki.cnj.jus.br/api-publica/).

## 🌐 Frontend

Interface web moderna e responsiva para consulta de processos judiciais.

### ✨ Características

- 🎨 Interface intuitiva com design moderno
- 🔍 Busca por número do processo
- 🏛️ Seleção de tribunal
- 📊 Exibição detalhada dos resultados
- ⏱️ Timeline de movimentos processuais
- 🏷️ Tags para assuntos
- 📱 Responsivo para mobile e desktop

### 🚀 Como executar o frontend

#### Desenvolvimento
```bash
cd frontend
npm install
npm run dev
```
**Acesso:** http://localhost:3000

#### Produção
```bash
cd frontend
npm run build
npm start
```

## 🐳 Docker

Execute toda a aplicação usando Docker de forma simples:

### Desenvolvimento
```bash
docker-compose up frontend
```
**Acesso:** http://localhost:3000

### Produção (com nginx)
```bash
docker-compose --profile production up -d
```
**Acesso:** http://localhost:80

📖 **Para mais detalhes:** consulte [DOCKER.md](./DOCKER.md)

## 📚 Biblioteca

Biblioteca JavaScript que abstrai o acesso à API Pública do CNJ.

### 🔌 Instalação

Para instalar localmente em seu projeto, utilize:

```bash
npm i --save busca-processos-judiciais
```

#### 📂 Importação

```js
import BuscaProcesso from "busca-processos-judiciais";
```

ou

```js
const BuscaProcesso = require("busca-processos-judiciais");
```

Para fazer a importação de fora de um ambiente node (browser) em um ES6 Module, utilize:

```js
import BuscaProcesso from "./node_modules/busca-processos-judiciais/dist/index.mjs".
```

#### 🚀️ Implementação

```js
async function buscarProcesso() {
  const busca = new BuscaProcesso(
    "TRF4",
    "APIKey cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==",
  );
  return busca.getCleanResult("50342112220234040000");
}

buscarProcesso()
  .then((data) => console.log(data))
  .catch((erro) => console.log(erro));
```

#### 🔑 Chave Pública da API

A API do CNJ é pública e a chave pode ser obtida [aqui](https://datajud-wiki.cnj.jus.br/api-publica/acesso).
O uso da API está sujeita aos **[Termos de Uso](https://formularios.cnj.jus.br/wp-content/uploads/2023/05/Termos-de-uso-api-publica-V1.1.pdf)** definidos pelo CNJ.

#### 🔧 Métodos

**`constructor(tribunal, apiKey)`**: tanto a sigla do Tribunal quanto a chave pública da API são propriedades obrigatórias no construtor da classe.

**`getFullObject(processo: string)`**: Retorna um Objeto Javascript completo, com todos os dados da requisição à API.

**`getStringified(processo: string)`**: Retorna todos os dados da requisição como uma String JSON.

**`getCleanResult(processo: string)`**: Retorna a Classe **`Processo`** com os principais dados da requisição. Esta é a estrutura desta classe:

**`getProceduralClassAndJudgingBody(classCodigo: number, orgaoJulgadorCodigo: number)`**: Retorna uma lista de processos com base no código da classe processual informada e no código do órgão julgador.

**`getProceduralClassAndJudgingBodyWithPagination(classCodigo: number, orgaoJulgadorCodigo: number, sizePagination: number, searchAfter?: number[])`**: Mesmo que o anterior, mas com paginação.

````js
class Processo {
  public readonly numeroProcesso: string;
  public readonly classeProcessual: string;
  public readonly codigoClasseProcessual: number;
  public readonly sistemaProcessual: string;
  public readonly formatoProcesso: string;
  public readonly tribunal: string;
  public readonly ultimaAtualizacao: Date;
  public readonly grau: string;
  public readonly dataAjuizamento: Date;
  public readonly movimentos: Array<Movimentos>;
  public readonly orgaoJulgador: string;
  public readonly codigoMunicipio: number;
  public readonly assuntos: Array<Assuntos>;

//...constructor, etc...
}
````

Os tipos **`Movimentos`** e **`Assuntos`** são assim compostos:

```js
type Movimentos = {
  nome: string;
  dataHora: Date;
  complemento: string | null;
};
```

```js
type Assuntos = {
  codigo: number;
  nome: string;
};
```

#### 📐 Objetos de suporte

Além da classe principal, esta biblioteca também exporta dois objetos de suporte: `tribunais` e `siglasTribunais`.

O primeiro traz o nome completo de todos os Tribunais na estrutura `{ sigla: "nome completo" }`. Exemplo:

```js
export const tribunais = {
  TST: "Tribunal Superior de Trabalho",
  TSE: "Tribunal Superior Eleitoral",
  STJ: "Superior Tribunal de Justiça",
  STM: "Superior Tribunal Militar",
  //...
```

O segundo traz as siglas dos Tribunais, que podem ser utilizadas como se fossem um `enum` ao instanciar a classe BuscaProcessos. Vejamos:

```js
import { siglasTribunais } from "busca-processos-judiciais"

const busca = new BuscarProcesso(siglasTribunais.TJRS, "api-key")
```

Isso reduz as chances de erro de digitação, visto que permite o uso do autocomplete de seu editor de código/IDE.

## 👨‍💻 Contribua 👩‍💻

Pull Requests são extremamente bem-vindos, seja para corrigir bugs, implementar testes, melhorar o código ou criar novas funcionalidades.

### 🔧 Desenvolvimento

```bash
# Clone o repositório
git clone <repository-url>
cd consulta-regional-federal

# Frontend
cd frontend
npm install
npm run dev

# Biblioteca
npm install
npm run build
npm test
```

### 📝 Tipos de contribuição

- **Frontend**: Melhorias na interface, novos recursos, responsividade
- **Biblioteca**: Novos tipos de busca, otimizações, correções
- **Docker**: Melhorias na containerização e deployment
- **Documentação**: Correções, exemplos, tutoriais

Por enquanto, a biblioteca permite a busca por número do processo e também por código da classe processual em conjunto com o código do órgão julgador, com ou sem paginação. No entanto, a API permite utilizar inúmeros critérios, como exemplificado [aqui](https://datajud-wiki.cnj.jus.br/api-publica/exemplos/exemplo2).

Fique à vontade para contribuir adicionando novos tipos de busca e funcionalidades.

## 👀 Documentação

A documentação completa pode ser encontrada [AQUI](https://busca-processos-judiciais.joaotextor.com).

## 🪲 Bugs & Issues

Encontrou um bug ou tem uma sugestão? Crie um [issue](https://github.com/joaotextor/busca-processos-judiciais/issues) descrevendo:

- **Bug**: Descreva o problema, passos para reproduzir e comportamento esperado
- **Feature**: Explique a funcionalidade desejada e sua justificativa
- **Melhoria**: Sugira otimizações ou melhorias no código/interface

## 📑 Licença

[Licença MIT](https://choosealicense.com/licenses/mit/) :

<div align="justify">

MIT License

Copyright (c) 2023, Busca Processos Judiciais (joaotextor/busca-processos-judiciais)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

</div>

