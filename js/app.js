
    // E é aqui que começam o BackEnd do nosso mais novo Site - Quem pegou a referência sabe


    // --------------------------------------------------------------------------------------
    
    // Faz animação da Nav quando ocorrer Scroll >>>>>>>>>>>>>>>>>>>>>>

    // Adiciona a class window-scroll - com o fundo preenchido
    window.addEventListener('scroll', () => {

        // Seta a Nav e adiciona um atributo para estilizá-la
        document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
    })
    
    

    // --------------------------------------------------------------------------------------
    
    // Faz a animação do Scroll Suave >>>>>>>>>>>>>>>>>>>>>>

    // Seta os links da Nav
    // > [href^='#'] -> define que serão apenas links internos incluídos
    const menuItems = document.querySelectorAll(".nav__menu a[href^='#']"); 

    // forEach serve para selecionar cada item da lista
    menuItems.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick);
    })

    // Faz referência entre href e item, incluindo o offsetTop(topo da section)
    function getScrollTopByHref(element) {
        const id = element.getAttribute('href');
        return document.querySelector(id).offsetTop;
    }

    // Faz a ação do clique 
    function scrollToIdOnClick(event) {

        // Tira um comportamento padrão
        event.preventDefault();

        // Faz com que pare no topo descontando 100px da Nav
        const to = getScrollTopByHref(event.target) - 180;

        // Seta a função que diz onde é o topo da seção
        scrollToPosition(to);
    } 
    
    // Faz o scroll Suave
    function scrollToPosition(to) {
        window.scroll({

            // Subtrai px para que esse seja o novo topo da section quando clicar no link
            top: to,
            // Smooth é uma animação de suavização
            behavior: 'smooth',
        });
    }



    // --------------------------------------------------------------------------------------
    
    // Faz revelar/recolher a Nav >>>>>>>>>>>>>>>>>>>>>>

    // Seleciona os com a Class nav__menu
    const menu = document.querySelector(".nav__menu");

    // Seleciona o item com o Id open-menu-btn
    const menuBtn = document.querySelector("#open-menu-btn");

    // Seleciona o item com o Id close-menu-btn
    const closeBtn = document.querySelector("#close-menu-btn");

    // Passa a função que define como o ícone de abertura estará na tela
    menuBtn.addEventListener('click', () => {
        menu.style.display = 'flex';
        closeBtn.style.display = 'inline-block';
        menuBtn.style.display = 'none';
    })

    // Passa a função que define como o ícone de fechamento estará na tela
    const closeNav = () => {
        menu.style.display = 'none';
        closeBtn.style.display = 'none';
        menuBtn.style.display = 'inline-block';
    }

    // Executa a Função
    closeBtn.addEventListener('click', closeNav);



    // --------------------------------------------------------------------------------------
    
    // Carrossel Conteúdo Geral >>>>>>>>>>>>>>>>>>>>>>

    // Seleciona os com a Class control
    const controls = document.querySelectorAll(".control");

    // Pega o container inicial -> inicio na lógica é 0
    let currentItem = 0;

    // Seleciona os com a Class item
    const items = document.querySelectorAll(".item");

    // Calcula quantos itens têm no carrossel
    const maxItems = items.length;

    controls.forEach((control) => {

        // Função de Click nos botões
        control.addEventListener("click", () => {

            // Localiza a Class do botão da esquerda
            const isLeft = control.classList.contains("prev");

            // Passa a Const isLeft para definir quantas casas irá pular ou voltar
            if (isLeft) {
                
                // Botão de Voltar
                currentItem -= 1;
            } else {

                // Botão de Avançar
                currentItem += 1;
            }

            // Volta para o primeiro quando chegar no último
            if (currentItem === maxItems) {
                currentItem = 0;
                currentItem = currentItem + 1;        
            }

            // Volta para o último quando for o primeiro ao clicar no prev
            if (currentItem === 0) {
                currentItem = currentItem - 1;        
            }
            
            // Faz o Loop e quando for o 1° vai para o último
            if (currentItem < 0) {
                currentItem = maxItems - 1;
            }

            // Remove a Class para os demais itens - os que não se sobressaem
            items.forEach((item) => {
                item.classList.remove("current-item")
            });

            // Adiciona scroll suave para o lado
            items[currentItem].scrollIntoView({
                behavior: "smooth",
                inline: 'center',
                block: 'nearest',
            });
            

            // Adiciona a Class para os itens de cada vez
            items[currentItem].classList.add("current-item");

        });
    });

    // Arquivo de Transição

    function iniciaModal(modalID) {
        const modal = document.getElementById(modalID);

        if (modal) {
            modal.classList.add("mostrar");
            modal.addEventListener("click", (e) => {
                if(e.target.id == modalID || e.target.className == 'uil uil-multiply') {
                    modal.classList.remove("mostrar");
                }
            });
        }
    }

    const ficha = document.querySelector(".d2");
    ficha.addEventListener("click", (e) => iniciaModal("modal-senhas"));

    function done() {
        var password = document.getElementById("ss");
        const butt = document.getElementById('butt');

        butt.addEventListener("click", function() {
            
        if (password.value == "a justiça"){
            window.location.assign("../html/fichas/ayama.html");
        }

        if (password.value == "a imperatriz"){
            window.location.assign("../html/fichas/ella.html");
        }

        if (password.value == "a temperança"){
            window.location.assign("../html/fichas/alex.html");
        }

        if (password.value == "o enforcado"){
            window.location.assign("../html/fichas/niko.html");
        }

        if (password.value == "o louco"){
            window.location.assign("../html/fichas/stark.html");
        }

        if (password.value == "o mago"){
            window.location.assign("../html/fichas/lucius.html");
        }

        if (password.value == "o imperador"){
            window.location.assign("../html/fichas/demetrius.html");
        }

        if (password.value == "o eremita"){
            window.location.assign("../html/fichas/amelia.html");
        }

        if (password.value == "a roda da fortuna"){
            window.location.assign("../html/fichas/amon.html");
        }

        if (password.value == "a estrela"){
            window.location.assign("../html/fichas/aizen.html");
        }

        })

        document.addEventListener("keypress", function(e) {
            if(e.key === 'Enter') {
                done();
            }
        });
    }