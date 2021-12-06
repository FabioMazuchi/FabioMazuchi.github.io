const data = require("../data/zoo_data");
// TODO

const getAnimals = () => {
  const res = {};
  const local = ["NE", "NW", "SE", "SW"];
  local.forEach((value) => {
    res[value] = data.species
      .filter((especie) => especie.location === value)
      .map((animal) => animal.name);
  });
  return res;
};

// console.log(getAnimals());

const getArrayNomes = () => {
  const res = {};
  const local = ["NE", "NW", "SE", "SW"];
  local.forEach((value) => {
    res[value] = data.species
      .filter((especie) => especie.location === value)
      .reduce((acc, spec) => {
        acc[spec.name] = spec.residents.map((val) => val.name);
        return acc;
      }, {});
  });
  return res;
};

// console.log(getArrayNomes());

function getAnimalMap(options) {
  if (options !== undefined) {
    const { sex, sorted } = options;
    if (sex === "female" || (sorted && sex === "female")) {
      return getAnimals();
    }
    if (includNames) {
      return getArrayNomes();
    }
  }
  return getAnimals();
}

console.log(getAnimalMap({ sex: "female", sorted: true }));

module.exports = getAnimalMap;
