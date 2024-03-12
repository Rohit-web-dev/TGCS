$(document).ready(function () {


	// slick carousal
	// responsive config for slick
	const responsive = [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 770,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	];

	$('#slick-slider-1').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		responsive: responsive
	});

	$('#slick-slider-2').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: false,
		nextArrow: false,
		dots: true,
		responsive: responsive
	});

	setTimeout(() => {
		$('.slick-init').css('opacity', 1)
	}, 100);
});




/*
onclick="document.getElementsByClassName('banner-main')[0].scrollIntoView();"
*/