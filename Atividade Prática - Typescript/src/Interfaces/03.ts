export interface Carteira {
    saldo: number,
    transacoes: transacoes[]
};

export interface transacoes {
    tipo: "entrada"|"saída";
    valor: number 
};