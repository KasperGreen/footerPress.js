$(document).ready(function() {
    $('head').append('<style>body>footer.pressed {position: absolute;bottom: 0;width: 100%;}</style>');
    footer_press();
});
$(window).resize(function() {
    footer_press();
});

function footer_press()
{
    if($('body').height() < $(window).height()) $('body>footer').addClass('pressed');
    else $('body>footer').removeClass('pressed')
    
}
