//= plugins.js
$(document).ready(function() {

	// sliders
	$('[data-slick]').each(function () {
        var self = $(this);
        if(self.hasClass('slick-initialized')){
            return;
        }
        var slickConfig = $.parseJSON(self.attr('data-slick'));

				if (self.attr('data-slick-count')) {
					var countBlock = self.attr('data-slick-count');
					self.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	        var i = (currentSlide ? currentSlide : 0) + 1;
	        $(countBlock).html('<span>' + i + '</span>/' + slick.slideCount);
	    		});
				}

        self.slick(slickConfig);
    });

	// lightbox
	$('.photo-slider__item').magnificPopup({
	  type: 'image',
	  gallery:{
	    enabled:true,
			tCounter : '',
			tPrev : 'Предыдущая фотография',
			tNext : 'Следующая фотография'
	  },
		closeMarkup : '<button type="button" class="mfp-close"></button>',
		preload: [2,2]
	});

	$('.products-button').on('click', 'li', function () {
		var productNum = $(this).attr('data-product');

		$('.products-item, .products-button li').removeClass('_active');

		$(this).addClass('_active');
		$('.products-item[data-product="' + productNum + '"]').addClass('_active');
	});
});
