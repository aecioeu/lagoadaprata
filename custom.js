

$(document).ready(function () {
    //urls em que sera supimida a busca
    var urls = [
        'portal/editais/1/5/0/0/0/51/0/0/0/',
        ''];
    if (urls.some(function(v) { return window.location.href.indexOf(v) > -1 })) {

       $('.ed_area_busca').remove()
    }


});