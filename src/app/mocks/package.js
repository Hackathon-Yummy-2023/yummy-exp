export const packages = [
  {
    id: 1,
    description: "Caracas Fly, el único túnel de viento de venezuela recreativoy profesional para toda la familia.",
    image: "/images/caracas-fly.webp",
    timeInit: "12:00 pm",
    timeEndEstimated: "8:00 pm",
    placeReserve: "Caracas Fly",
    price: "200,00$",
  },
  {
    id: 2,
    description: "Escuela de buceo.",
    image: "/images/scubatec.webp",
    timeInit: "12:00 pm",
    timeEndEstimated: "1:00 pm",
    placeReserve: "Scubatec Dive Center",
    price: "90,00$",
  },
  {
    id: 3,
    description: "Ven y vive una experiencia de Terror en Yummy Fun!",
    image: "/images/circo-del-terror.webp",
    timeInit: "12:00 pm",
    timeEndEstimated: "2:00 pm",
    placeReserve: "La casa de los gritos",
    price: "8,00 $",
  },
  {
    id: 4,
    description: "Festival de música en margarita con DJs invitados",
    image: "/images/summer-fest.webp",
    timeInit: "4:00 pm",
    timeEndEstimated: "3:00 am",
    placeReserve: "Jungle Beats",
    price: "30,00 $",
  },
]

export const packageExperiences = packages.map(a => ({
  id: a.id, description: a.description, image: a.image, peopleCount: a.peopleCount}))

export const packageItinerary = (id) => packages.find(a => a.id === id)