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

	let o2 = 0;

	let b = 1;

	let bc = 10;
	let bd = 20;
	let be = 30;
	let bf = 40;
	let bg = 50;
	let bh = 60;
	let bi = 70;
	let bj = 80;
	let bk = 90;

	let b1 = 100;
	let b2 = 200;
	let b3 = 300;
	let b4 = 400;
	let b5 = 500;
	let b6 = 600;
	let b7 = 700;
	let b8 = 800;
	let b9 = 900;
	let b10 = 1000;

	let o3 = 0;

	let c = 1;
	let cc = 10;
	let cd = 20;
	let ce = 30;
	let cf = 40;
	let cg = 50;
	let ch = 60;
	let ci = 70;
	let cj = 80;
	let ck = 90;


	let c1 = 100;
	let c2 = 200;
	let c3 = 300;
	let c4 = 400;
	let c5 = 500;
	let c6 = 600;
	let c7 = 700;
	let c8 = 800;
	let c9 = 900;
	let c10 = 1000;


	let o4 = 0;

	let d = 1;

	let dc = 10;
	let dd = 20;
	let de = 30;
	let df = 40;
	let dg = 50;
	let dh = 60;
	let di = 70;
	let dj = 80;
	let dk = 90;

	let d1 = 100;
	let d2 = 200;
	let d3 = 300;
	let d4 = 400;
	let d5 = 500;
	let d6 = 600;
	let d7 = 700;
	let d8 = 800;
	let d9 = 900;
	let d10 = 1000;

	let o5 = 0;

	let e = 1;

	let ec = 10;
	let ed = 20;
	let ee = 30;
	let ef = 40;
	let eg = 50;
	let eh = 60;
	let ei = 70;
	let ej = 80;
	let ek = 90;


	let e1 = 100;
	let e2 = 200;
	let e3 = 300;
	let e4 = 400;
	let e5 = 500;
	let e6 = 600;
	let e7 = 700;
	let e8 = 800;
	let e9 = 900;
	let e10 = 1000;



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

		if(num2.value == o2){
			o2++;
			num2.value = o2;
		}
		
		if(num2.value == bc){
			bc++;
			num2.value = bc;
		}

		if(num2.value == bd){
			bd++;
			num2.value = bd;
		}

			
		if(num2.value == be){
			be++;
			num2.value = be;
		}

		if(num2.value == bf){
			bf++;
			num2.value = bf;
		}

		
		if(num2.value == bg){
			bg++;
			num2.value = bg;
		}

		
		if(num2.value == bh){
			bh++;
			num2.value = bh;
		}

		
		if(num2.value == bi){
			bi++;
			num2.value = bi;
		}

		
		if(num2.value == bj){
			bj++;
			num2.value = bj;
		}

		
		if(num2.value == bk){
			bk++;
			num2.value = bk;
		}

		
		if(num2.value == b1){
			b1++;
			num2.value = b1;
		}


		if(num2.value == b2){
			b2++;
			num2.value = b2;
		}

		if(num2.value == b3){
			b3++;
			num2.value = b3;
		}

		if(num2.value == b4){
			b4++;
			num2.value = b4;
		}

		if(num2.value == b5){
			b5++;
			num2.value = b5;
		}

		if(num2.value == b6){
			b6++;
			num2.value = b6;
		}

		if(num2.value == b7){
			b7++;
			num2.value = b7;
		}

		if(num2.value == b8){
			b8++;
			num2.value = b8;
		}

		if(num2.value == b9){
			b9++;
			num2.value = b9;
		}

		if(num2.value == b10){
			b10++;
			num2.value = b10;
		}

		so2.addEventListener("click", function() {
			so2.focus();
		});

	});

	p3.addEventListener("click", function() {

		so3.style.color = 'white';

		
		if(num3.value == o3){
			o3++;
			num3.value = o3;
		}
		
		if(num3.value == cc){
			cc++;
			num3.value = cc;
		}

		if(num3.value == cd){
			cd++;
			num3.value = cd;
		}

			
		if(num3.value == ce){
			ce++;
			num3.value = ce;
		}

		if(num3.value == cf){
			cf++;
			num3.value = cf;
		}

		
		if(num3.value == cg){
			cg++;
			num3.value = cg;
		}

		
		if(num3.value == ch){
			ch++;
			num3.value = ch;
		}

		
		if(num3.value == ci){
			ci++;
			num3.value = ci;
		}

		
		if(num3.value == cj){
			cj++;
			num3.value = cj;
		}

		
		if(num3.value == ck){
			ck++;
			num3.value = ck;
		}

		
		if(num3.value == c1){
			c1++;
			num3.value = c1;
		}


		if(num3.value == c2){
			c2++;
			num3.value = c2;
		}

		if(num3.value == c3){
			c3++;
			num3.value = c3;
		}

		if(num3.value == c4){
			c4++;
			num3.value = c4;
		}

		if(num3.value == c5){
			c5++;
			num3.value = c5;
		}

		if(num3.value == c6){
			c6++;
			num3.value = c6;
		}

		if(num3.value == c7){
			c7++;
			num3.value = c7;
		}

		if(num3.value == c8){
			c8++;
			num3.value = c8;
		}

		if(num3.value == c9){
			c9++;
			num3.value = c9;
		}

		if(num3.value == c10){
			c10++;
			num3.value = c10;
		}

		so3.addEventListener("click", function() {
			so3.focus();
		});

	});

	p4.addEventListener("click", function() {

		so4.style.color = 'white';

		
		if(num4.value == o4){
			o4++;
			num4.value = o4;
		}
		
		if(num4.value == dc){
			dc++;
			num4.value = dc;
		}

		if(num4.value == dd){
			dd++;
			num4.value = dd;
		}

			
		if(num4.value == de){
			de++;
			num4.value = de;
		}

		if(num4.value == df){
			df++;
			num4.value = df;
		}

		
		if(num4.value == dg){
			dg++;
			num4.value = dg;
		}

		
		if(num4.value == dh){
			dh++;
			num4.value = dh;
		}

		
		if(num4.value == di){
			di++;
			num4.value = di;
		}

		
		if(num4.value == dj){
			dj++;
			num4.value = dj;
		}

		
		if(num4.value == dk){
			dk++;
			num4.value = dk;
		}

		
		if(num4.value == d1){
			d1++;
			num4.value = d1;
		}


		if(num4.value == d2){
			d2++;
			num4.value = d2;
		}

		if(num4.value == d3){
			d3++;
			num4.value = d3;
		}

		if(num4.value == d4){
			d4++;
			num4.value = d4;
		}

		if(num4.value == d5){
			d5++;
			num4.value = d5;
		}

		if(num4.value == d6){
			d6++;
			num4.value = d6;
		}

		if(num4.value == d7){
			d7++;
			num4.value = d7;
		}

		if(num4.value == d8){
			d8++;
			num4.value = d8;
		}

		if(num4.value == d9){
			d9++;
			num4.value = d9;
		}

		if(num4.value == d10){
			d10++;
			num4.value = d10;
		}

		so4.addEventListener("click", function() {
			so4.style.color = 'rgba(0, 0, 0, 0.3)';
			so4.focus();
		});

	});

	p5.addEventListener("click", function() {

		so5.style.color = 'white';

		
		if(num5.value == o5){
			o5++;
			num5.value = o5;
		}
		
		if(num5.value == ec){
			ec++;
			num5.value = ec;
		}

		if(num5.value == ed){
			ed++;
			num5.value = ed;
		}

			
		if(num5.value == ee){
			ee++;
			num5.value = ee;
		}

		if(num5.value == ef){
			ef++;
			num5.value = ef;
		}

		
		if(num5.value == eg){
			eg++;
			num5.value = eg;
		}

		
		if(num5.value == eh){
			eh++;
			num5.value = eh;
		}

		
		if(num5.value == ei){
			ei++;
			num5.value = ei;
		}

		
		if(num5.value == ej){
			ej++;
			num5.value = ej;
		}

		
		if(num5.value == ek){
			ek++;
			num5.value = ek;
		}

		
		if(num5.value == e1){
			e1++;
			num5.value = e1;
		}


		if(num5.value == e2){
			e2++;
			num5.value = e2;
		}

		if(num5.value == e3){
			e3++;
			num5.value = e3;
		}

		if(num5.value == e4){
			e4++;
			num5.value = e4;
		}

		if(num5.value == e5){
			e5++;
			num5.value = e5;
		}

		if(num5.value == e6){
			e6++;
			num5.value = e6;
		}

		if(num5.value == e7){
			e7++;
			num5.value = e7;
		}

		if(num5.value == e8){
			e8++;
			num5.value = e8;
		}

		if(num5.value == e9){
			e9++;
			num5.value = e9;
		}

		if(num5.value == e10){
			e10++;
			num5.value = e10;
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
	
		
		if(num2.value < o2){
			num2.value = o2;
		}
		
		if(num2.value == bc){
			bc--;
			num2.value = bc;
		}

		if(num2.value == bd){
			bd--;
			num2.value = bd;
		}

			
		if(num2.value == be){
			be--;
			num2.value = be;
		}

		if(num2.value == bf){
			bf--;
			num2.value = bf;
		}

		
		if(num2.value == bg){
			bg--;
			num2.value = bg;
		}

		
		if(num2.value == bh){
			bh--;
			num2.value = bh;
		}

		
		if(num2.value == bi){
			bi--;
			num2.value = bi;
		}

		
		if(num2.value == bj){
			bj--;
			num2.value = bj;
		}

		
		if(num2.value == bk){
			bk--;
			num2.value = bk;
		}

		
		if(num2.value == b1){
			b1--;
			num2.value = b1;
		}


		if(num2.value == b2){
			b2--;
			num2.value = b2;
		}

		if(num2.value == b3){
			b3--;
			num2.value = b3;
		}

		if(num2.value == b4){
			b4--;
			num2.value = b4;
		}

		if(num2.value == b5){
			b5--;
			num2.value = b5;
		}

		if(num2.value == b6){
			b6--;
			num2.value = b6;
		}

		if(num2.value == b7){
			b7--;
			num2.value = b7;
		}

		if(num2.value == b8){
			b8--;
			num2.value = b8;
		}

		if(num2.value == b9){
			b9--;
			num2.value = b9;
		}

		if(num2.value == b10){
			b10--;
			num2.value = b10;
		}

		so2.addEventListener("click", function() {
			so2.style.color = 'rgba(0, 0, 0, 0.3)';
			so2.focus();
		});
	});

	m3.addEventListener("click", function() {

		so3.style.color = 'white';

		if(num3.value < o3){
			num3.value = o3;
		}
		
		if(num3.value == cc){
			cc--;
			num3.value = cc;
		}

		if(num3.value == cd){
			cd--;
			num3.value = cd;
		}

			
		if(num3.value == ce){
			ce--;
			num3.value = ce;
		}

		if(num3.value == cf){
			cf--;
			num3.value = cf;
		}

		
		if(num3.value == cg){
			cg--;
			num3.value = cg;
		}

		
		if(num3.value == ch){
			ch--;
			num3.value = ch;
		}

		
		if(num3.value == ci){
			ci--;
			num3.value = ci;
		}

		
		if(num3.value == cj){
			cj--;
			num3.value = cj;
		}

		
		if(num3.value == ck){
			ck--;
			num3.value = ck;
		}

		
		if(num3.value == c1){
			c1--;
			num3.value = c1;
		}


		if(num3.value == c2){
			c2--;
			num3.value = c2;
		}

		if(num3.value == c3){
			c3--;
			num3.value = c3;
		}

		if(num3.value == c4){
			c4--;
			num3.value = c4;
		}

		if(num3.value == c5){
			c5--;
			num3.value = c5;
		}

		if(num3.value == c6){
			c6--;
			num3.value = c6;
		}

		if(num3.value == c7){
			c7--;
			num3.value = c7;
		}

		if(num3.value == c8){
			c8--;
			num3.value = c8;
		}

		if(num3.value == c9){
			c9--;
			num3.value = c9;
		}

		if(num3.value == c10){
			c10--;
			num3.value = c10;
		}

		so3.addEventListener("click", function() {
			so3.style.color = 'rgba(0, 0, 0, 0.3)';
			so3.focus();
		});

	});

	m4.addEventListener("click", function() {
		so4.style.color = 'white';

					
		if(num4.value < o4){
			num4.value = o4;
		}
		
		if(num4.value == dc){
			dc--;
			num4.value = dc;
		}

		if(num4.value == dd){
			dd--;
			num4.value = dd;
		}

			
		if(num4.value == de){
			de--;
			num4.value = de;
		}

		if(num4.value == df){
			df--;
			num4.value = df;
		}

		
		if(num4.value == dg){
			dg--;
			num4.value = dg;
		}

		
		if(num4.value == dh){
			dh--;
			num4.value = dh;
		}

		
		if(num4.value == di){
			di--;
			num4.value = di;
		}

		
		if(num4.value == dj){
			dj--;
			num4.value = dj;
		}

		
		if(num4.value == dk){
			dk--;
			num4.value = dk;
		}

		
		if(num4.value == d1){
			d1--;
			num4.value = d1;
		}


		if(num4.value == d2){
			d2--;
			num4.value = d2;
		}

		if(num4.value == d3){
			d3--;
			num4.value = d3;
		}

		if(num4.value == d4){
			d4--;
			num4.value = d4;
		}

		if(num4.value == d5){
			d5--;
			num4.value = d5;
		}

		if(num4.value == d6){
			d6--;
			num4.value = d6;
		}

		if(num4.value == d7){
			d7--;
			num4.value = d7;
		}

		if(num4.value == d8){
			d8--;
			num4.value = d8;
		}

		if(num4.value == d9){
			d9--;
			num4.value = d9;
		}

		if(num4.value == d10){
			d10--;
			num4.value = d10;
		}
		
		so4.addEventListener("click", function() {
			so4.style.color = 'rgba(0, 0, 0, 0.3)';
			so4.focus();
		});

	});

	m5.addEventListener("click", function() {
		so5.style.color = 'white';
			
		if(num5.value < o5){
			num5.value = o5;
		}
		
		if(num5.value == ec){
			ec--;
			num5.value = ec;
		}

		if(num5.value == ed){
			ed--;
			num5.value = ed;
		}

			
		if(num5.value == ee){
			ee--;
			num5.value = ee;
		}

		if(num5.value == ef){
			ef--;
			num5.value = ef;
		}

		
		if(num5.value == eg){
			eg--;
			num5.value = eg;
		}

		
		if(num5.value == eh){
			eh--;
			num5.value = eh;
		}

		
		if(num5.value == ei){
			ei--;
			num5.value = ei;
		}

		
		if(num5.value == ej){
			ej--;
			num5.value = ej;
		}

		
		if(num5.value == ek){
			ek--;
			num5.value = ek;
		}

		
		if(num5.value == e1){
			e1--;
			num5.value = e1;
		}


		if(num5.value == e2){
			e2--;
			num5.value = e2;
		}

		if(num5.value == e3){
			e3--;
			num5.value = e3;
		}

		if(num5.value == e4){
			e4--;
			num5.value = e4;
		}

		if(num5.value == e5){
			e5--;
			num5.value = e5;
		}

		if(num5.value == e6){
			e6--;
			num5.value = e6;
		}

		if(num5.value == e7){
			e7--;
			num5.value = e7;
		}

		if(num5.value == e8){
			e8--;
			num5.value = e8;
		}

		if(num5.value == e9){
			e9--;
			num5.value = e9;
		}

		if(num5.value == e10){
			e10--;
			num5.value = e10;
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
			
			input1.style.color = 'rgb(88, 88, 88)';
			input1.setAttribute('focus', false);
			input1.setAttribute('readonly', true);
		}

	});

	// Executa a função quando clicar na tecla
	input2.addEventListener("keypress", function(e) {

		// Define a tecla enter a ser considerada
		if (e.key == "Enter") {
	
			input2.style.color = 'rgb(88, 88, 88)';
			input2.setAttribute('focus', false);
			input2.setAttribute('readonly', true);
		}

	});

	// Executa a função quando clicar na tecla
	input3.addEventListener("keypress", function(e) {

		// Define a tecla enter a ser considerada
		if (e.key == "Enter") {

			input3.style.color = 'rgb(88, 88, 88)';
			input3.setAttribute('focus', false);
			input3.setAttribute('readonly', true);

		}

	});


	// Executa a função quando clicar na tecla
	input4.addEventListener("keypress", function(e) {

		// Define a tecla enter a ser considerada
		if (e.key == "Enter") {

			input4.style.color = 'rgb(88, 88, 88)';
			input4.setAttribute('focus', false);
			input4.setAttribute('readonly', true);
	
		}

	});

	// Executa a função quando clicar na tecla
	input5.addEventListener("keypress", function(e) {

		// Define a tecla enter a ser considerada
		if (e.key == "Enter") {
			
			input5.style.color = 'rgb(88, 88, 88)';
			input5.setAttribute('focus', false);
			input5.setAttribute('readonly', true);

		}

	});

	// Executa a função quando clicar na tecla
	input6.addEventListener("keypress", function(e) {

		// Define a tecla enter a ser considerada
		if (e.key == "Enter") {

			input6.style.color = 'rgb(88, 88, 88)';
			input6.setAttribute('focus', false);
			input6.setAttribute('readonly', true);

		}

	});
