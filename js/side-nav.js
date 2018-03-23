$(document).ready(function () {
    $("#sidenav").mCustomScrollbar({
        theme: "minimal"
    });
    $('#sidenavOpen').on('click', function () {
        $('#sidenav').addClass('active');
        $('.overlay').fadeIn();
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $('#dismiss, .overlay').on('click', function () {
      $('#sidenav').removeClass('active');
      $('.overlay').fadeOut();
    });
});