


export class BombaCombustivel {
    constructor(
        public tipoCombustivel:string,
        public valorLitro: number,
        public quantidaDeCombustivel: number = 0
    ){}

    abastecerPorValor(valor:number){
        let litros = valor / this.valorLitro
        if (litros > this.quantidaDeCombustivel){
            throw new Error ("Bomba esgotada")
        }
        this.quantidaDeCombustivel -= litros
        return console.log(`Foi abastecido ${litros} litros de ${this.tipoCombustivel}`)
    }


    abastecerPorLitro(quantidaDeLitros:number){
        let valorLitro = quantidaDeLitros * this.valorLitro
        if(quantidaDeLitros > this.quantidaDeCombustivel){
            throw new Error ("Bomba esgotada")
        }

        this.quantidaDeCombustivel -= quantidaDeLitros
        return console.log(`Foi abastecido ${quantidaDeLitros} litros de ${this.tipoCombustivel} e custou R$${valorLitro}`)
    }

    alterarValorLitro(valor:number): void{
        this.valorLitro = valor
    }
    alterarTipoCombustivel(tipo:string){
        this.tipoCombustivel = tipo
    }
    alterarQuantidadeCombustivel(valor:number){
        if(valor < 0){
            throw new Error ("valor negativo não aceito")
        }

        this.quantidaDeCombustivel = valor
    }
}