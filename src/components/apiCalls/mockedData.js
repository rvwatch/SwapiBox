export const mockPeople = { Title: 'Luke Skywalker', homeworld: 'Tatooine' };

export const mockData = [
  { Title: 'Luke Skywalker', homeworld: 'Tatooine' },
  { Title: 'R2-D2', homeworld: 'Naboo' }
];

export const mockFilmData = {
  results: [
    { film1: '1' },
    { film2: '2' },
    { film3: '3' },
    { film4: '4' },
    { film5: '5' },
    { film6: '6' },
    { film7: '7' }
  ]
};

export const mockVehicleData = {
  results: [
    {
      name: 'Sand Crawler',
      model: 'Digger Crawler',
      manufacturer: 'Corellia Mining Corporation',
      cost_in_credits: '150000',
      length: '36.8',
      max_atmosphering_speed: '30',
      crew: '46',
      passengers: '30',
      cargo_capacity: '50000',
      consumables: '2 months',
      vehicle_class: 'wheeled',
      pilots: [],
      films: ['https://swapi.co/api/films/5/', 'https://swapi.co/api/films/1/'],
      created: '2014-12-10T15:36:25.724000Z',
      edited: '2014-12-22T18:21:15.523587Z',
      url: 'https://swapi.co/api/vehicles/4/'
    }
  ]
};

export const mockedCleanVehicle = [
  {
    title: 'Sand Crawler',
    data1: 'Model: Digger Crawler',
    data2: 'Class: wheeled',
    data3: 'Passengers: 30',
    favorite: false
  }
];

export const mockPlanetData = {
  results: [
    {
      name: 'Tatooine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid',
      gravity: '1 standard',
      terrain: 'desert',
      surface_water: '1',
      population: '200000',
      residents: ['']
    }
  ]
};

export const mockedCleanPlanet = [
  {
    title: 'Tatooine',
    data1: 'Terrain: desert',
    data2: 'Population: 200000',
    data3: 'Climate: arid',
    data4: 'Resident: ',
    favorite: false
  }
];

export const mockedResidents = [
  { name: 'Luke Skywalker' },
  { name: 'Darth Vader' },
  { name: 'Yoda' }
];

export const mockURLS = [
  { name: 'swapiBox/URL' },
  { name: 'swapiBox/URL' },
  { name: 'swapiBox/URL' }
];

export const mockedCleanResidents = ['Luke Skywalkder', 'Darth Vader', 'Yoda'];

export const mockCharacters = {
  results: [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/',
        'https://swapi.co/api/films/7/'
      ],
      species: ['https://swapi.co/api/species/1/'],
      vehicles: [
        'https://swapi.co/api/vehicles/14/',
        'https://swapi.co/api/vehicles/30/'
      ],
      starships: [
        'https://swapi.co/api/starships/12/',
        'https://swapi.co/api/starships/22/'
      ],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      url: 'https://swapi.co/api/people/1/'
    }
  ]
};

export const mockCharacter = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.co/api/planets/1/',
  films: [
    'https://swapi.co/api/films/2/',
    'https://swapi.co/api/films/6/',
    'https://swapi.co/api/films/3/',
    'https://swapi.co/api/films/1/',
    'https://swapi.co/api/films/7/'
  ],
  species: ['https://swapi.co/api/species/1/'],
  vehicles: [
    'https://swapi.co/api/vehicles/14/',
    'https://swapi.co/api/vehicles/30/'
  ],
  starships: [
    'https://swapi.co/api/starships/12/',
    'https://swapi.co/api/starships/22/'
  ],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.co/api/people/1/'
};

export const cleanCharacter = [{
  data1: 'Homeworld: undefined',
  data2: 'Species: undefined',
  data3: 'Population: undefined',
  favorite: false,
  title: 'Luke Skywalker'
}];
