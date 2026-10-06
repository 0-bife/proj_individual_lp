### Projeto Individual Avaliativo Linguagem de Programação

#### Setup inicial

- Criar repositório no GitHub
- Clonar repositório no VSCode
- Criar esse arquivo README.md
- Criar arquivo .gitignore básico adicionando node_modules/ e dist/
- Inicializar o projeto com Node.js com o comando npm init -y (respondendo sim para todas as perguntas automaticamente)
- Instalar dependências:
  - npm i -D typescript
  - npm i -D @types/node
  - npm i -D tsc
  - npm i -D vitest

#### Etapa 1

1. Definir os atributos no arquivo tipos.ts ;
2. Construir assinatura da função que será implementada
3. incluir o comando throw new error na função.
4. testar se o vitest copnfirma o erro
5. construir código do teste
6. pedir para a IA que implemente a função para que aquele teste passe
7. Revisar código gerado
8. Testar com vitest para ver se o código gerado passa.
9. Commit da implementação ou alteração do código gerado.

### Funções Implementadas

|Função|Passou no teste|Alteração|OBS|
|------|----------------|---------|---|
|adicionarDespesa|Passou|Solicitei que fossem incluídas validações na função para todos os atributos||
|removerDespesa|Passou|Não alterei o código gerado, cumpre as necessidades||
|despesasDaCategoria|Não passou no primeiro porque eu tinha escrito o teste errado, para funcionar de forma que ia dar erro quando era para somente mostrar array vazio|Alterei teste e pedi para refazer a implementação|
|totalDespesas|Não Passou no primeiro|o vitest deu que o esperado era undefined porém recebeu [Function totalDespesas], acho que está correto|
|totalDespesas|Passou| o Código de implementação que a IA criou está cobrindo as exigências| eu tinha passado a função dentro do inspect sem passar a váriavel, por isso tinha dado erro|
|maiorDespesa|Passou| código de implementação que a IA gerou está cobrindo as exigências, aceitei| surgiu a dúvida, se no inicio coloquei no teste para garantir que nenhuma fução mexa no array original, tenho que repetir em todos os testes?|
|---|---|---|---|
|dedscricaoCategoria|Passou|código foi sem a condição para usar switch, refeito com a condição, testado ok||
|matrizcategoriaMes|Não passou|preciso corrigir o teste, como a saída é uma matriz, preciso que se não haja despesas, a saída seja uma matriz, com zeros apenas|Tenho que pesquisar como seria. Pesquisei e conclui que posso somar simplesmente todas as entradas, 0x0 é 0.Não está dando certo...
|formatarRelatoriio|
