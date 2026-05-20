function evaluarBeca() {
    // 1. Obtener elementos de la interfaz HTML
    const inputEdad = document.getElementById("txtEdadBeca");
    const inputPromedio = document.getElementById("txtPromedioBeca");
    const cajaResultado = document.getElementById("wrapperResultado");

    // 2. Extraer y convertir valores
    const edad = parseInt(inputEdad.value);
    const promedio = parseFloat(inputPromedio.value);

    // 3. Validación exhaustiva de los datos de entrada
    if (isNaN(edad) || edad <= 0 || isNaN(promedio) || promedio < 0 || promedio > 10) {
        cajaResultado.className = "result-box danger";
        cajaResultado.innerHTML = "Por favor, introduce una edad válida y un promedio real en el rango de 0.0 a 10.0.";
        return;
    }

    // 4. Variables para almacenar el dictamen
    let asignacionText = "";
    let esBecaAsignada = true; // Controlar el color de la caja de alerta (.success o .info)

    // 5. Lógica del algoritmo condicional compuesto
    if (edad > 18) {
        // Alumnos mayores de 18 años
        if (promedio >= 9.0) {
            asignacionText = "Se ha asignado una beca mensual de <strong>$2,000.00</strong>. 💰🥇";
        } else if (promedio >= 7.5) {
            asignacionText = "Se ha asignado una beca mensual de <strong>$1,000.00</strong>. 💰🥈";
        } else if (promedio >= 6.0) {
            asignacionText = "Se ha asignado una beca mensual de <strong>$500.00</strong>. 💰🥉";
        } else {
            asignacionText = "No califica para una asignación económica. Se generará una <strong>Carta de Invitación</strong> para exhortarle a mejorar su rendimiento académico en el próximo ciclo escolar. 📜✍️";
            esBecaAsignada = false;
        }
    } else {
        // Alumnos de 18 años o menores
        if (promedio >= 9.0) {
            asignacionText = "Se ha asignado una beca mensual de <strong>$3,000.00</strong>. 💰🥇";
        } else if (promedio >= 8.0) {
            asignacionText = "Se ha asignado una beca mensual de <strong>$2,000.00</strong>. 💰🥈";
        } else if (promedio >= 6.0) {
            asignacionText = "Se ha asignado una beca mensual de <strong>$100.00</strong>. 💰🥉";
        } else {
            asignacionText = "No califica para una asignación económica. Se generará una <strong>Carta de Invitación</strong> para exhortarle a mejorar su rendimiento académico en el próximo ciclo escolar. 📜✍️";
            esBecaAsignada = false;
        }
    }

    // 6. Imprimir el resultado estético basándose en el tipo de resolución
    if (esBecaAsignada) {
        cajaResultado.className = "result-box success";
    } else {
        cajaResultado.className = "result-box info";
    }
    
    cajaResultado.innerHTML = `
        <p style="font-size: 1.1rem; margin-bottom: 5px;">Dictamen del Sistema:</p>
        <p style="font-size: 1.2rem; line-height: 1.4;">${asignacionText}</p>
    `;
}