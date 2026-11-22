
$(document).ready(function () {

    // Ouvrir et fermer le menu mobile
    $("#menu-btn").click(function () {
        $("#menu").toggleClass("hidden");
    });

    // Fermer le menu après avoir cliqué sur un lien
    $("#menu a").click(function () {
        $("#menu").addClass("hidden");
    });

    // Animation d'apparition des sections
    $(window).on("scroll", function () {
        $(".section-container").each(function () {
            let position = $(this).offset().top;
            let hauteurFenetre = $(window).scrollTop() + $(window).height();

            if (hauteurFenetre > position + 100) {
                $(this).addClass("visible");
            }
        });
    });

    // Message dans la console
    console.log("Portfolio de Saki Djorou chargé avec succès !");
    $(window).trigger("scroll");
});
