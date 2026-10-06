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