import { CATEGORIA, despesa } from "./tipos.js";

export function adicionarDespesa(despesas: despesa[], nova: despesa): despesa[] {
    if (nova == null) {
        throw new Error("A despesa é obrigatória.");
    }
    if (!Number.isInteger(nova.id_Despesa) || nova.id_Despesa <= 0) {
        throw new Error("O ID da despesa deve ser um número inteiro positivo.");
    }
    if (typeof nova.descricao !== "string" || nova.descricao.trim() === "") {
        throw new Error("A descrição da despesa é obrigatória.");
    }
    if (typeof nova.valor !== "number" || !Number.isFinite(nova.valor) || nova.valor <= 0) {
        throw new Error("O valor da despesa deve ser maior que zero.");
    }
    if (!CATEGORIA.includes(nova.categoria)) {
        throw new Error("A categoria da despesa é inválida.");
    }
    if (!Number.isInteger(nova.mes) || nova.mes < 1 || nova.mes > 12) {
        throw new Error("O mês da despesa deve estar entre 1 e 12.");
    }
    return [...despesas, nova];
}

export function removerDespesa(despesas: despesa[], id: number): despesa[] {
    if (!despesas.some((despesa) => despesa.id_Despesa === id)) {
        return despesas;
    }
    return despesas.filter((despesa) => despesa.id_Despesa !== id);
}

export function despesasDaCategoria(despesa: despesa[], categoria: string): despesa[] {
      throw new Error("Não implementado")
}