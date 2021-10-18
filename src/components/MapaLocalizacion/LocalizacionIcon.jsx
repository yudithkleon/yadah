import * as L from "leaflet";

const LocalizacionIcon = L.Icon.extend({
  options: {

  }
})

const pintarIcon = new LocalizacionIcon({
  iconUrl: "https://res.cloudinary.com/danimel/image/upload/v1633991398/ozpdkiuh0sjymkluqqk7.png",
  // iconRetinaUrl: "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
  iconSize: [40, 40],

})

export  const pintar = new LocalizacionIcon({
  iconUrl: "https://res.cloudinary.com/danimel/image/upload/v1633805608/yadah/logo2_jdgwii.jpg",
  // iconRetinaUrl: "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
  iconSize: [20, 20],

})
export default pintarIcon
