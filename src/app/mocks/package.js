export const packages = [
  {
    id: 1,
    description: "Disfruta esta tarde con tus seres queridos en el teleferico.",
    image: "Teleferico-de-Caracas.webp",
    timeInit: "12:00 pm",
    timeEndEstimated: "8:00 pm",
    placeReserve: "Lounge Bar 1956",
    price: "200 $",
    peopleCount: "5 personas",
    foodType: "Aves y carnes",
    drinkType: "Vino español",
  },
  {
    id: 2,
    description: "Una velada romantica en el Junquito",
    image: "https://i0.wp.com/radio.otilca.org/wp-content/uploads/2020/06/unnamed.png?resize=920%2C425&ssl=1",
    timeInit: "12:00 pm",
    timeEndEstimated: "8:00 pm",
    placeReserve: "Club el Junquito",
    price: "200 $",
    peopleCount: "4 personas",
    foodType: "Cochino frito",
    drinkType: "Cerveza artesanal",
  },
  {
    id: 3,
    description: "Goza un pullero en club Izcaragua.",
    image: "https://i.pinimg.com/originals/85/7f/4b/857f4b2ac67198af84c76707ad165160.jpg",
    timeInit: "12:00 pm",
    timeEndEstimated: "8:00 pm",
    placeReserve: "Izcaragua",
    price: "50 $",
    peopleCount: "3 personas",
    foodType: "Hamburguesas",
    drinkType: "Cervezas Polar",
  },
  {
    id: 4,
    description: "Abraza tu pareja, en este tour de la Colonia Tovar.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Iglesia_San_Martin_de_Tours_II.jpg",
    timeInit: "8:00 am",
    timeEndEstimated: "5:00 pm",
    placeReserve: "Restaurant Biegarten",
    price: "300 $",
    peopleCount: "2 personas",
    foodType: "Comida holandesa",
    drinkType: "Vino",
  },
]

export const packageExperiences = packages.map(a => ({
  id: a.id, description: a.description, image: a.image, peopleCount: a.peopleCount}))

export const packageItinerary = (id) => packages.find(a => a.id === id)