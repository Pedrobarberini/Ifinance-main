document.addEventListener('DOMContentLoaded', () => {

    // --- Funcionalidade para o Menu Mobile (Hamburger) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('visible');
        });
    }

    // --- Funcionalidade para Seleção de Itens do Menu ---
    const menuItems = document.querySelectorAll('.sidebar-menu .menu-item:not(.logout)');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {

            const currentSelected = document.querySelector('.sidebar-menu .menu-item.selected');
            if (currentSelected) {
                currentSelected.classList.remove('selected');
            }

  
            item.classList.add('selected');

            // 3. (Opcional) Esconde o menu após clicar em um item no mobile
            if (window.innerWidth < 768) {
                sidebar.classList.remove('visible');
            }
        });
    });

});