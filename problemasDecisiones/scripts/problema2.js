function calcularSueldo() {
    // 1. Obtener elementos de la interfaz HTML
    const inputHoras = document.getElementById("txtHoras");
    const inputPago = document.getElementById("txtPago");
    const cajaResultado = document.getElementById("wrapperResultado");

    // 2. Extraer y convertir los valores a números de punto flotante (con decimales)
    const horasTrabajadas = parseFloat(inputHoras.value);
    const pagoPorHora = parseFloat(inputPago.value);

    // 3. Validación de datos de entrada
    if (isNaN(horasTrabajadas) || horasTrabajadas < 0 || isNaN(pagoPorHora) || pagoPorHora < 0) {
        cajaResultado.className = "result-box danger";
        cajaResultado.innerHTML = "Por favor, introduce valores numéricos válidos y mayores o iguales a 0.";
        return;
    }

    // 4. Variables para el desglose del cálculo
    let sueldoTotal = 0;
    let horasNormales = 0;
    let horasExtra = 0;
    let textoDetalle = "";

    // 5. Estructura de decisión lógica (Algoritmo condicional)
    if (horasTrabajadas <= 40) {
        // Caso sin horas extra
        sueldoTotal = horasTrabajadas * pagoPorHora;
        textoDetalle = `Se pagaron las ${horasTrabajadas} horas trabajadas a la tarifa normal de $${pagoPorHora.toFixed(2)}.`;
    } else {
        // Caso con horas extra (excedente de 40)
        horasNormales = 40;
        horasExtra = horasTrabajadas - 40;
        
        let pagoNormal = horasNormales * pagoPorHora;
        let pagoExtra = horasExtra * (pagoPorHora * 2); // Pago al doble
        
        sueldoTotal = pagoNormal + pagoExtra;
        textoDetalle = `Desglose: 40 horas normales ($${pagoNormal.toFixed(2)}) + ${horasExtra} horas excedentes al doble ($${pagoExtra.toFixed(2)}).`;
    }

    // 6. Imprimir el resultado estético usando la clase .success e .info
    cajaResultado.className = "result-box success";
    cajaResultado.innerHTML = `
        <p style="font-size: 1.25rem; margin-bottom: 5px;"><strong>Sueldo Semanal: $${sueldoTotal.toFixed(2)}</strong></p>
        <p style="font-size: 0.9rem; font-weight: normal; color: #155724;">${textoDetalle}</p>
    `;
}