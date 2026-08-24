const assistenteBtn = document.querySelector("#assistenteBtn");
const acoesCamera = document.querySelector("#acoesCamera");
const resumoBtn = document.querySelector("#resumoBtn");
const painelResumo = document.querySelector("#painelResumo");
const expandirBtn = document.querySelector("#expandirBtn");
const voltarBtn = document.querySelector("#voltarBtn");
assistenteBtn.addEventListener("click", function() {
    acoesCamera.classList.toggle("ativo");
});
resumoBtn.addEventListener("click", function() {
    painelResumo.classList.add("ativo");
    acoesCamera.classList.remove("ativo");
    assistenteBtn.style.display = "none";
});
expandirBtn.addEventListener("click", function() {
    painelResumo.classList.toggle("expandido");
});
voltarBtn.addEventListener("click", function() {
    if (painelResumo.classList.contains("expandido")) {
        painelResumo.classList.remove("expandido");
        return;
    }
    if (painelResumo.classList.contains("ativo")) {
        painelResumo.classList.remove("ativo");
        assistenteBtn.style.display = "block";
        return;
    }
    if (acoesCamera.classList.contains("ativo")) {
        acoesCamera.classList.remove("ativo");
        return;
    }
});

const parametros = new URLSearchParams(window.location.search);
if (parametros.get("abrir") === "resumo") {
    painelResumo.classList.add("ativo");
    assistenteBtn.style.display = "none";
}