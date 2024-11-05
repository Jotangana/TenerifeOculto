// Lista de URLs (puedes añadir o modificar las URLs según tus necesidades)
        const paginas = [
            'PlayaPatos.html',
            'AcantiladosGigantes.html',
            'https://www.google.com',
            'https://www.youtube.com',
            'https://www.facebook.com'
        ];

        function irAPaginaAleatoria() {
            // Selecciona un índice aleatorio de la lista de páginas
            const indiceAleatorio = Math.floor(Math.random() * paginas.length);
            // Redirige a la URL seleccionada
            window.location.href = paginas[indiceAleatorio];
        }