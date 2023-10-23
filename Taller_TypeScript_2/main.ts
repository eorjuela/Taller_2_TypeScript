
import { Serie } from './serie.js';
import { dataSerie } from './data.js';

let seriesTable: HTMLElement = document.getElementById('series')!;

loadDataSeries(dataSerie);
averageSeasons(dataSerie);
console.log(dataSerie);

function loadDataSeries(series: Serie[]): void {
    series.forEach(serie => {
        let tr: HTMLElement = document.createElement('tr');
        tr.setAttribute("class", "clickable");
        tr.onclick = function () {
            serieCard(serie);
        };
        tr.innerHTML = `
        <td><b>${serie.id}</b></td>
        <td><a href="#Card ${serie.name}">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
        seriesTable.querySelector('tbody')?.appendChild(tr);
    });
}

function averageSeasons(series: Serie[]): void {
    let sum: number = 0;
    series.forEach(serie => {
        sum += serie.seasons;
    });
    let average: number = sum / series.length;
    let roundedAverage: number = Math.round(average * 100) / 100;
    let averageSeasons: HTMLElement = document.getElementById('seasons')!;
    averageSeasons.innerHTML = `<b>Seasons average:</b> ${roundedAverage}`;
}

function serieCard(serie: Serie): void {
    let serieCard: HTMLElement = document.getElementById("serieCard")!;
    serieCard.innerHTML = `<img class="card-img-top" src="${serie.imageUrl}">
    <div class="card-body">
        <h5 class="card-title"><b>${serie.name}</b></h5>
        <div class="card-content">
            <p>${serie.description}</p>
        </div>
        <div class="card-action">
            <a href="${serie.website}" target="_blank">${serie.website}</a>
        </div>
    </div>`;
}
