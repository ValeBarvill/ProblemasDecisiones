function planificarVacaciones() {
    // 1. Obtener elementos de la interfaz HTML
    const inputPresupuesto = document.getElementById("txtPresupuestoVacaciones");
    const inputCostoKm = document.getElementById("txtCostoKilometro");
    const cajaResultado = document.getElementById("wrapperResultado");

    // 2. Extraer y convertir valores
    const dinero = parseFloat(inputPresupuesto.value);
    const costoKm = parseFloat(inputCostoKm.value);

    // 3. Validación de datos de entrada
    if (isNaN(dinero) || dinero < 0 || isNaN(costoKm) || costoKm <= 0) {
        cajaResultado.className = "result-box danger";
        cajaResultado.innerHTML = "Por favor, introduce un presupuesto válido y un costo por kilómetro mayor a 0.";
        return;
    }

    // 4. Datos fijos de distancias (ida) en kilómetros
    const kmMexico = 750;
    const kmPV = 800;
    const kmAcapulco = 1200;
    const kmCancun = 1800;

    // 5. Cálculo del costo total redondo (Ida + Vuelta = km * 2)
    const costoMexico = kmMexico * 2 * costoKm;
    const costoPV = kmPV * 2 * costoKm;
    const costoAcapulco = kmAcapulco * 2 * costoKm;
    const costoCancun = kmCancun * 2 * costoKm;

    // 6. Evaluación algorítmica en cascada (Priorizando el destino más lejano/caro)
    let destinoFinal = "";
    let costoFinal = 0;
    let icono = "";
    let esViaje = true;

    if (dinero >= costoCancun) {
        destinoFinal = "Cancún";
        costoFinal = costoCancun;
        icono = "🏖️✈️";
    } else if (dinero >= costoAcapulco) {
        destinoFinal = "Acapulco";
        costoFinal = costoAcapulco;
        icono = "🌊🥥";
    } else if (dinero >= costoPV) {
        destinoFinal = "Puerto Vallarta (P.V.)";
        costoFinal = costoPV;
        icono = "🌅🐬";
    } else if (dinero >= costoMexico) {
        destinoFinal = "México";
        costoFinal = costoMexico;
        icono = "🏛️🌮";
    } else {
        destinoFinal = "Quedarse en casa";
        esViaje = false;
        icono = "🏠🍿";
    }

    // 7. Renderizar los resultados de forma estética según la decisión tomada
    if (esViaje) {
        cajaResultado.className = "result-box success";
        cajaResultado.innerHTML = `
            <p style="font-size: 1.3rem; margin-bottom: 8px;">¡Felicidades! Puedes viajar a <strong>${destinoFinal}</strong> ${icono}</p>
            <div style="font-size: 0.85rem; font-weight: normal; border-top: 1px solid #c3e6cb; padding-top: 8px; color: #155724; text-align: left; line-height: 1.4;">
                • Costo total del pasaje redondo: <strong>$${costoFinal.toFixed(2)}</strong><br>
                • Dinero sobrante para gastos: $${(dinero - costoFinal).toFixed(2)}
            </div>
        `;
    } else {
        cajaResultado.className = "result-box info";
        cajaResultado.innerHTML = `
            <p style="font-size: 1.25rem; margin-bottom: 8px;">Tu destino ideal es: <strong>${destinoFinal}</strong> ${icono}</p>
            <p style="font-size: 0.85rem; font-weight: normal; color: #1d6fa5; text-align: left;">
                El presupuesto de $${dinero.toFixed(2)} es insuficiente para el viaje redondo más económico (México: $${costoMexico.toFixed(2)}). ¡Buen momento para descansar en el hogar!
            </p>
        `;
    }
}