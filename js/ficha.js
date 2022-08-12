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
		wrp.innerHTML = ".";

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

			const rodaDano = document.createElement('div');
			rodaDano.innerHTML = `<button>Rodar Dano</button>`;

			// ✅

			const bottomContent = document.createElement('div');
			bottomContent.classList.add("bottom-content");

			const span = document.createElement('span');
			span.innerHTML = 'Futura Logo';

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

			
			select2.addEventListener('click', (e) => {
				const inputna = select2.querySelector('input');
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
				let confirmDel = confirm("Tem certeza de que quer apagar isso, amigo?");
				if(!confirmDel) return;

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
				affs.src = `/images/${selectedImages}`;

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

			const butt = document.createElement("button");
			butt.classList.add("dt-inv");

			const icone = document.createElement('i');
			icone.classList.add("fas");
			icone.classList.add("fa-pen");

			const tdPeso = document.createElement("div");
			tdPeso.classList.add("td-peso");
			tdPeso.innerHTML = `<input type="text" value="${novo.peso}" readonly>`;

			const butt2 = document.createElement("button");
			butt2.classList.add("dt-inv");

			const icone2 = document.createElement('i');
			icone2.classList.add("fas");
			icone2.classList.add("fa-pen");

			itema.appendChild(buttD);
			buttD.appendChild(trash);
			itema.appendChild(tdItem);
			itema.appendChild(tdPeso);

			tdItem.appendChild(butt);
			butt.appendChild(icone);

			tdPeso.appendChild(butt2);
			butt2.appendChild(icone2);

			adf.appendChild(itema);

			butt.addEventListener('click', (e) => {
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

			butt2.addEventListener('click', (e) => {
				const inPeso = tdPeso.querySelector('input');
				inPeso.removeAttribute('readonly');
				inPeso.focus();
				inPeso.addEventListener('blur', (e) => {
					inPeso.setAttribute('readonly', true);
					novo.peso = e.target.value;
					localStorage.setItem('itens', JSON.stringify(itis));
					DisplayItens();
	
				})
			});

			buttD.addEventListener('click', () => {
				let deleted = confirm("Tem certeza de que quer apagar isso, amigo?");
				if(!deleted) return;

				itis = itis.filter(i => i != novo);
				localStorage.setItem('itens', JSON.stringify(itis));
				DisplayItens();

				if(itis.length == 0){
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
				let deleteisso = confirm("Tem certeza de que quer apagar isso, amigo?");
				if(!deleteisso) return;

				habilidades = habilidades.filter(h => h != novaHab);
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

	const nameplay = localStorage.getItem('Personagem') || 'Aspaes Leone';

	nameInput1.value = nameplay;

	nameInput1.addEventListener('change', (e) => {
		localStorage.setItem('Personagem', e.target.value);
	});

	const nameInput2 = document.querySelector('#jog');

	const nameuser = localStorage.getItem('Jogador') || 'Dante Leonel';

	nameInput2.value = nameuser;

	nameInput2.addEventListener('change', (e) => {
		localStorage.setItem('Jogador', e.target.value);
	});

	const nameInput3 = document.querySelector('#ida');

	const idad = localStorage.getItem('Idade') || '29 anos';

	nameInput3.value = idad;

	nameInput3.addEventListener('change', (e) => {
		localStorage.setItem('Idade', e.target.value);
	});

	const nameInput4 = document.querySelector('#alt');

	const altur = localStorage.getItem('Altura') || '1.75m';

	nameInput4.value = altur;

	nameInput4.addEventListener('change', (e) => {
		localStorage.setItem('Altura', e.target.value);
	});

	const nameInput5 = document.querySelector('#tmv');

	const taxademov = localStorage.getItem('Movimento') || '5m';

	nameInput5.value = taxademov;

	nameInput5.addEventListener('change', (e) => {
		localStorage.setItem('Movimento', e.target.value);
	});

	const nameInput6 = document.querySelector('#pit');

	const textdesc = localStorage.getItem('Itens Importantes') || 'Nikolas, Kaya, Bill e Machados do Caos';

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

	iniciaModal("modal-alert");

	poderesComuns = JSON.parse(localStorage.getItem("poderes") || "[]");
	const PowerComum = document.querySelector('.ct1');

	PowerComum.addEventListener("click", e => {
		DisplayPower1();
	});

	DisplayPower1();

	function DisplayPower1() {
		document.querySelectorAll(".ct-table").forEach(power => power.remove());
		const po = document.querySelector("#newPower");
		po.innerHTML = "";

		poderesComuns.forEach((Comum) => {

			const tableGeral = document.createElement("div");
			tableGeral.classList.add("table-geral");
			tableGeral.classList.add("ct-table");

			const ladoEs = document.createElement("div");
			ladoEs.classList.add("lado-es");


			const iGeral1 = document.createElement("div");
			iGeral1.classList.add("i-geral");
			const cnImg1 = document.createElement("div");
			cnImg1.classList.add("cn-img");
			cnImg1.classList.add("ana");
			const cnCn1 = document.createElement("div");
			cnCn1.classList.add("cn-cn");
			const imgCn1 = document.createElement("img");
			imgCn1.src = "/images/categories.png";
			const h1c1 = document.createElement("h1");
			h1c1.innerText = "Tipo";
			const nana1 = document.createElement("div");
			nana1.classList.add("nana");
			nana1.innerHTML = `<input type="text" placeholder=".">`;

			
			const iGeral2 = document.createElement("div");
			iGeral2.classList.add("i-geral");
			const cnImg2 = document.createElement("div");
			cnImg2.classList.add("cn-img");
			cnImg2.classList.add("ana");
			const cnCn2 = document.createElement("div");
			cnCn2.classList.add("cn-cn");
			const imgCn2 = document.createElement("img");
			imgCn2.src = "/images/book.png";
			const h2c2 = document.createElement("h1");
			h2c2.innerText = "Nome";
			const nana2 = document.createElement("div");
			nana2.classList.add("nana");
			nana2.innerHTML = `<input type="text" placeholder=".">`;

			const iGeral3 = document.createElement("div");
			iGeral3.classList.add("i-geral");
			const cnImg3 = document.createElement("div");
			cnImg3.classList.add("cn-img");
			cnImg3.classList.add("ana");
			const cnCn3 = document.createElement("div");
			cnCn3.classList.add("cn-cn");
			const imgCn3 = document.createElement("img");
			imgCn3.src = "/images/genk.png";
			const h3c3 = document.createElement("h1");
			h3c3.innerText = "Genki";
			const nana3 = document.createElement("div");
			nana3.classList.add("nana");
			nana3.innerHTML = `<input type="number" placeholder=".">`;

			const iGeral4 = document.createElement("div");
			iGeral4.classList.add("i-geral");
			const cnImg4 = document.createElement("div");
			cnImg4.classList.add("cn-img");
			cnImg4.classList.add("ana");
			const cnCn4 = document.createElement("div");
			cnCn4.classList.add("cn-cn");
			const imgCn4 = document.createElement("img");
			imgCn4.src = "/images/energia.png";
			const h4c4 = document.createElement("h1");
			h4c4.innerText = "Vigor";
			const nana4 = document.createElement("div");
			nana4.classList.add("nana");
			nana4.innerHTML = `<input type="number" placeholder=".">`;

			const iGeral5 = document.createElement("div");
			iGeral5.classList.add("i-geral");
			const cnImg5 = document.createElement("div");
			cnImg5.classList.add("cn-img");
			cnImg5.classList.add("ana");
			const cnCn5 = document.createElement("div");
			cnCn5.classList.add("cn-cn");
			const imgCn5 = document.createElement("img");
			imgCn5.src = "/images/insane.png";
			const h5c5 = document.createElement("h1");
			h5c5.innerText = "Sanidade";
			const nana5 = document.createElement("div");
			nana5.classList.add("nana");
			nana5.innerHTML = `<input type="number" placeholder=".">`;

			const iGeral6 = document.createElement("div");
			iGeral6.classList.add("i-geral");
			const cnImg6 = document.createElement("div");
			cnImg6.classList.add("cn-img");
			cnImg6.classList.add("ana");
			const cnCn6 = document.createElement("div");
			cnCn6.classList.add("cn-cn");
			const imgCn6 = document.createElement("img");
			imgCn6.src = "/images/profic.png";
			const h6c6 = document.createElement("h1");
			h6c6.innerText = "Proficiência";
			const nana6 = document.createElement("div");
			nana6.classList.add("nana");
			nana6.innerHTML = `<input type="text" placeholder=".">`;

			const iGeral7 = document.createElement("div");
			iGeral7.classList.add("i-geral");
			const cnImg7 = document.createElement("div");
			cnImg7.classList.add("cn-img");
			cnImg7.classList.add("ana");
			const cnCn7 = document.createElement("div");
			cnCn7.classList.add("cn-cn");
			const imgCn7 = document.createElement("img");
			imgCn7.src = "/images/elemento.png";
			const h7c7 = document.createElement("h1");
			h7c7.innerText = "Elemento";
			const nana7 = document.createElement("div");
			nana7.classList.add("nana");
			nana7.innerHTML = `<input type="text" placeholder=".">`;


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
			imgCn8.src = "/images/relogio.png";
			const h8c8 = document.createElement("h1");
			h8c8.innerText = "Tempo de Preparo";
			const nana8 = document.createElement("div");
			nana8.classList.add("nana");
			nana8.innerHTML = `<textarea placeholder="."></textarea>`;

			const iGeral9 = document.createElement("div");
			iGeral9.classList.add("i-geral");
			const cnImg9 = document.createElement("div");
			cnImg9.classList.add("cn-img2");
			cnImg9.classList.add("ana");
			const cnCn9 = document.createElement("div");
			cnCn9.classList.add("cn-cn");
			cnCn9.classList.add("cn3");
			const imgCn9 = document.createElement("img");
			imgCn9.src = "/images/arma.png";
			const h9c9 = document.createElement("h1");
			h9c9.innerText = "Dano/Efeito";
			const nana9 = document.createElement("div");
			nana9.classList.add("nana");
			nana9.innerHTML = `<textarea placeholder="."></textarea>`;

			const iGeral10 = document.createElement("div");
			iGeral10.classList.add("i-geral");
			const cnImg10 = document.createElement("div");
			cnImg10.classList.add("cn-img2");
			cnImg10.classList.add("ana");
			const cnCn10 = document.createElement("div");
			cnCn10.classList.add("cn-cn2");
			const imgCn10 = document.createElement("img");
			imgCn10.src = "/images/nom.png";
			const h10c10 = document.createElement("h1");
			h10c10.innerText = "Descrição";
			const nana10 = document.createElement("div");
			nana10.classList.add("nana");
			nana10.innerHTML = `<textarea placeholder="."></textarea>`;

			const iGeral11 = document.createElement("div");
			iGeral11.classList.add("i-geral");
			const cnImg11 = document.createElement("div");
			cnImg11.classList.add("cn-img2");
			const cnCn11 = document.createElement("div");
			cnCn11.classList.add("cn-cn2");
			const imgCn11 = document.createElement("img");
			imgCn11.src = "/images/trevo.png";
			const h11c11 = document.createElement("h1");
			h11c11.innerText = "Ingredientes";
			const nana11 = document.createElement("div");
			nana11.classList.add("nana");
			nana11.innerHTML = `<textarea placeholder="."></textarea>`;

			tableGeral.appendChild(ladoEs);
			ladoEs.appendChild(iGeral1);

			iGeral1.appendChild(cnImg1);
			cnImg1.appendChild(cnCn1);
			cnCn1.appendChild(imgCn1);
			iGeral1.appendChild(h1c1);
			cnImg1.appendChild(nana1);

			
			iGeral2.appendChild(cnImg2);
			cnImg2.appendChild(cnCn2);
			cnCn2.appendChild(imgCn2);
			iGeral2.appendChild(h2c2);
			cnImg2.appendChild(nana2);

			
			iGeral3.appendChild(cnImg3);
			cnImg3.appendChild(cnCn3);
			cnCn3.appendChild(imgCn3);
			iGeral3.appendChild(h3c3);
			cnImg3.appendChild(nana3);

			
			iGeral4.appendChild(cnImg4);
			cnImg4.appendChild(cnCn4);
			cnCn4.appendChild(imgCn4);
			iGeral4.appendChild(h4c4);
			cnImg4.appendChild(nana4);

			
			iGeral5.appendChild(cnImg5);
			cnImg5.appendChild(cnCn5);
			cnCn5.appendChild(imgCn5);
			iGeral5.appendChild(h5c5);
			cnImg5.appendChild(nana5);

			
			iGeral6.appendChild(cnImg6);
			cnImg6.appendChild(cnCn6);
			cnCn6.appendChild(imgCn6);
			iGeral6.appendChild(h6c6);
			cnImg6.appendChild(nana6);

			
			iGeral7.appendChild(cnImg7);
			cnImg7.appendChild(cnCn7);
			cnCn7.appendChild(imgCn7);
			iGeral7.appendChild(h7c7);
			cnImg7.appendChild(nana7);

			
			iGeral8.appendChild(cnImg8);
			cnImg8.appendChild(cnCn8);
			cnCn8.appendChild(imgCn8);
			iGeral8.appendChild(h8c8);
			cnImg8.appendChild(nana8);

			
			iGeral9.appendChild(cnImg9);
			cnImg9.appendChild(cnCn9);
			cnCn9.appendChild(imgCn9);
			iGeral9.appendChild(h9c9);
			cnImg9.appendChild(nana9);

			
			iGeral10.appendChild(cnImg10);
			cnImg10.appendChild(cnCn10);
			cnCn10.appendChild(imgCn10);
			iGeral10.appendChild(h10c10);
			cnImg10.appendChild(nana10);

			
			iGeral11.appendChild(cnImg11);
			cnImg11.appendChild(cnCn11);
			cnCn11.appendChild(imgCn11);
			iGeral11.appendChild(h11c11);
			cnImg11.appendChild(nana11);
			

			po.appendChild(tableGeral);
			
		});
	}

	const PowerConquistado = document.querySelector('.ct2');

	PowerConquistado.addEventListener("click", e => {
		DisplayPower2();
	});

	DisplayPower2();

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

	const ct1 = document.querySelector(".ct1");
	const ct2 = document.querySelector(".ct2");
	const ctTable2 = document.querySelector(".ct-table2");

	ct1.addEventListener("click", () => {

		setTimeout( function() {
			ctTable.style.display = 'flex';
			ct1.style.display = 'none';
			ct2.style.display = 'none';
		}, 1500);
	});

	ct2.addEventListener("click", () => {
		setTimeout( function() {
			ctTable2.style.display = 'flex';
			ct1.style.display = 'none';
			ct2.style.display = 'none';
		}, 1500);
	});