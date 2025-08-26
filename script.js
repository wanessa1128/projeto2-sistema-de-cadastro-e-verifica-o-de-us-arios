// Casdastro de usuarios
let nome = prompt("Digite seu nome:")
let idade = parseInt(prompt("Digite sua idade:"))

if(idade < 13) {

} else {
    alert(`Desculpe, idade minima 13 anos!`)
} 

let senha = parseInt(prompt("Digite sua senha:"))
// Login
let nomeNovamente = prompt("Digite seu nome novamente:")
let senhaNovamente = parseInt(prompt("Digite sua senha:"))

if(nomeNovamente == nome && senhaNovamente == senha) {

alert("Login realizado com sucesso!")    

} else (senhaNovamente === senha && nomeNovamente === nome)
  alert("Nome ou senha invalidos!")