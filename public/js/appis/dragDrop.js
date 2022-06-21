    /* --- FUNCIONES DRAG & DROP --- */

    window.addEventListener("load", initDrag, false);

    //Variables
    let imagenesFunkos = document.querySelectorAll(".imgFunko");
    let contenedorDestino = document.querySelectorAll(".contendorRecibeFunko");

    /* ------ FUNCION CENTRAL ------ */
    function initDrag(){
       for(i in imagenesFunkos){ 
            imagenesFunkos[i].addEventListener("dragstart", dragIniciado, false);
            imagenesFunkos[i].addEventListener("drag", draggeando, false);
            imagenesFunkos[i].addEventListener("dragend", dragFinalizado, false);
        }
    }

    //Funciones imagenesFunkos
    function dragIniciado(e){
        let padre = document.createElement('div');  //Estamos creando un elemento padre que contiene dentro un div
        let clon  = this.cloneNode(true);           //Realiza un clon del elemento arrastrado.  
        clon.style.height = "100%";
        clon.style.width = "100%";
        padre.appendChild(clon);                    //El elemento pasado, se agrega como hijo del padre.
        e.dataTransfer.setData('text', padre.innerHTML)
    }                  

    function draggeando(e){
        for(let j in contenedorDestino){
            contenedorDestino[j].addEventListener("dragover", dragSobreContainer, false);
            contenedorDestino[j].addEventListener("dragleave", dragSalioContainer, false);
            contenedorDestino[j].addEventListener("drop", dragEntroContainer, false);
        }
    }

    function dragFinalizado(e){
        e.preventDefault();
    }

    //Funciones contenedorDestino
    function dragSobreContainer(e){
        e.preventDefault();
        this.style.backgroundColor = "#0b5ed7";
    }

    function dragSalioContainer(e){
        e.preventDefault();
        this.style.backgroundColor = "#0d6efd";
    }

    function dragEntroContainer(e){
        e.preventDefault();
        this.style.backgroundColor = "#0d6efd";
        let imgTransferida = e.dataTransfer.getData('text'); 
        this.innerHTML = imgTransferida; 
        window.open("/playroom");
    }
