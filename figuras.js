// cuadrado
console.group('Cuadrados')

function perimetroCuadrado(lado) {
    return lado * 4
}


function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd()


// triangulo
console.group('Triangulos')

function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
}


function areaTriangulo(base, altura) {
    return (base * altura) / 2
}

console.groupEnd();

// circulo
console.group('Circulo');


//diametro
function diametroCirculo(radio) {
    return radio*2;
}

//pi
const PI = Math.PI;
console.log('PI  es: ' + PI );

//circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

//area
function areaCirculo(radio) {
    return (radioCirculo * radioCirculo) * PI
}

console.groupEnd();



// Aqui interactuamos
const calcularPerimetroCuadrado = () => {
    const input = document.getElementById('inputCuadrado')
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

const calcularAreaCuadrado = () => {
    const input = document.getElementById('inputCuadrado')
    const value = input.value

    const area = areaCuadrado(value);
    alert(area);
}
