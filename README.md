Requisitos Pratica 12

O projeto foi construído para cumprir todos os requisitos estabelecidos na Prática 12(Qualifica SP):


🌐 Site Multi-página: Estrutura completa com 4 páginas (index.html, agenda.html, galeria.html, contacto.html).


📱 Design Responsivo e Moderno: Layout adaptável a todos os ecrãs (Mobile-First)


🔒 Header Fixo: A navegação principal permanece visível no topo da página durante o scroll.


🎯 Funcionalidades Interativas: Uso de JavaScript para eventos avançados.


📝 Formulários Funcionais: Validação de dados de entrada do utilizador.


⚙️ SEO Básico: Utilização de meta-tags e estrutura HTML semântica.


🛠️ Tecnologias Utilizadas

Tecnologia Função Principal

HTML5 Estrutura semântica e esqueleto das páginas.

CSS3 Estilização moderna e layout responsivo.

Bootstrap 5Framework CSS para componentes (navbar, container, row) e utilitários.

JavaScript (Puro)Lógica de interatividade (Scroll-to-Top, Validação de Formulário, Modal da Galeria).

Bootstrap Icons Biblioteca para ícones como setas e elementos de navegação.


📂 Estrutura do Projeto

Para executar o projeto, a estrutura de ficheiros deve ser a seguinte:/

├── index.html          <-- Página principal com introdução ao COP30

├── agenda.html         <-- Detalhes dos eixos temáticos e agenda

├── galeria.html        <-- Galeria de imagens e vídeos (com Modal JS)

├── contacto.html       <-- Formulário de contacto (com validação JS)

├── css/

│   └── style.css       <-- Estilos personalizados e padrões de fundo

├── js/

│   └── script.js       <-- Lógica do formulário, galeria e scroll-to-top

└── img/

    ├── belem\_city\_small.jpg

    ├── folhas\_padrao\_cop.png  <-- Imagem de fundo para o padrão de folhas

    └── ... (outras imagens para a galeria)



⚙️ Funcionalidades Interativas Detalhadas


O JavaScript (js/script.js) controla as seguintes interações:


1\. Validação de Formulário - O formulário na página contacto.html previne o envio por defeito (event.preventDefault()). Verifica se os campos Nome, E-mail e Mensagem estão preenchidos e se o formato do E-mail é básico. Em caso de sucesso, mostra uma mensagem de agradecimento (alert) e limpa o formulário.

2\. Galeria Interativa (Modal) Ao clicar numa imagem na página galeria.html, é ativado um Modal (janela pop-up). O JavaScript (openModal()) copia a imagem clicada para o Modal e torna-o visível.

3\. Botão "Voltar ao Início" (Scroll-to-Top)O botão redondo (#scrollTopBtn) está escondido por defeito. O evento window.onscroll no JavaScript monitoriza a posição de rolagem. O botão torna-se visível quando o utilizador rola mais de 200px. Ao ser clicado, a função scrollToTop () executa uma rolagem suave (behavior: 'smooth') para o topo da página.


🚀 Como Executar: Garanta que todos os ficheiros estão organizados conforme a estrutura acima.

Abra o ficheiro index.html no seu navegador.

Navegue entre as páginas usando o menu fixo.
