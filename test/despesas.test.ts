import { describe, expect, it } from "vitest";
import { adicionarDespesa } from "../src/despesas.ts"
import { despesa } from "../src/tipos.ts";
import { removerDespesa } from "../src/despesas.ts"

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

    //teste para função de remover despesas

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