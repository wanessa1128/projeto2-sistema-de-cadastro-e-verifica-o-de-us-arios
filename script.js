// Casdastro de usuarios
let nome = prompt("Digite seu nome:")
let idade = parseInt(prompt("Digite sua idade:"))
let senha = parseInt(prompt("Digite sua senha:"))

if(idade <= 13) {

} else {
   let nomeNovamente = prompt("Digite seu nome novamente:")
let senhaNovamente = parseInt(prompt("Digite sua senha:"))

if(nomeNovamente == nome && senhaNovamente == senha) {

alert(`Login realizado com sucesso ${nome}!`)    

} else (senhaNovamente === senha && nomeNovamente === nome)
  alert("Nome ou senha invalidos!")
} 



