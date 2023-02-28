function verify() {
    const pw1 = document.forms["pwords"]["pword1"].value;
    const pw2 = document.forms["pwords"]["pword2"].value;

    if (pw1 == "" || pw2 == "") {
        document.getElementById("Text").innerHTML = "Por favor, ingresa una contraseña.";
        document.getElementById("Text").style.color = "#ff9700";
        document.getElementById("Text").style.display = "inline";

        return false;
    }

    else if (pw1 != pw2) {
        document.getElementById("Text").innerHTML = "Las contraseñas no coinciden";
        document.getElementById("Text").style.color = "#ff9700";
        document.getElementById("Text").style.display = "inline";

        return false;
    }

    else {
        if (pw1.length >= 8 && pw2.length >= 8) {
            document.getElementById("W1").className = "passed";
        }

        for (let i = 0; i < pw1.length; i++) {
            if (!isNaN(pw1[i])) {
                document.getElementById("W2").className = "passed";
            }

            if (pw1[i] == pw1[i].toUpperCase()) {
                document.getElementById("W3").className = "passed";
            }
        }

        let characters = /(?=.*[!@#\$%\^&*])/;
        if (characters.test(pw1.toLowerCase())) {
            document.getElementById("W4").className = "passed";
        }

        //^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$
        return false;
    }
}