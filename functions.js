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

    // Define a data de início com base no horário local
    var start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var end = new Date(current.getFullYear(), current.getMonth(), current.getDate());

    // Calcula a diferença em milissegundos
    var timeDiff = end - start;

    // Converte a diferença para dias
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Calcula a diferença exata de horas, minutos e segundos
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
        'Dia <span class="digit">' + days +
        '</span>, <span class="digit">' + hours +
        '</span> hrs, <span class="digit">' + minutes +
        '</span> min, <span class="digit">' + secs +
        '</span> seg';

    $('#clock').html(result);
}
