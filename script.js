
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
// ANO AUTOMÁTICO NO FOOTER
// =============================
const footer = document.querySelector("footer p");
const anoAtual = new Date().getFullYear();
footer.innerHTML = `© ${anoAtual} Ricardo Simiano Albino- Todos os direitos reservados`;


// =============================
// MENSAGEM AO ENVIAR FORMULÁRIO
// =============================
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    alert("Mensagem enviada com sucesso, Ricardo! 🚀");
    
    form.reset();
});


// =============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =============================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Estado inicial
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.6s ease";
});