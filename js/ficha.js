window.addEventListener('load', () => {

	const todos = JSON.parse(localStorage.getItem("todos") || "[]");
	const newTodoForm = document.querySelector('#new-todo-form');

	newTodoForm.addEventListener('submit', e => {
		e.preventDefault();

		const nome = e.target.elements.nome.value,
		tarma = e.target.elements.tarma.value,
		matual = e.target.elements.matual.value,
		maxima = e.target.elements.maxima.value,
		usohab = e.target.elements.usohab.value,
		desc = e.target.elements.desc.value,
		hab = e.target.elements.hab.value;

		const todo = {
			nome: nome,
			tarma: tarma,
			matual: matual,
			maxima: maxima,
			usohab: usohab,
			desc: desc,
			hab: hab
		}

		todos.push(todo);

		localStorage.setItem('todos', JSON.stringify(todos));

		DisplayArmas();
	});

	DisplayArmas();

	const addBox = document.querySelector(".add-box"), 
	popupBox = document.querySelector(".popup-box"),
	closeIcon = popupBox.querySelector("header i");

	addBox.addEventListener("click", function() {
		popupBox.classList.add("show");
	});

	closeIcon.addEventListener("click", (e) => {

		if(e.target.id == "ppp" || e.target.className == "uil uil-times"){
			popupBox.classList.remove("show");
		}

		popupBox.classList.remove("show");
	});

	
	// 				const cntMg = document.querySelector(".cnt-mg");
	// 				const toast = document.querySelector(".toast");
	// 				const clIcon = document.querySelector(".close");
				
	// 				cntMg.addEventListener("click", () => {
	// 					toast.classList.add("active");							
	// 				});

	// 				clIcon.addEventListener("click", () => {
	// 					toast.classList.remove("active");
	// 				});
						

	// function showMenu(elem) {
	// 	elem.parentElement.classList.add("show");
	// 	document.addEventListener("click", e => {
	// 		if(e.target.tagName != "I" || e.target != elem) {
	// 			elem.parentElement.classList.remove("show");
	// 		}
	// 	});
	// }	

	// function deleteNote(noteId) {
	// 	let confirmDel = confirm("Tem CERTEZA que tu quer deletar isso, amigo?");
	// 	if(!confirmDel) return;

	// 	notes.splice(noteId, 1);
	// 	localStorage.setItem("notes", JSON.stringify(notes));
	// 	showNotes();
	// }

	// addBtn.addEventListener("click", function(e) {
	// 	e.preventDefault();

	// 		if(!isUpdate) {
	// 			notes.push(noteInfo);
	// 		} else {
	// 			isUpdate = false;
	// 			notes[updateId] = noteInfo;
	// 		}

	// 		localStorage.setItem("notes", JSON.stringify(notes));
	// 		showNotes();
	// 		closeIcon.click();
	// });

	function DisplayArmas() {
		if(!todos) return;
		const wrp = document.querySelector('#todo-wrapper');
		wrp.innerHTML = ".";

		// Appenchild é pra inserir algo dentro
		// CreateElement é pra criar novo elemento
	
		todos.forEach((todo, id) => {
			const todoArma = document.createElement("div");
			todoArma.classList.add("wrapper");
	
			const li = document.createElement('li');
			li.classList.add("note");

			const details = document.createElement('div');
			details.classList.add("details");

			const cntFlex = document.createElement('div');
			cntFlex.classList.add("cnt-flex");
		
			const cntColumn1 = document.createElement('div');
			cntColumn1.classList.add("cnt-column");
			cntColumn1.classList.add("nm");

			const label1 = document.createElement('label');
			label1.innerHTML = 'Nome';

			const socorro1 = document.createElement('div');
			socorro1.classList.add("socorro");

			const content1 = document.createElement('div');
			content1.classList.add("content");
			content1.innerHTML = `<input type="text" value="${todo.nome}" readonly>`;

			const edite1 = document.createElement('button');
			edite1.classList.add("edite");

			const i1 = document.createElement('i');
			i1.classList.add("fas");
			i1.classList.add("fa-pen");

			// ✅


			const cntColumn2 = document.createElement('div');
			cntColumn2.classList.add("cnt-column");

			const label2 = document.createElement('label');
			label2.innerHTML = 'Tipo';

			const select2 = document.createElement('select');
			select2.classList.add("tp");
			select2.innerHTML = `<option selected disabled hidden>${todo.tarma}</option>
			<option>Cajado</option>
			<option>Distância</option>
			<option>Físico</option>
			<option>Imperial</option>`;

			// ✅

			const cntColumn3 = document.createElement('div');
			cntColumn3.classList.add("cnt-column");

			const fff = document.createElement('div');
			fff.classList.add("fff");

			const label3 = document.createElement('label');
			label3.innerHTML = 'Dano';

			const select3a = document.createElement('select');
			select3a.classList.add("dan");
			select3a.innerHTML = `<option selected disabled hidden>dX</option>
			<option value="d4">1d4</option>
			<option value="d6">1d6</option>
			<option value="d8">1d8</option>
			<option value="d10">1d10</option>
			<option value="d12">1d12</option>
			<option value="2d4">2d4</option>
			<option value="2d6">2d6</option>
			<option value="2d8">2d8</option>
			<option value="2d10">2d10</option>
			<option value="2d12">2d12</option>`;

			const label4 = document.createElement('label');
			label4.innerHTML = '';

			const select3b = document.createElement('select');
			select3b.classList.add("darma");
			select3b.innerHTML = `<option selected disabled hidden>dX</option>
			<option value="null">0</option>
			<option value="d4b">1d4</option>
			<option value="d6b">1d6</option>
			<option value="d8b">1d8</option>
			<option value="d10b">1d10</option>
			<option value="d12b">1d12</option>
			<option value="2d4b">2d4</option>
			<option value="2d6b">2d6</option>
			<option value="2d8b">2d8</option>
			<option value="2d10b">2d10</option>
			<option value="2d12b">2d12</option>`;

			// ✅

			const cntColumn4 = document.createElement('div');
			cntColumn4.classList.add("cnt-column");
			cntColumn4.classList.add("mun");
			cntColumn4.classList.add("man");

			const label5 = document.createElement('label');
			label5.innerHTML = 'Munição A.';

			const socorro4 = document.createElement('div');
			socorro4.classList.add("socorro");

			const content4 = document.createElement('div');
			content4.classList.add("content");
			content4.innerHTML = `<input type="text" value="${todo.matual}" readonly>`;

			const edite4 = document.createElement('button');
			edite4.classList.add("edite");

			const i4 = document.createElement('i');
			i4.classList.add("fas");
			i4.classList.add("fa-pen");

			// ✅

			const cntColumn5 = document.createElement('div');
			cntColumn5.classList.add("cnt-column");
			cntColumn5.classList.add("mun");
			cntColumn5.classList.add("max");

			const label6 = document.createElement('label');
			label6.innerHTML = 'Munição Máx.';
			
			const socorro5 = document.createElement('div');
			socorro5.classList.add("socorro");

			const content5 = document.createElement('div');
			content5.classList.add("content");
			content5.innerHTML = `<input type="text" value="${todo.maxima}" readonly>`;

			const edite5 = document.createElement('button');
			edite5.classList.add("edite");

			const i5 = document.createElement('i');
			i5.classList.add("fas");
			i5.classList.add("fa-pen");

			// ✅

			const cntColumn6 = document.createElement('div');
			cntColumn6.classList.add("cnt-column");
			cntColumn6.classList.add("mun");
			cntColumn6.classList.add("uhab");

			const label7 = document.createElement('label');
			label7.innerHTML = 'Uso Hab.';
			
			const socorro6 = document.createElement('div');
			socorro6.classList.add("socorro");

			const content6 = document.createElement('div');
			content6.classList.add("content");
			content6.innerHTML = `<input type="text" value="${todo.usohab}" readonly>`;

			const edite6 = document.createElement('button');
			edite6.classList.add("edite");

			const i6 = document.createElement('i');
			i6.classList.add("fas");
			i6.classList.add("fa-pen");

			// ✅

			const flxMg = document.createElement('div');
			flxMg.classList.add("flx-mg");

			const spara = document.createElement('div');
			spara.classList.add("spara");

			const deh = document.createElement('div');
			deh.classList.add("d-e-h");

			const deh2 = document.createElement('div');
			deh2.classList.add("d-e-h");

			const socorro7 = document.createElement('div');
			socorro7.classList.add("socorro");

			const label8 = document.createElement('label');
			label8.innerHTML = 'Descrição';

			const edite7 = document.createElement('button');
			edite7.classList.add("edite-txt");

			const i7 = document.createElement('i');
			i7.classList.add("fas");
			i7.classList.add("fa-pen");



			const textarea7 = document.createElement('textarea');
			textarea7.setAttribute('readonly', 'readonly');
			textarea7.classList.add("d-s");
			textarea7.innerHTML = `${todo.desc}`;

			// ✅

			const socorro8 = document.createElement('div');
			socorro8.classList.add("socorro");

			const label9 = document.createElement('label');
			label9.innerHTML = 'Habilidade';

			const edite8 = document.createElement('button');
			edite8.classList.add("edite-txt");

			const i8 = document.createElement('i');
			i8.classList.add("fas");
			i8.classList.add("fa-pen");

			const textarea8 = document.createElement('textarea');
			textarea8.setAttribute('readonly', 'readonly');
			textarea8.classList.add("d-h");
			textarea8.innerHTML = `${todo.hab}`;

			// ✅

			const ctnMg = document.createElement('div');
			ctnMg.classList.add("cnt-mg");

			const rodaDano = document.createElement('button');
			rodaDano.innerHTML = 'Rodar Dano';

			// ✅

			const bottomContent = document.createElement('div');
			bottomContent.classList.add("bottom-content");

			const span = document.createElement('span');
			span.innerHTML = 'Futura Logo';

			const settings = document.createElement('div');
			settings.classList.add("settings");

			const i9 = document.createElement('i');
			i9.innerHTML = '...';

			const ul = document.createElement('ul');
			ul.classList.add("menu");

			const li9 = document.createElement('li');
			li9.innerHTML = 'Deletar';

			const i10 = document.createElement('i');
			i10.classList.add("fas");
			i10.classList.add("fa-trash");

			// ✅

			const toast = document.createElement('div');
			toast.classList.add("toast");

			const toastContent = document.createElement('div');
			toastContent.classList.add("toast-content");

			const i11 = document.createElement('i');
			i11.classList.add("fa");
			i11.classList.add("fa-solid");
			i11.classList.add("fa-check");
			i11.classList.add("check");

			const message = document.createElement('div');
			message.classList.add("message");

			const text1 = document.createElement('span');
			text1.classList.add("text");
			text1.classList.add("text-1");
			text1.innerHTML = 'Dano';
			
			const text2 = document.createElement('span');
			text2.classList.add("text");
			text2.classList.add("text-2");

			const i12 = document.createElement('i');
			i12.classList.add("uil");
			i12.classList.add("uil-times");
			i12.classList.add("close");

			// Juntar tudo Agora

			todoArma.appendChild(li);
			li.appendChild(details);
			details.appendChild(cntFlex);
			todoArma.appendChild(toast);
			toast.appendChild(toastContent);
			toast.appendChild(i12);
			toastContent.appendChild(i11);
			toastContent.appendChild(message);
			message.appendChild(text1);
			message.appendChild(text2);

			edite1.appendChild(i1);
			cntColumn1.appendChild(label1);
			cntColumn1.appendChild(socorro1);
			socorro1.appendChild(content1);
			socorro1.appendChild(edite1);


			cntColumn2.appendChild(label2);
			cntColumn2.appendChild(select2);

			cntColumn3.appendChild(label3);
			cntColumn3.appendChild(fff);
			fff.appendChild(select3a);
			fff.appendChild(label4);
			fff.appendChild(select3b);
			
			edite4.appendChild(i4);
			cntColumn4.appendChild(label5);
			cntColumn4.appendChild(socorro4);
			socorro4.appendChild(content4);
			socorro4.appendChild(edite4);

			edite5.appendChild(i5);
			cntColumn5.appendChild(label6);
			cntColumn5.appendChild(socorro5);
			socorro5.appendChild(content5);
			socorro5.appendChild(edite5);

			edite6.appendChild(i6);
			cntColumn6.appendChild(label7);
			cntColumn6.appendChild(socorro6);
			socorro6.appendChild(content6);
			socorro6.appendChild(edite6);

			flxMg.appendChild(spara);
			spara.appendChild(deh);
			deh.appendChild(socorro7);
			socorro7.appendChild(label8);
			socorro7.appendChild(edite7);
			edite7.appendChild(i7);
			deh.appendChild(textarea7);

			flxMg.appendChild(spara);
			spara.appendChild(deh2);
			deh2.appendChild(socorro8);
			socorro8.appendChild(label9);
			socorro8.appendChild(edite8);
			edite8.appendChild(i8);
			deh2.appendChild(textarea8);

			flxMg.appendChild(ctnMg);
			ctnMg.appendChild(rodaDano);

			cntFlex.appendChild(cntColumn1);
			cntFlex.appendChild(cntColumn2);
			cntFlex.appendChild(cntColumn3);
			cntFlex.appendChild(cntColumn4);
			cntFlex.appendChild(cntColumn5);
			cntFlex.appendChild(cntColumn6);
			li.appendChild(flxMg);

			li.appendChild(bottomContent);
			bottomContent.appendChild(span);
			bottomContent.appendChild(settings);
			settings.appendChild(i9);
			settings.appendChild(ul);
			ul.appendChild(li9);
			li9.appendChild(i10);

			wrp.appendChild(todoArma);

			edite1.addEventListener('click', (e) => {
				const input1 = content1.querySelector('input');
				input1.removeAttribute('readonly');
				input1.focus();
				input1.addEventListener('blur', (e) => {
					input1.setAttribute('readonly', true);
					todo.nome = e.target.value;
					localStorage.setItem('todos', JSON.stringify(todos));
					DisplayArmas();
	
				})
			});

			edite4.addEventListener('click', (e) => {
				const input4 = content4.querySelector('input');
				input4.removeAttribute('readonly');
				input4.focus();
				input4.addEventListener('blur', (e) => {
					input4.setAttribute('readonly', true);
					todo.matual = e.target.value;
					localStorage.setItem('todos', JSON.stringify(todos));
					DisplayArmas();
	
				})
			});

			edite5.addEventListener('click', (e) => {
				const input5 = content5.querySelector('input');
				input5.removeAttribute('readonly');
				input5.focus();
				input5.addEventListener('blur', (e) => {
					input5.setAttribute('readonly', true);
					todo.maxima = e.target.value;
					localStorage.setItem('todos', JSON.stringify(todos));
					DisplayArmas();
	
				})
			});

			edite6.addEventListener('click', (e) => {
				const input6 = content6.querySelector('input');
				input6.removeAttribute('readonly');
				input6.focus();
				input6.addEventListener('blur', (e) => {
					input6.setAttribute('readonly', true);
					todo.usohab = e.target.value;
					localStorage.setItem('todos', JSON.stringify(todos));
					DisplayArmas();
	
				})
			});

			edite7.addEventListener('click', (e) => {
				const textarea1 = deh.querySelector('textarea');
				textarea1.removeAttribute('readonly');
				textarea1.focus();


				textarea1.addEventListener('blur', (e) => {
					textarea1.setAttribute('readonly', true);
					todo.desc = e.target.value;
					localStorage.setItem('todos', JSON.stringify(todos));
					DisplayArmas();
	
				})
			});

			edite8.addEventListener('click', (e) => {
				const textarea2 = deh2.querySelector('textarea');
				textarea2.removeAttribute('readonly');
				textarea2.focus();


				textarea2.addEventListener('blur', (e) => {
					textarea2.setAttribute('readonly', true);
					todo.hab = e.target.value;
					localStorage.setItem('todos', JSON.stringify(todos));
					DisplayArmas();
	
				})
			});
	
			rodaDano.addEventListener('click', () => {
				toast.classList.add("active");
			});

			i12.addEventListener("click", () => {
				toast.classList.remove("active");
			});

				let s1 = select3a.value;
				let ran = [];
				let ttl = 0;
				function aff() {
					if (s1 === "d4") {
						ran.push(Math.floor(Math.random() * 4) + 1);
					} else if (s1 === "d6") {
						ran.push(Math.floor(Math.random() * 6) + 1);
					} else if (s1 === "d8") {
						ran.push(Math.floor(Math.random() * 8) + 1);
					} else if (s1 === "d10") {
						ran.push(Math.floor(Math.random() * 10) + 1);
					} else if (s1 === "d12") {
						ran.push(Math.floor(Math.random() * 12) + 1);
					} 
					}

					for (let i = 0; i < 1; i++) {
						aff();
					}

					for (let j in ran) {
						ttl += ran[j];
					}

					text2.innerHTML =
						"Sem Resultado Ainda";

	
			// edit.addEventListener('click', (e) => {
			// 	const input = content.querySelector('input');
			// 	input.removeAttribute('readonly');
			// 	input.focus();
			// 	input.addEventListener('blur', (e) => {
			// 		input.setAttribute('readonly', true);
			// 		todo.content = e.target.value;
			// 		localStorage.setItem('todos', JSON.stringify(todos));
			// 		DisplayTodos()
	
			// 	})
			// })
	
			// deleteButton.addEventListener('click', (e) => {
			// 	todos = todos.filter(t => t != todo);
			// 	localStorage.setItem('todos', JSON.stringify(todos));
			// 	DisplayTodos()
			// })
	
		});
	}

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
		mostraCards.classList.add('esconder');
		mostraCards.classList.remove('transition');
		btn2.style.display = 'none';
		btn1.style.display = 'block';

		setTimeout( function(){
			mostraCards.style.display = 'none';
		}, 950);
	});

	const addBox = document.querySelector(".add-box"), 
	popupBox = document.querySelector(".popup-box"),
	wrapper = document.querySelector(".wrapper"),
	deletebutton = document.querySelector(".deletebutton"),
	closeIcon = popupBox.querySelector("header i"),
	nomeTag = popupBox.querySelector(".row.name input"),
	tipoTag = popupBox.querySelector(".row.tipo select"),
	municaoatuTag = popupBox.querySelector(".row.municao-atual input"),
	municaomaxTag = popupBox.querySelector(".row.municao-maxima input"),
	usohabTag = popupBox.querySelector(".row.uso-hab input"),
	descTag = popupBox.querySelector(".row.descricao textarea"),
	habTag = popupBox.querySelector(".row.habilidade textarea"),
	addBtn = popupBox.querySelector(".content form button");

	addBox.addEventListener("click", function() {
		popupBox.classList.add("show");
	});

	closeIcon.addEventListener("click", (e) => {

		if(e.target.id == "ppp" || e.target.className == "uil uil-times"){
			popupBox.classList.remove("show");
		}

		popupBox.classList.remove("show");
	});




	// cntMg.addEventListener("click", () => {
	// 	toast.classList.add("active");							
	// });

	// clIcon.addEventListener("click", () => {
	// 	toast.classList.remove("active");
	// });
					

	// function showMenu(elem) {
	// 	elem.parentElement.classList.add("show");
	// 	document.addEventListener("click", e => {
	// 		if(e.target.tagName != "I" || e.target != elem) {
	// 			elem.parentElement.classList.remove("show");
	// 		}
	// 	});
	// }	

	// function deleteNote(noteId) {
	// 	let confirmDel = confirm("Tem CERTEZA que tu quer deletar isso, amigo?");
	// 	if(!confirmDel) return;

	// 	notes.splice(noteId, 1);
	// 	localStorage.setItem("notes", JSON.stringify(notes));
	// 	showNotes();
	// }

	// addBtn.addEventListener("click", function(e) {
	// 	e.preventDefault();

	// 		if(!isUpdate) {
	// 			notes.push(noteInfo);
	// 		} else {
	// 			isUpdate = false;
	// 			notes[updateId] = noteInfo;
	// 		}

	// 		localStorage.setItem("notes", JSON.stringify(notes));
	// 		showNotes();
	// 		closeIcon.click();
	// });
	
			// edit.addEventListener('click', (e) => {
			// 	const input = content.querySelector('input');
			// 	input.removeAttribute('readonly');
			// 	input.focus();
			// 	input.addEventListener('blur', (e) => {
			// 		input.setAttribute('readonly', true);
			// 		todo.content = e.target.value;
			// 		localStorage.setItem('todos', JSON.stringify(todos));
			// 		DisplayTodos()
	
			// 	})
			// })
	
			// deleteButton.addEventListener('click', (e) => {
			// 	todos = todos.filter(t => t != todo);
			// 	localStorage.setItem('todos', JSON.stringify(todos));
			// 	DisplayTodos()
			// })