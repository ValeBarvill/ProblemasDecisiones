function calcularViajeEstudios() {
    // 1. Obtener elementos de la interfaz HTML
    const inputAlumnos = document.getElementById("txtCantidadAlumnos");
    const cajaResultado = document.getElementById("wrapperResultado");

    // 2. Extraer y convertir el valor a un número entero
    const alumnos = parseInt(inputAlumnos.value);

    // 3. Validación de datos de entrada
    if (isNaN(alumnos) || alumnos <= 0) {
        cajaResultado.className = "result-box danger";
        cajaResultado.innerHTML = "Por favor, introduce una cantidad válida de alumnos (número entero mayor a 0).";
        return;
    }

    // 4. Variables para almacenar las tarifas calculadas
    let costoIndividual = 0;

    // 5. Estructura condicional por rangos de volumen (Lógica del algoritmo)
    if (alumnos > 100) {
        costoIndividual = 20;
    } else if (alumnos >= 50) { // Al no ser > 100, comprende el rango de 50 a 100
        costoIndividual = 35;
    } else if (alumnos >= 20) { // Comprende el rango de 20 a 49
        costoIndividual = 40;
    } else {                    // Menos de 20 alumnos
        costoIndividual = 70;
    }

    // 6. Calcular el costo total acumulado del autobús
    const costoTotalAutobus = alumnos * costoIndividual;

    // 7. Renderizar el resultado estético usando tus estilos globales
    cajaResultado.className = "result-box success";
    cajaResultado.innerHTML = `
        <p style="font-size: 1.25rem; margin-bottom: 6px;">Costo por Alumno: <strong>$${costoIndividual.toFixed(2)}</strong></p>
        <div style="font-size: 0.85rem; font-weight: normal; border-top: 1px solid #c3e6cb; padding-top: 8px; color: #155724; text-align: left; line-height: 1.4;">
            • Total de alumnos registrados: <strong>${alumnos}</strong><br>
            • Costo global de la renta del autobús: <strong>$${costoTotalAutobus.toFixed(2)}</strong>
        </div>
    `;
}