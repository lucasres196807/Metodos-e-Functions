var alunos = [{nome:"pedro",idade:20},{nome:"lucas",idade:21},{nome:"Maria",idade:25}];
var todosAlunosDeMaior = alunos.every(function(aluno){
   return aluno.idade > 18;
});
var todosAlunosDeMaior_1 = true;
for(var i =0; i < alunos.length;i++){
   //foi aceito a comparação
   if(alunos[i].idade > 18){
      todosAlunosDeMaior_1 = false;
   }
}
console.log(todosAlunosDeMaior_1);//true , mas com if 
//de comparação retorna false
console.log("==================");
console.log(alunos);//output => [{nome:"pedro",idade:20},{nome:"lucas",idade:21},{nome:"Maria",idade:25}];
console.log("==================");
console.log(todosAlunosDeMaior);//true idade = 20, idade =21 e etc...
console.log("=============");
//function some 
var pesoDasMalas = [12,32,21,29];
var temMalaAcimaDoPeso = true;
for(var i =0; i < pesoDasMalas.length;i++){
   //se tiver acima do peso retorna true
   if(pesoDasMalas[i] > 30){
      temMalaAcimaDoPeso = true;
   }
}
console.log(pesoDasMalas);//output => [12,32,21,29]
console.log(temMalaAcimaDoPeso);//antes era false e agora é true
console.log("==============");
//metodo some que pega todo o array
var pesoMala = [12,32,21,29];
var temaMalaAcima=pesoMala.some(function(mala){
   return mala > 30;
});
console.log(temaMalaAcima);//tem sim , output=> true 32 ele 
//percorre o array todo
console.log(pesoMala);//[12,32,21,29]

console.log("==============");
//soma dos array internos , com reduce
var numeros = [1,2,3,4,5];
var soma = 0;
for(var i =0; i < numeros.length;i++){
   soma+=numeros[i];
}
console.log(numeros);
console.log(soma);//output => 15 soma dos array
console.log("=============");
 var num = [1,2,3,4];
 var somaDosArrays = 0;
 somaDosArrays = num.reduce(function(somaDosArrays,num){
   return somaDosArrays + num;
 },0);//soma o numero 0 da function reduce
 console.log(num);//output => [1,2,3,4]
 console.log(somaDosArrays);//output => 10 soma dos arrays suma.reduce(function(?,?){return ? + ?;},0);
 //valor 0 de inicialização 

 //outro metodo com reduce
 var nomeDasPessoas =[{nome:"joao",idade:10},{nome:"jose",idade:20},{nome:"marcos",idade:30}];
 var nomes = nomeDasPessoas.reduce(function(arrayNames,aluno){
   arrayNames.push(aluno.nome);
   return arrayNames;
 },[]);//inicialização com array vazio e depois adiciona
 console.log(nomes);//output => [joao,jose,marcos]
