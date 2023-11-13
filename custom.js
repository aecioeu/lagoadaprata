

$(document).ready(function () {
    //urls em que sera supimida a busca
    var urls = [{ name: "Justificativa de Ausência",
          url : 'portal/editais/1/5/0/0/0/51/0/0/0/'
        },{
            name:'Termos de Fomento, Colaboração e Acordo de Cooperação',
            url:'portal/editais/1/5/0/0/0/54/0/0/0/'
        },{
            name:'Editais de Chamamento',
            url: 'portal/editais/1/5/0/0/0/50/0/0/0'
        },
        {
            name:'Editais de Credenciamento',
            url: 'portal/editais/1/5/0/0/0/52/0/0/0'
        },
        {
            name:'Justificativa de Ausência Chamamento',
            url: 'portal/editais/1/5/0/0/0/51/0/0/0'
        },
        {
            name:'Questionamentos / Reprovação de Contas',
            url: 'portal/editais/1/5/0/0/0/55/0/0/0'
        },
        {
            name:'Resoluções',
            url: 'portal/editais/1/5/0/0/0/56/0/0/0'
        },

    ]
        
        urls.forEach(function(key) {
                
        if (window.location.href.indexOf(key.url) > -1) {          
            $('.ed_area_busca').remove()
            $('.sw_titulo_pagina').html(key.name)
            $('.sw_area_links_navegacao').html(`
            <a href="/"><div class="sw_navegacao"><i class="swfa fas fa-home" aria-hidden="true"></i><span class="sw_lato">Principal</span></div></a>
            <a href="https://lagoadaprata.mg.gov.br/parcerias"><div class="sw_navegacao"><i class="swfa fas fa-home" aria-hidden="true"></i><span class="sw_lato">MROSC - Parcerias</span></div></a>
            <a href="${window.location.href}"><div class="sw_navegacao"><i class="swfa fas fa-home" aria-hidden="true"></i><span class="sw_lato">${key.name}</span></div></a>`)
         }


         if (document.referrer.indexOf(key.url) > -1 && urls.includes({name : key.url})) {   
            
            var ItenName = $('.sw_area_links_navegacao a').eq(3).text()

            $('.ed_area_busca').remove()
            $('.sw_titulo_pagina').html(key.name)
            $('.sw_area_links_navegacao').html(`
            <a href="/"><div class="sw_navegacao"><i class="swfa fas fa-home" aria-hidden="true"></i><span class="sw_lato">Principal</span></div></a>
            <a href="https://lagoadaprata.mg.gov.br/parcerias"><div class="sw_navegacao"><i class="swfa fas fa-home" aria-hidden="true"></i><span class="sw_lato">MROSC - Parcerias</span></div></a>
            <a href="${document.referrer}"><div class="sw_navegacao"><i class="swfa fas fa-home" aria-hidden="true"></i><span class="sw_lato">${key.name}</span></div></a>
            <a href="${window.location.href}"><div class="sw_navegacao"><i class="swfa fas fa-home" aria-hidden="true"></i><span class="sw_lato">${ItenName}</span></div></a>`)
       
        }

});


if($('.sw_titulo_listagem').length > 0){

    $('.sw_titulo_listagem').each(function() {
        var endereco = $(this).find('.sw_txt_tooltip').attr('title')
        var title = $(this).text()
        
       $(this).html(`
       ${title} 
       <p style="font-size: 13px;font-weight: 700;">${endereco}</p>`)
      });

}




var urls = [{ 
          url : 'portal/servicos/1014/iptu-alvara-iss-e-outros-servicos/'
        },{
             url:'portal/servicos/1042/livro-eletronico/'
        },{
            url:'portal/servicos/1025/notas-fiscais-eletronicas/'
        }

    ]

urls.forEach(function(data) {

if (window.location.href.includes(data.url)) {          
$('.sw_item_menu ').each(function(i, obj) {
    //test]
    console.log(obj)
    $('.srv_descricao_servico').append(obj)
    
});
$('.sw_menu_internas').remove()

}

});





});