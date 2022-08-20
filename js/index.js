
    // E é aqui que começam o BackEnd do nosso mais novo Site - Quem pegou a referência sabe


    // --------------------------------------------------------------------------------------
    
    // Faz animação da Nav quando ocorrer Scroll >>>>>>>>>>>>>>>>>>>>>>

    // Adiciona a class window-scroll - com o fundo preenchido
    window.addEventListener('scroll', () => {

        // Seta a Nav e adiciona um atributo para estilizá-la
        document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
    });
    

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
        const to = getScrollTopByHref(event.target) - 170;

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

    var password = document.getElementById('ss');
    const butt = document.getElementById('butt');

    butt.disabled = true;

    butt.addEventListener("click", function() {

        if (password.value == "batata doce" || password.value == "Batata Doce" || password.value == "Batata doce"){
            window.location.assign("../html/visao_mestre/mestre.html");
        }

        if (password.value == "a lua" || password.value == "A lua" || password.value == "A Lua"){
            window.location.assign("../html/fichas/aspaes.html");
        }

        if (password.value == "a justiça" || password.value == "A Justiça" || password.value == "A justiça"){
            window.location.assign("../html/fichas/ayama.html");
        }

        if (password.value == "a imperatriz" || password.value == "A Imperatriz" || password.value == "A imperatriz"){
            window.location.assign("../html/fichas/ella.html");
        }

        if (password.value == "a temperança" || password.value == "A Temperança" || password.value == "A temperança"){
            window.location.assign("../html/fichas/alex.html");
        }

        if (password.value == "o enforcado" || password.value == "O Enforcado" || password.value == "O enforcado"){
            window.location.assign("../html/fichas/niko.html");
        }

        if (password.value == "o louco" || password.value == "O Louco" || password.value == "O louco"){
            window.location.assign("../html/fichas/stark.html");
        }

        if (password.value == "o mago" || password.value == "O Mago" || password.value == "O mago"){
            window.location.assign("../html/fichas/lucius.html");
        }

        if (password.value == "o imperador" || password.value == "O Imperador" || password.value == "O imperador"){
            window.location.assign("../html/fichas/demetrius.html");
        }

        if (password.value == "o eremita" || password.value == "O Eremita" || password.value == "O eremita"){
            window.location.assign("../html/fichas/amelia.html");
        }

        if (password.value == "a roda da fortuna" || password.value == "A Roda da Fortuna" || password.value == "A roda da fortuna"){
            window.location.assign("../html/fichas/amon.html");
        }

        if (password.value == "a estrela" || password.value == "A Estrela" || password.value == "A estrela"){
            window.location.assign("../html/fichas/aizen.html");
        }

    });

    // Pega o Input
    const input = document.querySelector(".senha-input");

    // Executa a função quando clicar na tecla
    input.addEventListener("keypress", function(e) {

        // Define a tecla enter a ser considerada
        if (e.key == "Enter") {

            // Cancela ação padrão
            e.preventDefault();
            
            // Pega o botão a ser clicado
            document.querySelector("#butt").click();
        }

    });

    input.addEventListener("input", function () {

        // Número de caracteres acima de 4 ativa o botão
        if (input.value.length >= 4) {
            butt.disabled = false; 
            butt.classList.add("red");
        } 
        // Caso tenha menos que 4, botão desabilitado
        else {
            butt.disabled = true;
            butt.classList.remove("red");
        }
    });
    
        