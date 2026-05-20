function calcularMayorBono() {
    // 1. Obtener elementos de la interfaz HTML
    const inputSueldo = document.getElementById("txtSueldoBono");
    const inputAntiguedad = document.getElementById("txtAntiguedadBono");
    const cajaResultado = document.getElementById("wrapperResultado");

    // 2. Extraer y convertir valores numéricos
    const sueldo = parseFloat(inputSueldo.value);
    const antiguedad = parseFloat(inputAntiguedad.value);

    // 3. Validación de datos de entrada
    if (isNaN(sueldo) || sueldo < 0 || isNaN(antiguedad) || antiguedad < 0) {
        cajaResultado.className = "result-box danger";
        cajaResultado.innerHTML = "Por favor, introduce valores válidos y mayores o iguales a 0.";
        return;
    }

    // --- CÁLCULO 1: BONO POR ANTIGÜEDAD ---
    let porcentajeAntiguedad = 0;
    if (antiguedad > 2 && antiguedad < 5) {
        porcentajeAntiguedad = 0.20; // 20%
    } else if (antiguedad >= 5) {
        porcentajeAntiguedad = 0.30; // 30%
    }
    const bonoAntiguedad = sueldo * porcentajeAntiguedad;

    // --- CÁLCULO 2: BONO POR SUELDO ---
    let porcentajeSueldo = 0;
    if (sueldo < 1000) {
        porcentajeSueldo = 0.25; // 25%
    } else if (sueldo >= 1000 && sueldo <= 3500) {
        porcentajeSueldo = 0.15; // 15%
    } else {
        porcentajeSueldo = 0.10; // 10%
    }
    const bonoSueldo = sueldo * porcentajeSueldo;

    // --- COMPARACIÓN: DETERMINAR EL MAYOR ---
    let bonoFinal = 0;
    let motivoText = "";

    if (bonoAntiguedad > bonoSueldo) {
        bonoFinal = bonoAntiguedad;
        motivoText = `Bono asignado por concepto de <strong>Antigüedad (${(porcentajeAntiguedad * 100)}%)</strong>, al ser mayor que el de sueldo.`;
    } else if (bonoSueldo > bonoAntiguedad) {
        bonoFinal = bonoSueldo;
        motivoText = `Bono asignado por concepto de <strong>Sueldo Base (${(porcentajeSueldo * 100)}%)</strong>, al ser mayor que el de antigüedad.`;
    } else {
        bonoFinal = bonoSueldo; // Ambos son iguales
        motivoText = `Ambos bonos arrojan la misma cantidad económica. Se asigna un beneficio del <strong>${(porcentajeSueldo * 100)}%</strong>.`;
    }

    // 4. Imprimir el resultado estético en la pantalla
    cajaResultado.className = "result-box success";
    cajaResultado.innerHTML = `
        <p style="font-size: 1.35rem; margin-bottom: 8px;">Monto del Bono: <strong>$${bonoFinal.toFixed(2)}</strong> 💵</p>
        <div style="font-size: 0.85rem; font-weight: normal; border-top: 1px solid #c3e6cb; padding-top: 8px; color: #155724; text-align: left;">
            <p>${motivoText}</p>
            <p style="margin-top: 4px; color: #555;">• Pre-cálculo Antigüedad: $${bonoAntiguedad.toFixed(2)} | • Pre-cálculo Sueldo: $${bonoSueldo.toFixed(2)}</p>
        </div>
    `;
}