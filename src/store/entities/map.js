export function mapEntities(data) {
  const citiesMap = new Map();
  const districtsMap = new Map();
  const streetsMap = new Map();
  const housesMap = new Map();


  // Преобразование городов и создание мап
  const cities = data.cities.map((city) => {
    const cityWithDistricts = { ...city, items: [], type: 'city', id: city.id };
    citiesMap.set(city.id, cityWithDistricts);
    return cityWithDistricts;
  })

  // Преобразование районов, привязка к городам, и создание мап
  data.districts.forEach((district) => {
    const districtWithStreets = { ...district, items: [], type: 'district', id: district.id };
    districtsMap.set(district.id, districtWithStreets);
    citiesMap.get(district.cityId)?.items.push(districtWithStreets);
  })

  // Преобразование улиц, привязка к районам, и создание мап
  data.streets.forEach((street) => {
    const streetWithHouses = { ...street, items: [], type: 'street', id: street.id };
    streetsMap.set(street.id, streetWithHouses);

    districtsMap.get(street.districtId)?.items.push(streetWithHouses);
  });

  // Преобразование домов, привязка к улицам, и создание мап
  data.houses.forEach((house) => {
    const houseWithEntrances = { ...house, items: [], type: 'house', id: house.id };
    housesMap.set(house.id, houseWithEntrances);

    streetsMap.get(house.streetId)?.items.push(houseWithEntrances);
  });

  // Привязка подъездов к домам
  data.entrances.forEach((entrance) => {
    housesMap.get(entrance.houseId)?.items.push({...entrance, type: 'entrance', id: entrance.id});
  });

  return cities;
}