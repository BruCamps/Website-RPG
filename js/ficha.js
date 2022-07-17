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

	// Pega o Caminho/Diretório das Imagens

	const im1 = document.getElementById("a-1");
	const im2 = document.getElementById("a-2");
	const im3 = document.getElementById("a-3");
	const im4 = document.getElementById("a-4");

	// Pega o Caminho/Diretório dos Inputs/Modificadores
	
	var ag1 = document.getElementById("ag1");

function rolla1() {
	var randomNum = [];
	var total = parseInt(0);
	var modf = parseInt(document.getElementById("ag1").value);

	function random() {
		randomNum.push(Math.floor(Math.random() * 20) + 1);
	}

	for (let i = 0; i < 1; i++) {
		random();
	}

	for (let j in randomNum) {
		total += randomNum[j];
	}

	var sum =  total + modf;


	if(modf == 0 || modf == ""){
		document.getElementById("output").textContent = "Por favor, especifique o modificador";
		document.getElementById("sum").innerHTML = "";
	} else { 
		document.getElementById("output").innerHTML =
		"&#40;" + 
		randomNum + 
		"&#41;" + 
		" d20" +
		" + " + 
		modf +
		"<br>" +
		sum;
	}

}

function rolla2() {
	var randomNum2 = [];
	var total2 = parseInt(0);
	var modf2 = parseInt(document.getElementById("ag2").value);

	function random2() {
		randomNum2.push(Math.floor(Math.random() * 20) + 1);
	}

	for (let i = 0; i < 1; i++) {
		random2();
	}

	for (let j in randomNum2) {
		total2 += randomNum2[j];
	}

	var sum2 =  total2 + modf2;


	if(modf2 == 0 || modf2 == ""){
		document.getElementById("output2").textContent = "Por favor, especifique o modificador";
		document.getElementById("sum2").innerHTML = "";
	} else { 
		document.getElementById("output2").innerHTML =
		"&#40;" + 
		randomNum2 + 
		"&#41;" + 
		" d20" +
		" + " + 
		modf2 +
		"<br>" +
		sum2;
	}

}

function rolla3() {
	var randomNum3 = [];
	var total3 = parseInt(0);
	var modf3 = parseInt(document.getElementById("ag3").value);

	function random3() {
		randomNum3.push(Math.floor(Math.random() * 20) + 1);
	}

	for (let i = 0; i < 1; i++) {
		random3();
	}

	for (let j in randomNum3) {
		total3 += randomNum3[j];
	}

	var sum3 =  total3 + modf3;


	if(modf3 == 0 || modf3 == ""){
		document.getElementById("output3").textContent = "Por favor, especifique o modificador";
		document.getElementById("sum3").innerHTML = "";
	} else { 
		document.getElementById("output3").innerHTML =
		"&#40;" + 
		randomNum3 + 
		"&#41;" + 
		" d20" +
		" + " + 
		modf3 +
		"<br>" +
		sum3;
	}

}

function rolla4() {
	var randomNum4 = [];
	var total4 = parseInt(0);
	var modf4 = parseInt(document.getElementById("ag4").value);

	function random4() {
		randomNum4.push(Math.floor(Math.random() * 20) + 1);
	}

	for (let i = 0; i < 1; i++) {
		random4();
	}

	for (let j in randomNum4) {
		total4 += randomNum4[j];
	}

	var sum4 =  total4 + modf4;


	if(modf4 == 0 || modf4 == ""){
		document.getElementById("output4").textContent = "Por favor, especifique o modificador";
		document.getElementById("sum4").innerHTML = "";
	} else { 
		document.getElementById("output4").innerHTML =
		"&#40;" + 
		randomNum4 + 
		"&#41;" + 
		" d20" +
		" + " + 
		modf4 +
		"<br>" +
		sum4;
	}

}

function rolla5() {
	var randomNum5 = [];
	var total5 = parseInt(0);
	var modf5 = parseInt(document.getElementById("ag5").value);

	function random5() {
		randomNum5.push(Math.floor(Math.random() * 20) + 1);
	}

	for (let i = 0; i < 1; i++) {
		random5();
	}

	for (let j in randomNum5) {
		total5 += randomNum5[j];
	}

	var sum5 =  total5 + modf5;


	if(modf5 == 0 || modf5 == ""){
		document.getElementById("output5").textContent = "Por favor, especifique o modificador";
		document.getElementById("sum5").innerHTML = "";
	} else { 
		document.getElementById("output5").innerHTML =
		"&#40;" + 
		randomNum5 + 
		"&#41;" + 
		" d20" +
		" + " + 
		modf5 +
		"<br>" +
		sum5;
	}

}

function rolla6() {
	var randomNum6 = [];
	var total6 = parseInt(0);
	var modf6 = parseInt(document.getElementById("ag6").value);

	function random6() {
		randomNum6.push(Math.floor(Math.random() * 20) + 1);
	}

	for (let i = 0; i < 1; i++) {
		random6();
	}

	for (let j in randomNum6) {
		total6 += randomNum6[j];
	}

	var sum6 =  total6 + modf6;


	if(modf6 == 0 || modf6 == ""){
		document.getElementById("output6").textContent = "Por favor, especifique o modificador";
		document.getElementById("sum6").innerHTML = "";
	} else { 
		document.getElementById("output6").innerHTML =
		"&#40;" + 
		randomNum6 + 
		"&#41;" + 
		" d20" +
		" + " + 
		modf6 +
		"<br>" +
		sum6;
	}

}

function rolla7() {
	var randomNum7 = [];
	var total7 = parseInt(0);
	var modf7 = parseInt(document.getElementById("ag7").value);

	function random7() {
		randomNum7.push(Math.floor(Math.random() * 20) + 1);
	}

	for (let i = 0; i < 1; i++) {
		random7();
	}

	for (let j in randomNum7) {
		total7 += randomNum7[j];
	}

	var sum7 =  total7 + modf7;


	if(modf7 == 0 || modf7 == ""){
		document.getElementById("output7").textContent = "Por favor, especifique o modificador";
		document.getElementById("sum7").innerHTML = "";
	} else { 
		document.getElementById("output7").innerHTML =
		"&#40;" + 
		randomNum7 + 
		"&#41;" + 
		" d20" +
		" + " + 
		modf7 +
		"<br>" +
		sum7;
	}

}

function rolla8() {
	var randomNum8 = [];
	var total8 = parseInt(0);
	var modf8 = parseInt(document.getElementById("ag8").value);

	function random8() {
		randomNum8.push(Math.floor(Math.random() * 20) + 1);
	}

	for (let i = 0; i < 1; i++) {
		random8();
	}

	for (let j in randomNum8) {
		total8 += randomNum8[j];
	}

	var sum8 =  total8 + modf8;


	if(modf8 == 0 || modf8 == ""){
		document.getElementById("output8").textContent = "Por favor, especifique o modificador";
		document.getElementById("sum8").innerHTML = "";
	} else { 
		document.getElementById("output8").innerHTML =
		"&#40;" + 
		randomNum8 + 
		"&#41;" + 
		" d20" +
		" + " + 
		modf8 +
		"<br>" +
		sum8;
	}

}

function rolla9() {
	var randomNum9 = [];
	var total9 = parseInt(0);
	var modf9 = parseInt(document.getElementById("ag9").value);

	function random9() {
		randomNum9.push(Math.floor(Math.random() * 20) + 1);
	}

	for (let i = 0; i < 1; i++) {
		random9();
	}

	for (let j in randomNum9) {
		total9 += randomNum9[j];
	}

	var sum9 =  total9 + modf9;


	if(modf9 == 0 || modf9 == ""){
		document.getElementById("output9").textContent = "Por favor, especifique o modificador";
		document.getElementById("sum9").innerHTML = "";
	} else { 
		document.getElementById("output9").innerHTML =
		"&#40;" + 
		randomNum9 + 
		"&#41;" + 
		" d20" +
		" + " + 
		modf9 +
		"<br>" +
		sum9;
	}

}

function rolla10() {
	var randomNum10 = [];
	var total10 = parseInt(0);
	var modf10 = parseInt(document.getElementById("ag10").value);

	function random10() {
		randomNum10.push(Math.floor(Math.random() * 20) + 1);
	}

	for (let i = 0; i < 1; i++) {
		random10();
	}

	for (let j in randomNum10) {
		total10 += randomNum10[j];
	}

	var sum10 =  total10 + modf10;


	if(modf10 == 0 || modf10 == ""){
		document.getElementById("output10").textContent = "Por favor, especifique o modificador";
		document.getElementById("sum10").innerHTML = "";
	} else { 
		document.getElementById("output10").innerHTML =
		"&#40;" + 
		randomNum10 + 
		"&#41;" + 
		" d20" +
		" + " + 
		modf10 +
		"<br>" +
		sum10;
	}

}

function rolla11() {
	var randomNum11 = [];
	var total11 = parseInt(0);
	var modf11 = parseInt(document.getElementById("ag11").value);

	function random11() {
		randomNum11.push(Math.floor(Math.random() * 20) + 1);
	}

	for (let i = 0; i < 1; i++) {
		random11();
	}

	for (let j in randomNum11) {
		total11 += randomNum11[j];
	}

	var sum11 =  total11 + modf11;


	if(modf11 == 0 || modf11 == ""){
		document.getElementById("output11").textContent = "Por favor, especifique o modificador";
		document.getElementById("sum11").innerHTML = "";
	} else { 
		document.getElementById("output11").innerHTML =
		"&#40;" + 
		randomNum11 + 
		"&#41;" + 
		" d20" +
		" + " + 
		modf11 +
		"<br>" +
		sum11;
	}

}






