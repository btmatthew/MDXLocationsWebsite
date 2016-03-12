var currentSecs = new Date().getUTCSeconds();
var waitFor = 60 - currentSecs;
var loopingTime = 2000;
console.log("Wait for: " + waitFor);

var imgPath = "./img/building/";

var collegeBuilding = {
    name: "College Building",
    description: "The College Building is the heart of Hendon Campus. The quadrangle is covered by a stunning glassroof based on the design of a similar structure at the British Museum.High quality teaching rooms are set around the Quadrangle to create a space for staff and students to study, meet, relax and enjoy events runthroughout the year.",
    image: imgPath + "collegeBuilding.jpg",
    location: {
        lat: 51.5898175,
        lng: -0.2289726
    },
    zoom: 23
};

var hatchcroft = {
    name: "Hatchcroft",
    description: "The £36 million Hatchcroft building is home to world-class science research and teaching at Middlesex. Specialist spaces for biomedical and environmental sciences, computer science, psychology and sport and human performance allow students to work in some of the best-equipped laboratories in the UK.",
    image: imgPath + "hatchcroft.jpg",
    location: {
        lat: 51.5891294,
        lng: -0.2291432
    },
    zoom: 23
};

var hendonTownHall = {
    name: "Hendon Town Hall",
    description: "The Hendon Town Hall, which was built in 1901, features original council chambers which provide the perfect venue to hold moots (mock court), as well as law lectures and debates.",
    image: imgPath + "hendonTownHall.jpg",
    location: {
        lat: 51.58983943,
        lng: -0.2295362
    },
    zoom: 23
};

var theGrove = {
    name: "The Grove",
    description: "Our £80 million Grove is home to some of the best creative facilities in the UK. The building houses state-of-the-art TV studios, workshops for fashion, textile and jewellery design, a ceramics studio, TV and film production suites, 3D workshops and extensive photography facilities.",
    image: imgPath + "theGrove.jpg",
    location: {
        lat: 51.588753,
        lng: -0.2304913
    },
    zoom: 19
};

var mdxHouse = {
    name: "MDX House",
    description: "MDX House is our dedicated student entertainment and social space which houses a student bar and eating outlets. It also serves as a performance venue and an area for you to relax with your friends and play some pool. It is also home to our Fitness Pod, the University's flagship fitness facility.",
    image: imgPath + "mdxHouse.jpg",
    location: {
        lat: 51.5899574,
        lng: -0.2308205
    },
    zoom: 23
};

var theSheppardLibrary = {
    name: "The Sheppard Library",
    description: "The Sheppard Library is open 24 hours a day, seven days a week during term time. Our collection encompasses more than half a million items, including 350,000 books and e-books and over 24,000 online journals. The library is home to more than 1,000 study areas and 600 computing spaces",
    image: imgPath + "theSheppardLibrary.jpg",
    location: {
        lat: 51.5904446,
        lng: -0.229573
    },
    zoom: 23
};

var williamsBuilding = {
    name: "Williams Building",
    description: "The Williams Building is our hub for students studying Business and Law at Middlesex, and home to Library@Williams, a dedicated research and study space.",
    image: imgPath + "williamsBuilding.png",
    location: {
        lat: 51.5905489,
        lng: -0.2285415
    },
    zoom: 23
};

var usherHall = {
    name: "Usher Hall",
    description: "Usher Hall is one of Middlesex University's own halls which is managed by our partner Viridian Housing. Staying at this bright and modern accommodation, you will have campus life on your doorstep.",
    image: imgPath + "usherHall.jpg",
    location: {
        lat: 51.589485,
        lng: -0.2272254
    },
    zoom: 23
};
/* END building objects */
