import { describe, expect, it } from "vitest";
import { adicionarDespesa } from "../src/despesas.ts"
import { despesa } from "../src/tipos.ts";
import { removerDespesa } from "../src/despesas.ts"
import { despesasDaCategoria } from "../src/despesas.ts";
import { totalDespesas } from "../src/despesas.ts";
import { maiorDespesa } from "../src/despesas.ts";

describe ("adicionarDespesa", () => {
    it("adiciona uma nova despesa seguindo o tipo despesa", () => {

        const resultado = adicionarDespesa([],
        {
            id_Despesa: 1,
            descricao: "mcDonalds",
            valor: 62.90,
            categoria: "alimentacao",
            mes: 10,
            obs: "devia ter gasto menos"
        });
        
        expect(resultado.length).toBe(1);

    });

    it("throw error se valor for =< que 0", () => {
        expect(() => {
            adicionarDespesa([], {
                id_Despesa: 1,
                descricao: "etanol",
                valor: 0,
                categoria: "transporte",
                mes: 10,
            });
        }).toThrow(); 
    });

    it("não deve alterar o array original de despesas", () => {
        const despesaOriginal: despesa[] = [];
        const novaDespesa: despesa = {
            id_Despesa: 1,
            descricao: "Café",
            valor: 10.00,
            categoria: "alimentacao",
            mes: 10
        };

        const despesaAtualizada = adicionarDespesa(despesaOriginal, novaDespesa);

        expect(despesaOriginal).not.toBe(despesaAtualizada); 
        expect(despesaOriginal).toEqual([]); 
    })});

    //testes para função de remover despesas

describe ("removerDespesa", () => {
    it("remove corretamente a despesa referente ao id solicitado, sem alterar as outras", () => {
        const despesaVazia: despesa[] = [];
        const despesaAdd1: despesa = ({
            id_Despesa: 3,
            descricao: "Conta de energia elétrica",
            valor: 62.90,
            categoria: "alimentacao",
            mes: 10,
        });
        const despesaAdd2: despesa = ({
            
            id_Despesa: 4,
            descricao: "aluguel",
            valor: 1900.00,
            categoria: "moradia",
            mes: 11,
        });


        const despesaPreenchida1 = adicionarDespesa([], despesaAdd1);
        const despesaPreenchida2 = adicionarDespesa(despesaPreenchida1, despesaAdd2);
        const despesaSemDespesaRemovida = removerDespesa(despesaPreenchida2, 4);
        expect(despesaSemDespesaRemovida).toEqual(despesaPreenchida1);

    });
    it("Caso o id não exista, retorna o array original intacto", () => {
        const despesasIniciais: despesa[] = [];
        const despesaAdd1: despesa = ({
            id_Despesa: 3,
            descricao: "Conta de energia elétrica",
            valor: 62.90,
            categoria: "alimentacao",
            mes: 10,
        });
        const despesaAdd2: despesa = ({
            id_Despesa: 4,
            descricao: "aluguel",
            valor: 1900.00,
            categoria: "moradia",
            mes: 11,
        });

        const listaPopuladaC1 = adicionarDespesa([], despesaAdd1);
        const listaPopuladaC2 = adicionarDespesa([], despesaAdd2);
        const listaResultado = removerDespesa(listaPopuladaC2, 9);
        expect(listaResultado).toEqual(listaPopuladaC2);
    })});

    //testes da função para implementar: despesasDaCategoria

describe ("despesasDaCategoria", () => {
    it("retorna somente as despesas com uma categoria passada", () => {
        const despesasIniciais: despesa[] = [];
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
            mes: 11,
        });
        const despesaAdd3: despesa = ({
            id_Despesa: 3,
            descricao: "compras no shopping",
            valor: 658.00,
            categoria: "lazer",
            mes: 11,
        });
        const listaPopuladaC1 = adicionarDespesa([], despesaAdd1);
        const listaPopuladaC2 = adicionarDespesa(listaPopuladaC1, despesaAdd2);
        const listaPopuladaC3 = adicionarDespesa(listaPopuladaC2, despesaAdd3);
        const listaFiltrada = despesasDaCategoria(listaPopuladaC3, "moradia");
        expect(listaFiltrada).toEqual(listaPopuladaC2);
    
    })
    it("se uma categoria não existe, retornar array vazio", () => {
        const despesasIniciais: despesa[] = [];
        const despesaAdd1: despesa = ({
            id_Despesa: 1,
            descricao: "Conta de Água",
            valor: 104.90,
            categoria: "moradia",
            mes: 10,
        });
        const listaPopuladaC1 = adicionarDespesa([], despesaAdd1);
        const listaFiltrada = despesasDaCategoria(listaPopuladaC1, "saúde");
        expect(listaFiltrada).toEqual([]);

    })
});

//testes para função que soma o total das despesas

describe ("totalDespesas", () => {
    it("Exibe o total da soma de despesas da lista", () => {
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
        expect(totalDespesas(listaPopulada)).toBe(4562.9);
    })
    it("lista vazia exibe saída 0", () => {
        const despesasSemInstancias : despesa[] = [];
        expect(totalDespesas(despesasSemInstancias)).toBe(0);
    })
});
    

//testes para a função de mostrar o maior gasto

describe ("maiorDespesa", () => {
    it("Exibe a maior entre as despesas da lista", () => {
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
            valor: 1910.00,
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
        expect(maiorDespesa(listaPopulada)).toBe(1910);
    })
    it("lista vazia exibe saída undefined", () => {
        const despesasSemInstancias : despesa[] = [];
        expect(maiorDespesa(despesasSemInstancias)).toBe(undefined);
    })});