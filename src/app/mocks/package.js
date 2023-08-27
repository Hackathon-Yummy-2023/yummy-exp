export const packages = [
  {
    id: 1,
    description: "Caracas Fly, el único túnel de viento de venezuela recreativo y profesional para toda la familia.",
    image: "/images/caracas-fly.jpeg",
    rydeTo: {
      from: "De: El Paraiso, Caracas - A: Caracas Fly, Caracas",
      price: "$20,00",
      startTime: "27 / 08/ 23 11:30am",
      endTime: "27 / 08/ 23 11:50pm"
    },
    rydeFrom: {
      from: "De: Caracas Fly, Caracas - A: El Paraiso, Caracas",
      price: "$20,00",
      startTime: "27 / 08/ 23 08:10pm",
      endTime: "27 / 08/ 23 09:10pm"
    },
    timeInit: "27 / 08/ 23 08:10pm",
    timeEndEstimated:"27 / 08/ 23 09:10pm",
    placeReserve: "Caracas Fly",
    price: "200,00$",
  },
  {
    id: 2,
    description: "Escuela de buceo.",
    image: "/images/scubatec.jpeg",
    rydeTo: {
      from: "De: El Paraiso, Caracas - A: La guaira, naiguata",
      price: "$20,00",
      startTime: "27 / 08/ 23 8:30am",
      endTime: "27 / 08/ 23 10:00pm"
    },
    rydeFrom: {
      from: "De: naiguata, Caracas - A: El Paraiso, Caracas",
      price: "$20,00",
      startTime: "27 / 08/ 23 08:10pm",
      endTime: "27 / 08/ 23 09:10pm"
    },
    timeInit: "27 / 08/ 23 08:10pm",
    timeEndEstimated:"27 / 08/ 23 09:10pm",
    placeReserve: "Scubatec Dive Center",
    price: "90,00$",
  },
  {
    id: 3,
    description: "Ven y vive una experiencia de Terror en Yummy Fun!",
    image: "/images/circo-del-terror.jpeg",
    rydeTo: {
      from: "De: El Paraiso, Caracas - A: La guaira, naiguata",
      price: "$20,00",
      startTime: "27 / 08/ 23 8:30am",
      endTime: "27 / 08/ 23 10:00pm"
    },
    rydeFrom: {
      from: "De: naiguata, Caracas - A: El Paraiso, Caracas",
      price: "$20,00",
      startTime: "27 / 08/ 23 08:10pm",
      endTime: "27 / 08/ 23 09:10pm"
    },
    timeInit: "27 / 08/ 23 08:10pm",
    timeEndEstimated:"27 / 08/ 23 09:10pm",
    placeReserve: "La casa de los gritos",
    price: "8,00 $",
  },
  {
    id: 4,
    description: "Festival de música en margarita con DJs invitados",
    image: "/images/summer-fest.jpeg",
    rydeTo: {
      from: "De: El Paraiso, Caracas - A: La guaira, naiguata",
      price: "$20,00",
      startTime: "27 / 08/ 23 8:30am",
      endTime: "27 / 08/ 23 10:00pm"
    },
    rydeFrom: {
      from: "De: naiguata, Caracas - A: El Paraiso, Caracas",
      price: "$20,00",
      startTime: "27 / 08/ 23 08:10pm",
      endTime: "27 / 08/ 23 09:10pm"
    },
    timeInit: "27 / 08/ 23 08:10pm",
    timeEndEstimated:"27 / 08/ 23 09:10pm",
    placeReserve: "Jungle Beats",
    price: "30,00 $",
  },
]

export const packageExperiences = packages.map(a => ({
  id: a.id, description: a.description, image: a.image, peopleCount: a.peopleCount}))

export const packageItinerary = (id) => packages.find(a => a.id === id)