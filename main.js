$(document).ready(function(){

    $('header button').click(function(e){
        $('form').slideDown();
    })

    $('#botao_cancelar').click(function(e){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        //aqui ele está inserindo um acrescimo de sintaxe dentro da variável novo item
        //assim ele será adicionado entre a tag LI.
        $(`<img src="${novaImagem}"/>`).appendTo(novoItem);
        $(`
        <div class="overlay-imagem-link">  

        <a href="${novoItem}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real
        </a>

        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    })
})