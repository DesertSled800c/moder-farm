// plantToUse === yearlyPlan
import { addPlant } from "./field.js"

import { createSoybean } from "./seeds/soybean.js";
import { createCorn } from "./seeds/corn.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createWheat } from "./seeds/wheat.js";
import { createPotato } from "./seeds/potato.js";


export const plantSeeds = (yearlyPlan) => {
    for (const rows of yearlyPlan) {
        for (const plant of rows) {
            if (plant === "Soybean") {
                addPlant(createSoybean())
            }
            if (plant === "Corn") {
                addPlant(createCorn())
            }
            if (plant === "Sunflower") {
                addPlant(createSunflower())
            }
            if (plant === "Asparagus") {
                addPlant(createAsparagus())
            }
            if (plant === "Wheat") {
                addPlant(createWheat())
            }
            if (plant === "Potato") {
                addPlant(createPotato())
            }
        }
    }
}