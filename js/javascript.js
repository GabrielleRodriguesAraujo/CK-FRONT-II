let submit = document.querySelector("#submit");
let cardsSection = document.querySelector(".cardsSection");
submit.addEventListener("click", function(e){

    function criaObjeto(){
        let tituloValue = document.querySelector("#titulo").value;
        let autorValue = document.querySelector("#autor").value;
        let descricaoValue = document.querySelector("#descricao").value;
        let imagemValue = document.querySelector("#imagem").value;
        let avaliacaoValue = document.querySelector("#avaliacao").value;
    
        const objeto = [
            {
            titulo: tituloValue,
            autor: autorValue,
            descricao: descricaoValue,
            avaliacao: avaliacaoValue,
            imagem: imagemValue
            }
        ];
    
        for (let i of objeto){
            cardsSection.innerHTML += `
            <div class="card">
                <img class="img" src="${i.imagem}">
                <h2>${i.titulo}</h2>
                <p>(${i.autor})</p>
                <p class="descricao">${i.descricao}</p>
                <div class="score">
                    <span>${i.avaliacao}<img class="star" src="./images/star.png"</span>
                </div>
            </div>`;

        };


       e.preventDefault();
    };

    criaObjeto();

});
