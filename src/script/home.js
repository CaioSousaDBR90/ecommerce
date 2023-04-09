const setaDireita = document.querySelector(".carrossel-seta-direita");

const setaEsquerda = document.querySelector(".carrossel-seta-esquerda");

setaDireita.addEventListener("click", (event) => {
	event.preventDefault()
	const carrossel = document.querySelector(".carrossel-home div ")
	const carrosselImagens = carrossel.querySelectorAll("figure")
	if(carrosselImagens.length > 1 ) {
		carrossel.insertBefore(carrosselImagens[0], carrosselImagens[carrosselImagens.length - 1])
	}
} )

