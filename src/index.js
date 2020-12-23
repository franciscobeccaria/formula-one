import Router from './router.js';
import { UI } from './js.js';
import {
  CURRENT_SEASON,
  HEADER_NAV,
  CLOSE_MENU,
  TOGGLE_MENU,
  TOGGLE_SEARCH,
  SEARCH_MODAL,
  CLOSE_SEARCH_MODAL,
  CONTAINER,
} from './globalVariables.js';

TOGGLE_MENU.addEventListener('click', () => {
  HEADER_NAV.classList.add('show-modal-menu');
});

CLOSE_MENU.addEventListener('click', () => {
  HEADER_NAV.classList.remove('show-modal-menu');
});

TOGGLE_SEARCH.addEventListener('click', () => {
  SEARCH_MODAL.classList.remove('no-show');
  document.getElementById('search-input').focus();
});

CLOSE_SEARCH_MODAL.addEventListener('click', () => {
  SEARCH_MODAL.classList.add('no-show');
});

class MainHtml {
  static getHome() {
    return `
        <section class="last-race-section">
            <div class="div-title center" style="flex-direction: column;">
                <h2 id="last-race-title"></h2>
                <h4>Last race</h4>
            </div>
            <div class="div-container">
                <div id="last-race-info" class="div-info">
                    <div class="loader"></div>
                </div>
                <div class="div-table">
                    <table id="last-race-rankings"></table>
                </div>
            </div>
        </section>
        <section>
            <div class="div-title center">
                <h2>Standings Preview</h2>
            </div>
            <div class="standings-tables">
                <table id="home-drivers-rankings"></table>
                <table id="home-teams-rankings"></table>
            </div>
            <div class="div-title center">
                <button id="see-complete-standings-btn">See Complete Standings</button>
            </div>
        </section>
    `;
  }
  static getDriver() {
    return `
        <section class="driver-page">
            <div id="driver-card-container" class="driver-card-container">
                <div class="loader"></div>
            </div>
            <div>
                <table id="driver-page-table"></table>
            </div>
        </section>
    `;
  }
  static getTeam() {
    return `
        <section id="section-team-page" class="section-team-page"></section>
    `;
  }
  static getStandings() {
    return `
        <section class="season-title-container">
            <div class="div-title center"><h1>Season info</h1></div>
            <p class="center"><strong>Season: </strong><span id="season-standing-page">2019</span></p>
            <p class="center no-show">20 completed races out of 30</p>
        </section>
        <section>
            <div class="div-title center"><h1>Driver Standings</h1></div>
            <div class="standings-tables">
                <table id="drivers-table-standings-page"></table>
            </div>
        </section>
        <section>
            <div class="div-title center"><h1>Team Standings</h1></div>
            <div class="standings-tables">
                <table id="teams-table-standings-page"></table>
            </div>
        </section>
    `;
  }
  static getCircuits() {
    return `
        <div class="div-title center"><h1>Circuits</h1></div>
        <div id="circuit-card-container-circuits-page" class="div-list"></div>
    `;
  }
  static getSeasons() {
    return `
        <div class="div-title center"><h1>Seasons</h1></div>
        <div id="circuit-card-container-circuits-page" class="div-list"></div>
    `;
  }
  static getSeason() {
    return `
        <div class="div-title center"><h1>Season</h1></div>
        <div class="center"><button id="see-season-standings">Season Standings</button></div>
        <div id="race-card-container-season-page" class="div-list"></div>
    `;
  }
  static getRace() {
    return `
        <section class="last-race-section">
            <div class="div-title center"><h2 id="last-race-title"></h2></div>
            <div class="div-container">
                <div id="last-race-info" class="div-info">
                    <div class="loader"></div>
                </div>
                <div class="div-table">
                    <table id="last-race-rankings"></table>
                </div>
            </div>
        </section>
    `;
  }
  static getSearch(param) {
    return `
    <section><div class="div-title center"><h1>Results of '${param}'</h1></div></section>
    <section>
        <div class="div-title center"><h1>Drivers</h1></div>
        <div id="search-drivers" class="div-list"></div>
    </section>
    <section>
        <div class="div-title center"><h1>Circuits</h1></div>
        <div id="search-circuits" class="div-list"></div>
    </section>
    <section>
        <div class="div-title center"><h1>Teams</h1></div>
        <div id="search-teams" class="div-list"></div>
    </section>
      `;
  }
}

const getById = () => {
  if (document.getElementById('see-complete-standings-btn')) {
    document.getElementById('see-complete-standings-btn').addEventListener('click', () => {
      const seasonYear = CURRENT_SEASON;
      Router.navigate(`/standings/${seasonYear}`);
    });
  }
  if (document.getElementById('see-race-information-btn')) {
    document.getElementById('see-race-information-btn').addEventListener('click', () => {
      const raceId = document.getElementById('see-race-information-btn').parentElement.lastElementChild.textContent;
      Router.navigate(`/race/${raceId}`);
    });
  }
  if (document.getElementById('see-season-standings')) {
    document.getElementById('see-season-standings').addEventListener('click', () => {
      const seasonYear = location.pathname.slice(8);
      Router.navigate(`/standings/${seasonYear}`);
    });
  }
  if (location.pathname === '/search') {
    TOGGLE_SEARCH.classList.add('no-show');
  } else {
    TOGGLE_SEARCH.classList.remove('no-show');
  }
};

// Handles Dynamic Links from Classes of Cards
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('circuit-card')) {
    Router.navigate(`/circuit/${e.target.lastElementChild.innerHTML}`);
  }
  if (e.target.parentElement.classList.contains('circuit-card')) {
    Router.navigate(`/circuit/${e.target.parentElement.lastElementChild.innerHTML}`);
  }
  if (e.target.classList.contains('race-card')) {
    Router.navigate(`/race/${e.target.lastElementChild.innerHTML}`);
  }
  if (e.target.parentElement.classList.contains('race-card')) {
    Router.navigate(`/race/${e.target.parentElement.lastElementChild.innerHTML}`);
  }
  if (e.target.parentElement.parentElement.classList.contains('race-card')) {
    Router.navigate(`/race/${e.target.parentElement.parentElement.lastElementChild.innerHTML}`);
  }
  if (e.target.classList.contains('season-card')) {
    Router.navigate(`/season/${e.target.lastElementChild.innerHTML}`);
  }
  if (e.target.parentElement.classList.contains('season-card')) {
    Router.navigate(`/season/${e.target.parentElement.lastElementChild.innerHTML}`);
  }
  if (e.target.classList.contains('driver-card-search')) {
    const driverId = e.target.firstElementChild.textContent;
    Router.navigate(`/driver/${driverId}`);
  }
  if (e.target.parentElement.classList.contains('driver-card-search')) {
    const driverId = e.target.parentElement.firstElementChild.textContent;
    Router.navigate(`/driver/${driverId}`);
  }
  if (e.target.parentElement.parentElement.classList.contains('driver-card-search')) {
    const driverId = e.target.parentElement.parentElement.firstElementChild.textContent;
    Router.navigate(`/driver/${driverId}`);
  }
  if (e.target.classList.contains('team-card')) {
    const teamName = e.target.firstElementChild.textContent;
    Router.navigate(`/team/${teamName.toLowerCase().replace(/ /g, '_')}`);
  }
  if (e.target.parentElement.classList.contains('team-card')) {
    const teamName = e.target.parentElement.firstElementChild.textContent;
    Router.navigate(`/team/${teamName.toLowerCase().replace(/ /g, '_')}`);
  }
});

// Handles Events from Classes
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('driver-link')) {
    console.log(e.target.nextElementSibling.textContent);
    const driverId = e.target.nextElementSibling.textContent;
    Router.navigate(`/driver/${driverId}`);
  }
  if (e.target.classList.contains('driver-image')) {
    console.log(e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.textContent);
    const driverId = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.textContent;
    Router.navigate(`/driver/${driverId}`);
  }
  if (e.target.classList.contains('team-link')) {
    console.log(e.target.textContent);
    const teamName = e.target.textContent;
    Router.navigate(`/team/${teamName.toLowerCase().replace(/ /g, '_')}`);
  }
  if (e.target.classList.contains('item')) {
    HEADER_NAV.classList.remove('show-modal-menu');
  }
});

document.getElementById('header-logo').addEventListener('click', () => {
  Router.navigate();
});

document.getElementById('standings-item').addEventListener('click', () => {
  const seasonYear = CURRENT_SEASON;
  Router.navigate(`/standings/${seasonYear}`);
});

document.getElementById('circuits-item').addEventListener('click', () => {
  Router.navigate('/circuits');
});

document.getElementById('season-item').addEventListener('click', () => {
  Router.navigate('/seasons');
});

document.getElementById('search-input-btn').addEventListener('click', () => {
  Router.navigate('/search');
});
document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && SEARCH_MODAL.className === 'search-modal-container center') {
    Router.navigate('/search');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('home-page') !== null) {
    CONTAINER.innerHTML = sessionStorage.getItem('home-page');
  } else {
    CONTAINER.innerHTML = `
    ${MainHtml.getHome()}
    `;
    UI.drawRaceInformation(7, '', CURRENT_SEASON, '', '', '', '', '', '1');
    UI.drawDriversRanking('home-drivers-rankings', 7, CURRENT_SEASON);
    UI.drawTeamsRanking('home-teams-rankings', 7, CURRENT_SEASON);
  }
  getById();
});

Router.add(/search/, () => {
  UI.inputSearch();
  const param = new URLSearchParams(window.location.search).get('param').replace(/_/g, ' ');
  CONTAINER.innerHTML = `
  ${MainHtml.getSearch(param)}
  `;
  UI.drawSearch(param);
  getById();
}).listen();

Router.add(/seasons/, () => {
  CONTAINER.innerHTML = `
        ${MainHtml.getSeasons()}`;
  UI.drawSeasons();
  getById();
}).listen();

Router.add(/season/, () => {
  const seasonYear = window.location.pathname.slice(8);
  CONTAINER.innerHTML = `
        ${MainHtml.getSeason()}`;
  UI.drawSeason('', seasonYear, '', 'race', '', '', '', '99');
  getById();
}).listen();

Router.add(/race/, () => {
  const raceId = window.location.pathname.slice(6);
  CONTAINER.innerHTML = `
        ${MainHtml.getRace()}`;
  UI.drawRaceInformation(99, '', '', raceId);
  getById();
}).listen();

Router.add(/circuits/, () => {
  CONTAINER.innerHTML = `
      ${MainHtml.getCircuits()}`;
  UI.drawCircuits();
  getById();
}).listen();

Router.add(/circuit/, () => {
  const circuitId = window.location.pathname.slice(9);
  CONTAINER.innerHTML = '';
  UI.drawCircuit('', '', circuitId);
  getById();
}).listen();

Router.add(/standings/, () => {
  const seasonYear = window.location.pathname.slice(11);
  CONTAINER.innerHTML = `
    ${MainHtml.getStandings()}`;
  UI.drawDriversRanking('drivers-table-standings-page', 30, seasonYear);
  UI.drawTeamsRanking('teams-table-standings-page', 30, seasonYear);
  document.getElementById('season-standing-page').innerText = seasonYear;
  getById();
}).listen();

Router.add(/driver/, () => {
  const driverId = window.location.pathname.slice(8);
  CONTAINER.innerHTML = `
      ${MainHtml.getDriver()}`;
  UI.drawDriver('', '', driverId);
  getById();
}).listen();

Router.add(/team/, () => {
  let teamName = window.location.pathname.slice(6).replace(/_/g, ' ');
  if (teamName == 'mercedes-amg petronas') {
    teamName = 'mercedes';
  }
  CONTAINER.innerHTML = `
        ${MainHtml.getTeam()}`;
  UI.drawTeam('', teamName);
  getById();
}).listen();

Router.add(() => {
  if (sessionStorage.getItem('home-page') !== null) {
    CONTAINER.innerHTML = sessionStorage.getItem('home-page');
  } else {
    CONTAINER.innerHTML = `
    ${MainHtml.getHome()}
    `;
    UI.drawRaceInformation(7, '', CURRENT_SEASON, '', '', '', '', '', '1');
    UI.drawDriversRanking('home-drivers-rankings', 7, CURRENT_SEASON);
    UI.drawTeamsRanking('home-teams-rankings', 7, CURRENT_SEASON);
  }
  getById();
}).listen();

export default getById;
