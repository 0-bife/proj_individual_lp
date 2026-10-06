import { despesa } from "./tipos.js";
import { formatarRelatorio } from "./relatorio.js";

export function gerarRelatorio(despesas: despesa[]): string {
    const relatorio = formatarRelatorio(despesas);
    console.log(relatorio);
    return relatorio;
}
