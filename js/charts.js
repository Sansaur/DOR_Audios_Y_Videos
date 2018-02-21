/*
 * **********************************************************************
 * *********************** GOOGLE CHARTS ********************************
 * **********************************************************************
 */
// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages': ['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
//google.charts.setOnLoadCallback(montarGraficoBarras);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
/*
 function drawChart() {
 
 // Create the data table.
 var data = new google.visualization.DataTable();
 data.addColumn('string', 'Topping');
 data.addColumn('number', 'Slices');
 data.addRows([
 ['Mushrooms', 3],
 ['Onions', 1],
 ['Olives', 1],
 ['Zucchini', 1],
 ['Pepperoni', 2]
 ]);
 
 // Set chart options
 var options = {'title': 'How Much Pizza I Ate Last Night',
 'width': 400,
 'height': 300};
 
 // Instantiate and draw our chart, passing in some options.
 var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
 chart.draw(data, options);
 }
 */

function montarGraficoTarta() {
    var arrayPeliculas = JSON.parse(localStorage.getItem('listaPeliculas'));
    var arrayPeliculasEnvio = new Array();
    for (var i in arrayPeliculas) {
        var peli = arrayPeliculas[i];
        peli.votos = recibirVotos(peli.ID);
        var stringVotos = (peli.votos === 1) ? "voto" : "votos";
        arrayPeliculasEnvio.push(peli);
    }

    // CREACIÓN DE LA GRÁFICA DE GOOGLE CHARTS
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Pelicula');
    data.addColumn('number', 'Votos');
    data.addRows(sacarArrayDatosDePelicula(arrayPeliculasEnvio));
    // Set chart options
    var options = {
        'title': 'Porcentual de votos',
        'width': 600,
        'height': 400
    };
    // Instantiate and draw our chart, passing in some options.
    // Fijarse en PieChart
    var chart = new google.visualization.PieChart(document.getElementById('google_charts_tarta'));
    chart.draw(data, options);
}
function montarGraficoBarras() {
    var arrayPeliculas = JSON.parse(localStorage.getItem('listaPeliculas'));
    var arrayPeliculasEnvio = new Array();
    for (var i in arrayPeliculas) {
        var peli = arrayPeliculas[i];
        peli.votos = recibirVotos(peli.ID);
        var stringVotos = (peli.votos === 1) ? "voto" : "votos";
        arrayPeliculasEnvio.push(peli);
    }

    // CREACIÓN DE LA GRÁFICA DE GOOGLE CHARTS
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Pelicula');
    data.addColumn('number', 'Votos');
    data.addRows(sacarArrayDatosDePelicula(arrayPeliculasEnvio));
    // Set chart options
    var options = {
        'title': 'Porcentual de votos',
        'width': 600,
        'height': 400
    };
    // Instantiate and draw our chart, passing in some options.
    // Fijarse en BarChart
    var chart = new google.visualization.BarChart(document.getElementById('google_charts_barras'));
    chart.draw(data, options);
}
function montarGraficoBarrasVerticales() {
    var arrayPeliculas = JSON.parse(localStorage.getItem('listaPeliculas'));
    var arrayPeliculasEnvio = new Array();
    for (var i in arrayPeliculas) {
        var peli = arrayPeliculas[i];
        peli.votos = recibirVotos(peli.ID);
        var stringVotos = (peli.votos === 1) ? "voto" : "votos";
        arrayPeliculasEnvio.push(peli);
    }

    // CREACIÓN DE LA GRÁFICA DE GOOGLE CHARTS
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Pelicula');
    data.addColumn('number', 'Votos');
    data.addRows(sacarArrayDatosDePelicula(arrayPeliculasEnvio));
    // Set chart options
    var options = {
        'title': 'Porcentual de votos',
        'width': 600,
        'height': 400
    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('google_charts_verticales'));
    chart.draw(data, options);
}
function montarGraficoDonut() {
    var arrayPeliculas = JSON.parse(localStorage.getItem('listaPeliculas'));
    var arrayPeliculasEnvio = new Array();
    for (var i in arrayPeliculas) {
        var peli = arrayPeliculas[i];
        peli.votos = recibirVotos(peli.ID);
        var stringVotos = (peli.votos === 1) ? "voto" : "votos";
        arrayPeliculasEnvio.push(peli);
    }

    // CREACIÓN DE LA GRÁFICA DE GOOGLE CHARTS
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Pelicula');
    data.addColumn('number', 'Votos');
    data.addRows(sacarArrayDatosDePelicula(arrayPeliculasEnvio));
    // Set chart options
    var options = {
        'title': 'Porcentual de votos',
        'width': 600,
        'height': 400,
        pieHole: 0.4
    };
    // Instantiate and draw our chart, passing in some options.
    // Fijarse en PieChart y en pieHole en las opciones
    var chart = new google.visualization.PieChart(document.getElementById('google_charts_donut'));
    chart.draw(data, options);
}

function sacarArrayDatosDePelicula(arrayPeliculas) {
    /*
     *  retornar esto
     [
     [arrayPeliculasEnvio[0].titulo, arrayPeliculasEnvio[0].votos],
     [arrayPeliculasEnvio[1].titulo, arrayPeliculasEnvio[1].votos],
     [arrayPeliculasEnvio[2].titulo, arrayPeliculasEnvio[2].votos],
     [arrayPeliculasEnvio[3].titulo, arrayPeliculasEnvio[3].votos],
     [arrayPeliculasEnvio[4].titulo, arrayPeliculasEnvio[4].votos],
     [arrayPeliculasEnvio[5].titulo, arrayPeliculasEnvio[5].votos],
     [arrayPeliculasEnvio[6].titulo, arrayPeliculasEnvio[6].votos],
     [arrayPeliculasEnvio[7].titulo, arrayPeliculasEnvio[7].votos],
     [arrayPeliculasEnvio[8].titulo, arrayPeliculasEnvio[8].votos],
     [arrayPeliculasEnvio[9].titulo, arrayPeliculasEnvio[9].votos]
     ]
     */
    var arrayRetorno = new Array();
    for (var i in arrayPeliculas) {
        arrayRetorno[i] = [];
        arrayRetorno[i][0] = arrayPeliculas[i].titulo;
        arrayRetorno[i][1] = arrayPeliculas[i].votos;
    }
    return arrayRetorno;
}