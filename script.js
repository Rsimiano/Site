// =============================
// SCROLL SUAVE NO MENU
// =============================
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const section = document.querySelector(this.hash);

            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// =============================
// ANIMAÇÃO AO ROLAR (FADE-IN)
// =============================
const elementos = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

elementos.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    observer.observe(el);
});


// =============================
// MENSAGEM AO ENVIAR FORMULÁRIO
// =============================
const form = document.querySelector(".form-contato");

form.addEventListener("submit", function() {
    alert("Mensagem enviada com sucesso! ✅");
});


// =============================
// ANO AUTOMÁTICO NO FOOTER
// =============================
const footer = document.querySelector("footer p");
const ano = new Date().getFullYear();

footer.innerHTML = `© ${ano} Ricardo Simiano Albino - Todos os direitos reservados`;


// =============================
// BOTÃO VOLTAR AO TOPO
// =============================
const botaoTopo = document.createElement("button");
botaoTopo.innerText = "⬆";
botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "10px 15px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "8px";
botaoTopo.style.background = "#0ea5e9";
botaoTopo.style.color = "#fff";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
});

botaoTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});