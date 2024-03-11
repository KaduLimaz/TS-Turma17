// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional.

abstract class Ingresso {
    constructor(public valor: number) {}
  
    imprimeValor() {
      console.log(`Valor do ingreço: R$${this.valor}`);
    }
  }
  
  export class AreaNormal extends Ingresso {
    constructor(public valor: number) {
      super(valor);
    }
  }
  
  export class AreaVip extends Ingresso {
    constructor(valor: number, public valorVip: number) {
      super(valor);
    }
  
    imprimeValor(): void {
      const vip = (this.valor += this.valorVip);
      console.log(`Valor do ingreço Vip: R$${vip}`);
    }
  }
  
  export class Camarote extends Ingresso {
    constructor( valor: number, public valorCamarote: number) {
      super(valor);
    }
    imprimeValor(): void {
      const camarote = (this.valor += this.valorCamarote);
      console.log(`Valor do ingreço Camarote: R$${camarote}`);
    }
  }


//  2 Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.

abstract class Imovel {
    constructor(public endereço: string, public preço: number) {}
  }
  
  export class NovoImovel extends Imovel {
    constructor(
      public endereço: string,
      public preço: number
    ) 
    {
      super(endereço, preço);
    }
  
    valorImovelNovo(valor: number): void {
      const valorNovo = (this.preço += valor);
      console.log(valorNovo);
    }
  }
  
  export class VelhoImovel extends Imovel {
    constructor(
      public endereço: string,
      public preço: number
    ) 
    {
      super(endereço, preço);
    }
  
    valorImovelVelho(valor: number): void {
      const descontoVelho = (this.preço -= valor);
      console.log(descontoVelho);
    }
  }


//   3 Identifique os atributos e comportamentos que são comuns entre os
//  animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.

abstract class Animal {
    protected pelagem: string;
    protected tamanho: number;
    protected barulho: string;
  
    constructor(pelagem: string, tamanho: number, barulho: string) {
      this.barulho = barulho;
      this.pelagem = pelagem;
      this.tamanho = tamanho;
    }
  
    andar() {
      console.log("andou");
    }
  
    deitar() {
      console.log("deitou");
    }
  }
  
  class Cachorro extends Animal {
    latir() {
      console.log(this.barulho);
    }
  }
  
  class Gato extends Animal {
    miado() {
      console.log("miau");
    }
  }
  
  class Cavalo extends Animal {
    relinchar() {
      console.log("ihohon");
    }
  }
  
  const cachorro = new Cachorro("malhado", 0.8, "auau");
  cachorro.latir();