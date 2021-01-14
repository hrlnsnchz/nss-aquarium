const martinsLocations = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/China_House_on_Chao_Phraya_River_photo_D_Ramey_Logan.jpg/220px-China_House_on_Chao_Phraya_River_photo_D_Ramey_Logan.jpg",
        city: "Bangkok",
        country: "Thailand",
        waterbody: "Chao Phraya River",
        landmark: "China House"
    }
]

export const useLocations = () => {
    return martinsLocations.slice()
}

/* <article class="containerLeft__travelLocations contentArticle">
                    <div class="locationCard">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/China_House_on_Chao_Phraya_River_photo_D_Ramey_Logan.jpg/220px-China_House_on_Chao_Phraya_River_photo_D_Ramey_Logan.jpg"
                            alt="China House on the River">
                        <p class="locationCard__city">Bangkok</p>
                        <p class="locationCard__country">Thailland</p>
                        <p class="locationCard__waterBody">Chao Phraya River</p>
                        <p class="locationCard__landmark">China House</p>
                    </div>
                </article> */