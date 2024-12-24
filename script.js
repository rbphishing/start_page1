// Adicionando interatividade básica

document.getElementById("menuBtn").addEventListener("click", () => {
    alert("Menu em construção!");
});

document.getElementById("loginBtn").addEventListener("click", () => {
    alert("Login não disponível no momento.");
});

document.getElementById("signUpBtn").addEventListener("click", () => {
    alert("Sign up em breve!");
});

document.getElementById("supportBtn").addEventListener("click", () => {
    alert("Suporte estará disponível em breve.");
});

// Adicionando animação ao botão de chamada para ação
const ctaButton = document.querySelector(".cta");
ctaButton.addEventListener("mouseover", () => {
    ctaButton.style.transform = "scale(1.1)";
});

ctaButton.addEventListener("mouseout", () => {
    ctaButton.style.transform = "scale(1)";
});

ctaButton.addEventListener("click", () => {
    alert("Explorar mais funcionalidades em breve!");
});
