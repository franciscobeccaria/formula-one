import getById from './index.js';
import { CONTAINER, API_HEADERS, validateDriverImage, validateParam } from './globalVariables.js';
import axios from 'axios';

let PREVIOUS_POINTS;
let ID_LAST_RACE;

class Driver {
  constructor(id, name, image, nationality, birthdate, teams) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.nationality = nationality;
    this.birthdate = birthdate;
    this.teams = teams;
  }
  getDriverCardContainerHtml() {
    validateDriverImage(this.id, this);
    const driverBirthdate = this.birthdate.replace(/-/g, '.');
    const driverBirthdateInTimestamp = new Date(driverBirthdate).getTime();
    const driverAgeInTimestamp = Date.now() - driverBirthdateInTimestamp;
    this.driverAge = Math.floor(driverAgeInTimestamp / 31557600000);
    return `
                <div class="driver-card">
                    <div class="driver-card-superior">
                        <div class="driver-card-image"><img src="${this.image}" alt=""></div>
                        <div class="driver-card-info">
                            <div class="driver-card-info-image center">${this.nationality}</div>
                            <div class="driver-card-info-born">Born in ${this.birthdate}</div>
                            <div class="driver-card-info-age">${this.driverAge} years old</div>
                        </div>
                    </div>
                    <div class="driver-card-inferior"><p class="driver-link">${this.name}</p></div>
                </div>
                <a href="https://en.wikipedia.org/w/index.php?search=${this.name.replace(
                  / /g,
                  '+'
                )}&title=Special%3ASearch&go=Go&ns0=1" target=”_blank” class="driver-card-footer center">Wikipedia <span><i class="fas fa-external-link-alt"></i></span></a>
      `;
  }
  static getDriverPageTableTitle() {
    return `
                    <tr>
                        <th>Season</th>
                        <th>Team</th>
                        <th class="no-show"></th>
                        <th>Result</th>
                    </tr>
      `;
  }
  getDriverPageTableHtml(season, team, teamImage) {
    return `
                    
                    <tr>
                        <td>${season}</td>
                        <td class="team-link">${team}</td>
                        <td class="no-show"><div><img src="${teamImage}" alt="Team Image"></div></td>
                        <td id="result-${season}"></td>
                    </tr>
      `;
  }
  getDriverCard() {
    return `
            <div class="driver-card-search">
                <div class="no-show">${this.id}</div>
                <div class="center">${this.name}</div>
                <div class="driver-card-info-image">${this.nationality}</div>
            </div>
      `;
  }
}

class Team {
  constructor(id, name, logo, president, director, technicalManager, engine, tyres) {
    this.id = id;
    this.name = name;
    this.logo = logo;
    this.president = president;
    this.director = director;
    this.technicalManager = technicalManager;
    this.engine = engine;
    this.tyres = tyres;
  }
  getTeamPageHtml() {
    return `
            <div class="div-title center"><h1>${this.name}</h1></div>
            <div class="div-team-info">
                <div class="team-image-div-container"><img src="${this.logo}" alt="Team Image"></div>
                <div>
                    <p><strong>President:</strong> ${this.president}</p>
                    <p><strong>Director:</strong> ${this.director}</p>
                    <p><strong>Technical manager:</strong> ${this.technicalManager}</p>
                </div>
            </div>
            <div class="div-team-engine center">
                <p><strong>Engine:</strong> ${this.engine}</p>
                <p><strong>Tyres:</strong> ${this.tyres}</p>
            </div>
      `;
  }
  getTeamCard() {
    return `
    <div class="team-card">
        <div class="center">${this.name}</div>
    </div>
`;
  }
}

class Race {
  constructor(round, season, circuit, competition, date, id, laps, status, type, weather) {
    this.round = round;
    this.season = season;
    this.circuit = circuit;
    this.competition = competition;
    this.date = date;
    this.id = id;
    this.laps = laps;
    this.status = status;
    this.type = type;
    this.weather = weather;
  }
  getRaceInformationHtml() {
    if (this.weather === null) {
      this.weather = 'No info';
    }
    if (this.weather === 'Sunny') {
      this.weatherIcon = '<i class="fas fa-sun"></i>';
    } else {
      this.weatherIcon = '';
    }
    return `
                    <p><strong>${this.date.slice(0, 10)}</strong></p>
                    <p>${this.circuit.name} in <br>
                        <strong>${this.competition.location.city}, ${this.competition.location.country}</strong>
                    </p>
                    <p><strong>Season</strong> ${this.season}</p>
                    <p><strong>Weather:</strong> ${this.weather}   <span>${this.weatherIcon}</span></p>
                    <p><strong>Status:</strong> ${this.status}</p>
                    <button id="see-race-information-btn">See Complete GP Information</button>
                    <div class="no-show">${this.id}</div>
      `;
  }
  getRaceCard() {
    return `
            <div class="race-card">
                <div class="center"><h4>${this.competition.name}</h4></div>
                <div class="center">${this.circuit.name}</div>
                <div class="center">${this.date.slice(0, 9)}7</div>
                <div class="center">${this.status}</div>
                <div class="no-show">${this.id}</div>
            </div>
      `;
  }
}

class Circuit {
  constructor(id, name, image, competition, km, capacity, opened) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.competition = competition;
    this.km = km;
    this.capacity = capacity;
    this.opened = opened;
  }
  getCircuitCard() {
    return `
            <div class="circuit-card">
                <div class="center">${this.competition.name}</div>
                <div class="center">${this.name}</div>
                <div class="center">${this.competition.location.city}, ${this.competition.location.country}</div>
                <div class="no-show">${this.id}</div>
            </div>
      `;
  }
  getCircuitPageHtml() {
    return `
        <div class="div-title center text-align-center"><h1>${this.competition.name}</h1></div>
          <div class="circuit-container center">
              <div class="circuit-image-bg"><div class="circuit-image-container"><img src="${this.image}" alt="Circuit Image"></div></div>
              <div class="circuit-info">
                  <h4>${this.competition.name} in <br><strong>${this.competition.location.city}, ${this.competition.location.country}</strong></h4>
                  <p><strong>Length: </strong>${this.km}</p>
                  <p><strong>Capacity: </strong>${this.capacity}</p>
                  <p><strong>Opened: </strong>${this.opened}</p>
              </div>
        </div>
      `;
  }
}

class Season {
  constructor(year) {
    this.year = year;
  }
  getSeasonCard() {
    return `
            <div class="season-card">
                <div class="center">Season</div>
                <div class="center">${this.year}</div>
            </div>
      `;
  }
}

class RacesRow {
  constructor(raceId, driver, team, position, time, laps, grid, pits, gap) {
    this.raceId = raceId;
    this.driver = driver;
    this.team = team;
    this.position = position;
    this.time = time;
    this.laps = laps;
    this.grid = grid;
    this.pits = pits;
    this.gap = gap;
  }
  getRacesRowHtml() {
    validateDriverImage(this.driver.id, this);
    return `
      <tr>
          <td>${this.position}°</td>
          <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="${this.driver.image}" alt="Driver Image"></div></td>
          <td class="driver-link">${this.driver.name}</td>
          <td class="no-show">${this.driver.id}</td>
          <td class="no-show"><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
          <td class="team-link">${this.team.name}</td>
          <td class="team-link"><img src="" alt=""></td>
          <td>${this.time}</td>
          <td class="no-show">1'20.486</td>
          <td>${this.laps}</td>
          <td>${this.pits}</td>
          <td>${this.grid}°</td>
      </tr>
`;
  }
  static getRacesRowTitleHtml() {
    return `
            <tr>
                <th>P.</th>
                <th></th>
                <th>Driver</th>
                <th class="no-show"></th>
                <th>Team</th>
                <th></th>
                <th>Time</th>
                <th class="no-show">Diff.</th>
                <th>L</th>
                <th>B</th>
                <th>G</th>
            </tr>
      `;
  }
}

class DriversRow {
  constructor(position, driver, team, points, wins, behind, season) {
    this.position = position;
    this.driver = driver;
    this.team = team;
    this.points = points;
    this.wins = wins;
    this.behind = behind;
    this.season = season;
  }
  getDriversRowHtml() {
    validateDriverImage(this.driver.id, this);
    if (this.behind === null) {
      this.behind = '-';
    }
    if (this.wins === null) {
      this.wins = '-';
    }
    return `
                    <tr>
                        <td>${this.position}°</td>
                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="${this.driver.image}" alt="Driver Image"></div></td>
                        <td class="driver-link">${this.driver.name}</td>
                        <td class="no-show">${this.driver.id}</td>
                        <td class="no-show"><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
                        <td class="team-link">${this.team.name}</td>
                        <td class="team-link"><img src="" alt=""></td>
                        <td>${this.points}</td>
                        <td>${this.behind}</td>
                        <td>${this.wins}</td>
                    </tr>
      `;
  }
  static getDriversRowTitleHtml() {
    return `
                    <tr>
                        <th>P.</th>
                        <th></th>
                        <th>Driver</th>
                        <th class="no-show"></th>
                        <th>Team</th>
                        <th></th>
                        <th>Points</th>
                        <th>Diff.</th>
                        <th>W</th>
                    </tr>
      `;
  }
}

class TeamsRow {
  constructor(position, team, points, season) {
    this.position = position;
    this.team = team;
    this.points = points;
    this.season = season;
  }
  getTeamsRowHtml() {
    if (this.position == '1') {
      PREVIOUS_POINTS = '-';
    } else {
      PREVIOUS_POINTS = PREVIOUS_POINTS - this.points;
    }
    return `
                    <tr>
                        <td>${this.position}°</td>
                        <td class="team-link">${this.team.name}</td>
                        <td><img src="" alt=""></td>
                        <td>${this.points}</td>
                        <td>${PREVIOUS_POINTS}</td>
                    </tr>
      `;
  }
  static getTeamsRowTitleHtml() {
    return `
                    <tr>
                        <th>P.</th>
                        <th>Team</th>
                        <th></th>
                        <th>Points</th>
                        <th>Diff.</th>
                    </tr>
      `;
  }
}

class API {
  static async getCircuits(searchValue, competitionValue, idValue) {
    const paramsArray = [
      validateParam(searchValue, 'search'),
      validateParam(competitionValue, 'competition'),
      validateParam(idValue, 'id'),
    ];
    let params = '';
    paramsArray.forEach((param) => {
      params = params.concat(param);
    });
    if (params !== '') {
      params = `?${params}`;
    }
    const url = `https://api-formula-1.p.rapidapi.com/circuits${params}`;
    return await axios.get(url, API_HEADERS);
  }

  static async getCompetitions(countryValue, nameValue, searchValue, cityValue, idValue) {
    const paramsArray = [
      validateParam(countryValue, 'country'),
      validateParam(nameValue, 'name'),
      validateParam(searchValue, 'search'),
      validateParam(cityValue, 'city'),
      validateParam(idValue, 'id'),
    ];
    let params = '';
    paramsArray.forEach((param) => {
      params = params.concat(param);
    });
    if (params !== '') {
      params = `?${params}`;
    }
    const url = `https://api-formula-1.p.rapidapi.com/competitions${params}`;
    return await axios.get(url, API_HEADERS);
  }

  static async getDrivers(nameValue, searchValue, idValue) {
    const paramsArray = [validateParam(nameValue, 'name'), validateParam(searchValue, 'search'), validateParam(idValue, 'id')];
    let params = '';
    paramsArray.forEach((param) => {
      params = params.concat(param);
    });
    if (params !== '') {
      params = `?${params}`;
    }
    const url = `https://api-formula-1.p.rapidapi.com/drivers${params}`;
    return await axios.get(url, API_HEADERS);
  }

  static async getTeams(nameValue, searchValue, idValue) {
    const paramsArray = [validateParam(nameValue, 'name'), validateParam(searchValue, 'search'), validateParam(idValue, 'id')];
    let params = '';
    paramsArray.forEach((param) => {
      params = params.concat(param);
    });
    if (params !== '') {
      params = `?${params}`;
    }
    const url = `https://api-formula-1.p.rapidapi.com/teams${params}`;
    return await axios.get(url, API_HEADERS);
  }

  static async getTeamsRankings(seasonValue, teamValue) {
    const paramsArray = [validateParam(seasonValue, 'season'), validateParam(teamValue, 'team')];
    let params = '';
    paramsArray.forEach((param) => {
      params = params.concat(param);
    });
    if (params !== '') {
      params = `?${params}`;
    }
    const url = `https://api-formula-1.p.rapidapi.com/rankings/teams${params}`;
    return await axios.get(url, API_HEADERS);
  }

  static async getDriversRankings(seasonValue, teamValue, driverValue) {
    const paramsArray = [
      validateParam(seasonValue, 'season'),
      validateParam(teamValue, 'team'),
      validateParam(driverValue, 'driver'),
    ];
    let params = '';
    paramsArray.forEach((param) => {
      params = params.concat(param);
    });
    if (params !== '') {
      params = `?${params}`;
    }
    const url = `https://api-formula-1.p.rapidapi.com/rankings/drivers${params}`;
    return await axios.get(url, API_HEADERS);
  }

  static async getRaceRankings(raceValue, teamValue, driverValue) {
    const paramsArray = [
      validateParam(raceValue, 'race'),
      validateParam(teamValue, 'team'),
      validateParam(driverValue, 'driver'),
    ];
    let params = '';
    paramsArray.forEach((param) => {
      params = params.concat(param);
    });
    if (params !== '') {
      params = `?${params}`;
    }
    const url = `https://api-formula-1.p.rapidapi.com/rankings/races${params}`;
    return await axios.get(url, API_HEADERS);
  }

  static async getRaces(competitionValue, seasonValue, idValue, typeValue, timezoneValue, dateValue, nextValue, lastValue) {
    const paramsArray = [
      validateParam(competitionValue, 'competition'),
      validateParam(seasonValue, 'season'),
      validateParam(idValue, 'id'),
      validateParam(typeValue, 'type'),
      validateParam(timezoneValue, 'timezone'),
      validateParam(dateValue, 'date'),
      validateParam(nextValue, 'next'),
      validateParam(lastValue, 'last'),
    ];
    let params = '';
    paramsArray.forEach((param) => {
      params = params.concat(param);
    });
    if (params !== '') {
      params = `?${params}`;
    }
    const url = `https://api-formula-1.p.rapidapi.com/races${params}`;
    return await axios.get(url, API_HEADERS);
  }

  static async getSeasons() {
    const url = `https://api-formula-1.p.rapidapi.com/seasons`;
    return await axios.get(url, API_HEADERS);
  }
}

class UI {
  static async drawDriversRanking(idTableContainer, tableLength, seasonValue, teamValue, driverValue) {
    let driversTableHtml = DriversRow.getDriversRowTitleHtml();
    await API.getDriversRankings(seasonValue, teamValue, driverValue)
      .then(function (response) {
        response.data.response.slice(0, tableLength).forEach((row) => {
          const driversRow = new DriversRow(row.position, row.driver, row.team, row.points, row.wins, row.behind, row.season);
          driversTableHtml = driversTableHtml.concat(driversRow.getDriversRowHtml());
        });
        document.getElementById(idTableContainer).innerHTML = driversTableHtml;
      })
      .catch((error) => console.log(error));
    if (location.pathname === '/') {
      /* sessionStorage.setItem('home-page', CONTAINER.innerHTML); */
    }
  }

  static async drawTeamsRanking(idTableContainer, tableLength, seasonValue, teamValue) {
    let teamsTableHtml = TeamsRow.getTeamsRowTitleHtml();
    await API.getTeamsRankings(seasonValue, teamValue)
      .then(function (response) {
        response.data.response.slice(0, tableLength).forEach((row) => {
          const teamsRow = new TeamsRow(row.position, row.team, row.points, row.season);
          teamsTableHtml = teamsTableHtml.concat(teamsRow.getTeamsRowHtml());
          PREVIOUS_POINTS = teamsRow.points;
        });
        document.getElementById(idTableContainer).innerHTML = teamsTableHtml;
      })
      .catch((error) => console.log(error));
    if (location.pathname === '/') {
      /* sessionStorage.setItem('home-page', CONTAINER.innerHTML); */
    }
  }

  static async drawRaceRanking(tableLength, raceValue, teamValue, driverValue) {
    let raceTableHtml = RacesRow.getRacesRowTitleHtml();
    await API.getRaceRankings(raceValue, teamValue, driverValue)
      .then(function (response) {
        response.data.response.slice(0, tableLength).forEach((row) => {
          const racesRow = new RacesRow(
            row.race.id,
            row.driver,
            row.team,
            row.position,
            row.time,
            row.laps,
            row.grid,
            row.pits,
            row.gap
          );
          raceTableHtml = raceTableHtml.concat(racesRow.getRacesRowHtml());
        });
      })
      .catch((error) => console.log(error));
    document.getElementById('last-race-rankings').innerHTML = raceTableHtml;
    if (location.pathname === '/') {
      /* sessionStorage.setItem('home-page', CONTAINER.innerHTML); */
    }
  }

  static async drawRaceInformation(
    tableLength,
    competitionValue,
    seasonValue,
    idValue,
    typeValue,
    timezoneValue,
    dateValue,
    nextValue,
    lastValue
  ) {
    await API.getRaces(competitionValue, seasonValue, idValue, typeValue, timezoneValue, dateValue, nextValue, lastValue)
      .then(function (response) {
        const raceData = response.data.response[0];
        const race = new Race(
          '',
          raceData.season,
          raceData.circuit,
          raceData.competition,
          raceData.date,
          raceData.id,
          raceData.laps,
          raceData.status,
          raceData.type,
          raceData.weather
        );
        document.getElementById('last-race-info').innerHTML = race.getRaceInformationHtml();
        document.getElementById('last-race-title').innerText = race.competition.name;
        getById();
        ID_LAST_RACE = race.id;
        UI.drawRaceRanking(tableLength, ID_LAST_RACE);
      })
      .catch((error) => console.log(error));
    if (location.pathname === '/') {
      /* sessionStorage.setItem('home-page', CONTAINER.innerHTML); */
    } else {
      document.getElementById('see-race-information-btn').classList.add('no-show');
    }
  }

  static async drawDriver(nameValue, searchValue, idValue) {
    let driverTeamsTable = Driver.getDriverPageTableTitle();
    await API.getDrivers(nameValue, searchValue, idValue)
      .then(function (response) {
        const driverData = response.data.response[0];
        const driver = new Driver(
          driverData.id,
          driverData.name,
          driverData.image,
          driverData.nationality,
          driverData.birthdate,
          driverData.teams
        );
        document.getElementById('driver-card-container').innerHTML = driver.getDriverCardContainerHtml();
        driver.teams.forEach((row) => {
          driverTeamsTable = driverTeamsTable.concat(driver.getDriverPageTableHtml(row.season, row.team.name, row.team.image));
        });
        document.getElementById('driver-page-table').innerHTML = driverTeamsTable;
        driver.teams.forEach((team) => {
          UI.drawDriverResults(team.season, '', driver.id);
        });
      })
      .catch((error) => console.log(error));
  }

  static async drawDriverResults(seasonValue, teamValue, driverValue) {
    await API.getDriversRankings(seasonValue, teamValue, driverValue).then(function (response) {
      const season = response.data.response[0].season;
      let position = response.data.response[0].position;
      if (position === 1) {
        position = 'Champion';
        document.getElementById(`result-${season}`).style.fontWeight = '600';
      } else {
        position = `${position}°`;
      }
      document.getElementById(`result-${season}`).innerHTML = position;
    });
  }

  static async drawTeam(nameValue, searchValue, idValue) {
    await API.getTeams(nameValue, searchValue, idValue)
      .then(function (response) {
        const teamData = response.data.response[0];
        const team = new Team(
          teamData.id,
          teamData.name,
          teamData.logo,
          teamData.president,
          teamData.director,
          teamData.technicalManager,
          teamData.engine,
          teamData.tyres
        );
        document.getElementById('section-team-page').innerHTML = team.getTeamPageHtml();
      })
      .catch((error) => console.log(error));
  }

  static async drawCircuits(searchValue, competitionValue, idValue) {
    API.getCircuits(searchValue, competitionValue, idValue)
      .then(function (response) {
        response.data.response.forEach((circuitData) => {
          const circuit = new Circuit(
            circuitData.id,
            circuitData.name,
            circuitData.image,
            circuitData.competition,
            circuitData.length,
            circuitData.capacity,
            circuitData.opened
          );
          const circuitCard = circuit.getCircuitCard();
          document.getElementById('circuit-card-container-circuits-page').insertAdjacentHTML('beforeend', circuitCard);
        });
      })
      .catch((error) => console.log(error));
  }

  static async drawCircuit(searchValue, competitionValue, idValue) {
    await API.getCircuits(searchValue, competitionValue, idValue)
      .then(function (response) {
        const circuitData = response.data.response[0];
        const circuit = new Circuit(
          circuitData.id,
          circuitData.name,
          circuitData.image,
          circuitData.competition,
          circuitData.length,
          circuitData.capacity,
          circuitData.opened
        );
        CONTAINER.innerHTML = circuit.getCircuitPageHtml();
      })
      .catch((error) => console.log(error));
  }

  static async drawSeasons() {
    await API.getSeasons()
      .then(function (response) {
        response.data.response.forEach((seasonYear) => {
          const season = new Season(seasonYear);
          const seasonCard = season.getSeasonCard();
          document.getElementById('circuit-card-container-circuits-page').insertAdjacentHTML('beforeend', seasonCard);
        });
      })
      .catch((error) => console.log(error));
  }

  static async drawSeason(competitionValue, seasonValue, idValue, typeValue, timezoneValue, dateValue, nextValue, lastValue) {
    await API.getRaces(competitionValue, seasonValue, idValue, typeValue, timezoneValue, dateValue, nextValue, lastValue)
      .then(function (response) {
        response.data.response.forEach((raceData) => {
          const race = new Race(
            '',
            raceData.season,
            raceData.circuit,
            raceData.competition,
            raceData.date,
            raceData.id,
            raceData.laps,
            raceData.status,
            raceData.type,
            raceData.weather
          );
          const raceCard = race.getRaceCard();
          document.getElementById('race-card-container-season-page').insertAdjacentHTML('beforeend', raceCard);
        });
      })
      .catch((error) => console.log(error));
  }

  static inputSearch() {
    if (document.getElementById('search-input').value.trim() === '') {
      alert('Please insert something');
    } else {
      const inputData = document.getElementById('search-input').value.trim().replace(/ /g, '_');
      let queryParams = new URLSearchParams(window.location.search);
      queryParams.set('param', inputData);
      history.replaceState(null, null, '?' + queryParams.toString());
      document.getElementById('search-modal').classList.add('no-show');
      document.getElementById('search-input').value = '';
    }
  }

  static drawSearch(inputData) {
    API.getDrivers('', inputData)
      .then(function (response) {
        if (response.data.results === 0) {
          document.getElementById('search-drivers').innerHTML = 'NO RESULTS';
          document.getElementById('search-drivers').style.color = 'white';
        } else {
          response.data.response.forEach((driverData) => {
            const driver = new Driver(
              driverData.id,
              driverData.name,
              driverData.image,
              driverData.nationality,
              driverData.birthdate,
              driverData.teams
            );
            const driverCard = driver.getDriverCard();
            document.getElementById('search-drivers').insertAdjacentHTML('beforeend', driverCard);
          });
        }
      })
      .catch((error) => console.log(error));
    API.getCircuits(inputData)
      .then(function (response) {
        if (response.data.results === 0) {
          document.getElementById('search-circuits').innerHTML = 'NO RESULTS';
          document.getElementById('search-circuits').style.color = 'white';
        } else {
          response.data.response.forEach((circuitData) => {
            const circuit = new Circuit(
              circuitData.id,
              circuitData.name,
              circuitData.image,
              circuitData.competition,
              circuitData.length,
              circuitData.capacity,
              circuitData.opened
            );
            const circuitCard = circuit.getCircuitCard();
            document.getElementById('search-circuits').insertAdjacentHTML('beforeend', circuitCard);
          });
        }
      })
      .catch((error) => console.log(error));
    API.getTeams('', inputData)
      .then(function (response) {
        if (response.data.results === 0) {
          document.getElementById('search-teams').innerHTML = 'NO RESULTS';
          document.getElementById('search-teams').style.color = 'white';
        } else {
          response.data.response.forEach((teamData) => {
            const team = new Team(
              teamData.id,
              teamData.name,
              teamData.logo,
              teamData.president,
              teamData.director,
              teamData.technicalManager,
              teamData.engine,
              teamData.tyres
            );
            const teamCard = team.getTeamCard();
            document.getElementById('search-teams').insertAdjacentHTML('beforeend', teamCard);
          });
        }
      })
      .catch((error) => console.log(error));
  }
}

export { CONTAINER, UI };
