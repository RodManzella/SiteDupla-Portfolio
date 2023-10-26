window.addEventListener("scroll", function() {
    // Verifica se a página foi rolada até um ponto específico (por exemplo, 100 pixels)
    if (window.scrollY >= 100) {
        // Adiciona a classe .scroll-ativo ao body
        document.body.classList.add("scroll-ativo");
    } else {
        // Remove a classe .scroll-ativo se a rolagem for reversa
        document.body.classList.remove("scroll-ativo");
    }
});