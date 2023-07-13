

$(document).ready(function () {
    //urls em que sera supimida a busca
    var urls = [{ name: "Justificativa de Ausência",
          url : 'portal/editais/1/5/0/0/0/51/0/0/0/'
        },{
            name:'Termos de Fomento, Colaboração e Acordo de Cooperação',
            url:'portal/editais/1/5/0/0/0/54/0/0/0/'
        },{
            name:'Editais de Credenciamento',
            url: 'portal/editais/1/5/0/0/0/52/0/0/0'
        }
    ]
        

        urls.forEach(function(key) {
           console.log(key)

           if (window.location.href.indexOf(key.url) > -1) {
            
            $('.ed_area_busca').remove()
            $('.sw_titulo_pagina').html(key.name)
            $('.sw_area_links_navegacao').html(`
            <a href="/"><div class="sw_navegacao"><i class="swfa fas fa-home" aria-hidden="true"></i><span class="sw_lato">Principal</span></div></a>
            <a href="https://lagoadaprata.mg.gov.br/parcerias"><div class="sw_navegacao"><i class="swfa fas fa-home" aria-hidden="true"></i><span class="sw_lato">MROSC - Parcerias</span></div></a>
            <a href="${window.location.href}"><div class="sw_navegacao"><i class="swfa fas fa-home" aria-hidden="true"></i><span class="sw_lato">${key.name}</span></div></a>`)
         }


        });




});