export type despesa = {
    readonly id_Despesa: number, //obrigatório e não pode ser alterado então = readonly
    descricao: string, //string padrao, só vai conter caracteres, obrigatorio
    valor: number, //valor em numeros para dinheiro, obrigatorio
    categoria: "alimentacao" | "transporte" | "lazer" | "moradia", //obrigatório e só pode ter essas 4 opções
    mes: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, //obrigatorio e definido entre 1 e 12
    obs?: string // opcional então seguido de ? 
};

export const CATEGORIA = ["alimentacao", "transporte", "lazer", "moradia"] as const;