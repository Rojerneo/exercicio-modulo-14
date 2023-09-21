$(document).ready(function() {
    $('#tel').mask('(00) 00000-0000')

    $('form').validate({
        rules:  {
            nome: {
                required: true
            },
            email: {
                required:true,
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, digite o seu nome.',
            email: 'Por favor digite um e-mail válido.',
            mensagem: 'Por favor, deixe a sua mensagem.',
        }
    })
})