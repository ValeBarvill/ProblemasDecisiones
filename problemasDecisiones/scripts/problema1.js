function evaluarVotacion() {
    // 1. Obtener los elementos del HTML
    const inputEdad = document.getElementById("txtEdad");
    const cajaResultado = document.getElementById("wrapperResultado");
    
    // 2. Extraer el valor del input y convertirlo a número entero
    const edad = parseInt(inputEdad.value);

    // 3. Validar que el usuario haya ingresado un dato correcto
    if (isNaN(edad) || edad < 0) {
        cajaResultado.style.display = "block";
        cajaResultado.className = "result-box danger";
        cajaResultado.innerHTML = "Por favor, introduce una edad válida mayor o igual a 0.";
        return;
    }

    // 4. Estructura de decisión lógica (Algoritmo condicional)
    if (edad >= 18) {
        cajaResultado.style.display = "block";
        cajaResultado.className = "result-box success";
        cajaResultado.innerHTML = `¡SÍ puedes votar! Tienes ${edad} años y cumples con la edad mínima legal (18 años). 🗳️`;
    } else {
        const faltantes = 18 - edad;
        cajaResultado.style.display = "block";
        cajaResultado.className = "result-box danger";
        cajaResultado.innerHTML = `NO puedes votar. Tienes ${edad} años. Te faltan ${faltantes} año(s) para alcanzar la mayoría de edad.`;
    }
}