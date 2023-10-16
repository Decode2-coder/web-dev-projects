$(document).ready(function () {
    // Initially load the first image
    var initialImage = $('.gallery-thumbnails img:first').data('large');
    $('#main-image').attr('src', initialImage);

    // Function to change the main image with fading effect
    function changeImageWithFade(newSrc) {
        $('#main-image').fadeOut(300, function () {
            $(this).attr('src', newSrc).fadeIn(300);
        });
    }

    // Function to change the main image with sliding effect
    function changeImageWithSlide(newSrc) {
        $('#main-image').slideUp(300, function () {
            $(this).attr('src', newSrc).slideDown(300);
        });
    }

    // Handle thumbnail clicks
    $('.gallery-thumbnails img').on('click', function () {
        var largeImage = $(this).data('large');
        
        // You can choose either fading or sliding effect
        // changeImageWithFade(largeImage);
        changeImageWithSlide(largeImage);
    });
});
