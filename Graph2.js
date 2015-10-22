google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Dogs', 'Cats', 'Birds'],
        ['2011',245, 161, 17],
        ['2012', 6, 0, 0],
        ['2013', 8, 19, 12]
    ]);

    var options = {
        chart: {
            title: 'EValley',
            subtitle: 'EValley Intake: 2011-13'
        },
        bars: 'vertical',
        vAxis: {format: 'decimal'},
        height: 400,
        colors: ['#1b9e77', '#d95f02', '#7570b3']
    };

    var chart = new google.charts.Bar(document.getElementById('chart2_div'));

    chart.draw(data, google.charts.Bar.convertOptions(options));


}

