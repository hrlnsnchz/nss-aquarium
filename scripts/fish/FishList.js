import { useFish } from './FishDataProvider.js'
import { Fish } from "./Fish.js"
import { mostHolyFish } from './FishDataProvider.js'
import { soldierFish } from './FishDataProvider.js'
import { HolyFish } from "./Fish.js"
import { Soldiers } from "./Fish.js"
import { nonHolyFish } from './FishDataProvider.js'
import { Peasants } from "./Fish.js"


export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft")
    const fishes = useFish()

    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
       fishHTMLRepresentations += Fish(fish)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fishList">
            ${fishHTMLRepresentations}
        </article>
    `
}

export const HolyFishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft")
    const holyFishes = mostHolyFish()

    // Generate all of the HTML for all of the fish
    let holyFishHTMLRepresentations = ""
    for (const fish of holyFishes) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
       holyFishHTMLRepresentations += HolyFish(fish)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
    <h3>Holy Ones</h3>
        <article class="fishList">
            ${holyFishHTMLRepresentations}
        </article>
    `
}

export const SoldierFishList = () => {

    const contentElement = document.querySelector(".containerLeft")
    const soldierFishes = soldierFish()

    let soldierFishHTMLRepresentations = ""
    for (const fish of soldierFishes) {
       soldierFishHTMLRepresentations += Soldiers(fish)
    }

    contentElement.innerHTML += `
    <h3>Soldiers</h3>
        <article class="fishList">
            ${soldierFishHTMLRepresentations}
        </article>
    `
}


export const PeasantFishList = () => {

    const contentElement = document.querySelector(".containerLeft")
    const peasantFishes = nonHolyFish()

    let peasantFishHTMLRepresentations = ""
    for (const fish of peasantFishes) {
       peasantFishHTMLRepresentations += Peasants(fish)
    }

    contentElement.innerHTML += `
    <h3>Peasants</h3>
        <article class="fishList">
            ${peasantFishHTMLRepresentations}
        </article>
    `
}