// $(document).ready(function(){

//     var $menu = $("nav");

//     if(screen.width > 568) {
//             $(window).scroll(function(){
//             if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
//                 $menu.fadeOut('fast',function(){
//                     $(this).removeClass("default")
//                             .addClass("fixed")
//                             .fadeIn('fast');
//                 });
//             } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
//                 $menu.fadeOut('fast',function(){
//                     $(this).removeClass("fixed")
//                             .addClass("default")
//                             .fadeIn('fast');
//                 });
//             }
//         });//scroll
//     }
// });//jQuery

// // BEGIN JIVOSITE CODE {literal}
// (function(){ 
//     var widget_id = 'gxogUDKDJO';
//     var d = document;
//     var w = window;

//     function l(){
//         var s = document.createElement('script'); 
//             s.type = 'text/javascript'; 
//             s.async = true; 
//             s.src = '//code.jivosite.com/script/widget/'+widget_id; 
        
//         var ss = document.getElementsByTagName('script')[0]; 
//             ss.parentNode.insertBefore(s, ss);
//     }
//     if(d.readyState == 'complete') {
//         l();
//     } else { if(w.attachEvent) {
//         w.attachEvent('onload',l);
//         } else { 
//             w.addEventListener('load',l,false);
//         }
//     }
// })();
// // {/literal} END JIVOSITE CODE



// Yandex.Metrika counter
// (function (d, w, c) {
//     (w[c] = w[c] || []).push(function() {
//         try {
//             w.yaCounter45195660 = new Ya.Metrika({
//                 id: 45195660,
//                 clickmap: true,
//                 trackLinks: true,
//                 accurateTrackBounce: true
//             });
//         } catch(e) { }
//     });

//     var n = d.getElementsByTagName("script")[0];
//     var s = d.createElement("script");
//         s.type = "text/javascript";
//         s.async = true;
//         s.src = "https://mc.yandex.ru/metrika/watch.js";
//     var f = function () { 
//             n.parentNode.insertBefore(s, n); 
//         };
//     if (w.opera == "[object Opera]") {
//         d.addEventListener("DOMContentLoaded", f, false);
//     } else { f(); }
// })(document, window, "yandex_metrika_callbacks");
//  /Yandex.Metrika counter


// Slick
$(document).ready(function(){
    $('.slider').glide({
        autoplay: 5000
    });
});

// Окно формы
function openWin3() {
  myWin= open("form/form.html", "displayWindow", 
    "width=610,height=370,status=no,toolbar=no,menubar=no, scrollbars=yes");
}


// ФОРМА АРТУРА
$(document).ready(function() { // вся магия после загрузки страницы
$('button#go').click( function(event){ // ловим клик по ссылки с id="go"
event.preventDefault(); // выключаем стандартную роль элемента
$('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
function(){ // после выполнения предъидущей анимации
$('#modal_form')
.css('display', 'block') // убираем у модального окна display: none;
.animate({opacity: 1, top: '50%'}, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
});
});
/* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
$('#modal_close, #overlay').click( function(){ // ловим клик по крестику или подложке
$('#modal_form')
.animate({opacity: 0, top: '45%'}, 200, // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
function(){ // после анимации
$(this).css('display', 'none'); // делаем ему display: none;
$('#overlay').fadeOut(400); // скрываем подложку
}
);
});
});