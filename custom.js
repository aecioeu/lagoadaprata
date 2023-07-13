

$(document).ready(function () {
    //urls em que sera supimida a busca
    var urls = [
        'portal/editais/1/5/0/0/0/51/0/0/0/',
        ''];
    if (urls.some(function(v) { return window.location.href.indexOf(v) > -1 })) {

       $('.ed_area_busca').remove()
       $('.sw_titulo_pagina sw_ubuntu_light').text('MROSC - Parcerias')
       $('.sw_area_links_navegacao').html(`<a href="/"><div class="sw_navegacao"><i class="swfa fas fa-home" aria-hidden="true"></i><span class="sw_lato">Principal</span></div></a>
       <a href="${window.location.href}"><div class="sw_navegacao"><i class="swfa fas fa-home" aria-hidden="true"></i><span class="sw_lato">MROSC - Parcerias</span></div></a>`)
    }


});