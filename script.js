// =============================
// INICIAR SCRIPT QUANDO CARREGAR
// =============================
document.addEventListener("DOMContentLoaded", () => {
    smoothScroll();
    atualizarAnoFooter();
    configurarFormulario();
    animacaoScroll();
});


// =============================
// SCROLL SUAVE NO MENU
// =============================
function smoothScroll() {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {
                e.preventDefault();

                const section = document.querySelector(targetId);

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });
}


// =============================
// ANO AUTOMÁTICO NO FOOTER
// =============================
function atualizarAnoFooter() {
    const footer = document.querySelector("footer p");

    if (footer) {
        const anoAtual = new Date().getFullYear();
        footer.innerHTML = `© ${anoAtual} Ricardo Simiano Albino - Todos os direitos reservados`;
    }
}


// =============================
// FORMULÁRIO
// =============================
function configurarFormulario() {
    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Mensagem enviada com sucesso! 🚀");

        form.reset();
    });
}


// =============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =============================
function animacaoScroll() {
    const sections = document.querySelectorAll("section");

    // Estado inicial
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "all 0.6s ease";
    });

    function mostrarSecoes() {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < windowHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", mostrarSecoes);

    // Executa ao carregar também
    mostrarSecoes();
}