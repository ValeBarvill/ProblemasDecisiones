function calcularBonoTienda() {
    // 1. Obtener los elementos del DOM
    const inputAntiguedad = document.getElementById("txtAntiguedadTienda");
    const cajaResultado = document.getElementById("wrapperResultado");

    // 2. Extraer el valor ingresado y convertirlo a un número entero
    const antiguedad = parseInt(inputAntiguedad.value);

    // 3. Validación de la entrada de datos
    if (isNaN(antiguedad) || antiguedad < 0) {
        cajaResultado.className = "result-box danger";
        cajaResultado.innerHTML = "Por favor, introduce una cantidad de años válida mayor o igual a 0.";
        return;
    }

    // 4. Variable para almacenar el monto del bono
    let bono = 0;
    let desgloseText = "";

    // 5. Estructura condicional (Lógica del algoritmo)
    if (antiguedad === 0) {
        bono = 0;
        desgloseText = "Aún no se ha cumplido el primer año de antigüedad requerido para recibir un bono.";
    } else if (antiguedad > 5) {
        bono = 1000;
        desgloseText = `Al superar los 5 años de servicio, se asigna la tarifa máxima preferencial de forma fija.`;
    } else {
        bono = antiguedad * 100;
        desgloseText = `Cálculo proporcional: ${antiguedad} año(s) de antigüedad x $100.00 por año.`;
    }

    // 6. Renderizar los resultados de forma elegante utilizando tus clases CSS
    if (bono > 0) {
        cajaResultado.className = "result-box success";
        cajaResultado.innerHTML = `
            <p style="font-size: 1.35rem; margin-bottom: 5px;">Bono asignado: <strong>$${bono.toFixed(2)}</strong> 🎁</p>
            <p style="font-size: 0.85rem; font-weight: normal; color: #155724;">${desgloseText}</p>
        `;
    } else {
        cajaResultado.className = "result-box info";
        cajaResultado.innerHTML = `
            <p style="font-size: 1.2rem; margin-bottom: 5px;">Monto del Bono: <strong>$${bono.toFixed(2)}</strong></p>
            <p style="font-size: 0.85rem; font-weight: normal; color: #1d6fa5;">${desgloseText}</p>
        `;
    }
}