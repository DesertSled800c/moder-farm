console.log("Welcome to the main module");

import { createPlan } from "./plan.js";

import { createSoybean } from "./seeds/soybean.js";
import { createCorn } from "./seeds/corn.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createWheat } from "./seeds/wheat.js";
import { createPotato } from "./seeds/potato.js";

import { addPlant } from "./field.js";
import { usePlants } from "./field.js";

import { plantSeeds } from "./tractor.js";

import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";

const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

const plantToUse = usePlants()

// console.log(plantToUse)

const harvestArr = harvestPlants(plantToUse)

// console.log(harvestArr)

const cat = catalog(harvestArr)

// console.log(cat)



const parentHTMLElement = document.querySelector(".catalog__harvestArr")

parentHTMLElement.innerHTML = catalog(harvestArr)






// const soybeanSeed = createSoybean();
// const cornSeed = createCorn();
// const sunflowerSeed = createSunflower();
// const asparagusSeed = createAsparagus();
// const wheatSeed = createWheat();
// const potatoSeed = createPotato();


// let soybeanAdded = addPlant(soybeanSeed);
// let cornAdded = addPlant(cornSeed);
// let sunflowerAdded = addPlant(sunflowerSeed);
// let asparagusAdded = addPlant(asparagusSeed);
// let wheatAdded = addPlant(wheatSeed);
// let potatoAdded = addPlant(potatoSeed);

