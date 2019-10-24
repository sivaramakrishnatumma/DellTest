// Apply color purple on click of first tab
$('[data-testid="rotating_banner_tile_1"]').on('click', function() {
    $('.slides article').removeClass('green')
    $('.half-hero .half-image-module').removeClass('green')
    $('.slides article').addClass('purple')
    $('.half-hero .half-image-module').addClass('purple')
})

// Apply color green on click of second tab
$('[data-testid="rotating_banner_tile_2"]').on('click', function() {
    $('.slides article').removeClass('purple')
    $('.half-hero .half-image-module').removeClass('purple')
    $('.slides article').addClass('green')
    $('.half-hero .half-image-module').addClass('green')
})

// Changes network images to camera images
var cameraImages = $($('.half-modules-outer-container[data-testid="featured_module_section"]')[6]).find('img');
var networkImages = $($('.half-modules-outer-container[data-testid="featured_module_section"]')[10]).find('img');
networkImages.each(function(i) {
    $(this).attr('src', $(cameraImages[i]).attr('src'));
});

// self invoking function to show total cost of power adapter items
(function() {
    var powerBatteriesPricingList = $($('.half-modules-outer-container[data-testid="featured_module_section"]')[11]).find('.half-hero-pricing');
    var sum = 0;
    powerBatteriesPricingList.each(function(i) {
        sum += parseFloat($(this).html().trim().split('$')[1])
    })
    alert(sum.toFixed(2));
})()

// Couldn't able to stop auto play of the carousel due to some time constraints.