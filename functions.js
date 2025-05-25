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
    const now = new Date();

    // Define ambas as datas para meia-noite (ignora horas, minutos, etc.)
    const start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const current = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Cálculo correto da diferença em dias completos
    const diffTime = current.getTime() - start.getTime();
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Agora calcula a diferença em tempo para mostrar horas, minutos e segundos
    const fullDiff = now.getTime() - date.getTime();
    let seconds = Math.floor(fullDiff / 1000);
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    // Formatação
    const pad = (n) => (n < 10 ? '0' + n : n);

    const result = `Day <span class="digit">${days}</span>, <span class="digit">${pad(hours)}</span> hrs, <span class="digit">${pad(minutes)}</span> min, <span class="digit">${pad(seconds)}</span> sec`;

    $('#clock').html(result);
}
