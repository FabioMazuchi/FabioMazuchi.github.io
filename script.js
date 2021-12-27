const btnProjetos = document.querySelector("#projetos");
const btnSobre = document.querySelector("#sobre");
const btnSkills = document.querySelector("#skills");
const divInfo = document.querySelector(".sobre");
const divProjetos = document.querySelector(".projetos");
const divSkills = document.querySelector(".skills");

const addSkills = () => {
	divSkills.style.display = 'block';
	divProjetos.style.display = 'none';
	divInfo.style.display = 'none';
};

const addInfo = () => {
	divInfo.style.display = 'block';
	divProjetos.style.display = 'none';
	divSkills.style.display = 'none';
};

const addProjeto = () => {
	divInfo.style.display = 'none';
	divProjetos.style.display = 'block';
	divSkills.style.display = 'none';
};

btnSkills.addEventListener('click', addSkills);
btnProjetos.addEventListener("click", addProjeto);
btnSobre.addEventListener('click', addInfo);