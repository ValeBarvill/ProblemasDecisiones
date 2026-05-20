function calcularPoliza() {
    // 1. Obtener elementos de la interfaz HTML
    const tipoPoliza = document.getElementById("slcPoliza").value;
    const inputEdad = document.getElementById("txtEdadConductor");
    const habitoAlcohol = document.getElementById("slcAlcohol").value;
    const usaLentes = document.getElementById("slcLentes").value;
    const tieneEnfermedad = document.getElementById("slcEnfermedad").value;
    const cajaResultado = document.getElementById("wrapperResultado");

    // 2. Extraer y validar la edad
    const edad = parseInt(inputEdad.value);
    if (isNaN(edad) || edad <= 0) {
        cajaResultado.className = "result-box danger";
        cajaResultado.innerHTML = "Por favor, introduce una edad válida para el conductor.";
        return;
    }

    // 3. Determinar el costo base según el tipo de póliza
    let costoBase = 0;
    let nombrePoliza = "";
    if (tipoPoliza === "A") {
        costoBase = 1200;
        nombrePoliza = "Cobertura Amplia (A)";
    } else {
        costoBase = 950;
        nombrePoliza = "Daños a Terceros (B)";
    }

    // 4. Calcular los cargos acumulativos (todos se basan en el costo base)
    let cargoAlcohol = (habitoAlcohol === "si") ? costoBase * 0.10 : 0;
    let cargoLentes = (usaLentes === "si") ? costoBase * 0.05 : 0;
    let cargoEnfermedad = (tieneEnfermedad === "si") ? costoBase * 0.05 : 0;
    
    // Cargo por edad: 20% si es mayor de 40 años, de lo contrario 10%
    let porcentajeEdad = (edad > 40) ? 0.20 : 0.10;
    let cargoEdad = costoBase * porcentajeEdad;

    // 5. Calcular el costo total final
    const costoTotal = costoBase + cargoAlcohol + cargoLentes + cargoEnfermedad + cargoEdad;

    // 6. Generar el texto informativo con el desglose detallado de los cargos aplicados
    let desgloseHTML = `• Costo Base (${nombrePoliza}): $${costoBase.toFixed(2)}<br>`;
    desgloseHTML += `• Cargo por Edad (${porcentajeEdad * 100}%): +$${cargoEdad.toFixed(2)}<br>`;
    
    if (cargoAlcohol > 0) desgloseHTML += `• Cargo por hábitos de riesgo (Alcohol 10%): +$${cargoAlcohol.toFixed(2)}<br>`;
    if (cargoLentes > 0) desgloseHTML += `• Cargo por limitación visual (Lentes 5%): +$${cargoLentes.toFixed(2)}<br>`;
    if (cargoEnfermedad > 0) desgloseHTML += `• Cargo por condición médica (Enfermedad 5%): +$${cargoEnfermedad.toFixed(2)}<br>`;

    // 7. Renderizar el resultado estético usando las clases CSS unificadas
    cajaResultado.className = "result-box success";
    cajaResultado.innerHTML = `
        <p style="font-size: 1.35rem; margin-bottom: 8px;">Total de la Póliza: <strong>$${costoTotal.toFixed(2)}</strong> 🚗🛡️</p>
        <div style="font-size: 0.85rem; font-weight: normal; border-top: 1px solid #c3e6cb; padding-top: 8px; color: #155724; text-align: left; line-height: 1.5;">
            <strong>Desglose de la cotización:</strong><br>
            ${desgloseHTML}
        </div>
    `;
}