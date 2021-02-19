//ajustando o valor da imagem (responsivo)
var largura = window.innerWidth
var altura = window.innerHeight

function tamanhoDaTela() {
	largura = window.innerWidth
	altura = window.innerHeight
	//console.log (largura, altura)
}

tamanhoDaTela()

function tamanhoRandom() {
	var classe = Math.floor(Math.random() * 4)
	//console.log(classe)

	switch(classe) {
		case 0:
			return 'covid1'
		case 1:
			return 'covid2'
		case 2:
			return 'covid3'
		case 3:
			return 'covid4'
	}
}

function posicaoVirus() {
	//remover virus anterior 
	if (document.getElementById('virus')) {
		document.getElementById('virus').remove()
	}
	
	var posicaoX = Math.floor(Math.random() * largura) - 80
	var posicaoY = Math.floor(Math.random() * altura) - 80
	//console.log (posicaoX, posicaoY)

	//controle para se o valor for negativo pois subtraiu 80 
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY
	
	//criar elemento no html pelo DOM
	var virus = document.createElement('img')
	virus.src = 'img/virus.png'
	virus.className = tamanhoRandom()
	virus.style.top = posicaoY + 'px'
	virus.style.left = posicaoX + 'px'
	virus.style.position = 'absolute'
	virus.id = 'virus'

	document.body.appendChild(virus)
}
