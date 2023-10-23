
import { dataSerie } from './data.js';

var seriesTable = document.getElementById('series');
loadDataSeries(dataSerie);
averageSeasons(dataSerie);
console.log(dataSerie);

function loadDataSeries(series) {
    series.forEach(function (serie) {
        var tr = document.createElement('tr');
        tr.setAttribute("class", "clickable");
        tr.onclick = function () {
            serieCard(serie);
        };
        tr.innerHTML = `
        <td><b>${serie.id}</b></td>
        <td><a href="#Card ${serie.name}">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
        seriesTable.querySelector('tbody').appendChild(tr);
    });
}

function averageSeasons(series) {
    var sum = 0;
    series.forEach(function (serie) {
        sum += serie.seasons;
    });
    var average = sum / series.length;
    var roundedAverage = Math.round(average * 100) / 100;
    var averageElement = document.getElementById('seasons');
    averageElement.innerHTML = `<b>Seasons average:</b> ${roundedAverage}`;
}

function serieCard(serie) {
    var serieCard = document.getElementById("serieCard");
    serieCard.innerHTML = "<img class=\"card-img-top\" src=\"".concat(serie.imageUrl, "\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\"><b>").concat(serie.name, "</b></h5>\n        <div class=\"card-content\">\n            <p>").concat(serie.description, "</p>\n        </div>\n        <div class=\"card-action\">\n            <a href=\"").concat(serie.website, "\" target=\"_blank\">").concat(serie.website, "</a>\n        </div>\n    </div>");
}
