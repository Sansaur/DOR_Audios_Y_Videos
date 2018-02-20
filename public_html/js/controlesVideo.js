$('document').ready(function () {
    $video = $('#vid');
    $audio = $('#audio');
    videoDOM = document.getElementById('vid');
    audioDOM = document.getElementById('audio');
    controlesDOM = document.getElementById('controles');
    todoDOM = document.getElementById('contVideo');
    isFullScreen = false;
    
    $video.on('ended',function(e){
        $('#botonPlayPausa').find('span').text('E');
       switch(videoActual){
           case "video1": document.getElementById('video2').click();break;
           case "video2": document.getElementById('video3').click();break;
           case "video3": document.getElementById('video1').click();break;
       }
       $('#botonPlayPausa').click();
    });
    
    $audio.on('ended',function(e){
        $('#botonPlayPausa').find('span').text('E');
       switch(musicaActual){
           case "musica1": document.getElementById('musica2').click();break;
           case "musica2": document.getElementById('musica3').click();break;
           case "musica3": document.getElementById('musica1').click();break;
       }
       $('#botonPlayPausa').click();
    });
});


function playPausa() {
    if ($video.is(':visible')) {
        if (videoDOM.paused) {
            videoDOM.play();
            $('#botonPlayPausa').find('span').text('F');
        } else {
            videoDOM.pause();
            $('#botonPlayPausa').find('span').text('E');
        }
    } else {
        if (audioDOM.paused) {
            audioDOM.play();
            //wavesurfer.play();

            $('#botonPlayPausa').find('span').text('F');
        } else {
            audioDOM.pause();
            //wavesurfer.pause();

            $('#botonPlayPausa').find('span').text('E');
        }
    }

}
function controlVideo(cambioSegundos) {
    if ($video.is(':visible')) {
        videoDOM.currentTime += cambioSegundos;

    } else {
        audioDOM.currentTime += cambioSegundos;
    }
}
function mutearVolumen() {
    if ($video.is(':visible')) {
        videoDOM.muted = !videoDOM.muted;
        if (videoDOM.muted) {
            $('#botonVolumen').find('span').text('C');
        } else {
            $('#botonVolumen').find('span').text('B');
        }
    } else {
        audioDOM.muted = !audioDOM.muted;
        if (audioDOM.muted) {
            $('#botonVolumen').find('span').text('C');
        } else {
            $('#botonVolumen').find('span').text('B');
        }
    }

}
function pantallaCompleta() {
    if ($video.is(':visible')) {
        $('#contVideo').bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function (e) {
            var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
            var event = state ? 'FullscreenOn' : 'FullscreenOff';
            if (event == "FullscreenOn") {
                $('contVideo').css({
                    position: "absolute",
                    top: "0%",
                    left: "0%",
                    minWidth: "100%",
                    minHeight: "100%",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    marginLeft: "0%"
                });
                $('video').css({
                    position: "",
                    top: "0%",
                    left: "0%",
                    minWidth: "75vw",
                    minHeight: "75vh",
                    maxWidth: "75vw",
                    maxHeight: "75vh",
                    marginLeft: "0%"
                });
            } else {
                $('contVideo').css({
                    position: "",
                    top: "0%",
                    left: "0%",
                    minWidth: "75%",
                    minHeight: "auto",
                    maxWidth: "75%",
                    maxHeight: "auto",
                    marginLeft: "0%"
                });
                $('video').css({
                    position: "",
                    top: "",
                    left: "",
                    minWidth: "",
                    minHeight: "",
                    maxWidth: "",
                    maxHeight: "",
                    marginLeft: ""
                });
            }
        });
        if (todoDOM.requestFullscreen) {
            todoDOM.requestFullscreen();
        } else if (todoDOM.mozRequestFullScreen) {
            todoDOM.mozRequestFullScreen();
        } else if (todoDOM.webkitRequestFullScreen) {
            todoDOM.webkitRequestFullScreen();
        } else if (todoDOM.msRequestFullscreen) {
            todoDOM.msRequestFullscreen();
        }
        /*
         $('video').css({
         position: "absolute",
         top: "0%",
         left: "0%",
         minWidth: "77vw",
         minHeight: "77vh",
         maxWidth: "none",
         maxHeight: "none",
         marginLeft: "11.5%"
         });
         */

        /*
         $('#controles').css({
         position: "absolute",
         bottom: "0%",
         left: "0%",
         width: "77vw",
         minWidth: "50vw",
         minHeight: "10",
         marginLeft: "11.5%",
         zIndex: "100"
         });
         */
    } else {

    }

}
function activarSubtitulos() {
    if(videoActual === "video3"){
        switch(videoDOM.textTracks[0].mode){
            case "showing": videoDOM.textTracks[0].mode = 'hidden';$('#botonSubtitulos').css({backgroundColor:""});break;
            case "hidden": videoDOM.textTracks[0].mode = 'showing';$('#botonSubtitulos').css({backgroundColor:"red"});break;
        }
        
    }
}
function descargarVideo() {
}