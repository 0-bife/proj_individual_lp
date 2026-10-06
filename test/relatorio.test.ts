import { describe, expect, it } from "vitest";
import { despesa } from "../src/tipos.ts";
import { descricaoCategoria } from "../src/relatorio.ts"

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