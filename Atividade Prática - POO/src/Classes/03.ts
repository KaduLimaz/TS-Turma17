export class contaCorrente {
  constructor(
    private numeroConta: number,
    private nomeConta: string,
    private saldo?: number
  ) {
    this.saldo = saldo ?? 0;
    if (this.saldo < 0) {
      throw new Error("Não pode conter saldo negativo");
    }
  }

  alterarNomeConta(nome: string): void {
    this.nomeConta = nome;
  }
  depositoConta(valor: number): void {
    this.saldo += valor;
  }
  saqueConta(valor: number) {
    if (valor > this.saldo) {
      throw new Error("Não pode conter saldo negativo");
    }
    this.saldo -= valor;
  }
}
