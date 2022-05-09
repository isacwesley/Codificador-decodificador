const criptografar = document.querySelector("#criptografar");
const descriptografar = document.querySelector("#descriptografar");
let limpaImg = document.querySelector(".exclui-texto");
let mostraTexto = document.querySelector(".mostra-texto");
let botaoRight = document.querySelector(".botao-right");
let botaoBottom = botaoRight.querySelector("#botao-bottom");
let p = document.querySelector(".copiar");
let textArea;
let texto;




let caixaDeTexto = document.querySelector('.entradaTexto');
caixaDeTexto.focus();

criptografar.onclick = function() {
	textArea = document.querySelector('.entradaTexto').value;
	texto = textArea;

		if(textArea.indexOf('a') !== -1) {
			texto = texto.replaceAll('a', 'ai')}
		if(textArea.indexOf('e') !== -1) {
			texto = texto.replaceAll('e', 'enter')}
		if(textArea.indexOf('i') !== -1) {
			texto = texto.replaceAll('i', 'imes')}
		if(textArea.indexOf('o') !== -1) {
			texto = texto.replaceAll('o', 'ober')}
		if(textArea.indexOf('u') !== -1) {
			texto = texto.replaceAll('u', 'ufat')}

	limpaImg.classList.add('visibilidade-false');
	mostraTexto.textContent = texto;
	mostraTexto.classList.add('visibilidade-true');
	botaoRight.classList.add('visibilidade-true')
	p.textContent = "Copiar";
}

descriptografar.onclick = function() {
	textArea = document.querySelector('.entradaTexto').value;
	texto = textArea;

		if(textArea.indexOf('ufat') !== -1) {
			texto = texto.replaceAll('ufat', 'u')}
		if(textArea.indexOf('ober') !== -1) {
			texto = texto.replaceAll('ober', 'o')}
		if(textArea.indexOf('imes') !== -1) {
			texto = texto.replaceAll('imes', 'i')}
		if(textArea.indexOf('enter') !== -1) {
			texto = texto.replaceAll('enter', 'e')}
		if(textArea.indexOf('ai') !== -1) {
			texto = texto.replaceAll('ai', 'a')}

	limpaImg.classList.add('visibilidade-false');
	mostraTexto.textContent = texto;
	mostraTexto.classList.add('visibilidade-true');
	botaoRight.classList.add('visibilidade-true')
	p.textContent = "Copiar";
}

botaoBottom.onclick = function() {
	p.textContent = "COPIADO";
    let copyText = mostraTexto.textContent;
    caixaDeTexto.value = "";
    caixaDeTexto.focus();
    navigator.clipboard.writeText(copyText)
}

ScrollReveal({
	origin: 'bottom',
	distance: '40px',
	duration: 2000,
}).reveal('#container-geral')
