const fotosBtn = document.querySelector("#fotosBtn");
const albunsBtn = document.querySelector("#albunsBtn");
const estudosBtn = document.querySelector("#estudosBtn");
const voltarBtn = document.querySelector("#voltarBtn");
const telaFotos = document.querySelector("#telaFotos");
const telaAlbuns = document.querySelector("#telaAlbuns");
const telaEstudos = document.querySelector("#telaEstudos");
const tituloGaleria = document.querySelector("#tituloGaleria");
fotosBtn.addEventListener("click", function() {
    telaFotos.style.display = "block";
    telaAlbuns.style.display = "none";
    telaEstudos.style.display = "none";
    tituloGaleria.textContent = "Fotos";
    fotosBtn.classList.add("ativo");
    albunsBtn.classList.remove("ativo");
});
albunsBtn.addEventListener("click", function() {
    telaFotos.style.display = "none";
    telaAlbuns.style.display = "grid";
    telaEstudos.style.display = "none";
    tituloGaleria.textContent = "Álbuns";
    albunsBtn.classList.add("ativo");
    fotosBtn.classList.remove("ativo");
});
estudosBtn.addEventListener("click", function() {
    telaFotos.style.display = "none";
    telaAlbuns.style.display = "none";
    telaEstudos.style.display = "block";
    tituloGaleria.textContent = "Estudos";
});
voltarBtn.addEventListener("click", function() {
    if (telaEstudos.style.display === "block") {
        telaEstudos.style.display = "none";
        telaAlbuns.style.display = "grid";
        tituloGaleria.textContent = "Álbuns";
        return;
    }
    if (telaAlbuns.style.display === "grid") {
        telaAlbuns.style.display = "none";
        telaFotos.style.display = "block";
        tituloGaleria.textContent = "Fotos";
        albunsBtn.classList.remove("ativo");
        fotosBtn.classList.add("ativo");
        return;
    }
});