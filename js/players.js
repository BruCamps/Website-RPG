iniciaPopup("modal-popup");

function iniciaPopup(popupID) {

	const pop = document.getElementById(popupID);

	if (pop) {

		pop.addEventListener("click", (e) => {
			if(e.target.id == popupID || e.target.className == 'uil uil-times') {
				pop.classList.remove("show");
			}
			
		});
	}
}

	const popupMod = document.getElementById("modal-popup");

window.addEventListener('load', (e) => {

	todos = JSON.parse(localStorage.getItem("todos") || "[]");
	const newTodoForm = document.querySelector('#new-todo-form');

	newTodoForm.addEventListener('submit', e => {
		e.preventDefault();

		popupMod.click();

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
	popupBox = document.querySelector(".popup-box");

	addBox.addEventListener("click", () => {
		popupBox.classList.add("show");
	});

	function DisplayArmas() {
		if(!todos) return;
		document.querySelectorAll(".wrapper").forEach(li => li.remove());
		const wrp = document.querySelector('#todo-wrapper');
		wrp.innerHTML = "";

		// Appenchild é pra inserir algo dentro
		// CreateElement é pra criar novo elemento
	
		todos.forEach((todo) => {
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

			// ✅


			const cntColumn2 = document.createElement('div');
			cntColumn2.classList.add("cnt-column");

			const label2 = document.createElement('label');
			label2.innerHTML = 'Tipo';

			const select2 = document.createElement('div');
			select2.classList.add("tp");
			select2.innerHTML = `<input value="${todo.tarma}" readonly>`;

	

			// ✅

			const cntColumn3 = document.createElement('div');
			cntColumn3.classList.add("cnt-column");

			const fff = document.createElement('div');
			fff.classList.add("fff");

			const label3 = document.createElement('label');
			label3.innerHTML = 'Dano';

			const select3a = document.createElement('div');
			select3a.classList.add("select-box");
			select3a.innerHTML = `<div class="options-container">

			<div class="option">
			<input type="radio" class="radio" id="dX" name="category" value="dX"
			/>
			<label for="dX">dX</label>
			</div>

			<div class="option">
				<input
					type="radio"
					class="radio"
					id="d4"
					name="category"
				value="d4"/>
				<label for="d4">1d4</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="d6" name="category" value="d6"/>
				<label for="d6">1d6</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="d8" name="category" />
				<label for="d8">1d8</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="d10" name="category" />
				<label for="d10">1d10</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="d12" name="category" />
				<label for="d12">1d12</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="d20" name="category" />
				<label for="d20">1d20</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="2d4" name="category" />
				<label for="2d4">2d4</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="2d6" name="category" />
				<label for="2d6">2d6</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="2d8" name="category" />
				<label for="2d8">2d8</label>
				</div>

				<div class="option">
				<input type="radio" class="radio" id="2d10" name="category" />
				<label for="2d10">2d10</label>
				</div>

				<div class="option">
				<input type="radio" class="radio" id="2d12" name="category" />
				<label for="2d12">2d12</label>
				</div>

				<div class="option">
				<input type="radio" class="radio" id="2d20" name="category" />
				<label for="2d20">2d20</label>
				</div>
			</div>
	
			<div class="selected">
				<input type="text" value="dX" readonly>
			</div>
			</div>`;

			const label4 = document.createElement('label');
			label4.innerHTML = '';

			const select3b = document.createElement('div');
			select3b.classList.add("select-box");
			select3b.innerHTML = `<div class="options-container">
			
				<div class="option">
				<input type="radio" class="radio" id="dXb" name="category" value="dXb"
				/>
				<label for="dXb">dX</label>
				</div>
			
				<div class="option">
				<input type="radio" class="radio" id="d4b" name="category" value="d4b"
				/>
				<label for="d4b">1d4</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="d6b" name="category" value="d6b"/>
				<label for="d6b">1d6</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="d8b" name="category" value="d8b"/>
				<label for="d8b">1d8</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="d10b" name="category" value="d10b" />
				<label for="d10b">1d10</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="d12b" name="category" value="d12b" />
				<label for="d12b">1d12</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="d20b" name="category" value="d20b"/>
				<label for="d20b">1d20</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="2d4b" name="category" />
				<label for="2d4b">2d4</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="2d6b" name="category" />
				<label for="2d6b">2d6</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="2d8b" name="category" />
				<label for="2d8b">2d8</label>
				</div>

				<div class="option">
				<input type="radio" class="radio" id="2d10b" name="category" />
				<label for="2d10b">2d10</label>
				</div>

				<div class="option">
				<input type="radio" class="radio" id="2d12b" name="category" />
				<label for="2d12b">2d12</label>
				</div>

				<div class="option">
				<input type="radio" class="radio" id="2d20b" name="category" />
				<label for="2d20b">2d20</label>
				</div>
			</div>
	
			<div class="selected">
				<input type="text" value="dX" readonly>
			</div>
			</div>`;

			// ✅

			
			const select3c = document.createElement('div');
			select3c.classList.add("select-box");
			select3c.classList.add("s3c");
			select3c.innerHTML = `<div class="options-container">
			<div class="option">
				<input
					type="radio"
					class="radio"
					id="z"
					name="category"
				/>
				<label for="z">0</label>
			</div>

			<div class="option">
				<input
					type="radio"
					class="radio"
					id="b"
					name="category"
				/>
				<label for="b">1</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="c" name="category" />
				<label for="c">2</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="d" name="category" />
				<label for="d">3</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="e" name="category" />
				<label for="e">4</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="f" name="category" />
				<label for="f">5</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="g" name="category" />
				<label for="g">6</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="h" name="category" />
				<label for="h">7</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="i" name="category" />
				<label for="i">8</label>
				</div>
	
				<div class="option">
				<input type="radio" class="radio" id="j" name="category" />
				<label for="j">9</label>
				</div>

				<div class="option">
				<input type="radio" class="radio" id="k" name="category" />
				<label for="k">10</label>
				</div>

				<div class="option">
				<input type="radio" class="radio" id="l" name="category" />
				<label for="l">11</label>
				</div>

				<div class="option">
				<input type="radio" class="radio" id="m" name="category" />
				<label for="m">12</label>
				</div>

				
				<div class="option">
				<input type="radio" class="radio" id="n" name="category" />
				<label for="n">13</label>
				</div>
				
				<div class="option">
				<input type="radio" class="radio" id="o" name="category" />
				<label for="o">14</label>
				</div>
				
				<div class="option">
				<input type="radio" class="radio" id="p" name="category" />
				<label for="p">15</label>
				</div>

				<div class="option">
				<input type="radio" class="radio" id="q" name="category" />
				<label for="q">16</label>
				</div>

				<div class="option">
				<input type="radio" class="radio" id="r" name="category" />
				<label for="r">17</label>
				</div>

				<div class="option">
				<input type="radio" class="radio" id="s" name="category" />
				<label for="s">18</label>
				</div>

				<div class="option">
				<input type="radio" class="radio" id="t" name="category" />
				<label for="t">19</label>
				</div>

				<div class="option">
				<input type="radio" class="radio" id="u" name="category" />
				<label for="u">20</label>
				</div>


			</div>
	
			<div class="selected">
				<input type="text" value="0" readonly>
			</div>
			</div>`;

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


			const textarea7 = document.createElement('textarea');
			textarea7.setAttribute('readonly', 'readonly');
			textarea7.classList.add("d-s");
			textarea7.innerHTML = `${todo.desc}`;

			// ✅

			const socorro8 = document.createElement('div');
			socorro8.classList.add("socorro");

			const label9 = document.createElement('label');
			label9.innerHTML = 'Habilidade';

			const textarea8 = document.createElement('textarea');
			textarea8.setAttribute('readonly', 'readonly');
			textarea8.classList.add("d-h");
			textarea8.innerHTML = `${todo.hab}`;

			// ✅

			const ctnMg = document.createElement('div');
			ctnMg.classList.add("cnt-mg");

			const rodaDano = document.createElement('div');
			rodaDano.innerHTML = `<button>Rodar Dano</button>`;

			// ✅

			const bottomContent = document.createElement('div');
			bottomContent.classList.add("bottom-content");

			const span = document.createElement('span');
			span.innerHTML = 'Odisseia Carmesim';

			const settings = document.createElement('div');
			settings.classList.add("settings");

			const i9 = document.createElement('i');
			i9.classList.add("uil");
			i9.classList.add("uil-ellipsis-h");

			const ula = document.createElement('ul');
			ula.classList.add("menu");

			ula.innerHTML = `<li><i class="fas fa-trash"></i>Descartar</li>`;

			// ✅

			const toast = document.createElement('div');
			toast.classList.add("toast");

			const toastContent = document.createElement('div');
			toastContent.classList.add("toast-content");
			
			const mg = document.createElement('img');
			mg.classList.add("check");
			mg.classList.add("fis");

			const message = document.createElement('div');
			message.classList.add("message");

			const text1 = document.createElement('span');
			text1.classList.add("text");
			text1.classList.add("text-1");
			text1.innerHTML = 'Dano Causado';
			
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
			toastContent.appendChild(mg);
			toastContent.appendChild(message);
			message.appendChild(text1);
			message.appendChild(text2);

			cntColumn1.appendChild(label1);
			cntColumn1.appendChild(socorro1);
			socorro1.appendChild(content1);


			cntColumn2.appendChild(label2);
			cntColumn2.appendChild(select2);

			cntColumn3.appendChild(label3);
			cntColumn3.appendChild(fff);
			fff.appendChild(select3a);
			fff.appendChild(label4);
			fff.appendChild(select3b);
			fff.appendChild(select3c);
			
			cntColumn4.appendChild(label5);
			cntColumn4.appendChild(socorro4);
			socorro4.appendChild(content4);


			cntColumn5.appendChild(label6);
			cntColumn5.appendChild(socorro5);
			socorro5.appendChild(content5);

			cntColumn6.appendChild(label7);
			cntColumn6.appendChild(socorro6);
			socorro6.appendChild(content6);

			flxMg.appendChild(spara);
			spara.appendChild(deh);
			deh.appendChild(socorro7);
			socorro7.appendChild(label8);
			deh.appendChild(textarea7);

			flxMg.appendChild(spara);
			spara.appendChild(deh2);
			deh2.appendChild(socorro8);
			socorro8.appendChild(label9);
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
			settings.appendChild(ula);

			wrp.appendChild(todoArma);

			content1.addEventListener('click', (e) => {
				const input1 = content1.querySelector('input');
				input1.removeAttribute('readonly');
				input1.focus();
				input1.addEventListener('blur', (e) => {
					input1.setAttribute('readonly', true);
					todo.nome = e.target.value;
					localStorage.setItem('todos', JSON.stringify(todos));
					DisplayArmas();
	
				});
			});

			const inputna = select2.querySelector('input');
			
			select2.addEventListener('click', (e) => {
				inputna.removeAttribute('readonly');
				inputna.focus();
				inputna.addEventListener('blur', (e) => {
					inputna.setAttribute('readonly', true);
					todo.tarma = e.target.value;
					localStorage.setItem('todos', JSON.stringify(todos));
					DisplayArmas();
	
				});
			});

			content4.addEventListener('click', (e) => {
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

			content5.addEventListener('click', (e) => {
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

			content6.addEventListener('click', (e) => {
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

			textarea7.style.height = "30px";
			let sctext1 = textarea7.scrollHeight;
			textarea7.style.height = `${sctext1}px`;

			textarea7.addEventListener('keyup', (e) => {
				textarea7.style.height = "30px";
				let sctext1 = textarea7.scrollHeight;
				textarea7.style.height = `${sctext1}px`;
			});

			deh.addEventListener('click', (e) => {
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

			deh2.addEventListener('click', (e) => {
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

			textarea8.style.height = "30px";
			let sctext2 = textarea8.scrollHeight;
			textarea8.style.height = `${sctext2}px`;

			textarea8.addEventListener('keyup', (e) => {
				textarea8.style.height = "30px";
				let sctext2 = textarea8.scrollHeight;
				textarea8.style.height = `${sctext2}px`;
			});

		const selectedcont = select3a.querySelector(".selected");
		const selected = select3a.querySelector(".selected input");
		const optionsContainer = select3a.querySelector(".options-container");

		const optionsList = select3a.querySelectorAll(".option");

		selectedcont.addEventListener("click", () => {
			optionsContainer.classList.toggle("active");
		});

		optionsList.forEach(o => {
			o.addEventListener("click", () => {
				selected.value = o.querySelector("label").innerHTML;
				optionsContainer.classList.remove("active");
			});
		});

		const selectedcont2 = select3b.querySelector(".selected");
		const selected2 = select3b.querySelector(".selected input");
		const optionsContainer2 = select3b.querySelector(".options-container");

		const optionsList2 = select3b.querySelectorAll(".option");

		selectedcont2.addEventListener("click", () => {
			optionsContainer2.classList.toggle("active");
		});

		optionsList2.forEach(assd => {
			assd.addEventListener("click", () => {
				selected2.value = assd.querySelector("label").innerHTML;
				optionsContainer2.classList.remove("active");
			});
		});

		const selectedcont3 = select3c.querySelector(".selected");
		const selected3 = select3c.querySelector(".selected input");
		const optionsContainer3 = select3c.querySelector(".options-container");

		const optionsList3 = select3c.querySelectorAll(".option");

		selectedcont3.addEventListener("click", () => {
			optionsContainer3.classList.toggle("active");
		});

		optionsList3.forEach(nasf => {
			nasf.addEventListener("click", (e) => {
				selected3.value = nasf.querySelector("label").innerHTML;
				optionsContainer3.classList.remove("active");
			});
		});

			i9.addEventListener('click', () => {
				ula.classList.add("most");

				document.addEventListener("click", e => {
					if(e.target.tagName != "I") {
						ula.classList.remove("most");
					}
				});
			});

			const li9 = ula.querySelector('li');

			li9.addEventListener('click', () => {
				todos = todos.filter(t => t != todo);
				localStorage.setItem('todos', JSON.stringify(todos));
				DisplayArmas();

			});

			rodaDano.addEventListener('click', () => {
				toast.classList.remove("active");

				imageArray = [
					'mg-1.png',
					'mg-2.png',
					'mg-3.png',
					'mg-4.png',
					'mg-5.png',
					'mg-6.png',
					'mg-7.png',
					'mg-8.png',
					'mg-9.png',
					'mg-10.png',
					'mg-11.png',
					'mg-14.png',
					'mg-15.png',
					'mg-16.png',
					'mg-17.png',
					'mg-18.png',
					'mg-20.png',
					'mg-21.png',
					'mg-22.png',
					'mg-23.png',
					'mg-24.png',
					'mg-25.png',
					'mg-26.png',
					'mg-27.png',
					'mg-28.png',
					'mg-30.png',
					'mg-31.png',
					'mg-33.png',
					'mg-34.png',
					'mg-35.png',
					'mg-36.png',
					'mg-37.png',
					'mg-38.png',
					'mg-39.png'
				];

				randomImages = Math.floor(Math.random() * imageArray.length);

				selectedImages = imageArray[randomImages];

				const affs = toastContent.querySelector('img');
				
				setTimeout(function() { 
					affs.src = `/images/${selectedImages}`;
				}, 700);

					let dice1 = selected.value;
					let dice2 = selected2.value;
					let modf = selected3.value;
					let ran = [];
					let total = 0;

					function aff() {
						if (dice1 === "1d4" & dice2 === "dX" || dice1 === "dX" & dice2 === "1d4") {
							ran.push(Math.floor(Math.random() * 4) + 1);
						} else if (dice1 === "1d4" & dice2 === "1d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1);
						} else if (dice1 === "2d4" & dice2 === "2d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1);
						}  else if (dice1 === "2d4" & dice2 === "1d4" || dice1 === "1d4" & dice2 === "2d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1);
						} else if (dice1 === "2d4" & dice2 === "dX" || dice1 === "dX" & dice2 === "2d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1);
						} else if (dice1 === "1d6" & dice2 === "dX" || dice1 === "dX" & dice2 === "1d6") {
							ran.push(Math.floor(Math.random() * 6) + 1);
						} else if (dice1 === "1d6" & dice2 === "1d6") {
							ran.push(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1);
						} else if (dice1 === "2d6" & dice2 === "2d6") {
							ran.push(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1);
						}  else if (dice1 === "2d6" & dice2 === "1d6" || dice1 === "1d6" & dice2 === "2d6") {
							ran.push(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1);
						} else if (dice1 === "2d6" & dice2 === "dX" || dice1 === "dX" & dice2 === "2d6") {
							ran.push(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1);
						} else if (dice1 === "1d8" & dice2 === "dX" || dice1 === "dX" & dice2 === "1d8") {
							ran.push(Math.floor(Math.random() * 8) + 1);
						}
						else if (dice1 === "1d8" & dice2 === "1d8") {
							ran.push(Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1);
						} else if (dice1 === "2d8" & dice2 === "2d8") {
							ran.push(Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1);
						}  else if (dice1 === "2d8" & dice2 === "1d8" || dice1 === "1d8" & dice2 === "2d8") {
							ran.push(Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1);
						} else if (dice1 === "2d8" & dice2 === "dX" || dice1 === "dX" & dice2 === "2d8") {
							ran.push(Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1);
						} else if (dice1 === "1d10" & dice2 === "dX" || dice1 === "dX" & dice2 === "1d10") {
							ran.push(Math.floor(Math.random() * 10) + 1);
						} else if (dice1 === "1d10" & dice2 === "1d10") {
							ran.push(Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
						} else if (dice1 === "2d10" & dice2 === "2d10") {
							ran.push(Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
						}  else if (dice1 === "2d10" & dice2 === "1d10" || dice1 === "1d10" & dice2 === "2d10") {
							ran.push(Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
						} else if (dice1 === "2d10" & dice2 === "dX" || dice1 === "dX" & dice2 === "2d10") {
							ran.push(Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
						} else if (dice1 === "1d12" & dice2 === "dX" || dice1 === "dX" & dice2 === "1d12") {
							ran.push(Math.floor(Math.random() * 12) + 1);
						}
						else if (dice1 === "1d12" & dice2 === "1d12") {
							ran.push(Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1);
						} else if (dice1 === "2d12" & dice2 === "2d12") {
							ran.push(Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1);
						}  else if (dice1 === "2d12" & dice2 === "1d12" || dice1 === "1d12" & dice2 === "2d12") {
							ran.push(Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1);
						} else if (dice1 === "2d12" & dice2 === "dX" || dice1 === "dX" & dice2 === "2d12") {
							ran.push(Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1);
						} else if (dice1 === "1d20" & dice2 === "dX" || dice1 === "dX" & dice2 === "1d20") {
							ran.push(Math.floor(Math.random() * 20) + 1);
						} else if (dice1 === "1d20" & dice2 === "1d20") {
							ran.push(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
						} else if (dice1 === "2d20" & dice2 === "2d20") {
							ran.push(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
						}  else if (dice1 === "2d20" & dice2 === "1d20" || dice1 === "1d20" & dice2 === "2d20") {
							ran.push(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
						} else if (dice1 === "2d20" & dice2 === "dX" || dice1 === "dX" & dice2 === "2d20") {
							ran.push(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
						} else if (dice1 === "1d4" & dice2 === "1d6" || dice1 === "1d6" & dice2 === "1d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 6) + 1);
						} else if (dice1 === "1d4" & dice2 === "1d8" || dice1 === "1d8" & dice2 === "1d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 8) + 1);
						} else if (dice1 === "1d4" & dice2 === "1d10" || dice1 === "1d10" & dice2 === "1d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 10) + 1);
						} else if (dice1 === "1d4" & dice2 === "1d12" || dice1 === "1d12" & dice2 === "1d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 12) + 1);
						} else if (dice1 === "1d4" & dice2 === "1d20" || dice1 === "1d20" & dice2 === "1d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 20) + 1);
						} else if (dice1 === "1d6" & dice2 === "1d8" || dice1 === "1d8" & dice2 === "1d6") {
							ran.push(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 8) + 1);
						} else if (dice1 === "1d6" & dice2 === "1d10" || dice1 === "1d10" & dice2 === "1d6") {
							ran.push(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 10) + 1);
						} else if (dice1 === "1d6" & dice2 === "1d12" || dice1 === "1d12" & dice2 === "1d6") {
							ran.push(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 12) + 1);
						} else if (dice1 === "1d6" & dice2 === "1d20" || dice1 === "1d20" & dice2 === "1d6") {
							ran.push(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 20) + 1);
						} else if (dice1 === "1d8" & dice2 === "1d10" || dice1 === "1d10" & dice2 === "1d8") {
							ran.push(Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 10) + 1);
						} else if (dice1 === "1d8" & dice2 === "1d12" || dice1 === "1d12" & dice2 === "1d8") {
							ran.push(Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 12) + 1);
						} else if (dice1 === "1d8" & dice2 === "1d20" || dice1 === "1d20" & dice2 === "1d8") {
							ran.push(Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 20) + 1);
						} else if (dice1 === "1d10" & dice2 === "1d12" || dice1 === "1d12" & dice2 === "1d10") {
							ran.push(Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 12) + 1);
						} else if (dice1 === "1d10" & dice2 === "1d20" || dice1 === "1d20" & dice2 === "1d10") {
							ran.push(Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 20) + 1);
						}  else if (dice1 === "1d12" & dice2 === "1d20" || dice1 === "1d20" & dice2 === "1d12") {
							ran.push(Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1);
						} 
						
						
						if (dice1 === "1d6" & dice2 === "2d4" || dice1 === "2d4" & dice2 === "1d6") {
							ran.push(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1);
						} else if (dice1 === "1d8" & dice2 === "2d4" || dice1 === "2d4" & dice2 === "1d8") {
							ran.push(Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1);
						} else if (dice1 === "1d10" & dice2 === "2d4" || dice1 === "2d4" & dice2 === "1d10") {
							ran.push(Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1);
						} else if (dice1 === "1d12" & dice2 === "2d4" || dice1 === "2d4" & dice2 === "1d12") {
							ran.push(Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1);
						} else if (dice1 === "1d20" & dice2 === "2d4" || dice1 === "2d4" & dice2 === "1d20") {
							ran.push(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1);
						} 

							
						if (dice1 === "1d4" & dice2 === "2d6" || dice1 === "2d6" & dice2 === "1d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1);
						} else if (dice1 === "1d8" & dice2 === "2d6" || dice1 === "2d6" & dice2 === "1d8") {
							ran.push(Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1);
						} else if (dice1 === "1d10" & dice2 === "2d6" || dice1 === "2d6" & dice2 === "1d10") {
							ran.push(Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1);
						} else if (dice1 === "1d12" & dice2 === "2d6" || dice1 === "2d6" & dice2 === "1d12") {
							ran.push(Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1);
						} else if (dice1 === "1d20" & dice2 === "2d6" || dice1 === "2d6" & dice2 === "1d20") {
							ran.push(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1);
						} 

						if (dice1 === "1d4" & dice2 === "2d8" || dice1 === "2d8" & dice2 === "1d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1);
						} else if (dice1 === "1d6" & dice2 === "2d8" || dice1 === "2d8" & dice2 === "1d6") {
							ran.push(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1);
						} else if (dice1 === "1d10" & dice2 === "2d8" || dice1 === "2d8" & dice2 === "1d10") {
							ran.push(Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1);
						} else if (dice1 === "1d12" & dice2 === "2d8" || dice1 === "2d8" & dice2 === "1d12") {
							ran.push(Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1);
						} else if (dice1 === "1d20" & dice2 === "2d8" || dice1 === "2d8" & dice2 === "1d20") {
							ran.push(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1);
						} 

						if (dice1 === "1d4" & dice2 === "2d10" || dice1 === "2d10" & dice2 === "1d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
						} else if (dice1 === "1d6" & dice2 === "2d10" || dice1 === "2d10" & dice2 === "1d6") {
							ran.push(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
						} else if (dice1 === "1d8" & dice2 === "2d10" || dice1 === "2d10" & dice2 === "1d8") {
							ran.push(Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
						} else if (dice1 === "1d12" & dice2 === "2d10" || dice1 === "2d10" & dice2 === "1d12") {
							ran.push(Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
						} else if (dice1 === "1d20" & dice2 === "2d10" || dice1 === "2d10" & dice2 === "1d20") {
							ran.push(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
						} 

						if (dice1 === "1d4" & dice2 === "2d12" || dice1 === "2d12" & dice2 === "1d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1);
						} else if (dice1 === "1d6" & dice2 === "2d12" || dice1 === "2d12" & dice2 === "1d6") {
							ran.push(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1);
						} else if (dice1 === "1d8" & dice2 === "2d12" || dice1 === "2d12" & dice2 === "1d8") {
							ran.push(Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1);
						} else if (dice1 === "1d10" & dice2 === "2d12" || dice1 === "2d12" & dice2 === "1d10") {
							ran.push(Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1);
						} else if (dice1 === "1d20" & dice2 === "2d12" || dice1 === "2d12" & dice2 === "1d20") {
							ran.push(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1);
						} 

						if (dice1 === "1d4" & dice2 === "2d20" || dice1 === "2d20" & dice2 === "1d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
						} else if (dice1 === "1d6" & dice2 === "2d20" || dice1 === "2d20" & dice2 === "1d6") {
							ran.push(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
						} else if (dice1 === "1d8" & dice2 === "2d20" || dice1 === "2d20" & dice2 === "1d8") {
							ran.push(Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
						} else if (dice1 === "1d10" & dice2 === "2d20" || dice1 === "2d20" & dice2 === "1d10") {
							ran.push(Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
						} else if (dice1 === "1d12" & dice2 === "2d20" || dice1 === "2d20" & dice2 === "1d12") {
							ran.push(Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
						} 


						
						if (dice1 === "2d4" & dice2 === "2d6" || dice1 === "2d6" & dice2 === "2d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1);
						} else if (dice1 === "2d4" & dice2 === "2d8" || dice1 === "2d8" & dice2 === "2d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1);
						} else if (dice1 === "2d4" & dice2 === "2d10" || dice1 === "d10" & dice2 === "2d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
						} else if (dice1 === "2d4" & dice2 === "2d12" || dice1 === "2d12" & dice2 === "2d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1);
						} else if (dice1 === "2d4" & dice2 === "2d20" || dice1 === "2d20" & dice2 === "2d4") {
							ran.push(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
						} else if (dice1 === "2d6" & dice2 === "2d8" || dice1 === "2d8" & dice2 === "2d6") {
							ran.push(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1);
						} else if (dice1 === "2d6" & dice2 === "2d10" || dice1 === "2d10" & dice2 === "2d6") {
							ran.push(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
						} else if (dice1 === "2d6" & dice2 === "2d12" || dice1 === "2d12" & dice2 === "2d6") {
							ran.push(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1);
						} else if (dice1 === "2d6" & dice2 === "2d20" || dice1 === "2d20" & dice2 === "2d6") {
							ran.push(Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
						} else if (dice1 === "2d8" & dice2 === "2d10" || dice1 === "2d10" & dice2 === "2d8") {
							ran.push(Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
						} else if (dice1 === "2d8" & dice2 === "2d12" || dice1 === "2d12" & dice2 === "2d8") {
							ran.push(Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1);
						} else if (dice1 === "2d8" & dice2 === "2d20" || dice1 === "2d20" & dice2 === "2d8") {
							ran.push(Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
						} else if (dice1 === "2d10" & dice2 === "2d12" || dice1 === "2d12" & dice2 === "2d10") {
							ran.push(Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1);
						} else if (dice1 === "2d10" & dice2 === "2d20" || dice1 === "2d20" & dice2 === "2d10") {
							ran.push(Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
						}  else if (dice1 === "2d12" & dice2 === "2d20" || dice1 === "2d20" & dice2 === "2d12") {
							ran.push(Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
						}

					}

					for (let i = 0; i < 1; i++) {
						aff();
					}
					for (let j in ran) {
						total += ran[j];
					}

					let suma = +total + +modf;

					setTimeout(function() { 
						toast.classList.add("active");
		
					if (dice1 === "dX" & dice2 === "dX") {
						text2.innerHTML =
						"Ué, cadê os valores?";
					} else if (dice1 === "1d4" & dice2 === "dX" || dice1 === "dX" & dice2 === "1d4") {
						text2.innerHTML =
						"d4: " +
						total;
					} else if (dice1 === "1d4" & dice2 === "1d4") {
						text2.innerHTML =
						"2d4: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 

					if (dice1 === "1d4" & dice2 === "dX" & modf > 0 || dice1 === "dX" & dice2 === "1d4" & modf > 0) {
						text2.innerHTML =
						"d4: " +
						total +
						" + " +
						modf +
						" ➜ " +
						suma;
					}
					
					
					if (dice1 === "1d4" & dice2 === "1d4" & modf > 0) {
						text2.innerHTML =
						"2d4: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 
					
					
					if (dice1 === "1d4" & dice2 === "1d6") {
						text2.innerHTML =
						"d4, d6: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d4" & dice2 === "1d8") {
						text2.innerHTML =
						"d4, d8: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d4" & dice2 === "1d10") {
						text2.innerHTML =
						"d4, d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d4" & dice2 === "1d12") {
						text2.innerHTML =
						"d4, d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d4" & dice2 === "1d20") {
						text2.innerHTML =
						"d4, d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					}

					if (dice1 === "1d4" & dice2 === "1d6" & modf > 0) {
						text2.innerHTML =
						"d4, d6: " +
						ran.join(", ") + 
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d4" & dice2 === "1d8" & modf > 0) {
						text2.innerHTML =
						"d4, d8: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d4" & dice2 === "1d10" & modf > 0) {
						text2.innerHTML =
						"d4, d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d4" & dice2 === "1d12" & modf > 0) {
						text2.innerHTML =
						"d4, d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d4" & dice2 === "1d20" & modf > 0) {
						text2.innerHTML =
						"d4, d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					}

					
					if (dice1 === "2d4" & dice2 === "2d4") {
						text2.innerHTML =
						"4d4: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 
					
					if (dice1 === "2d4" & dice2 === "2d4" & modf > 0) {
						text2.innerHTML =
						"4d4: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 
					
					if (dice1 === "2d4" & dice2 === "2d6") {
						text2.innerHTML =
						"2d4, 2d6: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d4" & dice2 === "2d8") {
						text2.innerHTML =
						"2d4, 2d8: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d4" & dice2 === "2d10") {
						text2.innerHTML =
						"2d4, 2d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d4" & dice2 === "2d12") {
						text2.innerHTML =
						"2d4, 2d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d4" & dice2 === "2d20") {
						text2.innerHTML =
						"2d4, 2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 

					if (dice1 === "2d4" & dice2 === "2d6" & modf > 0) {
						text2.innerHTML =
						"2d4, 2d6: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d4" & dice2 === "2d8" & modf > 0) {
						text2.innerHTML =
						"2d4, 2d8: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d4" & dice2 === "2d10" & modf > 0) {
						text2.innerHTML =
						"2d4, 2d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d4" & dice2 === "2d12" & modf > 0) {
						text2.innerHTML =
						"2d4, 2d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d4" & dice2 === "2d20"& modf > 0 ) {
						text2.innerHTML =
						"2d4, 2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 

					// d6

					if (dice1 === "1d6" & dice2 === "dX" || dice1 === "dX" & dice2 === "1d6") {
						text2.innerHTML =
						"d6: " +
						total;
					} else if (dice1 === "1d6" & dice2 === "1d6") {
						text2.innerHTML =
						"2d6: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					}

					if (dice1 === "1d6" & dice2 === "dX" & modf > 0 || dice1 === "dX" & dice2 === "1d6" & modf > 0) {
						text2.innerHTML =
						"d6: " +
						total +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d6" & dice2 === "1d6" &  modf > 0) {
						text2.innerHTML =
						"2d6: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					}

					if (dice1 === "1d6" & dice2 === "dX" || dice1 === "dX" & dice2 === "1d6") {
						text2.innerHTML =
						"d6: " +
						total;
					} else if (dice1 === "1d6" & dice2 === "1d6") {
						text2.innerHTML =
						"2d6: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					}

					if (dice1 === "1d6" & dice2 === "dX" & modf > 0 || dice1 === "dX" & dice2 === "1d6" & modf > 0) {
						text2.innerHTML =
						"d6: " +
						total +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d6" & dice2 === "1d6" & modf > 0) {
						text2.innerHTML =
						"2d6: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					}

						if (dice1 === "1d6" & dice2 === "1d4") {
							text2.innerHTML =
							"d4, d6: " +
							ran.join(", ") + 
						" ➜ " +
						total;
						} else if (dice1 === "1d6" & dice2 === "1d8") {
							text2.innerHTML =
							"d6, d8: " +
							ran.join(", ") + 
						" ➜ " +
						total;
						} else if (dice1 === "1d6" & dice2 === "1d10") {
							text2.innerHTML =
							"d6, d10: " +
							ran.join(", ") + 
						" ➜ " +
						total;
						} else if (dice1 === "1d6" & dice2 === "1d12") {
							text2.innerHTML =
							"d6, d12: " +
							ran.join(", ") + 
						" ➜ " +
						total;
						} else if (dice1 === "1d6" & dice2 === "1d20") {
							text2.innerHTML =
							"d6, d20: " +
							ran.join(", ") + 
						" ➜ " +
						total;
						}

						if (dice1 === "1d6" & dice2 === "1d4" & modf > 0) {
							text2.innerHTML =
							"d4, d6: " +
							ran.join(", ") +
							" + " +
							modf +
							" ➜ " +
							suma;
						} else if (dice1 === "1d6" & dice2 === "1d8" & modf > 0) {
							text2.innerHTML =
							"d6, d8: " +
							ran.join(", ") +
							" + " +
							modf +
							" ➜ " +
							suma;
						} else if (dice1 === "1d6" & dice2 === "1d10" & modf > 0) {
							text2.innerHTML =
							"d6, d10: " +
							ran.join(", ") +
							" + " +
							modf +
							" ➜ " +
							suma;
						} else if (dice1 === "1d6" & dice2 === "1d12" & modf > 0) {
							text2.innerHTML =
							"d6, d12: " +
							ran.join(", ") +
							" + " +
							modf +
							" ➜ " +
							suma;
						} else if (dice1 === "1d6" & dice2 === "1d20" & modf > 0) {
							text2.innerHTML =
							"d6, d20: " +
							ran.join(", ") +
							" + " +
							modf +
							" ➜ " +
							suma;
						}


					if (dice1 === "2d6" & dice2 === "2d6") {
						text2.innerHTML =
						"4d6: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					}

					if (dice1 === "2d6" & dice2 === "2d6" & modf > 0) {
						text2.innerHTML =
						"4d6: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					}
					
					if (dice1 === "2d6" & dice2 === "2d4") {
						text2.innerHTML =
						"2d4, 2d6: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d6" & dice2 === "2d8") {
						text2.innerHTML =
						"2d6, 2d8: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d6" & dice2 === "2d10") {
						text2.innerHTML =
						"2d6, 2d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d6" & dice2 === "2d12") {
						text2.innerHTML =
						"2d6, 2d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d6" & dice2 === "2d20") {
						text2.innerHTML =
						"2d6, 2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 

					if (dice1 === "2d6" & dice2 === "2d4" & modf > 0) {
						text2.innerHTML =
						"2d4, 2d6: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d6" & dice2 === "2d8" & modf > 0) {
						text2.innerHTML =
						"2d6, 2d8: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d6" & dice2 === "2d10" & modf > 0) {
						text2.innerHTML =
						"2d6, 2d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d6" & dice2 === "2d12" & modf > 0) {
						text2.innerHTML =
						"2d6, 2d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d6" & dice2 === "2d20" & modf > 0) {
						text2.innerHTML =
						"2d6, 2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 

					// d8

					if (dice1 === "1d8" & dice2 === "dX" || dice1 === "dX" & dice2 === "1d8") {
						text2.innerHTML =
						"d8: " +
						total;
					} else if (dice1 === "1d8" & dice2 === "1d8") {
						text2.innerHTML =
						"2d8: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 

					if (dice1 === "1d8" & dice2 === "dX" & modf > 0 || dice1 === "dX" & dice2 === "1d8" & modf > 0) {
						text2.innerHTML =
						"d8: " +
						total +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d8" & dice2 === "1d8" & modf > 0) {
						text2.innerHTML =
						"2d8: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 
					

					if (dice1 === "1d8" & dice2 === "1d4") {
						text2.innerHTML =
						"d4, d8: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d8" & dice2 === "1d6") {
						text2.innerHTML =
						"d6, d8: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d8" & dice2 === "1d10") {
						text2.innerHTML =
						"d8, d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d8" & dice2 === "1d12") {
						text2.innerHTML =
						"d8, d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d8" & dice2 === "1d20") {
						text2.innerHTML =
						"d8, d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					}

					
					if (dice1 === "1d8" & dice2 === "1d4" & modf > 0) {
						text2.innerHTML =
						"d4, d8: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d8" & dice2 === "1d6" & modf > 0) {
						text2.innerHTML =
						"d6, d8: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d8" & dice2 === "1d10" & modf > 0) {
						text2.innerHTML =
						"d8, d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d8" & dice2 === "1d12" & modf > 0) {
						text2.innerHTML =
						"d8, d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d8" & dice2 === "1d20" & modf > 0) {
						text2.innerHTML =
						"d8, d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					}
					
					if (dice1 === "2d8" & dice2 === "2d8") {
						text2.innerHTML =
						"4d8: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 

					if (dice1 === "2d8" & dice2 === "2d8" & modf > 0) {
						text2.innerHTML =
						"4d8: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 
					
					if (dice1 === "2d8" & dice2 === "2d4") {
						text2.innerHTML =
						"2d4, 2d8: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d8" & dice2 === "2d6") {
						text2.innerHTML =
						"2d6, 2d8: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d8" & dice2 === "2d10") {
						text2.innerHTML =
						"2d8, 2d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d8" & dice2 === "2d12") {
						text2.innerHTML =
						"2d8, 2d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d8" & dice2 === "2d20") {
						text2.innerHTML =
						"2d8, 2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 

					if (dice1 === "2d8" & dice2 === "2d4" & modf > 0) {
						text2.innerHTML =
						"2d4, 2d8: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d8" & dice2 === "2d6" & modf > 0) {
						text2.innerHTML =
						"2d6, 2d8: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d8" & dice2 === "2d10" & modf > 0) {
						text2.innerHTML =
						"2d8, 2d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d8" & dice2 === "2d12" & modf > 0) {
						text2.innerHTML =
						"2d8, 2d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d8" & dice2 === "2d20" & modf > 0) {
						text2.innerHTML =
						"2d8, 2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 

					// d10

					if (dice1 === "1d10" & dice2 === "dX" || dice1 === "dX" & dice2 === "1d10") {
						text2.innerHTML =
						"d10: " +
						total;
					} else if (dice1 === "1d10" & dice2 === "1d10") {
						text2.innerHTML =
						"2d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 

					if (dice1 === "1d10" & dice2 === "dX" & modf > 0 || dice1 === "dX" & dice2 === "1d10" & modf > 0) {
						text2.innerHTML =
						"d10: " +
						total +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d10" & dice2 === "1d10" & modf > 0) {
						text2.innerHTML =
						"2d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 
					

					if (dice1 === "1d10" & dice2 === "1d4") {
						text2.innerHTML =
						"d4, d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d10" & dice2 === "1d6") {
						text2.innerHTML =
						"d6, d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d10" & dice2 === "1d8") {
						text2.innerHTML =
						"d8, d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d10" & dice2 === "1d12") {
						text2.innerHTML =
						"d10, d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d10" & dice2 === "1d20") {
						text2.innerHTML =
						"d10, d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					}

					if (dice1 === "1d10" & dice2 === "1d4" & modf > 0) {
						text2.innerHTML =
						"d4, d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 
					
					if (dice1 === "1d10" & dice2 === "1d6" & modf > 0) {
						text2.innerHTML =
						"d6, d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 
					
					if (dice1 === "1d10" & dice2 === "1d8" & modf > 0) {
						text2.innerHTML =
						"d8, d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 
					
					if (dice1 === "1d10" & dice2 === "1d12" & modf > 0) {
						text2.innerHTML =
						"d10, d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 
					
					if (dice1 === "1d10" & dice2 === "1d20" & modf > 0) {
						text2.innerHTML =
						"d10, d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					}
					
					if (dice1 === "2d10" & dice2 === "2d10") {
						text2.innerHTML =
						"4d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					}

						
					if (dice1 === "2d10" & dice2 === "2d10" & modf > 0) {
						text2.innerHTML =
						"4d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					}
					
					if (dice1 === "2d10" & dice2 === "2d4") {
						text2.innerHTML =
						"2d4, 2d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d10" & dice2 === "2d6") {
						text2.innerHTML =
						"2d6, 2d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d10" & dice2 === "2d8") {
						text2.innerHTML =
						"2d8, 2d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d10" & dice2 === "2d12") {
						text2.innerHTML =
						"2d10, 2d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d10" & dice2 === "2d20") {
						text2.innerHTML =
						"2d10, 2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 

					if (dice1 === "2d10" & dice2 === "2d4" & modf > 0) {
						text2.innerHTML =
						"2d4, 2d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d10" & dice2 === "2d6" & modf > 0) {
						text2.innerHTML =
						"2d6, 2d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d10" & dice2 === "2d8" & modf > 0) {
						text2.innerHTML =
						"2d8, 2d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d10" & dice2 === "2d12" & modf > 0) {
						text2.innerHTML =
						"2d10, 2d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d10" & dice2 === "2d20" & modf > 0) {
						text2.innerHTML =
						"2d10, 2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 

					// d12

					if (dice1 === "1d12" & dice2 === "dX" || dice1 === "dX" & dice2 === "1d12") {
						text2.innerHTML =
						"d12: " +
						total;
					} else if (dice1 === "1d12" & dice2 === "1d12") {
						text2.innerHTML =
						"2d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 

					if (dice1 === "1d12" & dice2 === "dX" & modf > 0 || dice1 === "dX" & dice2 === "1d12" & modf > 0) {
						text2.innerHTML =
						"d12: " +
						total +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d12" & dice2 === "1d12" & modf > 0) {
						text2.innerHTML =
						"2d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 
					

					if (dice1 === "1d12" & dice2 === "1d4") {
						text2.innerHTML =
						"d4, d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d12" & dice2 === "1d6") {
						text2.innerHTML =
						"d6, d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d12" & dice2 === "1d8") {
						text2.innerHTML =
						"d8, d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d12" & dice2 === "1d10") {
						text2.innerHTML =
						"d10, d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d12" & dice2 === "1d20") {
						text2.innerHTML =
						"d12, d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d12" & dice2 === "2d12") {
						text2.innerHTML =
						"4d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 

					
					if (dice1 === "1d12" & dice2 === "1d4" & modf > 0) {
						text2.innerHTML =
						"d4, d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d12" & dice2 === "1d6" & modf > 0) {
						text2.innerHTML =
						"d6, d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d12" & dice2 === "1d8" & modf > 0) {
						text2.innerHTML =
						"d8, d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d12" & dice2 === "1d10" & modf > 0) {
						text2.innerHTML =
						"d10, d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d12" & dice2 === "1d20" & modf > 0) {
						text2.innerHTML =
						"d12, d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d12" & dice2 === "2d12" & modf > 0) {
						text2.innerHTML =
						"4d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 
					
					if (dice1 === "2d12" & dice2 === "2d4") {
						text2.innerHTML =
						"2d4, 2d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d12" & dice2 === "2d6") {
						text2.innerHTML =
						"2d6, 2d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d12" & dice2 === "2d8") {
						text2.innerHTML =
						"2d8, 2d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d12" & dice2 === "2d10") {
						text2.innerHTML =
						"2d10, 2d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d12" & dice2 === "2d20") {
						text2.innerHTML =
						"2d12, 2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					}

					if (dice1 === "2d12" & dice2 === "2d4" & modf > 0) {
						text2.innerHTML =
						"2d4, 2d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d12" & dice2 === "2d6" & modf > 0) {
						text2.innerHTML =
						"2d6, 2d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d12" & dice2 === "2d8" & modf > 0) {
						text2.innerHTML =
						"2d8, 2d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d12" & dice2 === "2d10" & modf > 0) {
						text2.innerHTML =
						"2d10, 2d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d12" & dice2 === "2d20" & modf > 0) {
						text2.innerHTML =
						"2d12, 2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					}

					// d20

					if (dice1 === "1d20" & dice2 === "dX" || dice1 === "dX" & dice2 === "1d20") {
						text2.innerHTML =
						"d20: " +
						total;
					} else if (dice1 === "1d20" & dice2 === "1d20") {
						text2.innerHTML =
						"2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 
					

					if (dice1 === "1d20" & dice2 === "dX" & modf > 0 || dice1 === "dX" & dice2 === "1d20" & modf > 0) {
						text2.innerHTML =
						"d20: " +
						total +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d20" & dice2 === "1d20" & modf > 0) {
						text2.innerHTML =
						"2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 

					if (dice1 === "1d20" & dice2 === "1d4") {
						text2.innerHTML =
						"d4, d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d20" & dice2 === "1d6") {
						text2.innerHTML =
						"d6, d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d20" & dice2 === "1d8") {
						text2.innerHTML =
						"d8, d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d20" & dice2 === "1d10") {
						text2.innerHTML =
						"d10, d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d20" & dice2 === "1d12") {
						text2.innerHTML =
						"d12, d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					}

					if (dice1 === "1d20" & dice2 === "1d4" & modf > 0) {
						text2.innerHTML =
						"d4, d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d20" & dice2 === "1d6" & modf > 0) {
						text2.innerHTML =
						"d6, d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d20" & dice2 === "1d8" & modf > 0) {
						text2.innerHTML =
						"d8, d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d20" & dice2 === "1d10" & modf > 0) {
						text2.innerHTML =
						"d10, d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d20" & dice2 === "1d12" & modf > 0) {
						text2.innerHTML =
						"d12, d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					}

					if (dice1 === "1d20" & dice2 === "1d4") {
						text2.innerHTML =
						"d4, d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d20" & dice2 === "1d6") {
						text2.innerHTML =
						"d6, d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d20" & dice2 === "1d8") {
						text2.innerHTML =
						"d8, d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d20" & dice2 === "1d10") {
						text2.innerHTML =
						"d10, d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "1d20" & dice2 === "1d12") {
						text2.innerHTML =
						"d12, d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					}

					if (dice1 === "1d20" & dice2 === "1d4" & modf > 0) {
						text2.innerHTML =
						"d4, d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d20" & dice2 === "1d6" & modf > 0) {
						text2.innerHTML =
						"d6, d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d20" & dice2 === "1d8" & modf > 0) {
						text2.innerHTML =
						"d8, d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d20" & dice2 === "1d10" & modf > 0) {
						text2.innerHTML =
						"d10, d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "1d20" & dice2 === "1d12" & modf > 0) {
						text2.innerHTML =
						"d12, d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					}
					
					if (dice1 === "2d20" & dice2 === "2d20") {
						text2.innerHTML =
						"4d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 
					
					if (dice1 === "2d20" & dice2 === "2d20" & modf > 0) {
						text2.innerHTML =
						"4d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 
					
					
					if (dice1 === "2d20" & dice2 === "2d4") {
						text2.innerHTML =
						"2d4, 2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d20" & dice2 === "2d6") {
						text2.innerHTML =
						"2d6, 2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d20" & dice2 === "2d8") {
						text2.innerHTML =
						"2d8, 2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d20" & dice2 === "2d10") {
						text2.innerHTML =
						"2d10, 2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d20" & dice2 === "2d12") {
						text2.innerHTML =
						"2d12, 2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					}


					if (dice1 === "2d20" & dice2 === "2d4" & modf > 0) {
						text2.innerHTML =
						"2d4, 2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d20" & dice2 === "2d6" & modf > 0) {
						text2.innerHTML =
						"2d6, 2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d20" & dice2 === "2d8" & modf > 0) {
						text2.innerHTML =
						"2d8, 2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d20" & dice2 === "2d10" & modf > 0) {
						text2.innerHTML =
						"2d10, 2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d20" & dice2 === "2d12" & modf > 0) {
						text2.innerHTML =
						"2d12, 2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					}


					
					if (dice1 === "2d4" & dice2 === "1d4" || dice1 === "1d4" & dice2 === "2d4") {
						text2.innerHTML =
						"d4, 2d4: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d4" & dice2 === "dX" || dice1 === "dX" & dice2 === "2d4") {
						text2.innerHTML =
						"2d4: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d4" & dice2 === "1d6" || dice1 === "1d6" & dice2 === "2d4") {
						text2.innerHTML =
						"d6, 2d4: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d4" & dice2 === "1d8" || dice1 === "1d8" & dice2 === "2d4") {
						text2.innerHTML =
						"d8, 2d4: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d4" & dice2 === "1d10" || dice1 === "1d10" & dice2 === "2d4") {
						text2.innerHTML =
						"d10, 2d4: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d4" & dice2 === "1d12" || dice1 === "1d12" & dice2 === "2d4") {
						text2.innerHTML =
						"d12, 2d4: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d4" & dice2 === "1d20" || dice1 === "1d20" & dice2 === "2d4") {
						text2.innerHTML =
						"d20, 2d4: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 

					if (dice1 === "2d4" & dice2 === "1d4" & modf > 0 || dice1 === "1d4" & dice2 === "2d4" & modf > 0) {
						text2.innerHTML =
						"d4, 2d4: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d4" & dice2 === "dX" & modf > 0 || dice1 === "dX" & dice2 === "2d4" & modf > 0) {
						text2.innerHTML =
						"2d4: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d4" & dice2 === "1d6" & modf > 0 || dice1 === "1d6" & dice2 === "2d4" & modf > 0) {
						text2.innerHTML =
						"d6, 2d4: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d4" & dice2 === "1d8" & modf > 0 || dice1 === "1d8" & dice2 === "2d4" & modf > 0) {
						text2.innerHTML =
						"d8, 2d4: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d4" & dice2 === "1d10" & modf > 0 || dice1 === "1d10" & dice2 === "2d4" & modf > 0) {
						text2.innerHTML =
						"d10, 2d4: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d4" & dice2 === "1d12" & modf > 0 || dice1 === "1d12" & dice2 === "2d4" & modf > 0) {
						text2.innerHTML =
						"d12, 2d4: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d4" & dice2 === "1d20" & modf > 0 || dice1 === "1d20" & dice2 === "2d4" & modf > 0) {
						text2.innerHTML =
						"d20, 2d4: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 

					if (dice1 === "2d6" & dice2 === "1d4" || dice1 === "1d4" & dice2 === "2d6") {
						text2.innerHTML =
						"d4, 2d6: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d6" & dice2 === "dX" || dice1 === "dX" & dice2 === "2d6") {
						text2.innerHTML =
						"2d6: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d6" & dice2 === "1d6" || dice1 === "1d6" & dice2 === "2d6") {
						text2.innerHTML =
						"d6, 2d6: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d6" & dice2 === "1d8" || dice1 === "1d8" & dice2 === "2d6") {
						text2.innerHTML =
						"d8, 2d6: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d6" & dice2 === "1d10" || dice1 === "1d10" & dice2 === "2d6") {
						text2.innerHTML =
						"d10, 2d6: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d6" & dice2 === "1d12" || dice1 === "1d12" & dice2 === "2d6") {
						text2.innerHTML =
						"d12, 2d6: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d6" & dice2 === "1d20" || dice1 === "1d20" & dice2 === "2d6") {
						text2.innerHTML =
						"d20, 2d6: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 

					if (dice1 === "2d6" & dice2 === "1d4" & modf > 0 || dice1 === "1d4" & dice2 === "2d6" & modf > 0) {
						text2.innerHTML =
						"d4, 2d6: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d6" & dice2 === "dX" & modf > 0 || dice1 === "dX" & dice2 === "2d6" & modf > 0) {
						text2.innerHTML =
						"2d6: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d6" & dice2 === "1d6" & modf > 0 || dice1 === "1d6" & dice2 === "2d6" & modf > 0) {
						text2.innerHTML =
						"d6, 2d6: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d6" & dice2 === "1d8" & modf > 0 || dice1 === "1d8" & dice2 === "2d6" & modf > 0) {
						text2.innerHTML =
						"d8, 2d6: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d6" & dice2 === "1d10" & modf > 0 || dice1 === "1d10" & dice2 === "2d6" & modf > 0) {
						text2.innerHTML =
						"d10, 2d6: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d6" & dice2 === "1d12" & modf > 0 || dice1 === "1d12" & dice2 === "2d6" & modf > 0) {
						text2.innerHTML =
						"d12, 2d6: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d6" & dice2 === "1d20" & modf > 0 || dice1 === "1d20" & dice2 === "2d6" & modf > 0) {
						text2.innerHTML =
						"d20, 2d6: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 


					
					if (dice1 === "2d8" & dice2 === "1d4" || dice1 === "1d4" & dice2 === "2d8") {
						text2.innerHTML =
						"d4, 2d8: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d8" & dice2 === "dX" || dice1 === "dX" & dice2 === "2d8") {
						text2.innerHTML =
						"2d8: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d8" & dice2 === "1d6" || dice1 === "1d6" & dice2 === "2d8") {
						text2.innerHTML =
						"d6, 2d8: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d8" & dice2 === "1d8" || dice1 === "1d8" & dice2 === "2d8") {
						text2.innerHTML =
						"d8, 2d8: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d8" & dice2 === "1d10" || dice1 === "1d10" & dice2 === "2d8") {
						text2.innerHTML =
						"d10, 2d8: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d8" & dice2 === "1d12" || dice1 === "1d12" & dice2 === "2d8") {
						text2.innerHTML =
						"d12, 2d8: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d8" & dice2 === "1d20" || dice1 === "1d20" & dice2 === "2d8") {
						text2.innerHTML =
						"d20, 2d8: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 

							
					if (dice1 === "2d8" & dice2 === "1d4" & modf > 0 || dice1 === "1d4" & dice2 === "2d8" & modf > 0) {
						text2.innerHTML =
						"d4, 2d8: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d8" & dice2 === "dX" & modf > 0 || dice1 === "dX" & dice2 === "2d8" & modf > 0) {
						text2.innerHTML =
						"2d8: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d8" & dice2 === "1d6" & modf > 0 || dice1 === "1d6" & dice2 === "2d8" & modf > 0) {
						text2.innerHTML =
						"d6, 2d8: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d8" & dice2 === "1d8" & modf > 0 || dice1 === "1d8" & dice2 === "2d8" & modf > 0) {
						text2.innerHTML =
						"d8, 2d8: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d8" & dice2 === "1d10" & modf > 0 || dice1 === "1d10" & dice2 === "2d8" & modf > 0) {
						text2.innerHTML =
						"d10, 2d8: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d8" & dice2 === "1d12" & modf > 0 || dice1 === "1d12" & dice2 === "2d8" & modf > 0) {
						text2.innerHTML =
						"d12, 2d8: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d8" & dice2 === "1d20" & modf > 0 || dice1 === "1d20" & dice2 === "2d8" & modf > 0) {
						text2.innerHTML =
						"d20, 2d8: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 

					
					if (dice1 === "2d10" & dice2 === "1d4" || dice1 === "1d4" & dice2 === "2d10") {
						text2.innerHTML =
						"d4, 2d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d10" & dice2 === "1d6" || dice1 === "1d6" & dice2 === "2d10") {
						text2.innerHTML =
						"d6, 2d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d10" & dice2 === "dX" || dice1 === "dX" & dice2 === "2d10") {
						text2.innerHTML =
						"2d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d10" & dice2 === "1d8" || dice1 === "1d8" & dice2 === "2d10") {
						text2.innerHTML =
						"d8, 2d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d10" & dice2 === "1d10" || dice1 === "1d10" & dice2 === "2d10") {
						text2.innerHTML =
						"d10, 2d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d10" & dice2 === "1d12" || dice1 === "1d12" & dice2 === "2d10") {
						text2.innerHTML =
						"d12, 2d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d10" & dice2 === "1d20" || dice1 === "1d20" & dice2 === "2d10") {
						text2.innerHTML =
						"d20, 2d10: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 

					if (dice1 === "2d10" & dice2 === "1d4" & modf > 0 || dice1 === "1d4" & dice2 === "2d10" & modf > 0) {
						text2.innerHTML =
						"d4, 2d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d10" & dice2 === "1d6" & modf > 0 || dice1 === "1d6" & dice2 === "2d10" & modf > 0) {
						text2.innerHTML =
						"d6, 2d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d10" & dice2 === "dX" & modf > 0 || dice1 === "dX" & dice2 === "2d10" & modf > 0) {
						text2.innerHTML =
						"2d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d10" & dice2 === "1d8" & modf > 0 || dice1 === "1d8" & dice2 === "2d10" & modf > 0) {
						text2.innerHTML =
						"d8, 2d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d10" & dice2 === "1d10" & modf > 0 || dice1 === "1d10" & dice2 === "2d10" & modf > 0) {
						text2.innerHTML =
						"d10, 2d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d10" & dice2 === "1d12" & modf > 0 || dice1 === "1d12" & dice2 === "2d10" & modf > 0) {
						text2.innerHTML =
						"d12, 2d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d10" & dice2 === "1d20" & modf > 0 || dice1 === "1d20" & dice2 === "2d10" & modf > 0) {
						text2.innerHTML =
						"d20, 2d10: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 

					
					if (dice1 === "2d12" & dice2 === "1d4" || dice1 === "1d4" & dice2 === "2d12") {
						text2.innerHTML =
						"d4, 2d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d12" & dice2 === "1d6" || dice1 === "1d6" & dice2 === "2d12") {
						text2.innerHTML =
						"d6, 2d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d12" & dice2 === "dX" || dice1 === "dX" & dice2 === "2d12") {
						text2.innerHTML =
						"2d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d12" & dice2 === "1d8" || dice1 === "1d8" & dice2 === "2d12") {
						text2.innerHTML =
						"d8, 2d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d12" & dice2 === "1d10" || dice1 === "1d10" & dice2 === "2d12") {
						text2.innerHTML =
						"d10, 2d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d12" & dice2 === "1d12" || dice1 === "1d12" & dice2 === "2d12") {
						text2.innerHTML =
						"d12, 2d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d12" & dice2 === "1d20" || dice1 === "1d20" & dice2 === "2d12") {
						text2.innerHTML =
						"d20, 2d12: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 

					if (dice1 === "2d12" & dice2 === "1d4" & modf > 0 || dice1 === "1d4" & dice2 === "2d12" & modf > 0) {
						text2.innerHTML =
						"d4, 2d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d12" & dice2 === "1d6" & modf > 0 || dice1 === "1d6" & dice2 === "2d12") {
						text2.innerHTML =
						"d6, 2d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d12" & dice2 === "dX" & modf > 0 || dice1 === "dX" & dice2 === "2d12" & modf > 0) {
						text2.innerHTML =
						"2d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d12" & dice2 === "1d8" & modf > 0 || dice1 === "1d8" & dice2 === "2d12" & modf > 0) {
						text2.innerHTML =
						"d8, 2d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d12" & dice2 === "1d10" & modf > 0 || dice1 === "1d10" & dice2 === "2d12" & modf > 0) {
						text2.innerHTML =
						"d10, 2d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d12" & dice2 === "1d12" & modf > 0 || dice1 === "1d12" & dice2 === "2d12" & modf > 0) {
						text2.innerHTML =
						"d12, 2d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d12" & dice2 === "1d20" & modf > 0 || dice1 === "1d20" & dice2 === "2d12" & modf > 0) {
						text2.innerHTML =
						"d20, 2d12: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 

					
					if (dice1 === "2d20" & dice2 === "1d4" || dice1 === "1d4" & dice2 === "2d20") {
						text2.innerHTML =
						"d4, 2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d20" & dice2 === "dX" || dice1 === "dX" & dice2 === "2d20") {
						text2.innerHTML =
						"2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d20" & dice2 === "1d6" || dice1 === "1d6" & dice2 === "2d20") {
						text2.innerHTML =
						"d6, 2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d20" & dice2 === "1d8" || dice1 === "1d8" & dice2 === "2d20") {
						text2.innerHTML =
						"d8, 2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d20" & dice2 === "1d10" || dice1 === "1d10" & dice2 === "2d20") {
						text2.innerHTML =
						"d10, 2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d20" & dice2 === "1d12" || dice1 === "1d12" & dice2 === "2d20") {
						text2.innerHTML =
						"d12, 2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} else if (dice1 === "2d20" & dice2 === "1d20" || dice1 === "1d20" & dice2 === "2d20") {
						text2.innerHTML =
						"d20, 2d20: " +
						ran.join(", ") + 
						" ➜ " +
						total;
					} 

					if (dice1 === "2d20" & dice2 === "1d4" & modf > 0 || dice1 === "1d4" & dice2 === "2d20" & modf > 0) {
						text2.innerHTML =
						"d4, 2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d20" & dice2 === "dX" & modf > 0 || dice1 === "dX" & dice2 === "2d20" & modf > 0) {
						text2.innerHTML =
						"2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d20" & dice2 === "1d6" & modf > 0 || dice1 === "1d6" & dice2 === "2d20" & modf > 0) {
						text2.innerHTML =
						"d6, 2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d20" & dice2 === "1d8" & modf > 0 || dice1 === "1d8" & dice2 === "2d20" & modf > 0) {
						text2.innerHTML =
						"d8, 2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d20" & dice2 === "1d10" & modf > 0 || dice1 === "1d10" & dice2 === "2d20" & modf > 0) {
						text2.innerHTML =
						"d10, 2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d20" & dice2 === "1d12" & modf > 0 || dice1 === "1d12" & dice2 === "2d20" & modf > 0) {
						text2.innerHTML =
						"d12, 2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} else if (dice1 === "2d20" & dice2 === "1d20" & modf > 0 || dice1 === "1d20" & dice2 === "2d20" & modf > 0) {
						text2.innerHTML =
						"d20, 2d20: " +
						ran.join(", ") +
						" + " +
						modf +
						" ➜ " +
						suma;
					} 

					const putnas = select2.querySelector('input').value;

					setTimeout( function() {
						var matualvalue = parseInt(content4.querySelector("input").value, 10);
						matualvalue = isNaN(matualvalue) ? 0 : matualvalue;
		
						if (matualvalue == 0 & dice1 != "dX" || matualvalue == 0 & dice2 != "dX"){
							toast.style.display = "none";
							alert(`Sua arma tá sem munição`);
						} else if(matualvalue == 0){
							toast.style.display = "block";
							matualvalue = 0;
						} else if(matualvalue != 0 & dice1 != "dX" & putnas === "distância" || matualvalue != 0 & dice2 != "dX" & putnas === "distância" ||  matualvalue != 0 & dice1 != "dX" & putnas === "Distância" || matualvalue != 0 & dice2 != "dX" & putnas === "Distância" || matualvalue != 0 & dice1 != "dX" & putnas === "cajado" || matualvalue != 0 & dice2 != "dX" & putnas === "cajado" ||  matualvalue != 0 & dice1 != "dX" & putnas === "Cajado" || matualvalue != 0 & dice2 != "dX" & putnas === "Cajado" || matualvalue != 0 & dice1 != "dX" & putnas === "imperial" || matualvalue != 0 & dice2 != "dX" & putnas === "imperial" || matualvalue != 0 & dice1 != "dX" & putnas === "Imperial" || matualvalue != 0 & dice2 != "dX" & putnas === "Imperial" || matualvalue != 0 & dice1 != "dX" & putnas === "balística" || matualvalue != 0 & dice2 != "dX" & putnas === "balística" ||  matualvalue != 0 & dice1 != "dX" & putnas === "Balística" || matualvalue != 0 & dice2 != "dX" & putnas === "Balística" || matualvalue != 0 & dice1 != "dX" & putnas === "balístico" || matualvalue != 0 & dice2 != "dX" & putnas === "balístico" ||  matualvalue != 0 & dice1 != "dX" & putnas === "Balístico" || matualvalue != 0 & dice2 != "dX" & putnas === "Balístico") {
							toast.style.display = "block";
							matualvalue--;
						}

						content4.querySelector("input").value = matualvalue;
						todo.matual = matualvalue;
						localStorage.setItem('todos', JSON.stringify(todos));
					}, 600);

				}, 450);
					
			});

			i12.addEventListener("click", () => {
				toast.classList.remove("active");
			});
				
		});
	}

	itis = JSON.parse(localStorage.getItem("itens") || "[]");
	const newItem = document.querySelector('#new-item-form');

	newItem.addEventListener('submit', e => {
		e.preventDefault();

		const its = e.target.elements.its.value,
		peso = e.target.elements.peso.value;

		const novo = {
			item: its,
			peso: peso
		}

		itis.push(novo);

		localStorage.setItem('itens', JSON.stringify(itis));

		e.target.reset();

		DisplayItens();
	});

	DisplayItens();

	function DisplayItens() {
		if(!itis) return;
		document.querySelectorAll(".itens").forEach(item => item.remove());
		const adf = document.querySelector('#td-itt');

		// Appenchild é pra inserir algo dentro
		// CreateElement é pra criar novo elemento
	
		itis.forEach((novo) => {

			const msgMg = document.querySelector('.msg-mg');
			msgMg.innerHTML = "";

			const itema = document.createElement("div");
			itema.classList.add("itens");

			const buttD = document.createElement("button");
			buttD.classList.add("btD");

			const trash = document.createElement("i");
			trash.classList.add("fas");
			trash.classList.add("fa-trash");

			const tdItem = document.createElement("div");
			tdItem.classList.add("td-item");
			tdItem.innerHTML = `<input type="text" value="${novo.item}" readonly>`;

			const tdPeso = document.createElement("div");
			tdPeso.classList.add("td-peso");
			tdPeso.innerHTML = `<input type="text" value="${novo.peso}" readonly>`;

			
			itema.appendChild(buttD);
			buttD.appendChild(trash);
			itema.appendChild(tdItem);
			itema.appendChild(tdPeso);

			adf.appendChild(itema);

			const nomeitem = tdItem.querySelector("input");

			nomeitem.addEventListener('click', (e) => {
				const inItem = tdItem.querySelector('input');
				inItem.removeAttribute('readonly');
				inItem.focus();
				inItem.addEventListener('blur', (e) => {
					inItem.setAttribute('readonly', true);
					novo.item = e.target.value;
					localStorage.setItem('itens', JSON.stringify(itis));
					DisplayItens();
	
				})
			});

			const pesoitem = tdPeso.querySelector("input");
			const expenditureValue = document.getElementById("pesoTotal");
			let expenditure = parseFloat(pesoitem.value);
			let sum = parseFloat(expenditureValue.innerText) + expenditure;
			expenditureValue.innerText = sum + "kg";

			const newi = document.querySelector('#new-item-form');

			expenditureValue.style.display = "";


			newi.addEventListener("click", () => {
				expenditureValue.style.display = "none";
				sum = 0;
				expenditureValue.innerText = sum + "kg";

				newi.addEventListener("blur", () =>{
					expenditureValue.style.display = "";
					sum = parseFloat(expenditureValue.innerText) + expenditure;
					expenditureValue.innerText = sum + "kg";
				});
			});

			pesoitem.addEventListener('click', (e) => {
				sum = 0;
				expenditureValue.innerText = "...";
				pesoitem.removeAttribute('readonly');
				pesoitem.focus();
				pesoitem.addEventListener('blur', (e) => {
					pesoitem.setAttribute('readonly', true);
					novo.peso = e.target.value;
					expenditureValue.innerText = sum + "kg";
					localStorage.setItem('itens', JSON.stringify(itis));
					DisplayItens();
				});
			});

			buttD.addEventListener('click', () => {
				sum = 0;
				let sub = parseFloat(expenditureValue.innerText) - parseFloat(pesoitem.value);
				sub = 0;
				expenditureValue.innerText = sub + "kg";

				itis = itis.filter(i => i != novo);
					localStorage.setItem('itens', JSON.stringify(itis));
					DisplayItens();

				if(itis.length == 0){
					expenditureValue.style.display = "none";
					msgMg.innerHTML = `<img src="/images/bag.png" alt="">
					<p>Parece que não há nada por aqui <br>Que tal começar adicionando um item agora?</p>`;
				}
			});
		});
	}

	habilidades = JSON.parse(localStorage.getItem("habilidades") || "[]");
	const newHab = document.querySelector('#new-hab-form');

	newHab.addEventListener('submit', e => {
		e.preventDefault();

		const nan = e.target.elements.nan.value,
		dd = e.target.elements.dd.value;

		const novaHab = {
			nan: nan,
			dd: dd
		}

		habilidades.push(novaHab);

		localStorage.setItem('habilidades', JSON.stringify(habilidades));

		e.target.reset();

		DisplayHabs();
	});

	DisplayHabs();

	function DisplayHabs() {
		if(!habilidades) return;
		document.querySelectorAll(".habs").forEach(hab => hab.remove());
		const ha = document.querySelector('#nova-hab');
		ha.innerHTML = "";

		// Appenchild é pra inserir algo dentro
		// CreateElement é pra criar novo elemento
	
		habilidades.forEach((novaHab) => {

			const hab = document.createElement("div");
			hab.classList.add("habs");

			const dt = document.createElement("div");
			dt.classList.add("deleteisso");

			const trashe = document.createElement("i");
			trashe.classList.add("fas");
			trashe.classList.add("fa-trash");
			trashe.classList.add("mano");

			const pasfs = document.createElement("p");
			pasfs.innerHTML = "Deletar";


			const nomHab = document.createElement("div");
			nomHab.classList.add("nom-hab");
			nomHab.innerHTML = `<input type="text" value="${novaHab.nan}">`;

			const descHab = document.createElement("div");
			descHab.classList.add("desc-hab");
			descHab.innerHTML = `<textarea id="textar1a">${novaHab.dd}</textarea>`;

			hab.appendChild(nomHab);
			hab.appendChild(descHab);
			hab.appendChild(dt);
			dt.appendChild(trashe);
			dt.appendChild(pasfs);

			ha.appendChild(hab);

			dt.addEventListener('click', () => {
					habilidades = habilidades.filter(h => h != novaHab);
					localStorage.setItem('habilidades', JSON.stringify(habilidades));
					DisplayHabs();

			});

			const textinput = nomHab.querySelector("input");
			textinput.addEventListener('change', e => {
					novaHab.nan = e.target.value;
					localStorage.setItem('habilidades', JSON.stringify(habilidades));
					DisplayHabs();
			});
	

			const textarna = descHab.querySelector("textarea");
			textarna.style.height = "0px";
			let scHeightna = textarna.scrollHeight;
			textarna.style.height = `${scHeightna}px`;

			textarna.addEventListener("blur", e => {
					novaHab.dd = e.target.value;
					localStorage.setItem('habilidades', JSON.stringify(habilidades));
					DisplayHabs();
			});


		});
	}

	// Pega o Caminho/Diretório dos Campos/Inputs Brancos

	const nameInput1 = document.querySelector('#noma');

	const nameplay = localStorage.getItem('Personagem') || '';

	nameInput1.value = nameplay;

	nameInput1.addEventListener('change', (e) => {
		localStorage.setItem('Personagem', e.target.value);
	});

	const nameInput2 = document.querySelector('#jog');

	const nameuser = localStorage.getItem('Jogador') || '';

	nameInput2.value = nameuser;

	nameInput2.addEventListener('change', (e) => {
		localStorage.setItem('Jogador', e.target.value);
	});

	const nameInput3 = document.querySelector('#ida');

	const idad = localStorage.getItem('Idade') || '';

	nameInput3.value = idad;

	nameInput3.addEventListener('change', (e) => {
		localStorage.setItem('Idade', e.target.value);
	});

	const nameInput4 = document.querySelector('#alt');

	const altur = localStorage.getItem('Altura') || '';

	nameInput4.value = altur;

	nameInput4.addEventListener('change', (e) => {
		localStorage.setItem('Altura', e.target.value);
	});

	const nameInput5 = document.querySelector('#tmv');

	const taxademov = localStorage.getItem('Movimento') || '';

	nameInput5.value = taxademov;

	nameInput5.addEventListener('change', (e) => {
		localStorage.setItem('Movimento', e.target.value);
	});

	const nameInput6 = document.querySelector('#pit');

	const textdesc = localStorage.getItem('Itens Importantes') || '';

	nameInput6.value = textdesc;

	nameInput6.style.height = "30px";
	let scHeight1 = nameInput6.scrollHeight;
	nameInput6.style.height = `${scHeight1}px`;

	nameInput6.addEventListener("keyup", () => {
		nameInput6.style.height = "0px";
		let scHeight1 = nameInput6.scrollHeight;
		nameInput6.style.height = `${scHeight1}px`;
	});

	nameInput6.addEventListener("change", e => {
		localStorage.setItem('Itens Importantes', e.target.value);
	});

	// Números Variáveis

	const numPut6 = document.querySelector('#xp');

	const numna6 = localStorage.getItem('XP') || '0';

	numPut6.value = numna6;

	numPut6.addEventListener('change', (e) => {
		localStorage.setItem('XP', e.target.value);
	});

	const pl = document.querySelector("#pl");

	pl.addEventListener('click', () => {
		var value = parseInt(document.getElementById('vid').value, 10);
		value = isNaN(value) ? 0 : value;
		value++;
		document.getElementById('vid').value = value;
		localStorage.setItem('Vida', value);
		localStorage.setItem('Vida pt2', value);
	});

	const vm = document.querySelector("#vm");

	vm.addEventListener('click', () => {
		var value = parseInt(document.getElementById('vid').value, 10);
		value = isNaN(value) ? 0 : value;
		value--;
		document.getElementById('vid').value = value;
		localStorage.setItem('Vida', value);
		localStorage.setItem('Vida pt2', value);
	});

	const pl2 = document.querySelector("#pl2");

	pl2.addEventListener('click', () => {
		var value2 = parseInt(document.getElementById('gen').value, 10);
		value2 = isNaN(value2) ? 0 : value2;
		value2++;
		document.getElementById('gen').value = value2;
		localStorage.setItem('Genki', value2);
		localStorage.setItem('Genki pt2', value2);
	});

	const vm2 = document.querySelector("#vm2");

	vm2.addEventListener('click', () => {
		var value2 = parseInt(document.getElementById('gen').value, 10);
		value2 = isNaN(value2) ? 0 : value2;
		value2--;
		document.getElementById('gen').value = value2;
		localStorage.setItem('Genki', value2);
		localStorage.setItem('Genki pt2', value2);
	});

	const pl3 = document.querySelector("#pl3");

	pl3.addEventListener('click', () => {
		var value3 = parseInt(document.getElementById('sani').value, 10);
		value3 = isNaN(value3) ? 0 : value3;
		value3++;
		document.getElementById('sani').value = value3;
		localStorage.setItem('Sanidade', value3);
		localStorage.setItem('Sanidade pt2', value3);
	});

	const vm3 = document.querySelector("#vm3");

	vm3.addEventListener('click', () => {
		var value3 = parseInt(document.getElementById('sani').value, 10);
		value3 = isNaN(value3) ? 0 : value3;
		value3--;
		document.getElementById('sani').value = value3;
		localStorage.setItem('Sanidade', value3);
		localStorage.setItem('Sanidade pt2', value3);
	});

	const pl4 = document.querySelector("#pl4");

	pl4.addEventListener('click', () => {
		var value4 = parseInt(document.getElementById('vig').value, 10);
		value4 = isNaN(value4) ? 0 : value4;
		value4++;
		document.getElementById('vig').value = value4;
		localStorage.setItem('Vigor', value4);
		localStorage.setItem('Vigor pt2', value4);
	});

	const vm4 = document.querySelector("#vm4");

	vm4.addEventListener('click', () => {
		var value4 = parseInt(document.getElementById('vig').value, 10);
		value4 = isNaN(value4) ? 0 : value4;
		value4--;
		document.getElementById('vig').value = value4;
		localStorage.setItem('Vigor', value4);
		localStorage.setItem('Vigor pt2', value4);
	});

	const pl5 = document.querySelector("#pl5");

	pl5.addEventListener('click', () => {
		var value5 = parseInt(document.getElementById('pde').value, 10);
		value5 = isNaN(value5) ? 0 : value5;
		value5++;
		document.getElementById('pde').value = value5;
		localStorage.setItem('PE', value5);
		localStorage.setItem('PE pt2', value5);
	});

	const vm5 = document.querySelector("#vm5");

	vm5.addEventListener('click', () => {
		var value5 = parseInt(document.getElementById('pde').value, 10);
		value5 = isNaN(value5) ? 0 : value5;
		value5--;
		document.getElementById('pde').value = value5;
		localStorage.setItem('PE', value5);
		localStorage.setItem('PE pt2', value5);
	});

	
	const numputdp1 = document.querySelector('#so1');

	const numnadp1 = localStorage.getItem('Vida pt2') || '22';

	numputdp1.value = numnadp1;

	numputdp1.addEventListener('change', (e) => {
		localStorage.setItem('Vida pt2', e.target.value);
	});

	const numPut1 = document.querySelector('#vid');

	const numna1 = localStorage.getItem('Vida') || '22';

	numPut1.value = numna1;

	numPut1.addEventListener('change', (e) => {
		localStorage.setItem('Vida', e.target.value);
		localStorage.setItem('Vida pt2', e.target.value);
	});

	const numputdp2 = document.querySelector('#so2');

	const numnadp2 = localStorage.getItem('Genki pt2') || '8';

	numputdp2.value = numnadp2;

	numputdp2.addEventListener('change', (e) => {
		localStorage.setItem('Genki pt2', e.target.value);
	});

	const numPut2 = document.querySelector('#gen');

	const numna2 = localStorage.getItem('Genki') || '8';

	numPut2.value = numna2;

	numPut2.addEventListener('change', (e) => {
		localStorage.setItem('Genki', e.target.value);
		localStorage.setItem('Genki pt2', e.target.value);
	});

	const numputdp3 = document.querySelector('#so3');

	const numnadp3 = localStorage.getItem('Sanidade pt2') || '9';

	numputdp3.value = numnadp3;

	numputdp3.addEventListener('change', (e) => {
		localStorage.setItem('Sanidade pt2', e.target.value);
	});


	const numPut3 = document.querySelector('#sani');

	const numna3 = localStorage.getItem('Sanidade') || '9';

	numPut3.value = numna3;

	numPut3.addEventListener('change', (e) => {
		localStorage.setItem('Sanidade', e.target.value);
		localStorage.setItem('Sanidade pt2', e.target.value);
	});

	const numputdp4 = document.querySelector('#so4');

	const numnadp4 = localStorage.getItem('Vigor pt2') || '11';

	numputdp4.value = numnadp4;

	numputdp4.addEventListener('change', (e) => {
		localStorage.setItem('Vigor pt2', e.target.value);
	});

	
	const numPut4 = document.querySelector('#vig');

	const numna4 = localStorage.getItem('Vigor') || '11';

	numPut4.value = numna4;

	numPut4.addEventListener('change', (e) => {
		localStorage.setItem('Vigor', e.target.value);
		localStorage.setItem('Vigor pt2', e.target.value);
	});

	
	const numputdp5 = document.querySelector('#so5');

	const numnadp5 = localStorage.getItem('PE pt2') || '8';

	numputdp5.value = numnadp5;

	numputdp5.addEventListener('change', (e) => {
		localStorage.setItem('PE pt2', e.target.value);
	});


	const numPut5 = document.querySelector('#pde');

	const numna5 = localStorage.getItem('PE') || '8';

	numPut5.value = numna5;

	numPut5.addEventListener('change', (e) => {
		localStorage.setItem('PE', e.target.value);
		localStorage.setItem('PE pt2', e.target.value);
	});

	// Perícias

	const ag1 = document.querySelector('#ag1');

	const pericia1 = localStorage.getItem('Agilidade') || '0';

	ag1.value = pericia1;

	ag1.addEventListener('change', (e) => {
		localStorage.setItem('Agilidade', e.target.value);
	});

	const ag2 = document.querySelector('#ag2');

	const pericia2 = localStorage.getItem('Correr') || '0';

	ag2.value = pericia2;

	ag2.addEventListener('change', (e) => {
		localStorage.setItem('Correr', e.target.value);
	});


	const ag3 = document.querySelector('#ag3');

	const pericia3 = localStorage.getItem('Furtividade') || '0';

	ag3.value = pericia3;

	ag3.addEventListener('change', (e) => {
		localStorage.setItem('Furtividade', e.target.value);
	});

	const ag4 = document.querySelector('#ag4');

	const pericia4 = localStorage.getItem('Instinto') || '0';

	ag4.value = pericia4;

	ag4.addEventListener('change', (e) => {
		localStorage.setItem('Instinto', e.target.value);
	});

	const ag5 = document.querySelector('#ag5');

	const pericia5 = localStorage.getItem('Constituição') || '0';

	ag5.value = pericia5;

	ag5.addEventListener('change', (e) => {
		localStorage.setItem('Constituição', e.target.value);
	});

	const ag6 = document.querySelector('#ag6');

	const pericia6 = localStorage.getItem('Escalar') || '0';

	ag6.value = pericia6;

	ag6.addEventListener('change', (e) => {
		localStorage.setItem('Escalar', e.target.value);
	});

	const ag7 = document.querySelector('#ag7');

	const pericia7 = localStorage.getItem('Força') || '0';

	ag7.value = pericia7;

	ag7.addEventListener('change', (e) => {
		localStorage.setItem('Força', e.target.value);
	});

	const ag8 = document.querySelector('#ag8');

	const pericia8 = localStorage.getItem('Nadar') || '0';

	ag8.value = pericia8;

	ag8.addEventListener('change', (e) => {
		localStorage.setItem('Nadar', e.target.value);
	});

	const ag9 = document.querySelector('#ag9');

	const pericia9 = localStorage.getItem('Botânica') || '0';

	ag9.value = pericia9;

	ag9.addEventListener('change', (e) => {
		localStorage.setItem('Botânica', e.target.value);
	});

	const ag10 = document.querySelector('#ag10');

	const pericia10 = localStorage.getItem('Cozinhar') || '0';

	ag10.value = pericia10;

	ag10.addEventListener('change', (e) => {
		localStorage.setItem('Cozinhar', e.target.value);
	});

	const ag11 = document.querySelector('#ag11');

	const pericia11 = localStorage.getItem('Mecânica') || '0';

	ag11.value = pericia11;

	ag11.addEventListener('change', (e) => {
		localStorage.setItem('Mecânica', e.target.value);
	});

	const ag12 = document.querySelector('#ag12');

	const pericia12 = localStorage.getItem('Geografia') || '0';

	ag12.value = pericia12;

	ag12.addEventListener('change', (e) => {
		localStorage.setItem('Geografia', e.target.value);
	});
	
	const ag13 = document.querySelector('#ag13');

	const pericia13 = localStorage.getItem('História') || '0';

	ag13.value = pericia13;

	ag13.addEventListener('change', (e) => {
		localStorage.setItem('História', e.target.value);
	});

	const ag14 = document.querySelector('#ag14');

	const pericia14 = localStorage.getItem('Intelecto') || '0';

	ag14.value = pericia14;

	ag14.addEventListener('change', (e) => {
		localStorage.setItem('Intelecto', e.target.value);
	});

	
	const ag15 = document.querySelector('#ag15');

	const pericia15 = localStorage.getItem('Medicina') || '0';

	ag15.value = pericia15;

	ag15.addEventListener('change', (e) => {
		localStorage.setItem('Medicina', e.target.value);
	});

	const ag16 = document.querySelector('#ag16');

	const pericia16 = localStorage.getItem('Pilotar') || '0';

	ag16.value = pericia16;

	ag16.addEventListener('change', (e) => {
		localStorage.setItem('Pilotar', e.target.value);
	});

	const ag17 = document.querySelector('#ag17');

	const pericia17 = localStorage.getItem('Química') || '0';

	ag17.value = pericia17;

	ag17.addEventListener('change', (e) => {
		localStorage.setItem('Química', e.target.value);
	});

	const ag18 = document.querySelector('#ag18');

	const pericia18 = localStorage.getItem('Usar Bibliotecas') || '0';

	ag18.value = pericia18;

	ag18.addEventListener('change', (e) => {
		localStorage.setItem('Usar Bibliotecas', e.target.value);
	});

	const ag19 = document.querySelector('#ag19');

	const pericia19 = localStorage.getItem('Acalmar') || '0';

	ag19.value = pericia19;

	ag19.addEventListener('change', (e) => {
		localStorage.setItem('Acalmar', e.target.value);
	});

	const ag20 = document.querySelector('#ag20');

	const pericia20 = localStorage.getItem('Arcano') || '0';

	ag20.value = pericia20;

	ag20.addEventListener('change', (e) => {
		localStorage.setItem('Arcano', e.target.value);
	});

	const ag21 = document.querySelector('#ag21');

	const pericia21 = localStorage.getItem('Diplomacia') || '0';

	ag21.value = pericia21;

	ag21.addEventListener('change', (e) => {
		localStorage.setItem('Diplomacia', e.target.value);
	});

	const ag22 = document.querySelector('#ag22');

	const pericia22 = localStorage.getItem('Investigação') || '0';

	ag22.value = pericia22;

	ag22.addEventListener('change', (e) => {
		localStorage.setItem('Investigação', e.target.value);
	});

	const ag23 = document.querySelector('#ag23');

	const pericia23 = localStorage.getItem('Percepção') || '0';

	ag23.value = pericia23;

	ag23.addEventListener('change', (e) => {
		localStorage.setItem('Percepção', e.target.value);
	});

	const ag24 = document.querySelector('#ag24');

	const pericia24 = localStorage.getItem('Vontade') || '0';

	ag24.value = pericia24;

	ag24.addEventListener('change', (e) => {
		localStorage.setItem('Vontade', e.target.value);
	});

	const ag25 = document.querySelector('#ag25');

	const pericia25 = localStorage.getItem('Armas ágeis') || '0';

	ag25.value = pericia25;

	ag25.addEventListener('change', (e) => {
		localStorage.setItem('Armas ágeis', e.target.value);
	});

	const ag26 = document.querySelector('#ag26');

	const pericia26 = localStorage.getItem('Armas Pesadas') || '0';

	ag26.value = pericia26;

	ag26.addEventListener('change', (e) => {
		localStorage.setItem('Armas Pesadas', e.target.value);
	});

	const ag27 = document.querySelector('#ag27');

	const pericia27 = localStorage.getItem('Bloquear') || '0';

	ag27.value = pericia27;

	ag27.addEventListener('change', (e) => {
		localStorage.setItem('Bloquear', e.target.value);
	});

	const ag28 = document.querySelector('#ag28');

	const pericia28 = localStorage.getItem('Corpo a corpo') || '0';

	ag28.value = pericia28;

	ag28.addEventListener('change', (e) => {
		localStorage.setItem('Corpo a corpo', e.target.value);
	});

	const ag29 = document.querySelector('#ag29');

	const pericia29 = localStorage.getItem('Esquivar') || '0';

	ag29.value = pericia29;

	ag29.addEventListener('change', (e) => {
		localStorage.setItem('Esquivar', e.target.value);
	});

	const ag30 = document.querySelector('#ag30');

	const pericia30 = localStorage.getItem('Precisão') || '0';

	ag30.value = pericia30;

	ag30.addEventListener('change', (e) => {
		localStorage.setItem('Precisão', e.target.value);
	});
	
	

	iniciaModal("modal-alert");

	poderesComuns = JSON.parse(localStorage.getItem("poderes") || "[]");
	const PowerComum = document.querySelector("#newComum");

	PowerComum.addEventListener("click", e => {

		const novopoder = {
			inf1: "",
			inf2: "",
			inf3: "",
			inf4: "",
			inf5: "",
			inf6: "30%",
			inf7: "",
			inf8: "",
			inf9: "",
			inf10: "",
			inf11: ""
		}

		poderesComuns.push(novopoder);

		localStorage.setItem('poderes', JSON.stringify(poderesComuns)); 

		DisplayPower1();
	});

	DisplayPower1();

	function DisplayPower1() {
		if(!poderesComuns) return;
		document.querySelectorAll(".table-geral.ct-table").forEach(power => power.remove());
		const po = document.querySelector("#newPower");

		poderesComuns.forEach((novopoder) => {

			const tableGeral = document.createElement("div");
			tableGeral.classList.add("table-geral", "ct-table");

			const fechabutton = document.createElement("i");
			fechabutton.classList.add("uil", "uil-times", "cls");

			const ladoEs = document.createElement("div");
			ladoEs.classList.add("lado-es");

			const iGeral1 = document.createElement("div");
			iGeral1.classList.add("i-geral");
			const cnImg1 = document.createElement("div");
			cnImg1.classList.add("cn-img", "ana", "maislongo");
			const cnCn1 = document.createElement("div");
			cnCn1.classList.add("cn-cn");
			const h1c1 = document.createElement("h1");
			h1c1.innerText = "Tipo";
			const imgCn1 = document.createElement("img");
			imgCn1.src = `/images/categories.png`;

			const nana1 = document.createElement("div");
			nana1.classList.add("nana");
			nana1.innerHTML = `<input value="${novopoder.inf1}" type="text">`;

			
			const iGeral2 = document.createElement("div");
			iGeral2.classList.add("i-geral");
			const cnImg2 = document.createElement("div");
			cnImg2.classList.add("cn-img", "ana", "maislongo");
			const cnCn2 = document.createElement("div");
			cnCn2.classList.add("cn-cn");
			const imgCn2 = document.createElement("img");
			imgCn2.src = `/images/book.png`;
			const h2c2 = document.createElement("h1");
			h2c2.innerText = "Nome";
			const nana2 = document.createElement("div");
			nana2.classList.add("nana");
			nana2.innerHTML = `<input value="${novopoder.inf2}" type="text">`;

			const iGeral3 = document.createElement("div");
			iGeral3.classList.add("i-geral");
			const cnImg3 = document.createElement("div");
			cnImg3.classList.add("cn-img", "ana", "maislongo");
			const cnCn3 = document.createElement("div");
			cnCn3.classList.add("cn-cn");
			const imgCn3 = document.createElement("img");
			imgCn3.src = `/images/genk.png`;
			const h3c3 = document.createElement("h1");
			h3c3.innerText = "Genki";
			const nana3 = document.createElement("div");
			nana3.classList.add("nana");
			nana3.innerHTML = `<input value="${novopoder.inf3}" type="text">`;

			const iGeral4 = document.createElement("div");
			iGeral4.classList.add("i-geral");
			const cnImg4 = document.createElement("div");
			cnImg4.classList.add("cn-img", "ana", "maislongo");
			const cnCn4 = document.createElement("div");
			cnCn4.classList.add("cn-cn");
			const imgCn4 = document.createElement("img");
			imgCn4.src = `/images/energia.png`;
			const h4c4 = document.createElement("h1");
			h4c4.innerText = "Vigor";
			const nana4 = document.createElement("div");
			nana4.classList.add("nana");
			nana4.innerHTML = `<input value="${novopoder.inf4}" type="text">`;


			const iGeral5 = document.createElement("div");
			iGeral5.classList.add("i-geral");
			const cnImg5 = document.createElement("div");
			cnImg5.classList.add("cn-img", "ana", "maislongo");
			const cnCn5 = document.createElement("div");
			cnCn5.classList.add("cn-cn");
			const imgCn5 = document.createElement("img");
			imgCn5.src = `/images/insane.png`;
			const h5c5 = document.createElement("h1");
			h5c5.innerText = "Sanidade";
			const nana5 = document.createElement("div");
			nana5.classList.add("nana");
			nana5.innerHTML = `<input value="${novopoder.inf5}" type="text">`;

			const iGeral6 = document.createElement("div");
			iGeral6.classList.add("i-geral");
			const cnImg6 = document.createElement("div");
			cnImg6.classList.add("cn-img", "ana", "maislongo");
			const cnCn6 = document.createElement("div");
			cnCn6.classList.add("cn-cn");
			const imgCn6 = document.createElement("img");
			imgCn6.src = `/images/profic.png`;
			const h6c6 = document.createElement("h1");
			h6c6.innerText = "Proficiência";
			const nana6 = document.createElement("div");
			nana6.classList.add("nana");
			nana6.innerHTML = `<input value="${novopoder.inf6}" type="text">`;

			const iGeral7 = document.createElement("div");
			iGeral7.classList.add("i-geral");
			const cnImg7 = document.createElement("div");
			cnImg7.classList.add("cn-img2", "ana");
			const cnCn7 = document.createElement("div");
			cnCn7.classList.add("cn-cn");
			const h7c7 = document.createElement("h1");
			h7c7.innerText = "Elementos";
			const cag7 = document.createElement("div");
			cag7.classList.add("ca-g");
			const imgCn7 = document.createElement("img");
			imgCn7.src = `/images/elemento.png`;
			const nana7 = document.createElement("div");
			nana7.classList.add("nana");
			nana7.innerHTML = `<textarea>${novopoder.inf7}</textarea>`;


			const lad = document.createElement("div");
			lad.classList.add("lad");

			const iGeral8 = document.createElement("div");
			iGeral8.classList.add("i-geral");
			const cnImg8 = document.createElement("div");
			cnImg8.classList.add("cn-img2");
			cnImg8.classList.add("ana");
			const cnCn8 = document.createElement("div");
			cnCn8.classList.add("cn-cn");
			const imgCn8 = document.createElement("img");
			imgCn8.src = `/images/relogio.png`;
			const h8c8 = document.createElement("h1");
			const cag8 = document.createElement("div");
			cag8.classList.add("ca-g");
			h8c8.innerText = "Tempo de Preparo";
			const nana8 = document.createElement("div");
			nana8.classList.add("nana");
			nana8.innerHTML = `<textarea>${novopoder.inf8}</textarea>`;

			const iGeral9 = document.createElement("div");
			iGeral9.classList.add("i-geral");
			const cnImg9 = document.createElement("div");
			cnImg9.classList.add("cn-img2");
			cnImg9.classList.add("ana");
			const cnCn9 = document.createElement("div");
			cnCn9.classList.add("cn-cn");
			cnCn9.classList.add("cn3");
			const h9c9 = document.createElement("h1");
			h9c9.innerText = "Dano/Efeito";
			const cag9 = document.createElement("div");
			cag9.classList.add("ca-g");
			const imgCn9 = document.createElement("img");
			imgCn9.src = `/images/arma.png`;
			const nana9 = document.createElement("div");
			nana9.classList.add("nana");
			nana9.innerHTML = `<textarea>${novopoder.inf9}</textarea>`;

			const iGeral10 = document.createElement("div");
			iGeral10.classList.add("i-geral");
			const cnImg10 = document.createElement("div");
			cnImg10.classList.add("cn-img2");
			cnImg10.classList.add("ana");
			const cnCn10 = document.createElement("div");
			cnCn10.classList.add("cn-cn2");
			const h10c10 = document.createElement("h1");
			h10c10.innerText = "Descrição";
			const cag10 = document.createElement("div");
			cag10.classList.add("ca-g");
			const imgCn10 = document.createElement("img");
			imgCn10.src = `/images/nom.png`;
			const nana10 = document.createElement("div");
			nana10.classList.add("nana");
			nana10.innerHTML = `<textarea>${novopoder.inf10}</textarea>`;

			const iGeral11 = document.createElement("div");
			iGeral11.classList.add("i-geral");
			const cnImg11 = document.createElement("div");
			cnImg11.classList.add("cn-img2");
			cnImg11.classList.add("ana");
			const cnCn11 = document.createElement("div");
			cnCn11.classList.add("cn-cn2");
			const h11c11 = document.createElement("h1");
			h11c11.innerText = "Ingredientes";
			const cag11 = document.createElement("div");
			cag11.classList.add("ca-g");
			const imgCn11 = document.createElement("img");
			imgCn11.src = `/images/trevo.png`;
			const nana11 = document.createElement("div");
			nana11.classList.add("nana");
			nana11.innerHTML = `<textarea>${novopoder.inf11}</textarea>`;

			const buttgirar = document.createElement("button");
			buttgirar.classList.add("buttgir");
			buttgirar.innerHTML = "Rodar Magia";

			const toast2 = document.createElement('div');
			toast2.classList.add("toast2");

			const toastContent2 = document.createElement('div');
			toastContent2.classList.add("toast-content");
			
			const mg2 = document.createElement('img');
			mg2.classList.add("check");
			mg2.classList.add("fis");

			const message2 = document.createElement('div');
			message2.classList.add("message");

			const text12 = document.createElement('span');
			text12.classList.add("text");
			text12.classList.add("text-1");
			
			const text22 = document.createElement('span');
			text22.classList.add("text");
			text22.classList.add("text-2");

			const i122 = document.createElement('i');
			i122.classList.add("uil");
			i122.classList.add("uil-times");
			i122.classList.add("close");

			iGeral1.appendChild(cnImg1);
			cnImg1.appendChild(cnCn1);
			cnCn1.appendChild(imgCn1);
			cnCn1.appendChild(h1c1);
			cnImg1.appendChild(nana1);

			
			iGeral2.appendChild(cnImg2);
			cnImg2.appendChild(cnCn2);
			cnCn2.appendChild(imgCn2);
			cnCn2.appendChild(h2c2);
			cnImg2.appendChild(nana2);

			
			iGeral3.appendChild(cnImg3);
			cnImg3.appendChild(cnCn3);
			cnCn3.appendChild(imgCn3);
			cnCn3.appendChild(h3c3);
			cnImg3.appendChild(nana3);

			
			iGeral4.appendChild(cnImg4);
			cnImg4.appendChild(cnCn4);
			cnCn4.appendChild(imgCn4);
			cnCn4.appendChild(h4c4);
			cnImg4.appendChild(nana4);

			
			iGeral5.appendChild(cnImg5);
			cnImg5.appendChild(cnCn5);
			cnCn5.appendChild(imgCn5);
			cnCn5.appendChild(h5c5);
			cnImg5.appendChild(nana5);

			
			iGeral6.appendChild(cnImg6);
			cnImg6.appendChild(cnCn6);
			cnCn6.appendChild(imgCn6);
			cnCn6.appendChild(h6c6);
			cnImg6.appendChild(nana6);

			
			iGeral7.appendChild(cnImg7);
			cnImg7.appendChild(cnCn7);
			cnCn7.appendChild(imgCn7);
			cnImg7.appendChild(cag7);
			cag7.appendChild(h7c7);
			cag7.appendChild(nana7);
			
			iGeral8.appendChild(cnImg8);
			cnImg8.appendChild(cnCn8);
			cnCn8.appendChild(imgCn8);
			cnImg8.appendChild(cag8);
			cag8.appendChild(h8c8);
			cag8.appendChild(nana8);

			
			iGeral9.appendChild(cnImg9);
			cnImg9.appendChild(cnCn9);
			cnCn9.appendChild(imgCn9);
			cnImg9.appendChild(cag9);
			cag9.appendChild(h9c9);
			cag9.appendChild(nana9);

			
			iGeral10.appendChild(cnImg10);
			cnImg10.appendChild(cnCn10);
			cnCn10.appendChild(imgCn10);
			cnImg10.appendChild(cag10);
			cag10.appendChild(h10c10);
			cag10.appendChild(nana10);

			
			iGeral11.appendChild(cnImg11);
			cnImg11.appendChild(cnCn11);
			cnCn11.appendChild(imgCn11);
			cnImg11.appendChild(cag11);
			cag11.appendChild(h11c11);
			cag11.appendChild(nana11);

			tableGeral.appendChild(fechabutton);
			tableGeral.appendChild(ladoEs);
			ladoEs.appendChild(iGeral1);
			ladoEs.appendChild(iGeral2);
			ladoEs.appendChild(iGeral3);
			ladoEs.appendChild(iGeral4);
			ladoEs.appendChild(iGeral5);
			ladoEs.appendChild(iGeral6);
			ladoEs.appendChild(iGeral7);
			tableGeral.appendChild(lad);
			lad.appendChild(iGeral8);
			lad.appendChild(iGeral9);
			lad.appendChild(iGeral10);
			lad.appendChild(iGeral11);
			lad.appendChild(buttgirar);

			tableGeral.appendChild(toast2);
			toast2.appendChild(toastContent2);
			toast2.appendChild(i122);
			toastContent2.appendChild(mg2);
			toastContent2.appendChild(message2);
			message2.appendChild(text12);
			message2.appendChild(text22);
			

			po.appendChild(tableGeral);

			const na1 = nana1.querySelector("input");
			
			na1.addEventListener("change", e => {
				novopoder.inf1 = e.target.value;
				localStorage.setItem('poderes', JSON.stringify(poderesComuns));
				DisplayPower1();
			});

			const na2 = nana2.querySelector("input");
			
			na2.addEventListener("change", e => {
				novopoder.inf2 = e.target.value;
				localStorage.setItem('poderes', JSON.stringify(poderesComuns));
				DisplayPower1();
			});

			const na3 = nana3.querySelector("input");
			
			na3.addEventListener("change", e => {
				novopoder.inf3 = e.target.value;
				localStorage.setItem('poderes', JSON.stringify(poderesComuns));
				DisplayPower1();
			});

			const na4 = nana4.querySelector("input");
			
			na4.addEventListener("change", e => {
				novopoder.inf4 = e.target.value;
				localStorage.setItem('poderes', JSON.stringify(poderesComuns));
				DisplayPower1();
			});

			const na5 = nana5.querySelector("input");
			
			na5.addEventListener("change", e => {
				novopoder.inf5 = e.target.value;
				localStorage.setItem('poderes', JSON.stringify(poderesComuns));
				DisplayPower1();
			});

			const na6 = nana6.querySelector("input");
			
			na6.addEventListener("change", e => {
				novopoder.inf6 = e.target.value;
				localStorage.setItem('poderes', JSON.stringify(poderesComuns));
				DisplayPower1();
			});

			const n6 = parseInt(na6.value);

			const na7 = nana7.querySelector("textarea");

			na7.addEventListener('keyup', (e) => {
				na7.style.height = "30px";
				let resize7 = na7.scrollHeight;
				na7.style.height = `${resize7}px`;
			});

			na7.style.height = "0px";
			let resize7 = na7.scrollHeight;
			na7.style.height = `${resize7}px`;

			na7.addEventListener('blur', e => {
				novopoder.inf7 = e.target.value;
				localStorage.setItem('poderes', JSON.stringify(poderesComuns));
				DisplayPower1();
			});

			const na8 = nana8.querySelector("textarea");

			na8.addEventListener('keyup', (e) => {
				na8.style.height = "30px";
				let resize8 = na8.scrollHeight;
				na8.style.height = `${resize8}px`;
			});

			na8.style.height = "0px";
			let resize8 = na8.scrollHeight;
			na8.style.height = `${resize8}px`;

			na8.addEventListener('blur', e => {
				novopoder.inf8 = e.target.value;
				localStorage.setItem('poderes', JSON.stringify(poderesComuns));
				DisplayPower1();
			});

			const na9 = nana9.querySelector("textarea");

			na9.addEventListener('keyup', (e) => {
				na9.style.height = "30px";
				let resize9 = na9.scrollHeight;
				na9.style.height = `${resize9}px`;
			});

			na9.style.height = "0px";
			let resize9 = na9.scrollHeight;
			na9.style.height = `${resize9}px`;

			na9.addEventListener('blur', e => {
				novopoder.inf9 = e.target.value;
				localStorage.setItem('poderes', JSON.stringify(poderesComuns));
				DisplayPower1();
			});
			
			const na10 = nana10.querySelector("textarea");

			na10.addEventListener('keyup', (e) => {
				na10.style.height = "30px";
				let resize10 = na10.scrollHeight;
				na10.style.height = `${resize10}px`;
			});

			na10.style.height = "0px";
			let resize10 = na10.scrollHeight;
			na10.style.height = `${resize10}px`;

			na10.addEventListener('blur', e => {
				novopoder.inf10 = e.target.value;
				localStorage.setItem('poderes', JSON.stringify(poderesComuns));
				DisplayPower1();
			});

			const na11 = nana11.querySelector("textarea");

			na11.addEventListener('keyup', (e) => {
				na11.style.height = "30px";
				let resize11 = na11.scrollHeight;
				na11.style.height = `${resize11}px`;
			});

			na11.style.height = "0px";
			let resize11 = na11.scrollHeight;
			na11.style.height = `${resize11}px`;

			na11.addEventListener('blur', e => {
				novopoder.inf11 = e.target.value;
				localStorage.setItem('poderes', JSON.stringify(poderesComuns));
				DisplayPower1();
			});

			fechabutton.addEventListener("click", () => {
				poderesComuns = poderesComuns.filter(c => c != novopoder);
				localStorage.setItem('poderes', JSON.stringify(poderesComuns));
				DisplayPower1();
			});

			buttgirar.addEventListener('click', () => {
				toast2.classList.remove("active");

				imageArray2 = [
					'mg-1.png',
					'mg-2.png',
					'mg-3.png',
					'mg-4.png',
					'mg-5.png',
					'mg-6.png',
					'mg-7.png',
					'mg-8.png',
					'mg-9.png',
					'mg-10.png',
					'mg-11.png',
					'mg-14.png',
					'mg-15.png',
					'mg-16.png',
					'mg-17.png',
					'mg-18.png',
					'mg-20.png',
					'mg-21.png',
					'mg-22.png',
					'mg-23.png',
					'mg-24.png',
					'mg-25.png',
					'mg-26.png',
					'mg-27.png',
					'mg-28.png',
					'mg-30.png',
					'mg-31.png',
					'mg-33.png',
					'mg-34.png',
					'mg-35.png',
					'mg-36.png',
					'mg-37.png',
					'mg-38.png',
					'mg-39.png'
				];

				randomImages2 = Math.floor(Math.random() * imageArray2.length);

				selectedImages2 = imageArray2[randomImages2];

				const affs2 = toastContent2.querySelector('img');
				
				setTimeout(function() { 
					affs2.src = `/images/${selectedImages2}`;
				}, 700);
				
				let rand100 = [];

				function randomd100() {
					rand100.push(Math.floor(Math.random() * 100) + 1);
				}
		
				for (let i = 0; i < 1; i++) {
					randomd100();
				}

				setTimeout(function() { 
					toast2.classList.add("active");

					text22.innerHTML = rand100;

					var profs = parseInt(nana6.querySelector("input").value, 10);
					profs = isNaN(profs) ? 0 : profs;

					if (rand100 >= 90){
						text12.innerHTML = "Desastre";
					}

					if(rand100 > n6){
						text12.innerHTML = "Falha";
					} 

					if(rand100 <= 10){
						text12.innerHTML = "Extremo";
						profs++;
					}

					if(rand100 <= n6){
						text12.innerHTML = "Sucesso";
						profs++;
					}

					nana6.querySelector("input").value = profs + "%";
					novopoder.inf6 = profs + "%";
					localStorage.setItem('poderes', JSON.stringify(poderesComuns)); 
				}, 600);
			});

			i122.addEventListener("click", () => {
				toast2.classList.remove("active");
			});
			
		});
	}

	poderesConquistados = JSON.parse(localStorage.getItem("poderes2") || "[]");
	const PoderConquistado = document.querySelector("#newConquista");

	PoderConquistado.addEventListener("click", e => {

		const novopoder2 = {
			inf1b: "",
			inf2b: "",
			inf3b: "30%",
			inf4b: "",
			inf9b: "",
			inf10b: "",
			inf11b: ""
		}

		poderesConquistados.push(novopoder2);

		localStorage.setItem('poderes2', JSON.stringify(poderesConquistados)); 

		DisplayPower2();
	});

	DisplayPower2();

	function DisplayPower2() {
		if(!poderesConquistados) return;
		document.querySelectorAll(".table-geral.ct-table2").forEach(power2 => power2.remove());
		const po2 = document.querySelector("#newPower2");

		poderesConquistados.forEach((novopoder2) => {

			const tableGeralb = document.createElement("div");
			tableGeralb.classList.add("table-geral", "ct-table2");
			
			const fechabutton2 = document.createElement("i");
			fechabutton2.classList.add("uil", "uil-times", "cls2");

			const ladoEsb = document.createElement("div");
			ladoEsb.classList.add("lado-es");

			const iGeral1b = document.createElement("div");
			iGeral1b.classList.add("i-geral");
			const cnImg1b = document.createElement("div");
			cnImg1b.classList.add("cn-img");
			cnImg1b.classList.add("ana");
			const cnCn1b = document.createElement("div");
			cnCn1b.classList.add("cn-cn");
			const h1c1b = document.createElement("h1");
			h1c1b.innerText = "Nome";
			const imgCn1b = document.createElement("img");
			imgCn1b.src = `/images/book.png`;

			const nana1b = document.createElement("div");
			nana1b.classList.add("nana");
			nana1b.innerHTML = `<input value="${novopoder2.inf1b}" type="text">`;

			
			const iGeral2b = document.createElement("div");
			iGeral2b.classList.add("i-geral");
			const cnImg2b = document.createElement("div");
			cnImg2b.classList.add("cn-img");
			cnImg2b.classList.add("ana");
			const cnCn2b = document.createElement("div");
			cnCn2b.classList.add("cn-cn");
			const h2c2b = document.createElement("h1");
			h2c2b.innerText = "Mana";
			const imgCn2b = document.createElement("img");
			imgCn2b.src = `/images/mana.png`;

			const nana2b = document.createElement("div");
			nana2b.classList.add("nana");
			nana2b.innerHTML = `<input value="${novopoder2.inf2b}" type="text">`;

			const iGeral3b = document.createElement("div");
			iGeral3b.classList.add("i-geral");
			const cnImg3b = document.createElement("div");
			cnImg3b.classList.add("cn-img");
			cnImg3b.classList.add("ana");
			const cnCn3b = document.createElement("div");
			cnCn3b.classList.add("cn-cn");
			const h3c3b = document.createElement("h1");
			h3c3b.innerText = "Proficiência";
			const imgCn3b = document.createElement("img");
			imgCn3b.src = `/images/profic.png`;

			const nana3b = document.createElement("div");
			nana3b.classList.add("nana");
			nana3b.innerHTML = `<input value="${novopoder2.inf3b}" type="text">`;

			const iGeral4b = document.createElement("div");
			iGeral4b.classList.add("i-geral");
			const cnImg4b = document.createElement("div");
			cnImg4b.classList.add("cn-img");
			cnImg4b.classList.add("ana");
			const cnCn4b = document.createElement("div");
			cnCn4b.classList.add("cn-cn");
			const h4c4b = document.createElement("h1");
			h4c4b.innerText = "Armadura";
			const imgCn4b = document.createElement("img");
			imgCn4b.src = `/images/armadura.png`;

			const nana4b = document.createElement("div");
			nana4b.classList.add("nana");
			nana4b.innerHTML = `<input value="${novopoder2.inf4b}" type="text">`;

			const ladb = document.createElement("div");
			ladb.classList.add("lad");

			const iGeral9b = document.createElement("div");
			iGeral9b.classList.add("i-geral");
			const cnImg9b = document.createElement("div");
			cnImg9b.classList.add("cn-img2");
			const cnCn9b = document.createElement("div");
			cnCn9b.classList.add("cn-cn4");
			cnCn9b.classList.add("cn3");
			const h9c9b = document.createElement("h1");
			h9c9b.innerText = "Perícias";
			const cag9b = document.createElement("div");
			cag9b.classList.add("ca-g");
			const imgCn9b = document.createElement("img");
			imgCn9b.src = `/images/arma.png`;
			const nana9b = document.createElement("div");
			nana9b.classList.add("nana");
			nana9b.innerHTML = `<textarea>${novopoder2.inf9b}</textarea>`;

			const iGeral10b = document.createElement("div");
			iGeral10b.classList.add("i-geral");
			const cnImg10b = document.createElement("div");
			cnImg10b.classList.add("cn-img2");
			const cnCn10b = document.createElement("div");
			cnCn10b.classList.add("cn-cn4");
			const h10c10b = document.createElement("h1");
			h10c10b.innerText = "Habilidades";
			const cag10b = document.createElement("div");
			cag10b.classList.add("ca-g");
			const imgCn10b = document.createElement("img");
			imgCn10b.src = `/images/conversacao.png`;
			const nana10b = document.createElement("div");
			nana10b.classList.add("nana");
			nana10b.innerHTML = `<textarea>${novopoder2.inf10b}</textarea>`;

			const iGeral11b = document.createElement("div");
			iGeral11b.classList.add("i-geral");
			const cnImg11b = document.createElement("div");
			cnImg11b.classList.add("cn-img2");
			const cnCn11b = document.createElement("div");
			cnCn11b.classList.add("cn-cn4");
			const h11c11b = document.createElement("h1");
			h11c11b.innerText = "Descrição";
			const cag11b = document.createElement("div");
			cag11b.classList.add("ca-g");
			const imgCn11b = document.createElement("img");
			imgCn11b.src = `/images/nom.png`;
			const nana11b = document.createElement("div");
			nana11b.classList.add("nana");
			nana11b.innerHTML = `<textarea>${novopoder2.inf11b}</textarea>`;

			const buttgirar2 = document.createElement("button");
			buttgirar2.classList.add("buttgir2");
			buttgirar2.innerHTML = "Rodar Magia";

			const toast2b = document.createElement('div');
			toast2b.classList.add("toast2", "t3");

			const toastContent2b = document.createElement('div');
			toastContent2b.classList.add("toast-content");
			
			const mg2b = document.createElement('img');
			mg2b.classList.add("check");
			mg2b.classList.add("fis");

			const message2b = document.createElement('div');
			message2b.classList.add("message");

			const text12b = document.createElement('span');
			text12b.classList.add("text");
			text12b.classList.add("text-1");
			
			const text22b = document.createElement('span');
			text22b.classList.add("text");
			text22b.classList.add("text-2");

			const i122b = document.createElement('i');
			i122b.classList.add("uil");
			i122b.classList.add("uil-times");
			i122b.classList.add("close");


			iGeral1b.appendChild(cnImg1b);
			cnImg1b.appendChild(cnCn1b);
			cnCn1b.appendChild(imgCn1b);
			cnCn1b.appendChild(h1c1b);
			cnImg1b.appendChild(nana1b);

			
			iGeral2b.appendChild(cnImg2b);
			cnImg2b.appendChild(cnCn2b);
			cnCn2b.appendChild(imgCn2b);
			cnCn2b.appendChild(h2c2b);
			cnImg2b.appendChild(nana2b);

			
			iGeral3b.appendChild(cnImg3b);
			cnImg3b.appendChild(cnCn3b);
			cnCn3b.appendChild(imgCn3b);
			cnCn3b.appendChild(h3c3b);
			cnImg3b.appendChild(nana3b);

			
			iGeral4b.appendChild(cnImg4b);
			cnImg4b.appendChild(cnCn4b);
			cnCn4b.appendChild(imgCn4b);
			cnCn4b.appendChild(h4c4b);
			cnImg4b.appendChild(nana4b);

			
			iGeral9b.appendChild(cnImg9b);
			cnImg9b.appendChild(cnCn9b);
			cnCn9b.appendChild(imgCn9b);
			cnImg9b.appendChild(cag9b);
			cag9b.appendChild(h9c9b);
			cag9b.appendChild(nana9b);

			
			iGeral10b.appendChild(cnImg10b);
			cnImg10b.appendChild(cnCn10b);
			cnCn10b.appendChild(imgCn10b);
			cnImg10b.appendChild(cag10b);
			cag10b.appendChild(h10c10b);
			cag10b.appendChild(nana10b);

			
			iGeral11b.appendChild(cnImg11b);
			cnImg11b.appendChild(cnCn11b);
			cnCn11b.appendChild(imgCn11b);
			cnImg11b.appendChild(cag11b);
			cag11b.appendChild(h11c11b);
			cag11b.appendChild(nana11b);

			tableGeralb.appendChild(fechabutton2);
			tableGeralb.appendChild(ladoEsb);
			ladoEsb.appendChild(iGeral1b);
			ladoEsb.appendChild(iGeral2b);
			ladoEsb.appendChild(iGeral3b);
			ladoEsb.appendChild(iGeral4b);

			tableGeralb.appendChild(ladb);
			ladb.appendChild(iGeral9b);
			ladb.appendChild(iGeral10b);
			ladb.appendChild(iGeral11b);
			ladb.appendChild(buttgirar2);

			tableGeralb.appendChild(toast2b);
			toast2b.appendChild(toastContent2b);
			toast2b.appendChild(i122b);
			toastContent2b.appendChild(mg2b);
			toastContent2b.appendChild(message2b);
			message2b.appendChild(text12b);
			message2b.appendChild(text22b);

			po2.appendChild(tableGeralb);

			const na1b = nana1b.querySelector("input");
			
			na1b.addEventListener("change", e => {
				novopoder2.inf1b = e.target.value;
				localStorage.setItem('poderes2', JSON.stringify(poderesConquistados));
				DisplayPower2();
			});

			const na2b = nana2b.querySelector("input");
			
			na2b.addEventListener("change", e => {
				novopoder2.inf2b = e.target.value;
				localStorage.setItem('poderes2', JSON.stringify(poderesConquistados));
				DisplayPower2();
			});

			const na3b = nana3b.querySelector("input");
			
			na3b.addEventListener("change", e => {
				novopoder2.inf3b = e.target.value;
				localStorage.setItem('poderes2', JSON.stringify(poderesConquistados));
				DisplayPower2();
			});

			const n3b = parseInt(na3b.value);

			const na4b = nana4b.querySelector("input");
			
			na4b.addEventListener("change", e => {
				novopoder2.inf4b = e.target.value;
				localStorage.setItem('poderes2', JSON.stringify(poderesConquistados));
				DisplayPower2();
			});

			const na9b = nana9b.querySelector("textarea");

			na9b.addEventListener('keyup', (e) => {
				na9b.style.height = "30px";
				let resize9b = na9b.scrollHeight;
				na9b.style.height = `${resize9b}px`;
			});

			na9b.style.height = "0px";
			let resize9b = na9b.scrollHeight;
			na9b.style.height = `${resize9b}px`;

			na9b.addEventListener('blur', e => {
				novopoder2.inf9b = e.target.value;
				localStorage.setItem('poderes2', JSON.stringify(poderesConquistados));
				DisplayPower2();
			});

			
			const na10b = nana10b.querySelector("textarea");

			na10b.addEventListener('keyup', (e) => {
				na10b.style.height = "30px";
				let resize10b = na10b.scrollHeight;
				na10b.style.height = `${resize10b}px`;
			});

			na10b.style.height = "0px";
			let resize10b = na10b.scrollHeight;
			na10b.style.height = `${resize10b}px`;

			na10b.addEventListener('blur', e => {
				novopoder2.inf10b = e.target.value;
				localStorage.setItem('poderes2', JSON.stringify(poderesConquistados));
				DisplayPower2();
			});

			const na11b = nana11b.querySelector("textarea");

			na11b.addEventListener('keyup', (e) => {
				na11b.style.height = "30px";
				let resize11b = na11b.scrollHeight;
				na11b.style.height = `${resize11b}px`;
			});

			na11b.style.height = "0px";
			let resize11b = na11b.scrollHeight;
			na11b.style.height = `${resize11b}px`;

			na11b.addEventListener('blur', e => {
				novopoder2.inf11b = e.target.value;
				localStorage.setItem('poderes2', JSON.stringify(poderesConquistados));
				DisplayPower2();
			});

			fechabutton2.addEventListener("click", () => {
				poderesConquistados = poderesConquistados.filter(c2 => c2 != novopoder2);
				localStorage.setItem('poderes2', JSON.stringify(poderesConquistados));
				DisplayPower2();
			});

			buttgirar2.addEventListener('click', () => {
				toast2b.classList.remove("active");

				imageArray2b = [
					'mg-1.png',
					'mg-2.png',
					'mg-3.png',
					'mg-4.png',
					'mg-5.png',
					'mg-6.png',
					'mg-7.png',
					'mg-8.png',
					'mg-9.png',
					'mg-10.png',
					'mg-11.png',
					'mg-14.png',
					'mg-15.png',
					'mg-16.png',
					'mg-17.png',
					'mg-18.png',
					'mg-20.png',
					'mg-21.png',
					'mg-22.png',
					'mg-23.png',
					'mg-24.png',
					'mg-25.png',
					'mg-26.png',
					'mg-27.png',
					'mg-28.png',
					'mg-30.png',
					'mg-31.png',
					'mg-33.png',
					'mg-34.png',
					'mg-35.png',
					'mg-36.png',
					'mg-37.png',
					'mg-38.png',
					'mg-39.png'
				];

				randomImages2b = Math.floor(Math.random() * imageArray2b.length);

				selectedImages2b = imageArray2b[randomImages2b];

				const affs2b = toastContent2b.querySelector('img');
				
				setTimeout(function() { 
					affs2b.src = `/images/${selectedImages2b}`;
				}, 700);
				
				let rand100b = [];

				function randomd100b() {
					rand100b.push(Math.floor(Math.random() * 100) + 1);
				}
		
				for (let i = 0; i < 1; i++) {
					randomd100b();
				}

				setTimeout(function() { 
					toast2b.classList.add("active");

					text22b.innerHTML = rand100b;

					var profsb = parseInt(nana3b.querySelector("input").value, 10);
					profsb = isNaN(profsb) ? 0 : profsb;


					if(rand100b > n3b){
						text12b.innerHTML = "Falha";
					}
					
					if (rand100b >= 90){
						text12b.innerHTML = "Desastre";
					}

					if(rand100b <= n3b){
						text12b.innerHTML = "Sucesso";
						profsb++;
					} 
					
					if(rand100b <= 10){
						text12b.innerHTML = "Extremo";
						profsb++;
					}

					nana3b.querySelector("input").value = profsb + "%";
					novopoder2.inf3b = profsb + "%";
					localStorage.setItem('poderes2', JSON.stringify(poderesConquistados)); 


				}, 600);
			});

			i122b.addEventListener("click", () => {
				toast2b.classList.remove("active");
			});
			
			
		});
	}

	// const PowerConquistado = document.querySelector('.ct2');

	// PowerConquistado.addEventListener("click", e => {
	// 	DisplayPower2();
	// });

	// DisplayPower2();

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

	// Botão Mostrar Mais

	const btnArea = document.querySelector(".btn-area");
	const btn1 = document.querySelector(".btn1");
	const btn2 = document.querySelector(".btn2");
	const mostraCards = document.querySelector(".mostra-cards");

	btn1.addEventListener("click", function() {
		mostraCards.classList.add('transition');
		mostraCards.classList.remove('esconder');
		mostraCards.style.display = 'flex';
		mostraCards.style.margin = 'auto';
		mostraCards.style.flexDirection = 'column';
		mostraCards.style.justifyContent = 'left';
		mostraCards.style.maxWidth = '83rem';
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
		}, 1800);
	});

	// Resize Textarea

	const textar = document.querySelector("#textar1");
	textar.addEventListener("keyup", e =>{
		textar.style.height = "0px";
		let scHeight = e.target.scrollHeight;
		textar.style.height = `${scHeight}px`;
	});

	
	const textar2 = document.querySelector("#textar2");
	textar2.addEventListener("keyup", e =>{
		textar2.style.height = "0px";
		let scHeight2 = e.target.scrollHeight;
		textar2.style.height = `${scHeight2}px`;
	});

	// const ct1 = document.querySelector(".ct1");
	// const ctTable = document.querySelector(".ct-table");
	// const ct2 = document.querySelector(".ct2");
	// const ctTable2 = document.querySelector(".ct-table2");

	// ct1.addEventListener("click", () => {

	// 	setTimeout( function() {
	// 		ctTable.style.display = 'flex';
	// 		ct1.style.display = 'none';
	// 		ct2.style.display = 'none';
	// 	}, 1500);
	// });

	// ct2.addEventListener("click", () => {
	// 	setTimeout( function() {
	// 		ctTable2.style.display = 'flex';
	// 		ct1.style.display = 'none';
	// 		ct2.style.display = 'none';
	// 	}, 1500);
	// });


var ALERT_TITLE = "Oops!";
var ALERT_BUTTON_TEXT = "OK";

if(document.getElementById) {
    window.alert = function(txt) {
        createCustomAlert(txt);
    }
}

function createCustomAlert(txt) {
    d = document;

    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
	alertObj.classList.add("most");
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

	h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));


    msg = alertObj.appendChild(d.createElement("p"));
    msg.appendChild(d.createTextNode(txt));
    msg.innerHTML = txt;

    bna = alertObj.appendChild(d.createElement("a"));
    bna.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    bna.href = "#";
    bna.focus();
    bna.onclick = function() { 
		removeCustomAlert();
		return false; 
	}

    alertObj.style.display = "block";

}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}