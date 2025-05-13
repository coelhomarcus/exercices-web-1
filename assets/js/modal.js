// Script para controlar o modal do iframe
document.addEventListener("DOMContentLoaded", function () {
    // Elementos
    const profileIcon = document.getElementById("profile-icon");
    const profileIconImg = profileIcon.querySelector("img");
    const iframeModal = document.getElementById("iframe-modal");
    const closeIframe = document.getElementById("close-iframe");
    const iframeContainer = document.querySelector(".iframe-container");

    // Função para abrir o modal com animação
    function openModal() {
        // Adiciona efeito de bounce ao ícone
        profileIconImg.classList.add("bounce-animation");

        // Remove a classe após a animação
        setTimeout(() => {
            profileIconImg.classList.remove("bounce-animation");
        }, 500);

        // Exibe o modal
        iframeModal.style.display = "flex";

        // Trigger reflow para iniciar a animação
        void iframeModal.offsetWidth;
        iframeModal.classList.add("active");
    }

    // Função para fechar o modal com animação
    function closeModal() {
        iframeModal.classList.remove("active");
        // Após a animação, oculta o modal
        setTimeout(() => {
            iframeModal.style.display = "none";
        }, 300); // Tempo igual ao da transição no CSS
    }

    // Abre o modal quando clicar no ícone
    profileIcon.addEventListener("click", openModal);

    // Fecha o modal quando clicar no botão fechar
    closeIframe.addEventListener("click", closeModal);

    // Fecha o modal quando clicar fora da janela
    iframeModal.addEventListener("click", function (event) {
        if (event.target === iframeModal) {
            closeModal();
        }
    });
});
