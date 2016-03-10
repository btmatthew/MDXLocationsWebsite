var imgPath = "./img/building/";

var collegeBuilding = {
    name: "College Building",
    description: "The College Building is the heart of Hendon Campus. The quadrangle is covered by a stunning glassroof based on the design of a similar structure at the British Museum.High quality teaching rooms are set around the Quadrangle to create aspace for staff and students to study, meet, relax and enjoy events runthroughout the year. The Middlesex University Campus Reception and Student Information booth are located in the quadrangle.Student Services (Student Office, Money and Welfare Advice, Counsellingand Students with Children) operate on the ground floor of The CollegeBuilding. Their opening hours are 9.30am - 3.30pm from Monday to Friday.",
    image: imgPath + "collegeBuilding.jpg",
    location: {
        lat: 51.58983943,
        lng: -0.22894397
    },
    zoom: 19
};

var hatchcroft = {
    name: "Hatchcroft",
    description: "Building has begun on our new teaching and research building at Hendon Campus.This will opening in September 2008 to coincide with the relocation of Middlesex University's Health and Social Sciences Programme to Hendon Campus. This building will be comprised of two large lecture theatres and specialist laboratories for Psychology, Biomedical Science and Computing Science.",
    image: imgPath + "hatchcroft.jpg",
    location: {
        lat: 51.58915619,
        lng: -0.22918001
    },
    zoom: 19
};

var hendonTownHall = {
    name: "Hendon Town Hall",
    description: "The Hendon Town Hall, which was built in 1901, features original council chambers which provide the perfect venue to hold moots (mock court), as well as law lectures and debates.",
    image: imgPath + "hendonTownHall.jpg",
    location: {
        lat: 51.58983943,
        lng: -0.22894397
    },
    zoom: 19
};

var theGrove = {
    name: "The Grove",
    description: "Our £80 million Grove is home to some of the best creative facilities in the UK. The building houses state-of-the-art TV studios, workshops for fashion, textile and jewellery design, a ceramics studio, TV and film production suites, 3D workshops and extensive photography facilities. The Grove is the place to explore traditional and new techniques across the creative disciplines.",
    image: imgPath + "theGrove.jpg",
    location: {
        lat: 51.58861959,
        lng: -0.2305533
    },
    zoom: 19
};

var mdxHouse = {
    name: "MDX House",
    description: "MDX House is our dedicated student entertainment and social space which houses a student bar and eating outlets. It also serves as a performance venue and an area for you to relax with your friends and play some pool. It is also home to our Fitness Pod, the University's flagship fitness facility, as well as Student Union.",
    image: imgPath + "mdxHouse.jpg",
    location: {
        lat: 51.58983943,
        lng: -0.23014024
    },
    zoom: 19
};

var theSheppardLibrary = {
    name: "The Sheppard Library",
    description: "The Sheppard Library is open 24 hours a day, seven days a week during term time. Our collection encompasses more than half a million items, including 350,000 books and e-books and over 24,000 online journals. The library is home to more than 1,000 study areas and 600 computing spaces, and specialist staff are on hand to offer guidance and support to help students meet their study needs.",
    image: imgPath + "theSheppardLibrary.jpg",
    location: {
        lat: 51.59039934,
        lng: -0.22959307
    },
    zoom: 19
};

var williamsBuilding = {
    name: "Williams Building",
    description: "The Williams Building is our hub for students studying Business and Law at Middlesex, and home to Library@Williams, a dedicated research and study space.",
    image: imgPath + "williamsBuilding.jpg",
    location: {
        lat: 51.590466,
        lng: -0.22848263
    },
    zoom: 19
};

var modelFarmhouse = {
    name: "Model Farmhouse",
    description: "The Model Farmhouse is home to our research and business centre. It also plays host to various events and conferences in its designated meeting and seminar rooms.",
    image: imgPath + "modelFarmhouse.jpg",
    location: {
        lat: 51.58983943,
        lng: -0.22894397
    },
    zoom: 19
};

var usherHall = {
    name: "Usher Hall",
    description: "Usher Hall is one of Middlesex University's own halls which is managed by our partner Viridian Housing. Staying at this bright and modern accommodation, you will have campus life on your doorstep.",
    image: imgPath + "usherHall.jpg",
    location: {
        lat: 51.58983943,
        lng: -0.22894397
    },
    zoom: 19
};

var sportsField = {
    name: "Sports Field",
    description: "",
    image: imgPath + "sportsField.jpg",
    location: {
        lat: 51.58983943,
        lng: -0.22894397
    },
    zoom: 19
};
/* END building objects */

function changeLocation(buildingObject) {
    document.getElementById("buildingDescription").innerHTML = '<p>' + (buildingObject.description) + '</p>';
    document.getElementById('buildingImage').src = buildingObject.image;

    //    document.getElementById("buildingName").innerHTML = buildingObject.name;
    //    map.setCenter(buildingObject.location);
    //    map.setZoom(buildingObject.zoom);
};
