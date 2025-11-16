/*
    js/script.js
    Lógica JavaScript para interatividade no site COP30
*/

// 1. Função principal para lidar com o envio do formulário
document.addEventListener('DOMContentLoaded', () => {
    // Obtém o elemento do formulário pelo seu ID
    const form = document.getElementById('contactForm');

    // Verifica se o formulário existe na página atual (contacto.html)
    if (form) {
        // Adiciona um 'ouvinte de evento' para o evento de 'submit' do formulário
        form.addEventListener('submit', function(event) {
            // Previne o comportamento padrão do formulário (recarregar a página)
            event.preventDefault(); 
            
            // Chama a função de validação antes de 'enviar'
            if (validateForm()) {
                // Se a validação for bem-sucedida, "processamos" o formulário
                processForm();
            }
        });
    }

    // Podes adicionar aqui outras funcionalidades interativas (ex: para a agenda.html)
});

// 2. Função para validar os campos
function validateForm() {
    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Reset de mensagens de erro (para evitar que acumulem)
    // Uma boa prática seria usar classes de feedback do Bootstrap para isto, mas vamos simplificar.
    let isValid = true;
    let errorMessage = '';

    // Verifica se o nome está preenchido
    if (nome === '') {
        errorMessage += 'O campo Nome é obrigatório.\n';
        isValid = false;
    }

    // Verifica se o email está preenchido e tem um formato básico de email
    if (email === '' || !email.includes('@') || !email.includes('.')) {
        errorMessage += 'Por favor, insira um endereço de e-mail válido.\n';
        isValid = false;
    }

    // Verifica se a mensagem está preenchida
    if (mensagem === '') {
        errorMessage += 'O campo Mensagem é obrigatório.\n';
        isValid = false;
    }

    if (!isValid) {
        // Usa um alerta simples para feedback imediato
        alert('Erro de Validação:\n' + errorMessage);
    }
    
    return isValid;
}

// 3. Função para simular o processamento após a validação
function processForm() {
    // Nesta fase, o formulário está VÁLIDO.
    // Numa aplicação real, enviarias estes dados para um servidor (backend).
    
    // Simulação: Obtemos o nome para personalizar a mensagem
    const nome = document.getElementById('nome').value.trim();
    
    // Mostra um feedback de sucesso ao utilizador
    alert(`Obrigado, ${nome}! A sua mensagem foi enviada com sucesso e será analisada pela nossa equipa sobre o COP30.`);
    
    // Limpa o formulário após o sucesso
    document.getElementById('contactForm').reset();
}
/ =======================================================
// 4. Lógica da Galeria de Imagens (Modal Interativo)
// =======================================================

// Obtém os elementos do Modal
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

// Função para abrir o modal quando uma imagem é clicada
function openModal(element) {
    modal.style.display = "block"; // Torna o modal visível
    // Define a fonte da imagem do modal para ser a imagem clicada
    modalImage.src = element.src; 
}

// Função para fechar o modal
function closeModal() {
    modal.style.display = "none";
}

// Fecha o modal se o utilizador clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// =======================================================
// 5. Lógica do Botão Voltar ao Início (Scroll-to-Top)
// =======================================================

const scrollTopBtn = document.getElementById('scrollTopBtn');

// 5.1. Mostrar/Esconder o botão ao rolar a página
window.onscroll = function() {
    // Se o scroll vertical for maior que 100px
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// 5.2. Função para rolar para o topo (chamada pelo HTML)
function scrollToTop() {
    // Rola suavemente para o topo
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}