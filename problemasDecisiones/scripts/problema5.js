function encontrarMenor() {
    const cajaResultado = document.getElementById("wrapperResultado");

    // 1. Obtener y estructurar los datos de los 3 usuarios
    const n1 = document.getElementById("txtNombre1").value.trim();
    const e1 = parseInt(document.getElementById("txtEdad1").value);

    const n2 = document.getElementById("txtNombre2").value.trim();
    const e2 = parseInt(document.getElementById("txtEdad2").value);

    const n3 = document.getElementById("txtNombre3").value.trim();
    const e3 = parseInt(document.getElementById("txtEdad3").value);

    // 2. Validación: verificar que todos los campos tengan datos válidos
    if (!n1 || isNaN(e1) || e1 < 0 || !n2 || isNaN(e2) || e2 < 0 || !n3 || isNaN(e3) || e3 < 0) {
        cajaResultado.className = "result-box danger";
        cajaResultado.innerHTML = "Por favor, completa todos los nombres y escribe edades numéricas válidas.";
        return;
    }

    // 3. Algoritmo de comparación (Asignación inicial)
    let nombreMenor = n1;
    let edadMenor = e1;

    // Comparación con la segunda persona
    if (e2 < edadMenor) {
        nombreMenor = n2;
        edadMenor = e2;
    }

    // Comparación con la tercera persona
    if (e3 < edadMenor) {
        nombreMenor = n3;
        edadMenor = e3;
    }

    // 4. Imprimir el resultado estético en la tarjeta
    cajaResultado.className = "result-box success";
    cajaResultado.innerHTML = `
        <p style="font-size: 1.1rem; margin-bottom: 5px;">Análisis completado:</p>
        <p style="font-size: 1.3rem; color: #155724;">La persona de menor edad es <strong>${nombreMenor}</strong> con <strong>${edadMenor}</strong> años. 👤👶</p>
    `;
}