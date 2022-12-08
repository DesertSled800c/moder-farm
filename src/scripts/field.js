let field = [];

export const addPlant = (seedObj) => {
  if (Array.isArray(seedObj)) {
    for (let seed of seedObj) {
      field.push(seed);
    }
  } else {
    field.push(seedObj);
  }
};


export const usePlants = () => {
  let fieldCopy = [...field];
  return fieldCopy;
};
