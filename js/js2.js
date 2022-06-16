let submit2 = document.querySelector("#submit");
console.log(submit2)


submit2.addEventListener("click", _ => {
    document.querySelector("#titulo").value = null;
    document.querySelector("#autor").value = null;
    document.querySelector("#descricao").value = null;
    document.querySelector("#imagem").value = null;
    document.querySelector("#avaliacao").value = null;
   
})