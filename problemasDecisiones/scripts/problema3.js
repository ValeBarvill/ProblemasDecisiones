function determinarRegalo() {
    // 1. Obtener elementos de la interfaz HTML
    const inputPresupuesto = document.getElementById("txtPresupuesto");
    const cajaResultado = document.getElementById("wrapperResultado");

    // 2. Extraer y convertir el valor a número decimal
    const presupuesto = parseFloat(inputPresupuesto.value);

    // 3. Validación de datos de entrada
    if (isNaN(presupuesto) || presupuesto < 0) {
        cajaResultado.className = "result-box danger";
        cajaResultado.innerHTML = "Por favor, introduce un presupuesto válido mayor o igual a $0.00.";
        return;
    }

    // 4. Variables para almacenar el resultado y un emoji decorativo
    let regaloRecomendado = "";
    let icono = "";

    // 5. Estructura condicional múltiple (Algoritmo de rangos de costo)
    if (presupuesto <= 10.00) {
        regaloRecomendado = "una Tarjeta";
        icono = "💌";
    } else if (presupuesto >= 11.00 && presupuesto <= 100.00) {
        regaloRecomendado = "Chocolates";
        icono = "🍫";
    } else if (presupuesto >= 101.00 && presupuesto <= 250.00) {
        regaloRecomendado = "Flores";
        icono = "💐";
    } else {
        // Al ser más de 251.00 entra en esta última opción
        regaloRecomendado = "un Anillo";
        icono = "💍";
    }

    // 6. Imprimir el resultado estético usando las clases CSS unificadas
    cajaResultado.className = "result-box success";
    cajaResultado.innerHTML = `
        <p style="font-size: 1.2rem; margin-bottom: 5px;">Tu presupuesto es de <strong>$${presupuesto.toFixed(2)}</strong></p>
        <p style="font-size: 1.35rem; color: #155724;">¡El regalo ideal es <strong>${regaloRecomendado}</strong>! ${icono}</p>
    `;
}