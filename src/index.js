import Router from './router.js';

console.log(Router);

const headerNav = document.getElementById('main-header-nav');
const closeMenu = document.getElementById('close-menu');
const toggleMenu = document.getElementById('toggle-menu');

toggleMenu.addEventListener('click', () => {
  headerNav.classList.add('show-modal-menu');
});

closeMenu.addEventListener('click', () => {
  headerNav.classList.remove('show-modal-menu');
});

const mainHomePage = `
        <section class="last-race-section">
            <div class="div-title center"><h2>Australia Grand Prix</h2></div>
            <div class="div-container">
                <div class="div-info">
                    <p><strong>Sunday, March 17, 2019</strong></p>
                    <p>Albert Park in <br><strong>Melbourne, Australia</strong></p>
                    <p><strong>Race</strong> #1<br><strong>Season</strong> 2019</p>
                    <p><strong>Weather:</strong> Sunny   <span><i class="fas fa-sun"></i></span></p>
                    <p><strong>Status:</strong> Completed</p>
                    <button>See Complete GP Information</button>
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
                    </table>
                </div>
            </div>
        </section>
        <section>
            <div class="div-title center">
                <h2>
                    Standings Preview
                </h2>
            </div>
            <div class="standings-tables">
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
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>P.</th>
                        <th>Team</th>
                        <th></th>
                        <th>Time</th>
                        <th>Diff.</th>
                        <th>L</th>
                        <th>B</th>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1°</td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td><img src="" alt=""></td>
                        <td>1'20.486</td>
                        <td>1'20.486</td>
                        <td>58</td>
                        <td>1</td>
                    </tr>
                </table>
            </div>
            <div class="div-title center">
                <button>See Complete Standings</button>
            </div>
        </section>
`;

const mainDriverPage = `
        <section class="driver-page">
            <div class="driver-card-container">
                <div class="driver-card">
                    <div class="driver-card-superior">
                        <div class="driver-card-image"><img src="https://media.api-sports.io/formula-1/drivers/20.png" alt=""></div>
                        <div class="driver-card-info">
                            <div class="driver-card-info-image"><img src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div>
                            <div class="driver-card-info-born">Born in Jan. 7, 1985</div>
                            <div class="driver-card-info-age">25 years old</div>
                        </div>
                    </div>
                    <div class="driver-card-inferior"><p class="driver-link">Lewis Hamilton</p></div>
                </div>
                <div class="driver-card-footer center">Wikipedia <span><i class="fas fa-external-link-alt"></i></span></div>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Season</th>
                        <th>Team</th>
                        <th></th>
                        <th>Result</th>
                    </tr>
                    <tr>
                        <td>2020</td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td><div><img src="" alt=""></div></td>
                        <td>Champion</td>
                    </tr>
                    <tr>
                        <td>2020</td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td><div><img src="" alt=""></div></td>
                        <td>Champion</td>
                    </tr>
                    <tr>
                        <td>2020</td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td><div><img src="" alt=""></div></td>
                        <td>Champion</td>
                    </tr>
                    <tr>
                        <td>2020</td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td><div><img src="" alt=""></div></td>
                        <td>Champion</td>
                    </tr>
                    <tr>
                        <td>2020</td>
                        <td class="team-link">Mercedes AMG Petronas</td>
                        <td><div><img src="" alt=""></div></td>
                        <td>Champion</td>
                    </tr>
                </table>
            </div>
        </section>
`;
