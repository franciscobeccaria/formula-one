const apiHeaders = {
  headers: {
    'x-rapidapi-key': '8e24c1ddadmsh14d300e160f7af5p1e6e9cjsnf29317490fbd',
    'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
  },
};

class Driver {
  constructor(id, name, image, nationality, birthdate, teams) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.nationality = nationality;
    this.birthdate = birthdate;
    this.teams = teams;
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
}

class Standing {
  constructor(raceId, results, response) {
    this.raceId = raceId;
    this.results = results;
    this.response = response;
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
    return `
      <tr>
          <td>${this.position}°</td>
          <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="${this.driver.image}" alt="Driver Image"></div></td>
          <td class="driver-link">${this.driver.name}</td>
          <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>
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
}

class TeamsRow {
  constructor(position, team, points, season) {
    this.position = position;
    this.team = team;
    this.points = points;
    this.season = season;
  }
}

function validateParam(value, type) {
  let param;
  if (value) {
    param = `${type}=${value}&`;
  } else {
    param = '';
  }
  return param;
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
    await axios.get(url, apiHeaders).then(function (response) {
      console.log(response.data);
    });
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
    await axios.get(url, apiHeaders).then(function (response) {
      console.log(response.data);
    });
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
    await axios.get(url, apiHeaders).then(function (response) {
      console.log(response.data);
    });
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
    await axios.get(url, apiHeaders).then(function (response) {
      console.log(response.data);
    });
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
    await axios.get(url, apiHeaders).then(function (response) {
      console.log(response.data);
    });
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
    await axios.get(url, apiHeaders).then(function (response) {
      console.log(response.data);
    });
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
    return await axios.get(url, apiHeaders);
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
    return await axios.get(url, apiHeaders);
  }
}

class UI {
  static async drawRaceRanking(tableLength, raceValue, teamValue, driverValue) {
    let raceTableHtml = `
    <tr>
        <th>P.</th>
        <th></th>
        <th>Driver</th>
        <th></th>
        <th>Team</th>
        <th></th>
        <th>Time</th>
        <th class="no-show">Diff.</th>
        <th>L</th>
        <th>B</th>
        <th>G</th>
    </tr>
`;
    await API.getRaceRankings(raceValue, teamValue, driverValue).then(function (response) {
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
    });
    document.getElementById('last-race-rankings').innerHTML = raceTableHtml;
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
    await API.getRaces(competitionValue, seasonValue, idValue, typeValue, timezoneValue, dateValue, nextValue, lastValue).then(
      function (response) {
        const raceData = response.data.response[0];
        console.log(raceData);
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
        let raceInformationHtml = `
                    <p><strong>${race.date.slice(0, 10)}</strong></p>
                    <p>${race.circuit.name} in <br><strong>${race.competition.location.city}, ${
          race.competition.location.country
        }</strong></p>
                    <p><strong>Race</strong> #1<br><strong>Season</strong> ${race.season}</p>
                    <p><strong>Weather:</strong> ${race.weather}   <span><i class="fas fa-sun"></i></span></p>
                    <p><strong>Status:</strong> ${race.status}</p>
                    <button id="load">See Complete GP Information</button>
    `;
        document.getElementById('last-race-info').innerHTML = raceInformationHtml;
        document.getElementById('last-race-title').innerText = race.competition.name;
        idLastRace = race.id;
        UI.drawRaceRanking(tableLength, idLastRace);
      }
    );
  }
}

let idLastRace;
