export class Carro {
    constructor(
        public consumoCombustivel: number,
        public qtdCombustivel: number = 0
    ){}

    andar(distancia:number){
        this.qtdCombustivel-= distancia / this.consumoCombustivel
    }

    obterGasolina():void {
        console.log(`Gasolina restante no tanque ${this.qtdCombustivel} Litros`)
    }

    abastecerGasolina(quantidade:number){
        if (quantidade > this.qtdCombustivel){
            throw new Error ("Quantidade nao suportada")
        }
        this.qtdCombustivel+= quantidade
    }
}