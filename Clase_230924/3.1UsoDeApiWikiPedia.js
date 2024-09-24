const terminoBusqueda = 'Programación'; // Término que deseas buscar
const url = `https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch=${terminoBusqueda}&format=json&origin=*`;

// Función para obtener resultados de Wikipedia
async function buscarEnWikipedia() {
    try {
        const respuesta = await fetch(url); // Llamada a la API de Wikipedia
        const datos = await respuesta.json(); // Convierte la respuesta a JSON

        // Si hay resultados, mostrarlos en una lista que despliega el título y resumen de cada página.
       const resultados = datos.query.search;
       
       if (resultados.length > 0) {
        document.getElementById('resultados').textContent = 'Resultados';
        const listaResultados = document.createElement('ul');
        listaResultados.id = 'listaResultados';
        document.getElementById('resultados').appendChild(listaResultados);
    
        // Recorrer los resultados y crear una lista de artículos
        resultados.forEach(resultado => {
            const item = document.createElement('li');
            item.textContent = resultado.título;
            const link = document.createElement('a');
            link.href = resultado.enlace;
            link.textContent = 'Ver más';
            item.appendChild(link);
            listaResultados.appendChild(item);
        });
    } else {
        // Si no hay resultados mostrar un mensaje
        document.getElementById('errores').textContent = 'No se encontraron resultados.';
    }
    
    try {
        obtenerDatos();
    } catch (error) {
        // En caso de error, mostrar un mensaje.
        document.getElementById('errores').textContent = 'Error al obtener los datos de Wikipedia.';
    }
    
    // Llamar a la función para hacer la búsqueda cuando la página se carga completamente.
    window.addEventListener('load', buscar);
        
