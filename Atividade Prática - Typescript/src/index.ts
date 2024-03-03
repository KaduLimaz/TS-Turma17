// //1 Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.





// import { Resultado } from "./Interfaces/01"

// function media (n1:number, n2: number):Resultado{
//   const media = (n1 + n2) / 2
//   const aprovado = media >= 6
//   return {media, aprovado}
  
// }

// const resultado = media(6,6)

// console.log(resultado)
 

// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado
// import { NotaPeso } from "./Interfaces/02";
// function mediaNota(notas: NotaPeso[]): number {

//   const somaNotas = notas.reduce((prev, nota) => prev + nota.nota * nota.peso, 0 );
//   const somaPesos = notas.reduce((prev, nota) => prev + nota.peso, 0 );

//   const resultado = (somaNotas / somaPesos);

//   return resultado
// }

// const mediaTotal = [
//   {nota: 2, peso:1},
//   {nota: 5, peso:3},
//   {nota: 2, peso:1}

// ]

// console.log(mediaNota(mediaTotal))


// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.

// import { error } from "console";
// import { Carteira } from "./Interfaces/03";
// function criarCarteira(): Carteira {

//     return {
//         saldo: 0,
//         transacoes: []
//     };
// }

// function valorEntrada (carteira: Carteira, valor: number){
//     carteira.saldo += valor
//     carteira.transacoes.push({tipo: "entrada", valor})
// }
// function valorSaida (carteira: Carteira, valor: number){
//     if(valor > carteira.saldo){
//         throw new Error("Saldo Insuficiente")
//     }

//     carteira.saldo -= valor
//     carteira.transacoes.push({tipo: "saída", valor})
// }

// const minhaCarteira = criarCarteira()
// valorEntrada(minhaCarteira, 1000)
// valorSaida(minhaCarteira,500)
// valorSaida(minhaCarteira,600)
// console.log(minhaCarteira)

// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.
// import { Produto } from "./Interfaces/04";


// let produtos: Produto[] = [];

// //------------------------------ Função para gerar um novo ID único para cada produto
// function gerarNovoId(): number {
//     let novoId = 1;
//     if (produtos.length > 0) {
//       novoId = Math.max(...produtos.map((produto) => produto.id)) + 1;
//     }
//     return novoId;
//   }


// function cadastrarProduto(nome:string, preco: number, quantidade: number): void{
//     const novoProduto: Produto = {
//         id: gerarNovoId(),
//         nome,
//         preco,
//         quantidade
//     };
//     produtos.push(novoProduto)

//     console.log(`Produto cadastrado com sucesso: ${novoProduto.nome}`)
// }

// function listarProdutos(): void{
//     if(produtos.length === 0){
//         console.log("Nenhum produto encontrado");
//         return;
//     }
//     console.table(produtos)
// }

// function encontrarProdutoId(id: number): Produto {
//     return produtos.find((produto=>produto.id === id))
// }



// function excluirProduto(id:number): void{
// const idProdutoEncontrado = encontrarProdutoId(id)
// if(!idProdutoEncontrado){
//     console.log(`Produto com ID ${id} não encontrado.`);
//     return;
// }
// produtos = produtos.filter((produto) => produto.id !== id)
// console.log(`Produto com ID ${id} excluído com sucesso.`);
// }

// cadastrarProduto("cadeira",100,1)

// cadastrarProduto("mesa",200,1)
// excluirProduto(2)
// listarProdutos()

// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”
import { User } from "./Types/05";

const usuario1 = {
    nome: "kadu",
    idade: 28,
    ocupacao: "Aluno"
}

const usuario2 = {
    nome: "daniele",
    idade: 48,
    ocupacao: "Cozinheira",
    salario: 1500 
}

function mostrarUsuario (usuario:User): void{
    console.log(`
    nome: ${usuario.nome}
    idade: ${usuario.idade}
    Ocupação: ${usuario.ocupacao}
    Salario: ${usuario.salario ? `R$ ${usuario.salario}` : "N/A"}
    `)
}

mostrarUsuario (usuario1)
mostrarUsuario (usuario2)
