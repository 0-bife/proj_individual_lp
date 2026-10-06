import { CATEGORIA, despesa } from "./tipos.js";

export function descricaoCategoria(categoria: string | undefined): string | undefined {
    switch (categoria) {
        case "alimentacao":
        case "Alimentação":
            return "Alimentação";
        case "transporte":
        case "Transporte":
            return "Transporte";
        case "lazer":
        case "Lazer":
            return "Lazer";
        case "moradia":
        case "Moradia":
            return "Moradia";
        default:
            return undefined;
    }
};

export function matrizCategoriaMes(despesas: despesa[]): number[][] {
    const matriz: number[][] = [];

    for (let linha = 0; linha < CATEGORIA.length; linha++) {
        matriz[linha] = [];
        for (let coluna = 0; coluna < 12; coluna++) {
            matriz[linha][coluna] = 0;
        }
    }


    for (let i = 0; i < despesas.length; i++) {
        const despesaAtual = despesas[i];

        for (let linha = 0; linha < CATEGORIA.length; linha++) {
            if (despesaAtual.categoria === CATEGORIA[linha]) {
                if (despesaAtual.mes >= 1 && despesaAtual.mes <= 12) {
                    matriz[linha][despesaAtual.mes - 1] += despesaAtual.valor;
                }
                break;
            }
        }
    }

    return matriz;
}

export function formatarRelatorio(despesas: despesa[]): string {
    const matriz = matrizCategoriaMes(despesas);
    const linhas: string[] = [
        "RELATÓRIO DE DESPESAS".toUpperCase(),
        "",
        `${"CATEGORIA".padEnd(20)}${"TOTAL ANUAL".padStart(15)}`,
    ];
    let totalGeral = 0;
    let maiorDespesa = 0;

    for (let linha = 0; linha < CATEGORIA.length; linha++) {
        let totalCategoria = 0;
        for (let mes = 0; mes < 12; mes++) {
            totalCategoria += matriz[linha][mes];
        }

        totalGeral += totalCategoria;
        const nomeCategoria = descricaoCategoria(CATEGORIA[linha]) ?? CATEGORIA[linha];
        linhas.push(
            `${nomeCategoria.padEnd(20)}R$ ${totalCategoria.toFixed(2).padStart(12)}`,
        );
    }

    for (let i = 0; i < despesas.length; i++) {
        if (despesas[i].valor > maiorDespesa) {
            maiorDespesa = despesas[i].valor;
        }
    }

    linhas.push("");
    linhas.push(`${"TOTAL GERAL:".padEnd(20)}R$ ${totalGeral.toFixed(2).padStart(12)}`);
    linhas.push(`${"MAIOR DESPESA:".padEnd(20)}R$ ${maiorDespesa.toFixed(2).padStart(12)}`);

    return linhas.join("\n");
}