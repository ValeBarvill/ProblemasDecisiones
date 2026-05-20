function calcularDescuentoArticulo() {
    // 1. Obtener los elementos del DOM
    const inputPrecio = document.getElementById("txtPrecio");
    const cajaResultado = document.getElementById("wrapperResultado");

    // 2. Extraer el valor ingresado
    const precioOriginal = parseFloat(inputPrecio.value);

    // 3. Validación de la entrada de datos
    if (isNaN(precioOriginal) || precioOriginal < 0) {
        cajaResultado.className = "result-box danger";
        cajaResultado.innerHTML = "Por favor, introduce un precio válido mayor o igual a $0.00.";
        return;
    }

    // 4. Variables para el algoritmo
    let porcentajeTexto = "";
    let porcentajeValor = 0;

    // 5. Estructura condicional anidada (Misma lógica del algoritmo)
    if (precioOriginal >= 200) {
        porcentajeTexto = "15%";
        porcentajeValor = 0.15;
    } else if (precioOriginal >= 100) {
        porcentajeTexto = "12%";
        porcentajeValor = 0.12;
    } else {
        porcentajeTexto = "10%";
        porcentajeValor = 0.10;
    }

    // 6. Operaciones matemáticas
    const descuento = precioOriginal * porcentajeValor;
    const precioFinal = precioOriginal - descuento;

    // 7. Renderizar los resultados de forma elegante
    cajaResultado.className = "result-box success";
    cajaResultado.innerHTML = `
        <p style="margin-bottom: 8px;">Descuento aplicado: <strong>${porcentajeTexto}</strong> (-$${descuento.toFixed(2)})</p>
        <p style="font-size: 1.3rem; color: #155724; margin: 0;">Total a pagar: <strong>$${precioFinal.toFixed(2)}</strong></p>
    `;
}