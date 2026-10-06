import { describe, expect, it } from "vitest";
import { CATEGORIA, despesa } from "../src/tipos.ts";
import { formatarRelatorio } from "../src/relatorio.ts"
import { gerarRelatorio } from "../src/index.ts"

describe("gerarRelatorio", () => {
    it("Inclui 8 despesas com meses diferentes, gera relatorio formatado", () => {
        const despesasExemplo: despesa[] = [
            {
                id_Despesa: 1,
                descricao: "Supermercado",
                valor: 450.00,
                categoria: "alimentacao",
                mes: 1
            },
            {
                id_Despesa: 2,
                descricao: "abastecimento com alcool",
                valor: 144.00,
                categoria: "transporte",
                mes: 1
            },
            {
                id_Despesa: 3,
                descricao: "Cinema e Pipoca",
                valor: 120.90,
                categoria: "lazer",
                mes: 2
            },
            {
                id_Despesa: 4,
                descricao: "Aluguel do Mês",
                valor: 1900.00,
                categoria: "moradia",
                mes: 2
            },
            {
                id_Despesa: 5,
                descricao: "Padaria",
                valor: 31.90,
                categoria: "alimentacao",
                mes: 3
            },
            {
                id_Despesa: 6,
                descricao: "Manutenção do Carro",
                valor: 350.00,
                categoria: "transporte",
                mes: 3
            },
            {
                id_Despesa: 7,
                descricao: "Balada",
                valor: 200.00,
                categoria: "lazer",
                mes: 3
            },
            {
                id_Despesa: 8,
                descricao: "Conta de Energia",
                valor: 180.00,
                categoria: "moradia",
                mes: 1
            }
        ];

        const relatorioExemplo = formatarRelatorio(despesasExemplo);

        expect(relatorioExemplo).toContain("RELATÓRIO DE DESPESAS");
        expect(relatorioExemplo).toContain("TOTAL GERAL:");
        expect(relatorioExemplo).toContain("3376.8");
        expect(relatorioExemplo).toContain("MAIOR DESPESA:");
        expect(relatorioExemplo).toContain("1900.00");
    });
});