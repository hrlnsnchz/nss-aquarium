const fishCollection = [
    {
        image: "https://lh3.googleusercontent.com/proxy/8hYD0DPHjH2pPZkgxgZFHb6DbdRdnPiBrO2WEjtIs0MHMYOKeduppRUsq0Pt6qqGboJswIuhrEZMBPzRiYpjmguWpBSxGkh1U3JK6Q9MuvwiaBs3eFxjzQ",
        species: "Guppy",
        name: "Bart",
        habitat: "fresh water",
        food: "crustaceans",
        length: "7 inches"
    },
    {
        image: "https://2.imimg.com/data2/TK/QK/MY-3415778/common-carp-cyprinus-carpio-fish-seeds-500x500.jpg",
        species: "Common Carp",
        name: "Carlos",
        habitat: "fresh water",
        food: "omnivorous"
    },
    {
        image: "https://allthatsinteresting.com/wordpress/wp-content/uploads/2019/03/ocean-sunfish-wide-view-featured.jpg",
        species: "Ocean Sunfish",
        name: "Sol",
        habitat: "salt water",
        food: "small fish",
        length: "7 inches"
    },
    {
        image: "https://static.wikia.nocookie.net/peppapedia/images/9/99/BlueTangWMTa_C799.jpg/revision/latest?cb=20150309200634",
        species: "Blue Tang",
        name: "Dory",
        habitat: "salt water",
        food: "plankton",
        length: "7 inches"
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/07/04/20/14/gilt-head-bream-2472461_960_720.jpg",
        species: "Gilt-head Bream",
        name: "Github",
        habitat: "salt water",
        food: "shellfish",
        length: "7 inches"
    },
    {
        image: "https://i.pinimg.com/originals/82/b4/bd/82b4bd96e20863861cb1af1b16c180a7.jpg",
        species: "Snakehead Murrel",
        name: "Orochimaru",
        habitat: "fresh water",
        food: "frogs",
        length: "7 inches"
    },
    {
        image: "https://arowanafishforsale.com/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-02-at-2.42.41-PM-2.jpeg",
        species: "Asian Arowana",
        name: "Kim",
        habitat: "fresh water",
        food: "small fish",
        length: "7 inches"
    },
    {
        image: "https://fishingoutcast.com/wp-content/uploads/2018/11/Bonito-Fish-0.png",
        species: "Atlantic Bonito",
        name: "Benito",
        habitat: "salt water",
        food: "small fish",
        length: "7 inches"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}