// Ejercicio 1-----------------------
function ejercicio1() {
    let val = prompt("Introduce un número entero: ");
    document.write("<table>");
    document.write("<tbody>");
    for (let i = 1; i <= val; i++) {
        document.write("<tr><td>" + i + "</td>" + "<td>" + i ** 2 + "</td>"
         + "<td>" + i ** 3 + "</td></tr>");
    }

    document.write("</tbody>");
    document.write("</table>");
    document.write("<br><button onclick='window.location.reload()'>Regresar</button>");
}
// Ejercicio 2-----------------------
function ejercicio2() {
    let n1 = Math.floor(Math.random() * 10);
    let n2 = Math.floor(Math.random() * 10);
    let answer = n1 + n2;

    const start = Date.now();
    let userAnswer = prompt("¿Cual es el resultado de: " + n1 + "+" + n2 + "?");
    const end = Date.now();
    let time = (end - start) / 1000;

    if (userAnswer == answer) {
        document.write("<h2>Respuesta correcta</h2>");
        document.write("Tu tiempo para contestar fue de: ", time);
    }

    else {
        document.write("<h2>Respuesta incorrecta</h2>");
        document.write("Tu tiempo para contestar fue de: ", time);
    }
    document.write("<br><button onclick='window.location.reload()'>Regresar</button>");
}
// Ejercicio 3-----------------------
function ejercicio3() {
    const arr = [-2, -6, 1, -10, 10, 2, 8, 0, 9];
    function contador(arr) {
        let positivos = 0;
        let negativos = 0;
        let ceros = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 0) {
                ceros++;
            }

            else if (arr[i] > 0) {
                positivos++;
            }

            else if (arr[i] < 0) {
                negativos++;
            }
        }
        return {ceros, positivos, negativos};
    }
    document.write(arr);
    document.write("<br>");
    let answers = contador(arr);
    document.write("Total de ceros: ", answers.ceros);
    document.write("<br>");
    document.write("Total de positivos: ", answers.positivos);
    document.write("<br>");
    document.write("Total de negativos: ", answers.negativos);
    document.write("<br><button onclick='window.location.reload()'>Regresar</button>");
}
// Ejercicio 4-----------------------
function ejercicio4() {
    function promedios(mat) {
        let sum = 0;
        let prom = 0;
        let prom1 = 0;
        let prom2 = 0;
        let prom3 = 0;
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                sum += mat[i][j];
            }
            prom = sum / mat[i].length;
            sum = 0;
            if (i + 1 == 1) {
                prom1 = prom;
            } else if (i + 1 == 2) {
                prom2 = prom;
            } else if (i + 1 == 3) {
                prom3 = prom;
            }
        }
        return {prom1, prom2, prom3};
    }
    let mat = [[4, 7, 6], [1, 8, 5], [3, 9, 2]];
    let res = promedios(mat);
    document.write(mat);
    document.write("<br>");
    document.write("Promedio 1: ", res.prom1);
    document.write("<br>");
    document.write("Promedio 2: ", res.prom2);
    document.write("<br>");
    document.write("Promedio 3: ", res.prom3);
    document.write("<br>");
    document.write("<br><button onclick='window.location.reload()'>Regresar</button>");
}
// Ejercicio 5-----------------------
function ejercicio5() {
    function inverso(num) {
        num = num.toString();
        let sep = num.split("");
        let inv = sep.reverse();
        let join = inv.join("");
        let res = Math.floor(join);
        return res;
    }

    let num = 86659;
    document.write(num);
    let sol = inverso(num);
    document.write("<br>");
    document.write(sol);
    document.write("<br><button onclick='window.location.reload()'>Regresar</button>");
}
// Ejercicio 6-----------------------
function ejercicio6(){
    function escaleras(n){
        for(let i = 0; i < n; i++) {
            for(let j = 0; j <= i; j++) {
                document.write("█");
            }
            document.write("<br>");
        }
    }
    let n = prompt("Introduce un número entero: ");
    escaleras(n);
    document.write("<br><button onclick='window.location.reload()'>Regresar</button>");
}

// Preguntas
function preguntas() {
    document.write("<h5>¿Qué diferencias y semejanzas hay entre Java y JavaScript?</h5>");
    document.write("Java es un lenguaje de programación OOP, mientras que Java Script es un lenguaje de scripts OOP.");
    document.write(" Java crea aplicaciones que se ejecutan en una máquina o explorador virtual, mientras que el código JavaScript sólo se ejecuta en un explorador.");
    document.write(" El código Java necesita compilación, mientras que el código JavaScript está en todo el texto.");
    document.write("<br>");
    document.write("<h5>¿Qué métodos tiene el objeto Date? (Menciona al menos 5*)</h5>");
    document.write("getDate(), getHours(), getTime(), getDay(), getSeconds()");
    document.write("<br>");
    document.write("<h5>¿Qué métodos tienen los arreglos? (Menciona al menos 5*)</h5>");
    document.write("join(), toString(), pop(), push(), shift()");
    document.write("<br>");
    document.write("<h5>¿Cómo se declara una variable con alcance local dentro de una función?</h5>");
    document.write("Se logra a través del uso de la sintaxis 'var' o 'let'");
    document.write("<br>");
    document.write("<h5>¿Qué implicaciones tiene utilizar variables globales dentro de funciones?</h5>");
    document.write("Implica que sera visible y estará disponible para todas las sentencias de un script.");
    document.write("<h2>Preguntas Lab5</h2>");
    document.write("<h5>Describe Material Design</h5>");
    document.write("Es un lenguaje de diseño hecho por Google, el cual permite utilizar diseños basados en cuadriculas,");
    document.write(" animaciones, transiciones receptivas, relleno, profundidad y efectos.")
}