export const Locations = (location) => {
    return `
    <article class="containerLeft__travelLocations contentArticle">
                    <div class="locationCard">
                        <img src="${location.image}">
                        <p>${location.city}</p>
                        <p>${location.country}</p>
                        <p>${location.waterbody}</p>
                        <p>${location.landmark}</p>
                    </div>
                </article>
    `
}