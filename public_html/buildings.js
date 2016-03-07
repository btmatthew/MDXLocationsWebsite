/* START building objects */

var collegeBuilding = {
    name: "College Building",
    description: "The College Building is the heart of Hendon Campus. The quadrangle is covered by a stunning glassroof based on the design of a similar structure at the British Museum.High quality teaching rooms are set around the Quadrangle to create aspace for staff and students to study, meet, relax and enjoy events runthroughout the year. The Middlesex University Campus Reception and Student Information booth are located in the quadrangle.Student Services (Student Office, Money and Welfare Advice, Counsellingand Students with Children) operate on the ground floor of The CollegeBuilding. Their opening hours are 9.30am - 3.30pm from Monday to Friday.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Middlesex_University_Hendon_Campus.jpg",
    location: {
        lat: 51.58983943,
        lng: -0.22894397
    },
    zoom: 19
};

var hatchcroft = {
    name: "Hatchcroft",
    description: "The £36 million Hatchcroft building is home to world-class science research and teaching at Middlesex. Specialist spaces for biomedical and environmental sciences, computer science, psychology and sport and human performance allow students to work in some of the best-equipped laboratories in the UK. Hatchcroft also houses modern lecture theatres and advanced computer laboratories.",
    image: "",
    location: {
        lat: 51.58915619,
        lng: -0.22918001
    },
    zoom: 19
};

var building9 = {
    name: "Building 9",
    description: "Building 9 houses our Education department. The recently refurbished building includes a number of flexible areas for teaching, including a designated early childhood play area and a modern ICT suite.",
    image: "",
    location: {
        lat: 51.58983943,
        lng: -0.22894397
    },
    zoom: 19
};

var hendonTownHall = {
    name: "Hendon Town Hall",
    description: "The Hendon Town Hall, which was built in 1901, features original council chambers which provide the perfect venue to hold moots (mock court), as well as law lectures and debates.",
    image: "",
    location: {
        lat: 51.58983943,
        lng: -0.22894397
    },
    zoom: 19
};

var theGrove = {
    name: "The Grove",
    description: "Our £80 million Grove is home to some of the best creative facilities in the UK. The building houses state-of-the-art TV studios, workshops for fashion, textile and jewellery design, a ceramics studio, TV and film production suites, 3D workshops and extensive photography facilities. The Grove is the place to explore traditional and new techniques across the creative disciplines.",
    image: "",
    location: {
        lat: 51.58861959,
        lng: -0.2305533
    },
    zoom: 19
};

var mdxHouse = {
    name: "MDX House",
    description: "MDX House is the social centre of our campus, where students can socialise over a drink or a meal in our newly-refurbished bar and dining areas, enjoy live music and performance or a game of pool. The MDX House precinct is also home to the Fitness Pod, our campus gym, and a variety of sporting facilities – including a Real Tennis Court, AstroTurf pitches, multi-use courts and a bouldering wall.",
    image: "",
    location: {
        lat: 51.58983943,
        lng: -0.23014024
    },
    zoom: 19
};

var theSheppardLibrary = {
    name: "The Sheppard Library",
    description: "The Sheppard Library is open 24 hours a day, seven days a week during term time. Our collection encompasses more than half a million items, including 350,000 books and e-books and over 24,000 online journals. The library is home to more than 1,000 study areas and 600 computing spaces, and specialist staff are on hand to offer guidance and support to help students meet their study needs.",
    image: "",
    location: {
        lat: 51.59039934,
        lng: -0.22959307
    },
    zoom: 19
};

var williamsBuilding = {
    name: "Williams Building",
    description: "The Williams Building is our hub for students studying Business and Law at Middlesex, and home to Library@Williams, a dedicated research and study space.",
    image: "",
    location: {
        lat: 51.590466,
        lng: -0.22848263
    },
    zoom: 19
};

var modelFarmhouse = {
    name: "Model Farmhouse",
    description: "The Model Farmhouse is home to our research and business centre. It also plays host to various events and conferences in its designated meeting and seminar rooms.",
    image: "",
    location: {
        lat: 51.58983943,
        lng: -0.22894397
    },
    zoom: 19
};

var ravensfield = {
    name: "Ravensfield",
    description: "Ravensfield House is home to the Theatre Arts degrees at Middlesex. It houses a fully operational theatre which hosts regular performances, as well as a series of workshops, rehearsal spaces, dressing rooms and a costume store.",
    image: "",
    location: {
        lat: 51.58983943,
        lng: -0.22894397
    },
    zoom: 19
};

var usherHall = {
    name: "Usher Hall",
    description: "Middlesex University's bright, modern Halls of Residence allow you to enjoy campus life on your doorstep.",
    image: "",
    location: {
        lat: 51.58983943,
        lng: -0.22894397
    },
    zoom: 19
};

var sportsField = {
    name: "Sports Field",
    description: "",
    image: "",
    location: {
        lat: 51.58983943,
        lng: -0.22894397
    },
    zoom: 19
};
/* END building objects */

function changeLocation(buildingObject) {
    document.getElementById("buildingDescription").innerHTML = (buildingObject.description);
    document.getElementById('buildingImage').src = buildingObject.image;

    //    document.getElementById("buildingName").innerHTML = buildingObject.name;
    //    map.setCenter(buildingObject.location);
    //    map.setZoom(buildingObject.zoom);
};
