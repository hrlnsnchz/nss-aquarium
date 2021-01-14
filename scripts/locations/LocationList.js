import { useLocations } from './LocationDataProvider.js'
import { Locations } from "./Location.js"

export const LocationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft")
    const locations = useLocations()

    // Generate all of the HTML for all of the fish
    let locationsHTMLRepresentations = ""
    for (const location of locations) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
       locationsHTMLRepresentations += Locations(location)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="locationList">
            ${locationsHTMLRepresentations}
        </article>
    `
}