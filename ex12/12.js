function classificarTriangulo() {
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);
    
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert('Por favor, insira valores válidos para os lados do triângulo.');
        return;
    }
    
    let tipo;
    if (lado1 === lado2 && lado2 === lado3) {
        tipo = "equilátero";
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        tipo = "isósceles";
    } else {
        tipo = "escaleno";
    }
    
    document.getElementById('resultado').textContent = `O triângulo é ${tipo}.`;
    desenharTriangulo(lado1, lado2, lado3);
}

function desenharTriangulo(a, b, c) {
    const svg = document.getElementById('triangulo');
    svg.innerHTML = '';
    
    // Normalizar os lados para caber no SVG
    const max = Math.max(a, b, c);
    const scale = 90 / max;
    a *= scale;
    b *= scale;
    c *= scale;
    
    // Calcular coordenadas
    const x1 = 50 - a/2;
    const y1 = 90;
    const x2 = 50 + a/2;
    const y2 = 90;
    const x3 = 50 + (a*a + b*b - c*c) / (2*a);
    const y3 = y1 - Math.sqrt(b*b - Math.pow(x3-x1, 2));
    
    const triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    triangle.setAttribute("points", `${x1},${y1} ${x2},${y2} ${x3},${y3}`);
    triangle.setAttribute("fill", "lightblue");
    triangle.setAttribute("stroke", "blue");
    svg.appendChild(triangle);
}