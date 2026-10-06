import { describe, expect, it } from "vitest";
import { CATEGORIA, despesa } from "../src/tipos.ts";
import { descricaoCategoria } from "../src/relatorio.ts"
import { matrizCategoriaMes } from "../src/relatorio.ts"

import { formatarRelatorio } from "../src/relatorio.ts"

describe("descricaoCategoria", () => {
    it("Retorna o nome de exibição da categoria", () => {
        const descricao = descricaoCategoria("alimentacao");
        expect(descricaoCategoria(descricao)).toBe("Alimentação");
    })
    it("Retorna undefined se não for uma categoria válida", () => {
        const descricao = descricaoCategoria("saude");
        expect(descricaoCategoria(descricao)).toBe(undefined);
    })
})

describe("matrizCategoriaMes", () => {
    it("Retorna uma matriz com uma linha por categoria (na ordem de CATEGORIAS) e 12 colunas (meses). Cada célula é o total gasto naquela categoria naquele mês", () => { 
        const despesaAdd1: despesa = ({
                    id_Despesa: 1,
                    descricao: "Conta de Água",
                    valor: 104.90,
                    categoria: "moradia",
                    mes: 10,
                });
        const despesaAdd2: despesa = ({
                    id_Despesa: 2,
                    descricao: "aluguel",
                    valor: 1900.00,
                    categoria: "moradia",
                    mes: 10,
                });
        const despesaAdd3: despesa = ({
                    id_Despesa: 3,
                    descricao: "compras no shopping",
                    valor: 658.00,
                    categoria: "lazer",
                    mes: 11,
                });
        const despesaAdd4: despesa = ({
                    id_Despesa: 4,
                    descricao: "aluguel",
                    valor: 1900.00,
                    categoria: "moradia",
                    mes: 11,
                });
            const listaPopulada = [despesaAdd1, despesaAdd2, despesaAdd3, despesaAdd4]
            const matriz = matrizCategoriaMes(listaPopulada);
            expect(matriz.length).toBe(CATEGORIA.length);
            expect(matriz[3][9]).toBe(2004.90);
            expect(matriz[2][10]).toBe(658.00);

    });
    
    it("deve retornar uma matriz com todas as posições zeradas quando a lista de despesas estiver vazia", () => {
        const matriz = matrizCategoriaMes([]);
        expect(matriz.length).toBe(CATEGORIA.length);

        let somaTotal = 0;
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                somaTotal += matriz[i][j];
            }
        }
        expect(somaTotal).toBe(0);
    });
});

describe("formatarRelatorio", () => {
    it("Retorna o texto do relatório: título em maiúsculas, uma linha por categoria com o total do ano, colunas alinhadas, e ao final o total geral e a maior despesa", () => {
        const despesa1: despesa = {
            id_Despesa: 1,
            descricao: "Aluguel",
            valor: 1900.00,
            categoria: "moradia",
            mes: 10,
        };
        const despesa2: despesa = {
            id_Despesa: 2,
            descricao: "Cinema",
            valor: 100.00,
            categoria: "lazer",
            mes: 5,
        };

        const relatorio = formatarRelatorio([despesa1, despesa2]);

        expect(relatorio).toContain("RELATÓRIO DE DESPESAS");
        expect(relatorio).toContain("TOTAL GERAL:");
        expect(relatorio).toContain("2000.00");
        expect(relatorio).toContain("MAIOR DESPESA:");
        expect(relatorio).toContain("1900.00");
    });

    it("Retorna um relatorio com os titulos porem valores zerados caso o array esteja vazio", () => {
        const relatorio = formatarRelatorio([]);

        expect(relatorio).toContain("RELATÓRIO DE DESPESAS");
        expect(relatorio).toContain("TOTAL GERAL:");
        expect(relatorio).toContain("0.00");
        expect(relatorio).toContain("MAIOR DESPESA:");
    });
});

