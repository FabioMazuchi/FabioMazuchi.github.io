const btnProjetos = document.querySelector("#projetos");
const divInfo = document.querySelector(".info");
const divProjetos = document.querySelector(".projetos");

const moveDiv = () => {
	divInfo.style.display = 'none';
	divProjetos.style.display = 'block';
  // console.log(divProjetos);
};

btnProjetos.addEventListener("click", moveDiv);
console.log(btnProjetos);
