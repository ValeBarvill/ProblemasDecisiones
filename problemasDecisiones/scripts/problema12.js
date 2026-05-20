function calcularSueldoComplejo() {
    // 1. Obtener elementos de la interfaz HTML
    const inputHoras = document.getElementById("txtHorasComplejas");
    const inputPago = document.getElementById("txtPagoComplejo");
    const cajaResultado = document.getElementById("wrapperResultado");

    // 2. Extraer y convertir valores numéricos
    const horas = parseFloat(inputHoras.value);
    const pagoHora = parseFloat(inputPago.value);

    // 3. Validación inicial de datos
    if (isNaN(horas) || horas < 0 || isNaN(pagoHora) || pagoHora < 0) {
        cajaResultado.className = "result-box danger";
        cajaResultado.innerHTML = "Por favor, introduce valores numéricos válidos mayor o igual a 0.";
        return;
    }

    // 4. Validación restrictiva del algoritmo: No se permiten más de 50 horas
    if (horas > 50) {
        cajaResultado.className = "result-box danger";
        cajaResultado.innerHTML = `🚨 <strong>Error Operativo:</strong> Has ingresado ${horas} horas. ¡Trabajar más de 50 horas semanales no está permitido por la empresa!`;
        return;
    }

    // 5. Variables para desglosar el cálculo acumulativo
    let sueldoTotal = 0;
    let hrsNormales = 0;
    let hrsDobles = 0;
    let hrsTriples = 0;

    // 6. Estructura condicional por rangos (Misma lógica del algoritmo)
    if (horas <= 40) {
        hrsNormales = horas;
        sueldoTotal = hrsNormales * pagoHora;
    } else if (horas <= 45) {
        hrsNormales = 40;
        hrsDobles = horas - 40;
        sueldoTotal = (hrsNormales * pagoHora) + (hrsDobles * (pagoHora * 2));
    } else {
        // Al pasar de 45 horas pero tener un tope de 50
        hrsNormales = 40;
        hrsDobles = 5; // Máximo de horas dobles permitidas
        hrsTriples = horas - 45;
        sueldoTotal = (hrsNormales * pagoHora) + (hrsDobles * (pagoHora * 2)) + (hrsTriples * (pagoHora * 3));
    }

    // 7. Construcción de texto para desglose en la interfaz
    let desgloseHTML = `• <strong>${hrsNormales}</strong> horas normales a tarifa regular.<br>`;
    if (hrsDobles > 0) desgloseHTML += `• <strong>${hrsDobles}</strong> horas excedentes pagadas al DOBLE.<br>`;
    if (hrsTriples > 0) desgloseHTML += `• <strong>${hrsTriples}</strong> horas excedentes pagadas al TRIPLE.<br>`;

    // 8. Renderizar el resultado estético usando las clases CSS unificadas
    cajaResultado.className = "result-box success";
    cajaResultado.innerHTML = `
        <p style="font-size: 1.35rem; margin-bottom: 8px;">Sueldo Neto Semanal: <strong>$${sueldoTotal.toFixed(2)}</strong> 💸</p>
        <div style="font-size: 0.85rem; font-weight: normal; border-top: 1px solid #c3e6cb; padding-top: 8px; color: #155724; text-align: left; line-height: 1.5;">
            <strong>Desglose del cómputo de horas:</strong><br>
            ${desgloseHTML}
        </div>
    `;
}