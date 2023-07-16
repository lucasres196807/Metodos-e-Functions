cvar canais = ["Globo","Sbt","Record"];
canais.forEach(function(canal){
   canais.push("Redetv");
   console.log(canal);//output => ["Globo","Sbt","Record"]
});
console.log(canais);//output => ["Globo","Sbt","Record","RedeTv"]
console.log("==================");
var numeros = [1,2,3];
var dobro = [];
//esse for retorna os multiplos de 2
for(var i =0; i < numeros.length;i++){
   dobro.push(numeros[i] * 2);
}
console.log(numeros);//output => [1,2,3];
console.log(dobro);//output => [2,4,6]
console.log("===================");
var numeros_1 = [1,2,3,4];
var numeros_2 = numeros_1.map(function(numeros_1){
   return numeros_1 * 2;
});
console.log(numeros_1);//output => [1,2,3,4]
console.log(numeros_2);//output => [2,4,12,16]
console.log("=======");
var alunos = [{nome:"Joao",idade:15},
   {nome:"José",idade:18},{nome:"Maria",idade:20}
];
var alunosDeMaior = [];
for(var i =0; i < alunos.length;i++){
   if(alunos[i].idade >= 18){
      alunosDeMaior.push(alunos[i]);
   }
}
console.log(alunos);//[{nome:"Joao",idade:15},{nome:"José",idade:18},{nome:"Maria",idade:20}];
console.log(alunosDeMaior);//{nome:"José",idade:18},{nome:"Maria",idade:20}
console.log("=============");

var alunos_1 = [{nome:"Joao",idade:15},
   {nome:"José",idade:18},{nome:"Maria",idade:20}
];
var alunosDeMaior_1 = alunos_1.filter(function(aluno){
   return aluno.idade >= 18;
});
console.log(alunos_1);//[{nome:"Joao",idade:15},{nome:"José",idade:18},{nome:"Maria",idade:20}];
console.log(alunosDeMaior_1);//{nome:"José",idade:18},{nome:"Maria",idade:20}
console.log("===============");
var dados = [{nome:"Joao"},{nome:"José"},{nome:"maria"}];
var aluno;
for(var i =0; i < dados.length;i++){
   if(dados[i].nome === "José"){
      aluno = dados[i];
      break;
   }
}
console.log(dados);//[{nome:"Joao"},{nome:"José"},{nome:"maria"}];
console.log(aluno);//{nome:"José"}
console.log("=====");
var dados_1=[{nome:"joao"},{nome:"jose"},{nome:"maria"}];
var dados_2 = dados_1.find(function(aluno){return aluno.nome === "jose"});
console.log(dados_2);//true
console.log(dados_1);//{nome:"jose"} => true