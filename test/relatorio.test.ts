import { describe, expect, it } from "vitest";
import { CATEGORIA, despesa } from "../src/tipos.ts";
import { descricaoCategoria } from "../src/relatorio.ts"
import { matrizCategoriaMes } from "../src/relatorio.ts"



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
            expect(matrizCategoriaMes(listaPopulada)).toBe(12);
            expect(matriz.length).toBe(CATEGORIA.length);
            expect(matriz[0][9]).toBe(2004.90);
            expect(matriz[0][9]).toBe(2004.90);
            expect(matriz[2][10]).toBe(658.00);


                
    });
    it("Caso de borda para tabela vazia", () => { //não consegui pensar em nada diferente :(
        const despesasVazias: despesa[] = [];
        expect(matrizCategoriaMes(despesasVazias)).toBe(0);

    });
});