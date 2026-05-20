function calcularEstacionamiento() {
    // 1. Obtener elementos de la interfaz HTML
    const inputHoras = document.getElementById("txtHoras");
    const cajaResultado = document.getElementById("wrapperResultado");

    // 2. Extraer y convertir el valor a número decimal
    const horasOriginales = parseFloat(inputHoras.value);

    // 3. Validación de datos de entrada
    if (isNaN(horasOriginales) || horasOriginales <= 0) {
        cajaResultado.className = "result-box danger";
        cajaResultado.innerHTML = "Por favor, introduce una cantidad de horas válida y mayor a 0.";
        return;
    }

    // 4. Redondear hacia arriba (las fracciones de hora cuentan como hora completa)
    const horas = Math.ceil(horasOriginales);
    let totalPagar = 0;
    let desgloseHTML = "";

    // 5. Estructura condicional anidada para el cálculo por niveles de tarifas
    if (horas <= 2) {
        totalPagar = horas * 5;
        desgloseHTML = `Tarifa Inicial: ${horas} hr(s) x $5.00.`;
    } else if (horas <= 5) {
        const horasNivel2 = horas - 2;
        totalPagar = (2 * 5) + (horasNivel2 * 4);
        desgloseHTML = `Primeras 2 hrs ($10.00) + ${horasNivel2} hr(s) de la siguiente tarifa x $4.00.`;
    } else if (horas <= 10) {
        const horasNivel3 = horas - 5;
        totalPagar = (2 * 5) + (3 * 4) + (horasNivel3 * 3);
        desgloseHTML = `Primeras 2 hrs ($10.00) + 3 hrs siguientes ($12.00) + ${horasNivel3} hr(s) de la siguiente tarifa x $3.00.`;
    } else {
        const horasNivel4 = horas - 10;
        totalPagar = (2 * 5) + (3 * 4) + (5 * 3) + (horasNivel4 * 2);
        desgloseHTML = `Primeras 2 hrs ($10.00) + 3 hrs ($12.00) + 5 hrs ($15.00) + ${horasNivel4} hr(s) excedentes x $2.00.`;
    }

    // 6. Imprimir el resultado estético usando las clases CSS unificadas
    cajaResultado.className = "result-box success";
    cajaResultado.innerHTML = `
        <p style="font-size: 1.25rem; margin-bottom: 5px;">Total a pagar: <strong>$${totalPagar.toFixed(2)}</strong></p>
        <p style="font-size: 0.85rem; font-weight: normal; color: #155724;">
            ${horasOriginales !== horas ? `*(Se tomaron como ${horas} horas completas)*<br>` : ''}
            ${desgloseHTML}
        </p>
    `;
}