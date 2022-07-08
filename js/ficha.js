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

	var salvarTudo = function() {

		var campo1 = document.getElementById('nom').value;
		var campo2 = document.getElementById('jog').value;
		var campo3 = document.getElementById('ida').value;
		var campo4 = document.getElementById('alt').value;
		var campo5 = document.getElementById('tmv').value;
		var campo6 = document.getElementById('pit').value;

		localStorage.setItem('campo1', campo1);
		localStorage.setItem('campo2', campo2);
		localStorage.setItem('campo3', campo3);
		localStorage.setItem('campo4', campo4);
		localStorage.setItem('campo5', campo5);
		localStorage.setItem('campo6', campo6);

	}

	document.onchange = salvarTudo;

	var campo1 = document.getElementById('nom');
	var campo2 = document.getElementById('jog');
	var campo3 = document.getElementById('ida');
	var campo4 = document.getElementById('alt');
	var campo5 = document.getElementById('tmv');
	var campo6 = document.getElementById('pit');

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

	const plus = document.querySelector(".plus");
	const p2 = document.querySelector(".p2");
	const p3 = document.querySelector(".p3");
	const p4 = document.querySelector(".p4");
	const p5 = document.querySelector(".p5");


	const inus = document.querySelector(".inus");
	
	const m2 = document.querySelector(".m2");
	const m3 = document.querySelector(".m3");
	const m4 = document.querySelector(".m4");
	const m5 = document.querySelector(".m5");
	const num = document.querySelector(".num");
	const num2 = document.querySelector(".num2");
	const num3 = document.querySelector(".num3");
	const num4 = document.querySelector(".num4");
	const num5 = document.querySelector(".num5");

	let a = 1;
	var b = 1;
	var c = 1;
	var d = 1;
	var e = 1;

	plus.addEventListener("click", () => {
		a++;
		a = (a < 10) ? "0" + a : a;
		num.innerHTML = a;

		if(a > 17){
			a = 17;
			num.innerHTML = a;
		}
	});

	p2.addEventListener("click", () => {
		b++;
		b = (b < 10) ? "0" + b : b;
		num2.innerHTML = b;

		if(b > 13){
			b = 13;
			num2.innerHTML = b;
		}
	});

	p3.addEventListener("click", () => {
		c++;
		c= (c < 10) ? "0" + c : c;
		num3.innerHTML = c;

		if(c > 11){
			c = 11;
			num3.innerHTML = c;
		}
	});

	p4.addEventListener("click", () => {
		d++;
		d = (d < 10) ? "0" + d : d
		num4.innerHTML = d;

		if(d > 9){
			d = 9;
			num4.innerHTML = d;
		}
	});

	p5.addEventListener("click", () => {
		e++;
		e = (e < 10) ? "0" + e : e;
		num5.innerHTML = e;

		if(e > 8){
			e = 8;
			num5.innerHTML = e;
		}
	});

	inus.addEventListener("click", () => {
		if(a > 1){
			a--;
			a = (a < 10) ? "0" + a : a;
			num.innerHTML = a;
		}
	});

	m2.addEventListener("click", () => {
		if(b > 1){
			b--;
			b = (b < 10) ? "0" + b : b;
			num2.innerHTML = b;
		}
	});

	m3.addEventListener("click", () => {
		if(c > 1){
			c--;
			c = (c < 10) ? "0" + c : c;
			num3.innerHTML = c;
		}
	});

	m4.addEventListener("click", () => {
		if(d > 1){
			d--;
			d = (d < 10) ? "0" + d : d;
			num4.innerHTML = d;
		}
	});

	m5.addEventListener("click", () => {
		if(e > 1){
			e--;
			e = (e < 10) ? "0" + e : e;
			num5.innerHTML = e;
		}
	});

})