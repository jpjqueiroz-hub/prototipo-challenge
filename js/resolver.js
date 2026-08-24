const assistenteBtn = document.querySelector("#assistenteBtn");
const acoesCamera = document.querySelector("#acoesCamera");
const resolverBtn = document.querySelector("#resolverBtn");
const painelResolver = document.querySelector("#painelResolver");
const expandirBtn = document.querySelector("#expandirBtn");
const voltarBtn = document.querySelector("#voltarBtn");
assistenteBtn.addEventListener("click", function() {
    acoesCamera.classList.toggle("ativo");
});
resolverBtn.addEventListener("click", function() {
    painelResolver.classList.add("ativo");
    acoesCamera.classList.remove("ativo");
    assistenteBtn.style.display = "none";
});
expandirBtn.addEventListener("click", function() {
    painelResolver.classList.toggle("expandido");
});
voltarBtn.addEventListener("click", function() {
    if (painelResolver.classList.contains("expandido")) {
        painelResolver.classList.remove("expandido");
        return;
    }
    if (painelResolver.classList.contains("ativo")) {
        painelResolver.classList.remove("ativo");
        assistenteBtn.style.display = "block";
        return;
    }
    if (acoesCamera.classList.contains("ativo")) {
        acoesCamera.classList.remove("ativo");
        return;
    }
});

const parametros = new URLSearchParams(window.location.search);
if (parametros.get("abrir") === "resolucao") {
    painelResolver.classList.add("ativo");
    assistenteBtn.style.display = "none";
}