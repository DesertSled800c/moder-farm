
export const harvestPlants = (plantToUse) => {
    let seedsArr = []
    for (const plantObj of plantToUse) {
        if (plantObj.type !== "Corn") {
            for (let i = 0; i < plantObj.output; i++) {
                seedsArr.push(plantObj)
            }
        }
        if (plantObj.type === "Corn") {
            for (let i = 3; i < plantObj.output; i++) {
                seedsArr.push(plantObj)
            }
        }
    }
    return seedsArr
}

