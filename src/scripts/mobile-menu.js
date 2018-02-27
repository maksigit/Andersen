$('.mobile-menu').on('click', function () {
    $('.hide-menu').show();
});

$('.hide-menu__item-close, .hide-menu__link').on('click', function () {
    $('.hide-menu').hide();
});