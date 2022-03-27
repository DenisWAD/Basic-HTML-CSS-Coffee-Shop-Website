// Initialize and add the map
function initMap() {
  // The location of Uluru
  const kilkenny = { lat: 52.65059382438762, lng: -7.254382443539139 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: kilkenny,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: kilkenny,
    map: map,
  });
}
