// overlay

// Copyright 2013 Moshe Kolodny
// Released under the MIT license

function overlay(options) {
	var $overlay;
	
	options = $.extend({
		speed: 500,
		html: ''
	}, options);
	
	$overlay = $('<div>')
		.css({
			position: 'fixed',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			zIndex: 1041,
			backgroundColor: options.backgroundColor || '#000',
			opacity: options.opacity || 0.8
		})
		.hide()
		.appendTo(document.body)
		.fadeIn(options.speed);
	
	if (options.html) {
		$overlay
			.append(
				$('<div>').css({
					display: 'table',
					width: '100%',
					height: '100%'
				}).append(
					$('<div>').css({
						display: 'table-cell',
						verticalAlign: 'middle',
						textAlign: 'center',
					}).append(
						$('<div class="overlay-div">' + options.html + '</div>').css({
							display: 'inline-block',
							backgroundColor: '#FFF'
						})
					)
				)
			);
	}
	
	return function(speed) {
		$overlay.fadeOut(arguments.length ? speed : options.speed, function() {
			$overlay.remove();
		});
	}
}
