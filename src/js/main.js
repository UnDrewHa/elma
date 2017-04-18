//= plugins.js
$(document).ready(function() {
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
});
