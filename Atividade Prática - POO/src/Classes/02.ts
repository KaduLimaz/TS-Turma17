export class Bola {
    constructor(
        public color: string,
        public circuferencia: number,
        public material: string
    ){}
    


    trocarCor(newColor:string): void{
        this.color = newColor;
    }
    mostrarCor(){
        return console.log(this.color);
    }
}