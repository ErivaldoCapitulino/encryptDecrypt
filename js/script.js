const textarea = document.querySelector(".textarea");
const result = document.querySelector(".result");
//const noResult = document.querySelector(".noResult");
const textareaResult = document.querySelector(".textareaResult");
const btnCopy = document.querySelector(".btnCopiar");


const verificarString = (string) => {
    if ((/[A-Z]/.test(string)) || (/[ÁÀÃÂÉÈÊÍÌÎÓÒÕÔÚÙÛáàãâéèêíìîóòõôúùû]/.test(string))) {
        alert('Apenas letras minusculas e minusculas sem acento');
        textareaResult.value = "";
    }
}


const copyToText = () => {
    let content = textareaResult;
    content.select(); 
    document.execCommand('copy');
    textarea.value = "";
    alert("Texto copiado com sucesso!");
}


const elementEncrypt = document.querySelector(".btnEncrypt");
elementEncrypt.addEventListener("click", function () {
    textareaResult.innerHTML = encrypt(textarea.value);
})

const elementDencrypt = document.querySelector(".btnDecrypt");
elementDencrypt.addEventListener("click", function () {
    textareaResult.innerHTML = decrypt(textarea.value);
})

btnCopy.addEventListener("click", function () {
        copyToText();
})


const encrypt = (stringEncrypt) => {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    verificarString(stringEncrypt);

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncrypt.includes(matrizCodigo[i][0])) {
            stringEncrypt = stringEncrypt.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncrypt;
}

const decrypt = (stringDencrypt) => {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDencrypt = stringDencrypt.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDencrypt.includes(matrizCodigo[i][1])) {
            stringDencrypt = stringDencrypt.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDencrypt;
}