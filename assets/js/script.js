function descargarPDF(url, nombreArchivo) {
    // 1. Intentamos el método Fetch para descarga silenciosa
    fetch(url)
        .then(response => {
            if (!response.ok) {
                // Si el servidor responde 404, lanzamos el error para ir al catch
                throw new Error(`Servidor respondió con status: ${response.status}`);
            }
            return response.blob();
        })
        .then(blob => {
            const objectURL = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = objectURL;
            link.download = nombreArchivo;

            document.body.appendChild(link);
            link.click();

            // Limpieza de memoria
            document.body.removeChild(link);
            URL.revokeObjectURL(objectURL);
        })
        .catch(error => {
            console.warn('Método Fetch falló, intentando método directo...', error);

            /* PLAN B: Método tradicional.
               Si el archivo existe pero Fetch falla (por CORS o protocolo file://),
               este método intentará bajarlo directamente.
            */
            const link = document.createElement('a');
            link.href = url;
            link.download = nombreArchivo;
            link.target = '_blank'; // Evita que se cierre la página actual si el navegador fuerza la apertura
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
}