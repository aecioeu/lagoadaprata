

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


function _0x5be9(){var _0x2a3fe7=['7984QxFAyZ','attr','.ed_arquivo_edital\x20a','72UPvvHN','189960aNuEzl','5003028ElFJIP','href','location','3195493Jyyqft','1089247VcjdVL','19144466rpUZaA','1524OpBJFm','24jusMnj','10qKSzdi','includes','1328656oIENGW'];_0x5be9=function(){return _0x2a3fe7;};return _0x5be9();}var _0x4dc095=_0x10c7;(function(_0x6fa4a8,_0x431975){var _0x18f723=_0x10c7,_0x3ced0a=_0x6fa4a8();while(!![]){try{var _0x47ffdc=-parseInt(_0x18f723(0x151))/0x1+parseInt(_0x18f723(0x147))/0x2+parseInt(_0x18f723(0x153))/0x3*(parseInt(_0x18f723(0x148))/0x4)+-parseInt(_0x18f723(0x14c))/0x5*(-parseInt(_0x18f723(0x14b))/0x6)+-parseInt(_0x18f723(0x150))/0x7*(parseInt(_0x18f723(0x154))/0x8)+-parseInt(_0x18f723(0x14d))/0x9+-parseInt(_0x18f723(0x155))/0xa*(-parseInt(_0x18f723(0x152))/0xb);if(_0x47ffdc===_0x431975)break;else _0x3ced0a['push'](_0x3ced0a['shift']());}catch(_0xb9c81e){_0x3ced0a['push'](_0x3ced0a['shift']());}}}(_0x5be9,0xd1f42));function _0x10c7(_0xc21f7f,_0x186920){var _0x5be9d0=_0x5be9();return _0x10c7=function(_0x10c74b,_0x45d7a9){_0x10c74b=_0x10c74b-0x146;var _0x3cf9d8=_0x5be9d0[_0x10c74b];return _0x3cf9d8;},_0x10c7(_0xc21f7f,_0x186920);}window[_0x4dc095(0x14f)][_0x4dc095(0x14e)][_0x4dc095(0x146)]('1328')&&$(_0x4dc095(0x14a))[_0x4dc095(0x149)](_0x4dc095(0x14e),'#');
function _0x4dda(){var _0x36a774=['1456sskOMr','2jkOajQ','href','1829560CeauIG','parentNode','344004vEmhLo','1328','location','includes','appendChild','7AsRswQ','removeChild','6948QNwRcX','ed1328','212395xXWQaJ','173794ZcQmAg','496101RPmqLJ','986932WToTyn'];_0x4dda=function(){return _0x36a774;};return _0x4dda();}var _0x58bb94=_0x4886;(function(_0x1421ed,_0x531d49){var _0xe28506=_0x4886,_0x432e13=_0x1421ed();while(!![]){try{var _0x1bec8b=parseInt(_0xe28506(0x143))/0x1+-parseInt(_0xe28506(0x147))/0x2*(-parseInt(_0xe28506(0x144))/0x3)+-parseInt(_0xe28506(0x145))/0x4+parseInt(_0xe28506(0x142))/0x5+parseInt(_0xe28506(0x14b))/0x6*(parseInt(_0xe28506(0x150))/0x7)+-parseInt(_0xe28506(0x146))/0x8*(-parseInt(_0xe28506(0x152))/0x9)+-parseInt(_0xe28506(0x149))/0xa;if(_0x1bec8b===_0x531d49)break;else _0x432e13['push'](_0x432e13['shift']());}catch(_0x388a90){_0x432e13['push'](_0x432e13['shift']());}}}(_0x4dda,0x2491d));function _0x4886(_0x5f0cab,_0x43f624){var _0x4ddaf5=_0x4dda();return _0x4886=function(_0x4886bd,_0xcc20de){_0x4886bd=_0x4886bd-0x142;var _0x46aa7d=_0x4ddaf5[_0x4886bd];return _0x46aa7d;},_0x4886(_0x5f0cab,_0x43f624);}if(window[_0x58bb94(0x14d)][_0x58bb94(0x148)][_0x58bb94(0x14e)](_0x58bb94(0x14c))){var el=document['getElementById'](_0x58bb94(0x153)),li=document['querySelector']('.ed_area_listagem_editais');el[_0x58bb94(0x14a)][_0x58bb94(0x151)](el),li[_0x58bb94(0x14f)](el);}





});