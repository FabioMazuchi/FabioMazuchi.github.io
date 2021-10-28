let btnAdd = document.querySelector('#criar-tarefa');
let ol = document.querySelector('#lista-tarefas');
let input = document.querySelector('#texto-tarefa');
let btnApaga = document.querySelector('#apaga-tudo');
let btnFinalizados = document.querySelector('#remover-finalizados');


function adicionaTarefa() {
	cont = 0;
	btnAdd.addEventListener('click', function () {
		let texto = input.value;
		let li = document.createElement('li');
		li.className = cont;
		li.innerHTML = texto;
		ol.appendChild(li);
		cont++;
		input.value = '';
		alteraFundo();
		apagaTudo();
		completed();
		removerFinalizados();
	});
}

adicionaTarefa();

function alteraFundo() {
	let lis = ol.children;
	let cor = 'rgb(128, 128, 128)';
	for (let l of lis) {
		l.addEventListener('click', function () {
			let selected = this;
			for (let i = 0; i < lis.length; i++) {
				if (lis[i] !== selected) {
					lis[i].style.backgroundColor = 'white';
				} else {
					lis[i].style.backgroundColor = cor;
				}
			}
		});
	}
}

function completed() {
	let lis = ol.children;
	console.log(lis);
	for (let l of lis) {
		l.addEventListener('click', function () {

			if(l.classList.length < 2){
				l.classList.add('completed');
			}else{
				l.classList.remove('completed');
			}
		});
	}
}

completed();

function apagaTudo(){
	let lis = ol.children;

	btnApaga.addEventListener('click', function(){
		for(l of lis){
			l.remove();
		}
	});
}

function removerFinalizados(){
	let lis = ol.children;

	btnFinalizados.addEventListener('click', function(){
		for(l of lis){
			if(l.classList[1] === 'completed'){
				l.remove();
			}
		}
	});
}







