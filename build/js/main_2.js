$(document).ready(function(){

    var $menu2 = $(".nav2");

    if(screen.width > 568) {
            $(window).scroll(function(){
            if ( $(this).scrollTop() > 100 && $menu2.hasClass("default") ){
                $menu2.fadeOut('fast',function(){
                    $(this).removeClass("default")
                            .addClass("fixed")
                            .fadeIn('fast');
                });
            } else if($(this).scrollTop() <= 100 && $menu2.hasClass("fixed")) {
                $menu2.fadeOut('fast',function(){
                    $(this).removeClass("fixed")
                            .addClass("default")
                            .fadeIn('fast');
                });
            }
        });//scroll
    }
});//jQuery

// // BEGIN JIVOSITE CODE {literal}
(function(){ 
    var widget_id = 'gxogUDKDJO';
    var d = document;
    var w = window;

    function l(){
        var s = document.createElement('script'); 
            s.type = 'text/javascript'; 
            s.async = true; 
            s.src = '//code.jivosite.com/script/widget/'+widget_id; 
        
        var ss = document.getElementsByTagName('script')[0]; 
            ss.parentNode.insertBefore(s, ss);
    }
    if(d.readyState == 'complete') {
        l();
    } else { if(w.attachEvent) {
        w.attachEvent('onload',l);
        } else { 
            w.addEventListener('load',l,false);
        }
    }
})();
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