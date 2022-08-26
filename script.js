const btnProjetos = document.querySelector("#projetos");
const btnSobre = document.querySelector("#sobre");
const divInfo = document.querySelector(".sobre");
const divProjetos = document.querySelector(".projetos");
const overlay = document.querySelector(".overlay");
const body = document.getElementsByTagName('body');

const trocaFundoSobre = () => {
	body[0].style.backgroundImage = 'url(../images/azulBranco.webp)'	
}


const trocaFundoProjetos = () => {
	body[0].style.backgroundImage = 'url(../images/projetos.jpg)'
	overlay.style.display = 'block';
}

const addInfo = () => {
	divInfo.style.display = 'flex';
	divProjetos.style.display = 'none';
	trocaFundoSobre();
};

const addProjeto = () => {
	divInfo.style.display = 'none';
	divProjetos.style.display = 'block';
	trocaFundoProjetos();
};

btnProjetos.addEventListener("click", addProjeto);
btnSobre.addEventListener('click', addInfo);

window.onload = trocaFundoSobre;