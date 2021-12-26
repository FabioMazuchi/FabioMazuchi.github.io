const btnProjetos = document.querySelector("#projetos");
const btnSobre = document.querySelector("#sobre");
const divInfo = document.querySelector(".sobre");
const divProjetos = document.querySelector(".projetos");

const addInfo = () => {
	divInfo.style.display = 'block';
	divProjetos.style.display = 'none';
};

const addProjeto = () => {
	divInfo.style.display = 'none';
	divProjetos.style.display = 'block';
};

btnProjetos.addEventListener("click", addProjeto);
btnSobre.addEventListener('click', addInfo);