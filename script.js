const btnProjetos = document.querySelector("#projetos");
const btnSobre = document.querySelector("#sobre");
const btnSkills = document.querySelector("#skills");
const divInfo = document.querySelector(".sobre");
const divProjetos = document.querySelector(".projetos");
const divSkills = document.querySelector(".skills");
const body = document.getElementsByTagName('body');

const trocaFundoSobre = () => {
	body[0].style.backgroundImage = 'url(../images/azulBranco.webp)'
}


const trocaFundoProjetos = () => {
	body[0].style.backgroundImage = 'url(../images/projetos.jpg)'
}

const trocaFundoSkills = () => {
	body[0].style.backgroundImage = 'url(../images/skills.jpg)'
}

const addSkills = () => {
	divSkills.style.display = 'block';
	divProjetos.style.display = 'none';
	divInfo.style.display = 'none';
	trocaFundoSkills();
};

const addInfo = () => {
	divInfo.style.display = 'block';
	divProjetos.style.display = 'none';
	divSkills.style.display = 'none';
	trocaFundoSobre();
};

const addProjeto = () => {
	divInfo.style.display = 'none';
	divProjetos.style.display = 'block';
	divSkills.style.display = 'none';
	trocaFundoProjetos();
};

btnSkills.addEventListener('click', addSkills);
btnProjetos.addEventListener("click", addProjeto);
btnSobre.addEventListener('click', addInfo);

window.onload = trocaFundoSobre;