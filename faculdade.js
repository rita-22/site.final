
    // Função para mostrar ou esconder o conteúdo da aba clicada
    function showTab(tabIndex) {
        // Seleciona todas as abas
        const allTabs = document.querySelectorAll('.tab-pane');

        // Seleciona a aba clicada
        const selectedTab = document.getElementById('tab' + (tabIndex + 1));

        // Verifica se a aba clicada já está aberta
        if (selectedTab.classList.contains('active')) {
            // Se estiver aberta, fecha-a
            selectedTab.classList.remove('active');
        } else {
            // Se não estiver aberta, fecha todas as abas
            allTabs.forEach(tab => tab.classList.remove('active'));
            
            // Abre a aba selecionada
            selectedTab.classList.add('active');
        }
    }

