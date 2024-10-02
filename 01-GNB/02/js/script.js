$(function () {
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");
    const duration = 300;

    //gnb

    $menu.on("click", function () {
        $submenu.stop().slideDown(duration);
    });
    $menu.on("click", function () {
        $submenu.stop().slideUp(duration);
    });
});
