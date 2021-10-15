import * as L from "leaflet";

const LocalizacionIcon = L.Icon.extend({
  options: {

  }
})

const pintarIcon = new LocalizacionIcon({
  iconUrl: "https://res.cloudinary.com/danimel/image/upload/v1633991398/ozpdkiuh0sjymkluqqk7.png",
  // iconRetinaUrl: "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
  iconSize: [35, 35],

})

export default pintarIcon