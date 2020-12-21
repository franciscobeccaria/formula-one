import Router from './router.js';

const headerNav = document.getElementById('main-header-nav');
const closeMenu = document.getElementById('close-menu');
const toggleMenu = document.getElementById('toggle-menu');
const toggleSearch = document.getElementById('toggle-search');
const searchModal = document.getElementById('search-modal');
const closeSearchModal = document.getElementById('close-search-modal');

toggleMenu.addEventListener('click', () => {
  headerNav.classList.add('show-modal-menu');
});

closeMenu.addEventListener('click', () => {
  headerNav.classList.remove('show-modal-menu');
});

toggleSearch.addEventListener('click', () => {
  searchModal.classList.remove('no-show');
});

closeSearchModal.addEventListener('click', () => {
  searchModal.classList.add('no-show');
});

const mainHomePage = `
        <section class="last-race-section">
            <div class="div-title center"><h2 id="last-race-title"></h2></div>
            <div class="div-container">
                <div id="last-race-info" class="div-info"></div>
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

const mainDriverPage = `
        <section class="driver-page">
            <div id="driver-card-container" class="driver-card-container"></div>
            <div>
                <table id="driver-page-table"></table>
            </div>
        </section>
`;

const mainTeamPage = `
        <section id="section-team-page" class="section-team-page"></section>
`;

const mainStandingsPage = `
        <section class="season-title-container">
            <div class="div-title center"><h1>Season info</h1></div>
            <p class="center"><strong>Season: </strong>2019</p>
            <p class="center">20 completed races out of 30</p>
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

const mainCircuitsPage = `
    <div class="div-title center"><h1>Circuits</h1></div>
        <div id="circuit-card-container-circuits-page" class="div-list"></div>
`;

const mainSeasonsPage = `
    <div class="div-title center"><h1>Seasons</h1></div>
        <div id="circuit-card-container-circuits-page" class="div-list"></div>
`;

const mainSeasonPage = `
        <div class="div-title center"><h1>Season</h1></div>
        <div id="race-card-container-season-page" class="div-list"></div>
`;

const mainRacePage = `
        <section class="last-race-section">
            <div class="div-title center"><h2 id="last-race-title"></h2></div>
            <div class="div-container">
                <div id="last-race-info" class="div-info"></div>
                <div class="div-table">
                    <table id="last-race-rankings"></table>
                </div>
            </div>
        </section>
`;

const getById = () => {
  if (document.getElementById('see-complete-standings-btn')) {
    document.getElementById('see-complete-standings-btn').addEventListener('click', () => {
      Router.navigate('/standings');
    });
  }
  if (document.getElementById('see-race-information-btn')) {
    document.getElementById('see-race-information-btn').addEventListener('click', () => {
      const raceId = document.getElementById('see-race-information-btn').parentElement.lastElementChild.textContent;
      Router.navigate(`/race/${raceId}`);
    });
  }
};

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
  if (e.target.classList.contains('season-card')) {
    Router.navigate(`/season/${e.target.lastElementChild.innerHTML}`);
  }
  if (e.target.parentElement.classList.contains('season-card')) {
    Router.navigate(`/season/${e.target.parentElement.lastElementChild.innerHTML}`);
  }
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('driver-link')) {
    console.log(e.target.textContent);
    const driverName = e.target.textContent;
    Router.navigate(`/driver/${driverName.toLowerCase().replace(/ /g, '_')}`);
  }
  if (e.target.classList.contains('driver-image')) {
    console.log(e.target.parentElement.parentElement.nextElementSibling.textContent);
    const driverName = e.target.parentElement.parentElement.nextElementSibling.textContent;
    Router.navigate(`/driver/${driverName.toLowerCase().replace(/ /g, '_')}`);
  }
  if (e.target.classList.contains('team-link')) {
    console.log(e.target.textContent);
    const driverName = e.target.textContent;
    Router.navigate(`/team/${driverName.toLowerCase().replace(/ /g, '_')}`);
  }
  if (e.target.classList.contains('item')) {
    headerNav.classList.remove('show-modal-menu');
  }
});

document.getElementById('header-logo').addEventListener('click', () => {
  Router.navigate();
});

document.getElementById('standings-item').addEventListener('click', () => {
  Router.navigate('/standings');
});

document.getElementById('circuits-item').addEventListener('click', () => {
  Router.navigate('/circuits');
});

document.getElementById('season-item').addEventListener('click', () => {
  Router.navigate('/seasons');
});

document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('home-page') !== null) {
    container.innerHTML = sessionStorage.getItem('home-page');
  } else {
    container.innerHTML = `
    ${mainHomePage}
    `;
    UI.drawRaceInformation(7, '', '2020', '', '', '', '', '', '1');
    UI.drawDriversRanking('home-drivers-rankings', 7, '2020');
    UI.drawTeamsRanking('home-teams-rankings', 7, '2020');
  }
  getById();
});

Router.add(/seasons/, () => {
  container.innerHTML = `
        ${mainSeasonsPage}`;
  UI.drawSeasons();
  getById();
}).listen();

Router.add(/season/, () => {
  const seasonYear = window.location.pathname.slice(8);
  container.innerHTML = `
        ${mainSeasonPage}`;
  UI.drawSeason('', seasonYear, '', 'race', '', '', '', '99');
  getById();
}).listen();

Router.add(/race/, () => {
  const raceId = window.location.pathname.slice(6);
  container.innerHTML = `
        ${mainRacePage}`;
  UI.drawRaceInformation(99, '', '', raceId);
  getById();
}).listen();

Router.add(/circuits/, () => {
  container.innerHTML = `
      ${mainCircuitsPage}`;
  UI.drawCircuits();
  getById();
}).listen();

Router.add(/circuit/, () => {
  const circuitId = window.location.pathname.slice(9);
  UI.drawCircuit('', '', circuitId);
  getById();
}).listen();

Router.add(/standings/, () => {
  container.innerHTML = `
    ${mainStandingsPage}`;
  UI.drawDriversRanking('drivers-table-standings-page', 30, '2020');
  UI.drawTeamsRanking('teams-table-standings-page', 30, '2020');
  getById();
}).listen();

Router.add(/driver/, () => {
  console.log(window.location.pathname.slice(8).replace(/_/g, ' '));
  const driverName = window.location.pathname.slice(8).replace(/_/g, ' ');
  container.innerHTML = `
      ${mainDriverPage}`;
  UI.drawDriver(driverName);
  getById();
}).listen();

Router.add(/team/, () => {
  let teamName = window.location.pathname.slice(6).replace(/_/g, ' ');
  if (teamName == 'mercedes-amg petronas') {
    teamName = 'mercedes';
  }
  container.innerHTML = `
        ${mainTeamPage}`;
  UI.drawTeam('', teamName);
  getById();
}).listen();

Router.add(() => {
  if (sessionStorage.getItem('home-page') !== null) {
    container.innerHTML = sessionStorage.getItem('home-page');
  } else {
    container.innerHTML = `
    ${mainHomePage}
    `;
    UI.drawRaceInformation(7, '', '2020', '', '', '', '', '', '1');
    UI.drawDriversRanking('home-drivers-rankings', 7, '2020');
    UI.drawTeamsRanking('home-teams-rankings', 7, '2020');
  }
  getById();
}).listen();
