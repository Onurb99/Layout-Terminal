window.onload = function() {
    var formulario = document.querySelector('form');
    formulario.onsubmit = function() { GetForm(this); };

    function GetForm(form) {
        let dadosFormulario = {
            Nome: form[0].value,
            Email: form[1].value,
            Mensagem: form[2].value
        }
        alert(JSON.stringify(dadosFormulario));
    }
}