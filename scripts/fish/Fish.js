export const Fish = (fish) => {
    return `
        <section class="fish_card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__habitat">${fish.habitat}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
    `
}