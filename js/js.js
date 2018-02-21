
var videoActual = "video1";
var musicaActual = "musica1";
var subtitles;
$('document').ready(function () {
    subtitles = document.getElementById('Subtitulos');
    $('#audio').hide();
    $('#waveform').hide();
    $('#vid').show();
	let contador = 1;
	// Iniciamos estilo de triangulo de volumenes
	$('#barritaVolumen .vol').each(function(e){
		var altura = 5 * contador;
		$(this).css({height:altura+"%"});
			contador++;
	});
	//
    esconderSubtitulos();
    wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    $('#botonPlayPausa').click(playPausa);
    $('#botonAtras').click(function () {
        controlVideo(-10);
    });
    $('#botonAdelante').click(function () {
        controlVideo(10);
    });
    $('#botonVolumen').click(mutearVolumen);
    $('#botonFullscreen').click(pantallaCompleta);
    $('#botonSubtitulos').click(activarSubtitulos);
    $('#botonDescarga').click(descargarVideo);

    $('#vid').on('timeupdate', function (e) {
        var duracion = e.target.duration;
        if (Number.isNaN(duracion)) {
            duracion = 0;
        }
        $('#tiempo').text(Math.floor(e.target.currentTime) + "/" + Math.floor(duracion));
        var porcentajeActual = (e.target.currentTime * 100 / e.target.duration);
        $('#barritaCarga').css({
            width: porcentajeActual + "%"
        });
    });
    $('#audio').on('timeupdate', function (e) {
        var duracion = e.target.duration;
        if (Number.isNaN(duracion)) {
            duracion = 0;
        }
        $('#tiempo').text(Math.floor(e.target.currentTime) + "/" + Math.floor(duracion));
        var porcentajeActual = (e.target.currentTime * 100 / e.target.duration);
        $('#barritaCarga').css({
            width: porcentajeActual + "%"
        });
    });

    $('.vol').click(function (e) {
        $('.vol').removeClass('marcado');
        console.log(e.target.id);
        var vol = parseInt(e.target.id.substring(1, e.target.id.length));
        var porcentaje = vol * 5;
        videoDOM = document.getElementById('vid');
        videoDOM.volume = porcentaje / 100;
        for (var i = 0; i < vol + 1; i++) {
            $('#v' + i).addClass('marcado');
        }
    });

    /*
     * ESTA ES LA MANERA CORRECTA DE HACER UN LOOP SOBRE COSAS DE JQUERY
     * HAY QUE USAR $().EACH Y LUEGO $(THIS)
     * QUIZÁS NO SEA LA MANERA CORRECTA DE COMO ASIGNAR LOS EVENTOS
     * PERO SI LA DE HACER EL LOOP
     */
    var assocVideos = {
        "video1":"sintel",
        "video2":"trailer",
        "video3":"video3",
        "musica1":"musica1",
        "musica2":"musica2",
        "musica3":"musica3"
};
    var arrayPostersVideos = {
        "video1":"poster_video1",
        "video2":"poster_video2",
        "video3":"poster_video3"
    };
	var contadorPoster = 0;
    $('.botonVideo').each(function (index) {
        $(this).click(function (e) {
            if ($(this).attr('id').includes('video')) {
                preparar(true);
                $('#vid').find('source').attr('src', 'videos/' + assocVideos[$(this).attr('id')] + '.mp4');
                $('#vid').attr('poster', 'img/' + arrayPostersVideos[$(this).attr('id')] + '.PNG');
				contadorPoster++;
                document.getElementById('vid').load();
                $('#' + $(this).attr('id')).find('.fuente').text('E');
                $('#botonPlayPausa').find('span').text('E');
                videoActual = $(this).attr('id');
				$(this).addClass('reproduciendose');
            } else {
                preparar(false);
                $('#audio').find('source').attr('src', 'videos/' + assocVideos[$(this).attr('id')] + '.mp3');
                document.getElementById('audio').load();
                $('#' + $(this).attr('id')).find('.fuente').text('E');
                $('#botonPlayPausa').find('span').text('E');
                wavesurfer.load('videos/' + assocVideos[$(this).attr('id')] + '.mp3');
                musicaActual = $(this).attr('id');
				$(this).addClass('reproduciendose');
            }
        });
    });
});

function vaciadoFuentes() {
    $('.botonVideo').find('.fuente').text('F');
}
function pausarTodo() {

    $('#vid').get(0).pause();
    $('#audio').get(0).pause();
}
function esconderSubtitulos() {
    for (var i = 0; i < videoDOM.textTracks.length; i++) {
        videoDOM.textTracks[i].mode = 'hidden';
    }
    $('#botonSubtitulos').css({backgroundColor: ""});
}

function limpiarBarra() {
    $('#barritaCarga').css({
        width: "100%"
    });
}

function preparar(isVideo) {
    esconderSubtitulos();
    limpiarBarra();
	$('#'+videoActual).removeClass('reproduciendose');
	$('#'+musicaActual).removeClass('reproduciendose');
    if (isVideo) {
        pausarTodo();
        $('#audio').hide();
        $('#waveform').hide();
        $('#vid').show();
        vaciadoFuentes();
    } else {
        pausarTodo();
        $('#audio').show();
        $('#waveform').show();
        $('#vid').hide();
        vaciadoFuentes();
    }
}