import L from "leaflet";

export const LocalizacionIcon = L.icon({
  iconUrl: require("../../assets/Icon.svg"),
  iconRetinaUrl: require("../../assets/Icon.svg"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
})