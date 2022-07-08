window.addEventListener('load', () => {
	const nameInput = document.querySelector('#name');

	const username = localStorage.getItem('NomeUsuario') || '';

	nameInput.value = username;

	nameInput.addEventListener('change', (e) => {
		localStorage.setItem('NomeUsuario', e.target.value);
	})

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
		campo1.style.color = '#5f1a1a';
		campo1.focus();
	
				campo1.addEventListener('blur', (e) => {
					campo1.setAttribute('readonly', true);
					campo1.style.color = 'rgb(88, 88, 88)';
				})
	});

	butt2.addEventListener("click", function() {
			
		campo2.removeAttribute('readonly');
		campo2.style.color = '#5f1a1a';
		campo2.focus();
	
				campo2.addEventListener('blur', (e) => {
					campo2.setAttribute('readonly', true);
					campo2.style.color = 'rgb(88, 88, 88)';
				})
	})

	butt3.addEventListener("click", function() {
			
	campo3.removeAttribute('readonly');
	campo3.style.color = '#5f1a1a';
	campo3.focus();
	
			campo3.addEventListener('blur', (e) => {
				campo3.setAttribute('readonly', true);
				campo3.style.color = 'rgb(88, 88, 88)';
			})
	});

	butt4.addEventListener("click", function() {
			
		campo4.removeAttribute('readonly');
		campo4.style.color = '#5f1a1a';
		campo4.focus();

				campo4.addEventListener('blur', (e) => {
					campo4.setAttribute('readonly', true);
					campo4.style.color = 'rgb(88, 88, 88)';
				})
	});

	butt5.addEventListener("click", function() {
		
		campo5.removeAttribute('readonly');
		campo5.style.color = '#5f1a1a';
		campo5.focus();

				campo5.addEventListener('blur', (e) => {
					campo5.setAttribute('readonly', true);
					campo5.style.color = 'rgb(88, 88, 88)';
				})
	});

	butt6.addEventListener("click", function() {
	
		campo6.removeAttribute('readonly');
		campo6.style.color = '#5f1a1a';
		campo6.focus();

				campo6.addEventListener('blur', (e) => {
					campo6.setAttribute('readonly', true);
					campo6.style.color = 'rgb(88, 88, 88)';
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

	// Número que vai começar os containers

	let o = 0;
	
	let a = 1;


	let ac = 10;
	let ad = 20;
	let ae = 30;
	let af = 40;
	let ag = 50;
	let ah = 60;
	let ai = 70;
	let aj = 80;
	let ak = 90;

	let a1 = 100;
	let a2 = 200;
	let a3 = 300;
	let a4 = 400;
	let a5 = 500;
	let a6 = 600;
	let a7 = 700;
	let a8 = 800;
	let a9 = 900;
	let a10 = 1000;

	let b = 1;

	let b1 = 100;
	let b2 = 200;
	let b3 = 300;


	let c = 1;


	let c1 = 100;
	let c2 = 200;
	let c3 = 300;


	let d = 1;

	let d1 = 100;
	let d2 = 200;
	let d3 = 300;


	let e = 1;


	let e1 = 100;
	let e2 = 200;
	let e3 = 300;



	// Função do Botão de Mais

	plus.addEventListener("click", function() {

		so1.style.color = 'white';

		if(num.value == o){
			o++;
			num.value = o;
		}
		
		if(num.value == ac){
			ac++;
			num.value = ac;
		}

		if(num.value == ad){
			ad++;
			num.value = ad;
		}

			
		if(num.value == ae){
			ae++;
			num.value = ae;
		}

		if(num.value == af){
			af++;
			num.value = af;
		}

		
		if(num.value == ag){
			ag++;
			num.value = ag;
		}

		
		if(num.value == ah){
			ah++;
			num.value = ah;
		}

		
		if(num.value == ai){
			ai++;
			num.value = ai;
		}

		
		if(num.value == aj){
			aj++;
			num.value = aj;
		}

		
		if(num.value == ak){
			ak++;
			num.value = ak;
		}

		
		if(num.value == a1){
			a1++;
			num.value = a1;
		}


		if(num.value == a2){
			a2++;
			num.value = a2;
		}

		if(num.value == a3){
			a3++;
			num.value = a3;
		}

		if(num.value == a4){
			a4++;
			num.value = a4;
		}

		if(num.value == a5){
			a5++;
			num.value = a5;
		}

		if(num.value == a6){
			a6++;
			num.value = a6;
		}

		if(num.value == a7){
			a7++;
			num.value = a7;
		}

		if(num.value == a8){
			a8++;
			num.value = a8;
		}

		if(num.value == a9){
			a9++;
			num.value = a9;
		}

		if(num.value == a10){
			a10++;
			num.value = a10;
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

	p2.addEventListener("click", function() {
		so2.style.color = 'white';

		if(num.value <= b){
			b++;
			num.value = b;
		}
		
		if(num.value == b1){
			b1++;
			num.value = b1;
		}

		if(num.value == b2){
			b2++;
			num.value = b2;
		}

		if(num.value == b3){
			b3++;
			num.value = b3;
		}

		so2.addEventListener("click", function() {
			so2.focus();
		});

	});

	p3.addEventListener("click", function() {

		so3.style.color = 'white';

		if(num.value <= c){
			c++;
			num.value = c;
		}
		
		if(num.value == c1){
			c1++;
			num.value = c1;
		}

		if(num.value == c2){
			c2++;
			num.value = c2;
		}

		if(num.value == c3){
			c3++;
			num.value = c3;
		}

		so3.addEventListener("click", function() {
			so3.focus();
		});

	});

	p4.addEventListener("click", function() {

		so4.style.color = 'white';

		if(num.value <= d){
			d++;
			num.value = d;
		}
		
		if(num.value == d1){
			d1++;
			num.value = d1;
		}

		if(num.value == d2){
			d2++;
			num.value = d2;
		}

		if(num.value == d3){
			d3++;
			num.value = d3;
		}

		so4.addEventListener("click", function() {
			so4.style.color = 'rgba(0, 0, 0, 0.3)';
			so4.focus();
		});

	});

	p5.addEventListener("click", function() {

		so5.style.color = 'white';

		if(num.value <= e){
			e++;
			num.value = e;
		}
		
		if(num.value == e1){
			e1++;
			num.value = e1;
		}

		if(num.value == e2){
			e2++;
			num.value = e2;
		}

		if(num.value == e3){
			e3++;
			num.value = e3;
		}

		so5.addEventListener("click", function() {
			so5.style.color = 'rgba(0, 0, 0, 0.3)';
			so5.focus();
		});

	});

	// Função do Botão de Menos

	inus.addEventListener("click", function() {

		so1.style.color = 'white';

		if(num.value < o){
			num.value = o;
		}

		if(num.value == ac){
			ac--;
			num.value = ac;
		}

		if(num.value == ad){
			ad--;
			num.value = ad;
		}

				
		if(num.value == ae){
			ae--;
			num.value = ae;
		}

		if(num.value == af){
			af--;
			num.value = af;
		}

		
		if(num.value == ag){
			ag--;
			num.value = ag;
		}

		
		if(num.value == ah){
			ah--;
			num.value = ah;
		}

		
		if(num.value == ai){
			ai--;
			num.value = ai;
		}

		
		if(num.value == aj){
			aj--;
			num.value = aj;
		}

		
		if(num.value == ak){
			ak--;
			num.value = ak;
		}

		if(num.value == a1){
			a1--;
			num.value = a1;
		}

		if(num.value == a2){
			a2--;
			num.value = a2;
		}

		if(num.value == a3){
			a3--;
			num.value = a3;
		}

		if(num.value == a4){
			a4--;
			num.value = a4;
		}

		if(num.value == a5){
			a5--;
			num.value = a5;
		}

		if(num.value == a6){
			a6--;
			num.value = a6;
		}

		if(num.value == a7){
			a7--;
			num.value = a7;
		}

		if(num.value == a8){
			a8--;
			num.value = a8;
		}

		if(num.value == a9){
			a9--;
			num.value = a9;
		}

		if(num.value == a10){
			a10--;
			num.value = a10;
		}

		so1.addEventListener("click", function() {
			so1.style.color = 'rgba(0, 0, 0, 0.3)';
			so1.focus();
		});

	});

	m2.addEventListener("click", function() {

		so2.style.color = 'white';

				
		if(num.value >= b1){
			b1--;
			num.value = b1;
		}

		if(num.value == b2){
			b2--;
			num.value = b2;
		}

		if(num.value == b3){
			b3--;
			num.value = b3;
		}

		so2.addEventListener("click", function() {
			so2.style.color = 'rgba(0, 0, 0, 0.3)';
			so2.focus();
		});
	});

	m3.addEventListener("click", function() {

		so3.style.color = 'white';

					
		if(num.value >= c1){
			c1--;
			num.value = c1;
		}

		if(num.value == c2){
			c2--;
			num.value = c2;
		}

		if(num.value == c3){
			c3--;
			num.value = c3;
		}


		so3.addEventListener("click", function() {
			so3.style.color = 'rgba(0, 0, 0, 0.3)';
			so3.focus();
		});

	});

	m4.addEventListener("click", function() {
		so4.style.color = 'white';

					
		if(num.value >= d1){
			d1--;
			num.value = d1;
		}

		if(num.value == d2){
			d2--;
			num.value = d2;
		}

		if(num.value == d3){
			d3--;
			num.value = d3;
		}
		
		so4.addEventListener("click", function() {
			so4.style.color = 'rgba(0, 0, 0, 0.3)';
			so4.focus();
		});

	});

	m5.addEventListener("click", function() {
		so5.style.color = 'white';
			
		if(num.value >= e1){
			e1--;
			num.value = e1;
		}

		if(num.value == e2){
			e2--;
			num.value = e2;
		}

		if(num.value == e3){
			e3--;
			num.value = e3;
		}

		so5.addEventListener("click", function() {
			so5.style.color = 'rgba(0, 0, 0, 0.3)';
			so5.focus();
		});
	
	});

});