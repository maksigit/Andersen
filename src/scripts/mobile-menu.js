$('.mobile-menu').on('click', function () {
    $('.hide-menu, .hide-menu__item-close').show();
});

$('.hide-menu__item-close, .hide-menu__link').on('click', function () {
    $('.hide-menu, .hide-menu__item-close').hide();
});