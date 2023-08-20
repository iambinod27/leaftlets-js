const latitude = 27.745422;
const longtitude = 85.388946;

// Showing map
let map = L.map("map").setView([latitude, longtitude], 12);

// Showing which map you want, openstreet or google map
L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
}).addTo(map);

// Showing marker
let marker = L.marker([latitude, longtitude]).addTo(map);
let marker1 = L.marker([27.713551, 85.320727]).addTo(map);
let marker2 = L.marker([27.69533, 85.337457]).addTo(map);
let marker3 = L.marker([27.696176, 85.355244]).addTo(map);

// Making a circle radius
// let circle = L.circle([latitude, longtitude], {
//   color: "blue",
//   fillColor: "#f3",
//   fillOpacity: 0.5,
//   radius: 300,
// }).addTo(map);

// If you want a popup tooltip around the marker or circle
marker.bindPopup("<b>This is awesome working with leaflet</b>.").openPopup();
marker1.bindPopup("<b>This is awesome working with leaflet</b>.").openPopup();
marker2.bindPopup("<b>This is awesome working with leaflet</b>.").openPopup();
marker3.bindPopup("<b>This is awesome working with leaflet</b>.").openPopup();
circle.bindPopup("this area is my home.");

// If you want a popup in a different place.
var popup = L.popup()
  .setLatLng([27.713361, 85.36725])
  .setContent("I am a standalone popup.")
  .openOn(map);

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

// map.on("click", onMapClick);
