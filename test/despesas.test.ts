import { describe, expect, it } from "vitest";
import { adicionarDespesa } from "../src/despesas.js"
import { despesa } from "../src/tipos.ts";

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