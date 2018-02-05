import {
  getData,
  cleanVehicleData,
  cleanPlanetData,
  cleanPeopleData,
  getFilmScroll
} from './index';

import {
  mockPeople,
  mockVehicleData,
  mockedCleanVehicle,
  mockPlanetData,
  mockedCleanPlanet,
  mockFilmData,
  mockCharacters,
  cleanCharacter
} from './mockedData';

describe('getData', () => {
  let expectedParams;

  beforeEach(() => {
    expectedParams = 'http://swapi/api';

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            data: mockPeople
          })
      });
    });
  });

  it('is called with the correct params', () => {
    getData(expectedParams);
    expect(window.fetch).toHaveBeenCalledWith(expectedParams);
  });

  it('should return an object if the status code is ok', () => {
    expect(getData(expectedParams)).resolves.toEqual({ data: mockPeople });
  });

  it('throws an error if the status code is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        ok: false,
        status: 404,
        json: () => Promise.reject('ERROR!')
      });
    });
    const throwError = await getData();
    expect(throwError).toEqual('ERROR!');
  });
});

describe('getFilmScroll', () => {
  it('should return a string from the api', async () => {
    expect(mockFilmData.results).toHaveLength(7);
    const returnedFilm = await getFilmScroll(mockFilmData);
    expect(typeof returnedFilm).toEqual('object');
  });
});

describe('cleanPeople', () => {
  let expectedParams;

  beforeEach(() => {

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            data: mockCharacters
          })
      });
    });
  });
  it('should return a cleaned person when passed data is passed into it', async () => {
    expect(cleanPeopleData(mockCharacters)).resolves.toEqual(cleanCharacter);
  });
});

describe('cleanPlanet', async () => {
  let getResidentData;
  let expectedParams;

  beforeEach(() => {
    expectedParams = 'http://swapi/api';

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            data: mockPlanetData
          })
      });
    });
  });

  it('should return a cleaned planet when passed data is passed into it', async () => {
    getResidentData = jest.fn();
    const returnedPlanet = await cleanPlanetData(mockPlanetData);
    expect(getResidentData).toHaveBeenCalled;
    expect(returnedPlanet).toEqual(mockedCleanPlanet);
  });
  it('should return residents info', async () => {
    expect(getData(expectedParams)).resolves.toEqual({ data: mockPlanetData });
  });
});

describe('cleanVehicleData', () => {
  it('should return a cleaned vehicle when passed data is passed into it', async () => {
    const returnedVehicles = await cleanVehicleData(mockVehicleData);
    expect(returnedVehicles).toEqual(mockedCleanVehicle);
  });
});
