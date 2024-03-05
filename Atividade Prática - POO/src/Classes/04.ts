export class Calculadora {
    constructor(
        private historico: Array<{
            n1: number,
            n2: number,
            resultado: number,
            operador: string
        }> = []
    ){}


    somar(n1: number, n2: number): number{
        this.historico.push({n1,n2,operador: "+",resultado: n1 + n2});
        return n1 + n2;
    }

    multiplicar(n1: number, n2: number): number {
        this.historico.push({ n1, n2, operador: "*", resultado: n1 * n2 });
        return n1 * n2;
      }
    
      dividir(n1: number, n2: number): number {
        if (n2 === 0) {
          throw new Error("Nenhum número pode ser dividido por zero");
        }
        this.historico.push({ n1, n2, operador: "/", resultado: n1 / n2 });
        return n1 / n2;
      }
    
      diminuir(n1: number, n2: number): number {
        this.historico.push({ n1, n2, operador: "-", resultado: n1 - n2 });
        return n1 - n2;
      }

    visualizarHistorico(){
        console.log("Historico: ");
        for (const {n1,n2,operador,resultado} of this.historico){
            console.log(`${n1} ${operador} ${n2} = ${resultado}`)
        }
    }
}