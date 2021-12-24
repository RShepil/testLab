$(document).ready(function(){
    $('.slider').slick({
        dots:true,
        adadtiveHeight:true,
        slidesToShow:3,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 377,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
})