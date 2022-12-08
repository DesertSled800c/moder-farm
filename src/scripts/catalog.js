
export const catalog = (harvestArr) => {
    let htmlstring = ``
    for (const log of harvestArr) {
        htmlstring += `<section class="plant">${log.type}</section>`
    }
    return htmlstring
}

