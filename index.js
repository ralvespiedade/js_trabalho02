const bt = document.querySelector('button')
const resp = document.querySelector('p')

bt.onclick = function() {
  var nota1 = parseInt(window.prompt('Digite a primeira nota:'))
  var nota2 = parseInt(window.prompt('Digite a segunda nota:'))
  var nota3 = parseInt(window.prompt('Digite a terceira nota:'))

  var media = (nota1 + nota2 + nota3) / 3
  var mensagem = `A média das notas ${nota1}, ${nota2} e ${nota3} é igual a ${media}`
 
  console.log(mensagem)

  resp.innerHTML = mensagem

}
