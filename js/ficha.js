window.addEventListener('load', () => {

	if(localStorage.campo1){
		document.getElementById('nom').value = localStorage.campo1;
	}

	if(localStorage.campo2){
		document.getElementById('jog').value = localStorage.campo2;
	}

	if(localStorage.campo3){
		document.getElementById('ida').value = localStorage.campo3
	}

	if(localStorage.campo4){
		document.getElementById('alt').value = localStorage.campo4;
	}

	if(localStorage.campo5){
		document.getElementById('tmv').value = localStorage.campo5;
	}

	if(localStorage.campo6){
		document.getElementById('pit').value = localStorage.campo6;
	}

	if(localStorage.vid){
		document.getElementById('vid').value = localStorage.vid;
	}

	if(localStorage.gen){
		document.getElementById('gen').value = localStorage.gen;
	}

	if(localStorage.san){
		document.getElementById('san').value = localStorage.san;
	}

	if(localStorage.vig){
		document.getElementById('vig').value = localStorage.vig;
	}

	if(localStorage.pde){
		document.getElementById('pde').value = localStorage.pde;
	}

	if(localStorage.so1){
		document.getElementById('so1').value = localStorage.so1;
	}

	if(localStorage.so2){
		document.getElementById('so2').value = localStorage.so2;
	}

	if(localStorage.so3){
		document.getElementById('so3').value = localStorage.so3;
	}

	if(localStorage.so4){
		document.getElementById('so4').value = localStorage.so4;
	}

	if(localStorage.so5){
		document.getElementById('so5').value = localStorage.so5;
	}

	if(localStorage.xp){
		document.getElementById('xp').value = localStorage.xp;
	}

	var salvarTudo = function() {

		var campo1 = document.getElementById('nom').value;
		var campo2 = document.getElementById('jog').value;
		var campo3 = document.getElementById('ida').value;
		var campo4 = document.getElementById('alt').value;
		var campo5 = document.getElementById('tmv').value;
		var campo6 = document.getElementById('pit').value;
		var vid = document.getElementById('vid').value;
		var gen = document.getElementById('gen').value;
		var san = document.getElementById('san').value;
		var vig = document.getElementById('vig').value;
		var pde = document.getElementById('pde').value;
		var so1 = document.getElementById("so1").value;
		var so2 = document.getElementById("so2").value;
		var so3 = document.getElementById("so3").value;
		var so4 = document.getElementById("so4").value;
		var so5 = document.getElementById("so5").value;
		var xp = document.getElementById('xp').value;

		localStorage.setItem('campo1', campo1);
		localStorage.setItem('campo2', campo2);
		localStorage.setItem('campo3', campo3);
		localStorage.setItem('campo4', campo4);
		localStorage.setItem('campo5', campo5);
		localStorage.setItem('campo6', campo6);
		localStorage.setItem('vid', vid);
		localStorage.setItem('gen', gen);
		localStorage.setItem('san', san);
		localStorage.setItem('vig', vig);
		localStorage.setItem('pde', pde);
		localStorage.setItem('so1', so1);
		localStorage.setItem('so2', so2);
		localStorage.setItem('so3', so3);
		localStorage.setItem('so4', so4);
		localStorage.setItem('so5', so5);
		localStorage.setItem('xp', xp);

	}

	// Cada Alteração Feita no Documento é salva

	document.onchange = salvarTudo;

	// Pega o Caminho/Diretório dos Campos/Inputs Brancos

	var campo1 = document.getElementById('nom');
	var campo2 = document.getElementById('jog');
	var campo3 = document.getElementById('ida');
	var campo4 = document.getElementById('alt');
	var campo5 = document.getElementById('tmv');
	var campo6 = document.getElementById('pit');

	// Pega o Caminho/Diretório das Classes dos Botões Edit

	const butt1 = document.getElementById('ed1');
	const butt2 = document.getElementById('ed2');
	const butt3 = document.getElementById('ed3');
	const butt4 = document.getElementById('ed4');
	const butt5 = document.getElementById('ed5');
	const butt6 = document.getElementById('ed6');


	butt1.addEventListener("click", function() {
			
		campo1.removeAttribute('readonly');
		campo1.style.color = '#803838';
		campo1.focus();
	
				campo1.addEventListener('blur', (e) => {
					campo1.setAttribute('readonly', true);
					campo1.style.color = 'rgb(88, 88, 88)';
				})
	});

	butt2.addEventListener("click", function() {
			
		campo2.removeAttribute('readonly');
		campo2.style.color = '#803838';
		campo2.focus();
	
				campo2.addEventListener('blur', (e) => {
					campo2.setAttribute('readonly', true);
					campo2.style.color = 'rgb(88, 88, 88)';
				})
	})

	butt3.addEventListener("click", function() {
			
	campo3.removeAttribute('readonly');
	campo3.style.color = '#803838';
	campo3.focus();
	
			campo3.addEventListener('blur', (e) => {
				campo3.setAttribute('readonly', true);
				campo3.style.color = 'rgb(88, 88, 88)';
			})
	});

	butt4.addEventListener("click", function() {
			
		campo4.removeAttribute('readonly');
		campo4.style.color = '#803838';
		campo4.focus();

				campo4.addEventListener('blur', (e) => {
					campo4.setAttribute('readonly', true);
					campo4.style.color = 'rgb(88, 88, 88)';
				})
	});

	butt5.addEventListener("click", function() {
		
		campo5.removeAttribute('readonly');
		campo5.style.color = '#803838';
		campo5.focus();

				campo5.addEventListener('blur', (e) => {
					campo5.setAttribute('readonly', true);
					campo5.style.color = 'rgb(88, 88, 88)';
				})
	});

	butt6.addEventListener("click", function() {
	
		campo6.removeAttribute('readonly');
		campo6.style.color = '#803838';
		campo6.focus();

				campo6.addEventListener('blur', (e) => {
					campo6.setAttribute('readonly', true);
					campo6.style.color = 'rgb(121, 120, 120)';
				})
	});

	// Pega o Caminho/Diretório das Classes do Botão +

	const plus = document.getElementById("pl");
	const p2 = document.getElementById("pl2");
	const p3 = document.getElementById("pl3");
	const p4 = document.getElementById("pl4");
	const p5 = document.getElementById("pl5");

	// Pega o Caminho/Diretório das Classes do Botão -

	const inus = document.getElementById("vm");
	const m2 = document.getElementById("vm2");
	const m3 = document.getElementById("vm3");
	const m4 = document.getElementById("vm4");
	const m5 = document.getElementById("vm5");

	// Seleciona cada Valor dentro dos Inputs

	var num = document.getElementById("vid");
	var num2 = document.getElementById("gen");
	var num3 = document.getElementById("san");
	var num4 = document.getElementById("vig");
	var num5 = document.getElementById("pde");
	var num6 = document.getElementById("xp");

	var so1 = document.getElementById("so1");
	so1.style.color = 'white';
	var so2 = document.getElementById("so2");
	so2.style.color = 'white';
	var so3 = document.getElementById("so3");
	so3.style.color = 'white';
	var so4 = document.getElementById("so4");
	so4.style.color = 'white';
	var so5 = document.getElementById("so5");
	so5.style.color = 'white';


	// Função do Botão de Mais

	plus.addEventListener("click", function() {

		so1.style.color = 'white';

		num.value = parseInt(num.value) + 1;
		if (num.value >= parseInt(max)) {
			num.value = max;
		}

		so1.addEventListener("click", function() {
			so1.focus();
		});

	});

	num.addEventListener("click", () => {
		num.removeAttribute('readonly');
		num.focus();
	});

	num2.addEventListener("click", () => {
		num2.removeAttribute('readonly');
		num2.focus();
	});

	num3.addEventListener("click", () => {
		num3.removeAttribute('readonly');
		num3.focus();
	});

	num4.addEventListener("click", () => {
		num4.removeAttribute('readonly');
		num4.focus();
	});

	num4.addEventListener("click", () => {
		num4.removeAttribute('readonly');
		num4.focus();
	});

	num5.addEventListener("click", () => {
		num5.removeAttribute('readonly');
		num5.focus();
	});

	num6.addEventListener("click", () => {
		num6.removeAttribute('readonly');
		num6.focus();
	});

	p2.addEventListener("click", function() {
		so2.style.color = 'white';

		num2.value = parseInt(num2.value) + 1;
		if (num2.value >= parseInt(max)) {
			num2.value = max;
		}

		so2.addEventListener("click", function() {
			so2.focus();
		});

	});

	p3.addEventListener("click", function() {

		so3.style.color = 'white';

		num3.value = parseInt(num3.value) + 1;
		if (num3.value >= parseInt(max)) {
			num3.value = max;
		}

		so3.addEventListener("click", function() {
			so3.focus();
		});

	});

	p4.addEventListener("click", function() {

		so4.style.color = 'white';

		num4.value = parseInt(num4.value) + 1;
		if (num4.value >= parseInt(max)) {
			num4.value = max;
		}

		so4.addEventListener("click", function() {
			so4.style.color = 'rgba(0, 0, 0, 0.3)';
			so4.focus();
		});

	});

	p5.addEventListener("click", function() {

		so5.style.color = 'white';

		num5.value = parseInt(num5.value) + 1;
		if (num5.value >= parseInt(max)) {
			num5.value = max;
		}

		so5.addEventListener("click", function() {
			so5.style.color = 'rgba(0, 0, 0, 0.3)';
			so5.focus();
		});

	});

	// Função do Botão de Menos

	inus.addEventListener("click", function() {

		so1.style.color = 'white';

		num.value = parseInt(num.value) -  1;
		if (num.value >= parseInt(min)) {
			num.value = min;
		}

		so1.addEventListener("click", function() {
			so1.style.color = 'rgba(0, 0, 0, 0.3)';
			so1.focus();
		});

	});

	m2.addEventListener("click", function() {

		so2.style.color = 'white';
	
		num2.value = parseInt(num2.value) -  1;
		if (num2.value >= parseInt(min)) {
			num2.value = min;
		}
		
		so2.addEventListener("click", function() {
			so2.style.color = 'rgba(0, 0, 0, 0.3)';
			so2.focus();
		});
	});

	m3.addEventListener("click", function() {

		so3.style.color = 'white';

		num3.value = parseInt(num3.value) -  1;
		if (num3.value >= parseInt(min)) {
			num3.value = min;
		}

		so3.addEventListener("click", function() {
			so3.style.color = 'rgba(0, 0, 0, 0.3)';
			so3.focus();
		});

	});

	m4.addEventListener("click", function() {
		so4.style.color = 'white';

		num4.value = parseInt(num4.value) -  1;
		if (num4.value >= parseInt(min)) {
			num4.value = min;
		}		
		
		so4.addEventListener("click", function() {
			so4.style.color = 'rgba(0, 0, 0, 0.3)';
			so4.focus();
		});

	});

	m5.addEventListener("click", function() {
		so5.style.color = 'white';

		num5.value = parseInt(num5.value) -  1;
		if (num5.value >= parseInt(min)) {
			num5.value = min;
		}

		so5.addEventListener("click", function() {
			so5.style.color = 'rgba(0, 0, 0, 0.3)';
			so5.focus();
		});
	
	});

	iniciaModal("modal-alert");

});

function iniciaModal(modalID) {
	if(localStorage.fechaModal !== modalID) {

	const modal = document.getElementById(modalID);

	if (modal) {

		modal.classList.add("mostrar");

		modal.addEventListener("click", (e) => {
			if(e.target.id == modalID || e.target.className == 'uil uil-multiply') {
				modal.classList.remove("mostrar");
				localStorage.fechaModal = modalID;
			}
			
			});
		}
	}
}

	// Pega o Input
	const input1 = document.getElementById("nom");
	const input2 = document.getElementById("jog");
	const input3 = document.getElementById("ida");
	const input4 = document.getElementById("alt");
	const input5 = document.getElementById("tmv");
	const input6 = document.getElementById("pit");

	// Executa a função quando clicar na tecla
	input1.addEventListener("keypress", function(e) {

		// Define a tecla enter a ser considerada
		if (e.key == "Enter") {
			
			input1.style.color = 'rgb(121, 120, 120)';
			input1.setAttribute('focus', false);
			input1.setAttribute('readonly', true);
		}

	});

	// Executa a função quando clicar na tecla
	input2.addEventListener("keypress", function(e) {

		// Define a tecla enter a ser considerada
		if (e.key == "Enter") {
	
			input2.style.color = 'rgb(121, 120, 120)';
			input2.setAttribute('focus', false);
			input2.setAttribute('readonly', true);
		}

	});

	// Executa a função quando clicar na tecla
	input3.addEventListener("keypress", function(e) {

		// Define a tecla enter a ser considerada
		if (e.key == "Enter") {

			input3.style.color = 'rgb(121, 120, 120)';
			input3.setAttribute('focus', false);
			input3.setAttribute('readonly', true);

		}

	});


	// Executa a função quando clicar na tecla
	input4.addEventListener("keypress", function(e) {

		// Define a tecla enter a ser considerada
		if (e.key == "Enter") {

			input4.style.color = 'rgb(121, 120, 120)';
			input4.setAttribute('focus', false);
			input4.setAttribute('readonly', true);
	
		}

	});

	// Executa a função quando clicar na tecla
	input5.addEventListener("keypress", function(e) {

		// Define a tecla enter a ser considerada
		if (e.key == "Enter") {
			
			input5.style.color = 'rgb(121, 120, 120)';
			input5.setAttribute('focus', false);
			input5.setAttribute('readonly', true);

		}

	});

	// Executa a função quando clicar na tecla
	input6.addEventListener("keypress", function(e) {

		// Define a tecla enter a ser considerada
		if (e.key == "Enter") {

			input6.style.color = 'rgb(121, 120, 120)';
			input6.setAttribute('focus', false);
			input6.setAttribute('readonly', true);

		}

	});

	// Botão Mostrar Mais

	const btnArea = document.querySelector(".btn-area");
	const btn1 = document.querySelector(".btn1");
	const btn2 = document.querySelector(".btn2");
	const mostraCards = document.querySelector(".mostra-cards");

	btn1.addEventListener("click", function() {
		mostraCards.classList.add('transition');
		mostraCards.classList.remove('esconder');
		mostraCards.style.display = 'block';
		btn2.style.display = 'block';
		btn1.style.display = 'none';
	});

	btn2.addEventListener("click", function() {
		mostraCards.classList.remove('transition');
		mostraCards.classList.add('esconder');

		setTimeout( function(){
			mostraCards.style.display = 'none';
			btn2.style.display = 'none';
			btn1.style.display = 'block';
		}, 950);
	});

	// let btnBox = document.querySelector("#btnBox").ariaChecked;
	// let btnArea = document.querySelector(".btn-area");
	// let btn1 = document.querySelector('.btn1');
	// let btn2 = document.querySelector('.btn2');

	// btnArea.addEventListener("click", function () {
	// 	let naparece = [...document.setAttribute('.c-pericias:nth-child(1n + 6), .s-pericias h1:nth-child(2n + 5)')];

	// 	naparece.style.display = 'flex';
	// 	btn1.style.display = 'none';
	// 	btn2.style.display = 'block';
	// 	naparece.style.transition = '0.2s ease-in';
	// })