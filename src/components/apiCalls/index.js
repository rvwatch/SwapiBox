export const apiRoot = 'https://swapi.co/api/';

export const getData = async url => {
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
};

export const cleanPeopleData = async ({ results }) => {
  const unresolvedPromises = results.map(async people => {
    const homeworld = await getData(people.homeworld);
    const species = await getData(people.species);

    return {
      title: people.name,
      data1: `Homeworld: ${homeworld.name}`,
      data2: `Species: ${species.name}`,
      data3: `Population: ${homeworld.population}`
    };
  });
  return await Promise.all(unresolvedPromises);
};

export const cleanPlanetData = async ({ results }) => {
  const unresolvedPromises = results.map(async planet => {
    const residentData = await getResidentData(planet.residents);

    return {
      title: planet.name,
      data1: `Terrain: ${planet.terrain}`,
      data2: `Population: ${planet.population}`,
      data3: `Climate: ${planet.climate}`,
      data4: `Resident: ${residentData}`
    };
  });
  return await Promise.all(unresolvedPromises);
};

const getResidentData = async (urls) => {
  const unresolvedPromises = urls.map(async url => {
    const data = await getData(url);    
    return data.name;
  });
  return await Promise.all(unresolvedPromises);
};

export const cleanVehicleData = async ({ results }) => {
  const unresolvedPromises = results.map(async vehicle => {

    return {
      title: vehicle.name,
      data1: `Model: ${vehicle.model}`,
      data2: `Class: ${vehicle.vehicle_class}`,
      data3: `Passengers: ${vehicle.passengers}`
    };
  });
  return await Promise.all(unresolvedPromises);
}
