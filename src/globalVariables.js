// functions
function validateParam(value, type) {
  let param;
  if (value) {
    param = `${type}=${value}&`;
  } else {
    param = '';
  }
  return param;
}

function getDriverImage(id, driverId, driverContext) {
  if (driverId == id) {
    DRIVER_IMAGES.forEach((driver) => {
      if (driver.id === id) {
        if (driverContext.hasOwnProperty('driver')) {
          return (driverContext.driver.image = driver.image);
        } else {
          return (driverContext.image = driver.image);
        }
      }
    });
  }
}

function validateDriverImage(driverId, driverContext) {
  getDriverImage('10', driverId, driverContext);
  getDriverImage('24', driverId, driverContext);
  getDriverImage('61', driverId, driverContext);
  getDriverImage('35', driverId, driverContext);
  getDriverImage('18', driverId, driverContext);
}

// new
const CURRENT_SEASON = '2020';

// act
const HEADER_NAV = document.getElementById('main-header-nav');
const CLOSE_MENU = document.getElementById('close-menu');
const TOGGLE_MENU = document.getElementById('toggle-menu');
const TOGGLE_SEARCH = document.getElementById('toggle-search');
const SEARCH_MODAL = document.getElementById('search-modal');
const CLOSE_SEARCH_MODAL = document.getElementById('close-search-modal');
const CONTAINER = document.getElementById('spa-container');
const API_HEADERS = {
  headers: {
    'x-rapidapi-key': '8e24c1ddadmsh14d300e160f7af5p1e6e9cjsnf29317490fbd',
    'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
  },
};
const DRIVER_IMAGES = [
  {
    id: '10',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/2019_Formula_One_tests_Barcelona%2C_P%C3%A9rez_%2847200017422%29.jpg/1200px-2019_Formula_One_tests_Barcelona%2C_P%C3%A9rez_%2847200017422%29.jpg',
  },
  {
    id: '24',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/2019_Formula_One_tests_Barcelona%2C_Sainz_%2847251966861%29.jpg/1200px-2019_Formula_One_tests_Barcelona%2C_Sainz_%2847251966861%29.jpg',
  },
  { id: '61', image: 'https://www.f1-fansite.com/wp-content/uploads/2020/01/Nicholas-Latifi-info-wiki-scaled.jpg' },
  { id: '35', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Brendon_Hartley_USA_2017.jpg' },
  { id: '18', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/F12019_Schloss_Gabelhofen_%2821%29.jpg' },
];

export {
  CURRENT_SEASON,
  HEADER_NAV,
  CLOSE_MENU,
  TOGGLE_MENU,
  TOGGLE_SEARCH,
  SEARCH_MODAL,
  CLOSE_SEARCH_MODAL,
  CONTAINER,
  API_HEADERS,
  DRIVER_IMAGES,
  validateDriverImage,
  getDriverImage,
  validateParam,
};
