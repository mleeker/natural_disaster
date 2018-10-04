//From rat example

// Creating map object
var myMap = L.map("map", {
  center: [41.2565, -95.9345],
  zoom: 5
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYW50ZW5laCIsImEiOiJjam04Y3Q3ajcwaDhkM2tsaXM5Zml4eHB4In0.MsEhbGVhDgfDEf3Bgk4krw'
 }).addTo(myMap);
 
 var rawdata = 'dis.json';
  
 d3.json(rawdata, function(data){
    var markers = L.markerClusterGroup({
        animateAddingMarkers: true
    });
    console.log(data);
    //loop throgh only 100 features for convienience
    for( var i= 0 ; i < 1000; i++){
         var location = data.features[i];
        console.log(location);
 
        if (location) {
            markers.addLayer(L.marker([location.geometry.coordinates[1],location.geometry.coordinates[0]])
            .bindPopup('hello world')).addTo(myMap);
        }
    }
    // myMap.addLayer(markers);
 });

// // Adding tile layer to the map
// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// }).addTo(myMap);

// // console.log(rawdata);

// //var geojsonLayer = new L.GeoJSON.AJAX("disaster.js");       
// //geojsonLayer.addTo(myMap);
// var rawdata = "dis.json";
// // Grab the data with d3
// d3.json(rawdata, function(response) {
//   console.log(response);

//   // Create a new marker cluster group
//   var markers = L.markerClusterGroup({
//     animateAddingMarkers: true
//   });

//   // console.log(response)
//   // Loop through data
//   for (var i = 0; i < 10 ; i++) {

// //    response.length

//     // Set the data location property to a variable
//     var location = response.features[i].geometry;
//     // console.log(location);
//     // Check for location property
//     if (location) {
//       // Add a new marker to the cluster group and bind a pop-up
//       markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
//        .bindPopup(response[i].descriptor)).addTo(myMap);
//     }

//   }

//   // Add our marker cluster layer to the map
//  myMap.addLayer(markers);

// });
