# Documentação dos Códigos HTML | CSS | JS - RaizerTech

Este documento descreve um pequeno código da estrutura do código HTML utilizado no projeto RaizerTech. Abaixo está o índice para facilitar a navegação.

## Índice

1. [Estrutura Básica do HTML](#1-estrutura-básica-html)
   1.1 [Navegação](#11-navegação)
   1.2 [Seção Benefícios](#12-seção-benefícios)
   1.3 [Seção Serviços](#13-seção-serviços)
   1.4. [Seção Testemunhos](#14-seção-testemunhos)
   1.5 [Rodapé e Contato](#15-seção-rodapé-e-contato)
   <br>
2. [CSS - Estilização Geral](#2-css---estilização-geral)
   2.1 [Navegação e Rodapé](#21-navegação-e-rodapé)
   2.2 [Seção Benefícios](#22-seção-benefícios)
   2.3 [Responsividade - MediaQueries](#23-responsividade---mediaqueries)
   <br>
3. [JavaScript](#3-javascript)
   3.1 [Funcionalidades do Formulário](#31-funcionalidades-do-formulário)
   3.2 [Menu Responsivo](#32-menu-responsivo)
   <br>
4. [Conclusão](#4-conclusão)

---

## 1. <i>Estrutura Básica HTML</i>

### 1.1 Navegação

```bash
<nav id="home" class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <button class="navbar-toggler" type="button" aria-label="Toggle navigation"></button>
    <div class="navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav--item">
          <a class="nav--link" href="#home">Home</a>
        </li>
        <li class="nav--item">
          <a class="nav--link" href="#benefits">Benefícios</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

---

### 1.2 Seção Benefícios

```bash
<section id="benefits" class="py-5 bg-light">
  <div class="container">
    <h2 class="text-center mb-4 section-title">BENEFÍCIOS</h2>
    <div class="row">
      <div class="col-md-4 mb-4 d-flex">
        <div class="card card--benefit flex-fill">
          <h3 class="card__title">Design Personalizado:</h3>
          <p class="card__text">Sites com design único e adaptado às necessidades específicas de sua empresa.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### 1.3 Seção Serviços

```bash
<section id="features" class="py-5">
  <div class="container">
    <h2 class="text-center mb-4 section-title">SERVIÇOS</h2>
    <div class="row justify-content-center">
      <div class="col-md-4 mb-4 d-flex flex-column align-items-center text-center">
        <img class="feature--desktop" src="https://media.giphy.com/media/v1/giphy.gif" width="60" alt="desktop">
        <h3>Desenvolvimento Web</h3>
        <p>Criação da aparência e funcionalidade do site, garantindo que ele seja intuitivo e acessível.</p>
      </div>
    </div>
  </div>
</section>
```

---

### 1.4 Seção Testemunhos

```bash
<section id="testimonials" class="py-5 bg-light">
  <div class="container">
    <h2 class="text-center mb-4 section-title">TESTEMUNHOS</h2>
    <div class="row justify-content-center">
      <div class="col-md-4 mb-4">
        <div class="testimonial text-center">
          <p class="lead">"Excelente serviço! Criou um site moderno e funcional para nossa empresa."</p>
          <img src="https://images.unsplash.com/photo.jpg" width="100" class="rounded-circle testimonial__image">
          <h4 class="testimonial__name">Cliente 1</h4>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### 1.5 Seção Rodapé e Contato

```bash
<footer id="contact" class="footer">
  <div class="footer-container">
    <div class="footer-left">
      <img class="footer__logo" src="./src/images/logo.gif" alt="logo" width="60">
      <span class="company-name">RaizerTech</span>
    </div>
    <div id="contact">
      <form id="contactForm">
        <input class="form__contact" type="text" id="name" placeholder="NOME">
        <input class="form__contact" type="email" id="email" placeholder="EMAIL">
        <button class="footer__submit--button" type="submit">SEND MESSAGE</button>
      </form>
    </div>
  </div>
</footer>
```

---

## 2. CSS - Estilização Geral

### 2.1 Navegação e Rodapé

```bash
.navbar {
  background-color: #f8f9fa;
  padding: 1rem;
}

.nav--item .nav--link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.nav--link:hover {
  color: #0056b3;
  text-decoration: underline;
}

.footer {
  background-color: #343a40;
  color: #fff;
  padding: 2rem 1rem;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__submit--button {
  background-color: #007bff;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.footer__submit--button:hover {
  background-color: #0056b3;
}

```

---

### 2.2 Seção Benefícios

```bash
#benefits {
  background-color: #f7f7f7;
}

.card--benefit {
  text-align: center;
  padding: 1rem;
}

.card__title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
}

.card__text {
  font-size: 1rem;
  color: #555;
}
```

---

### 2.3 Responsividade - MediaQueries

```bash
/* Estilo para dispositivos móveis (máx. 768px) */
@media (max-width: 768px) {
  .navbar {
    background-image: url(../images/img-soluctions.gif);
  }

  .navbar-nav {
    display: none;
    background-color: #567CAB;
  }

  .navbar-nav.show {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #567CAB;
    padding: 10px;
    width: 100%;
  }

  .navbar-toggler-icon {
    display: block;
  }

  .navbar-toggler::before {
    content: '\2630';
    font-size: 30px;
    color: #fff;
  }

  .navbar-toggler-icon {
    display: block; /* Exibe o ícone do menu para telas menores */
   }
 }
```

---

## 3. JavaScript

### 3.1 Funcionalidades do Formulário

```bash
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

 // Criar a URL do WhatsApp com os dados do formulário
    const urlStr = `https://wa.me/5547999327137?text=${encodeURIComponent(`Olá, estou retornando a empresa RaizerTech:\n
      Meu Nome: ${name}\n
      E-mail: ${email}\n
      Mensagem: ${message}!`)}`;

    // Adiciona o spinner ao botão
    addLoad();
});
```

### 3.2 Menu Responsivo

```bash
// Controle de abertura/fechamento do menu hambúrguer

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    const navbarNav = document.querySelector(".navbar-nav");
    navbarNav.classList.toggle("show"); // Alterna a classe 'show' para mostrar/ocultar o menu
  });
```

---

## 4. Conclusão

- Fontes: O projeto fez uso das fontes `Montserrat e Poppins` para garantir uma tipografia moderna e legível em diferentes contextos.
  <br>

- Estilização: A estilização foi cuidadosamente ajustada utilizando `media queries` para garantir uma aparência `otimizada e responsiva` em diferentes `resoluções de tela`, proporcionando uma experiência de usuário fluida.
  <br>

- JavaScript: Foram implementadas funcionalidades adicionais em `js`, como animações `dinâmicas e validações`, conforme as necessidades do projeto, melhorando a `interatividade e a usabilidade`.
