var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
	var newWidth = $win.width();
	var newHeight = $win.height();
	if (newWidth != clientWidth && newHeight != clientHeight) {
		location.replace(location);
	}
});

(function ($) {
	$.fn.typewriter = function () {
		this.each(function () {
			var $ele = $(this),
				str = $ele.html(),
				progress = 0;
			$ele.html('');
			var timer = setInterval(function () {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 30);
		});
		return this;
	};
})(jQuery);

function timeElapse(date) {
    var current = new Date();

    // Usa apenas a data para contar os dias completos
    var utc1 = Date.UTC(current.getFullYear(), current.getMonth(), current.getDate());
    var utc2 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    var days = Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24));

    // Agora calcula as horas/minutos/segundos
    var diff = current.getTime() - date.getTime();
    var seconds = Math.floor(diff / 1000);
    var hours = Math.floor((seconds % (3600 * 24)) / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var secs = seconds % 60;

    // Formata para 2 dígitos
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secs = secs < 10 ? "0" + secs : secs;

    var result =
        'Day <span class="digit">' + days +
        '</span>, <span class="digit">' + hours +
        '</span> hrs, <span class="digit">' + minutes +
        '</span> min, <span class="digit">' + secs +
        '</span> sec';

    $('#clock').html(result);
}
