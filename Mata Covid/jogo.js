//ajustando o valor da imagem (responsivo)
var largura = window.innerWidth
var altura = window.innerHeight

function tamanhoDaTela() {
	largura = window.innerWidth
	altura = window.innerHeight
	//console.log (largura, altura)
}

tamanhoDaTela()

function posicaoVirus() {
	var posicaoX = Math.floor(Math.random() * largura) - 80
	var posicaoY = Math.floor(Math.random() * altura) - 80
	//console.log (posicaoX, posicaoY)

	//controle para se o valor for negativo pois subtraiu 80 
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY
	
	//criar elemento no html pelo DOM
	var virus = document.createElement('img')
	virus.src = 'img/virus.png'
	virus.className = 'covid1'
	virus.style.top = posicaoY + 'px'
	virus.style.left = posicaoX + 'px'
	virus.style.position = 'absolute'

	document.body.appendChild(virus)
}
