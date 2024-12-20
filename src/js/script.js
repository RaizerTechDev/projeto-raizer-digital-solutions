// Rolagem suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav--link");
  const navbarNav = document.querySelector(".navbar-nav");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove a classe fixed-menu de todos os menus
      document.querySelectorAll(".navbar-nav").forEach((menu) => {
        menu.classList.remove("fixed-menu");
      });

      // Adiciona a classe fixed-menu ao menu clicado
      navbarNav.classList.add("fixed-menu");
    });
  });
});

// Controle de abertura/fechamento do menu hambúrguer
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    const navbarNav = document.querySelector(".navbar-nav");
    navbarNav.classList.toggle("show"); // Alterna a classe 'show' para mostrar/ocultar o menu
  });

// Fechar o menu ao clicar em um item e realizar scroll suave
document.querySelectorAll(".nav--link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    const targetId = this.getAttribute("href").substring(1); // Obtém o ID da seção (excluindo o #)
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Scroll suave para a seção
      targetElement.scrollIntoView({ behavior: "smooth" });

      // Fechar o menu após o clique
      const navbarNav = document.querySelector(".navbar-nav");
      navbarNav.classList.remove("show");

      // Reabrir o menu após o scroll suave
      setTimeout(() => {
        navbarNav.classList.add("show");
      }, 4000); // Ajuste o tempo (em milissegundos) conforme necessário
    }
  });
});
