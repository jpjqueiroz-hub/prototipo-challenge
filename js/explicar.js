const assistenteBtn = document.querySelector("#assistenteBtn");
const acoesCamera = document.querySelector("#acoesCamera");
const explicarBtn = document.querySelector("#explicarBtn");
const painelExplicar = document.querySelector("#painelExplicar");
const expandirBtn = document.querySelector("#expandirBtn");
const voltarBtn = document.querySelector("#voltarBtn");
assistenteBtn.addEventListener("click", function() {
    acoesCamera.classList.toggle("ativo");
});
explicarBtn.addEventListener("click", function() {
    painelExplicar.classList.add("ativo");
    acoesCamera.classList.remove("ativo");
    assistenteBtn.style.display = "none";
});
expandirBtn.addEventListener("click", function() {
    painelExplicar.classList.toggle("expandido");
});
voltarBtn.addEventListener("click", function() {
    if (painelExplicar.classList.contains("expandido")) {
        painelExplicar.classList.remove("expandido");
        return;
    }
    if (painelExplicar.classList.contains("ativo")) {
        painelExplicar.classList.remove("ativo");
        assistenteBtn.style.display = "block";
        return;
    }
    if (acoesCamera.classList.contains("ativo")) {
        acoesCamera.classList.remove("ativo");
        return;
    }
});

const parametros = new URLSearchParams(window.location.search);
if (parametros.get("abrir") === "explicacao") {
    painelExplicar.classList.add("ativo");
    assistenteBtn.style.display = "none";
}