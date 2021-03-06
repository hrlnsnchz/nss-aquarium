import { useTips } from './TipDataProvider.js'
import { Tips } from "./Tip.js"

export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerRight")
    const tips = useTips()

    // Generate all of the HTML for all of the fish
    let tipsHTMLRepresentations = ""
    for (const tip of tips) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
       tipsHTMLRepresentations += Tips(tip)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="tipList">
            ${tipsHTMLRepresentations}
        </article>
    `
}