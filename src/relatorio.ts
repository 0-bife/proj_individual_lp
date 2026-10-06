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

export function matrizCategoriaMes(despesas): number[][] {
    throw new Error("Não implementado ainda");
    

}