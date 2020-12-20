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

const mainSeasonPage = `
        <div class="div-title center"><h1>Circuits</h1></div>
        <div class="div-list">
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
            <div class="race-card">
                <div class="center"><h4>Australia GP</h4></div>
                <div class="center">Albert Park</div>
                <div class="center">2019-03-17</div>
                <div class="center">#1 of 2019</div>
            </div>
`;

const mainRacePage = `
    <div class="div-title center"><h1>Australia Grand Prix</h1></div>
        <div class="div-container-race-page">
            <div class="div-info">
                <p><strong>Sunday, March 17, 2019</strong></p>
                <p>Albert Park in <br><strong>Melbourne, Australia</strong></p>
                <p><strong>Race</strong> #1<br><strong>Season</strong> 2019</p>
                <p><strong>Weather:</strong> Sunny   <span><i class="fas fa-sun"></i></span></p>
                <p><strong>Status:</strong> Completed</p>
            </div>
            <div class="div-table">
                <table>
                    <tr>
                        <th>P.</th>
                        <th></th>
                        <th>Driver</th>
                        <th></th>
                        <th>Team</th>
                        <th></th>
                        <th>Time</th>
                        <th>Diff.</th>
                        <th>L</th>
                        <th>B</th>
                        <th>G</th>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="https://media.api-sports.io/formula-1/drivers/20.png" alt="Driver Image"></div></td>
                        <td class="driver-link">Lewis Hamilton</td>
                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                        <td>2°</td>
                    </tr>
                </table>
            </div>
        </div>
`;

const getById = () => {
  if (document.getElementById('go-to-home')) {
    document.getElementById('go-to-home').addEventListener('click', () => {
      Router.navigate();
    });
  }
  if (document.getElementById('see-complete-standings-btn')) {
    document.getElementById('see-complete-standings-btn').addEventListener('click', () => {
      Router.navigate('/standings');
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
  Router.navigate('/all-circuits');
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
