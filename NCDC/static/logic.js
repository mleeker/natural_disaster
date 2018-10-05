
// Creating Tile
var tiles = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYW50ZW5laCIsImEiOiJjam04Y3Q3ajcwaDhkM2tsaXM5Zml4eHB4In0.MsEhbGVhDgfDEf3Bgk4krw'
 });



//Creating Basemaps
 var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 5,
  id: "mapbox.streets",
  accessToken: `pk.eyJ1IjoiYWN3YWxrZXIiLCJhIjoiY2ptOGNsMnN2MG52MzNxa2RuanR5NDNqOCJ9.rPBbiY9ODnPcgloUwTgAjg`
});
 
var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 5,
  id: "mapbox.dark",
  accessToken: `pk.eyJ1IjoiYWN3YWxrZXIiLCJhIjoiY2ptOGNsMnN2MG52MzNxa2RuanR5NDNqOCJ9.rPBbiY9ODnPcgloUwTgAjg`
});

var outdoormap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 5,
  id: "mapbox.outdoors",
  accessToken: `pk.eyJ1IjoiYWN3YWxrZXIiLCJhIjoiY2ptOGNsMnN2MG52MzNxa2RuanR5NDNqOCJ9.rPBbiY9ODnPcgloUwTgAjg`
});

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap,
  "Outdoor Map": outdoormap
};

 // Creating map object
 var myMap = L.map("map", {
  center: [41.2565, -95.9345],
  zoom: 5,
  layers: [tiles]
});

var rawdata = 'dis.json';


var hailMarkers = [];

// // //THIS WORKS
d3.json(rawdata, function(data){
  var markers = L.markerClusterGroup({
      animateAddingMarkers: true
  });
  //loop throgh only 100 features for convienience
  for( var i= 0 ; i < 1000; i++){
       var location = data.features[i];
      console.log(location);

      if (location) {
        
          markers.addLayer(L.marker([location.geometry.coordinates[1],location.geometry.coordinates[0]])
          .bindPopup("<h6>" + location.properties.EVENT_TYPE + "</h6> <hr> <p>" + location.properties.EPISODE_NARRATIVE +" </p> <hr> <p>" + location.properties.EVENT_NARRATIVE + "</p>")).addTo(myMap);
      }
  } 
});

 L.control.layers(baseMaps, {
   collapsed: true
 }).addTo(myMap);


//console.log(overlayMaps);


// //Creating controls






//  // Perform a GET request to the query URL
// d3.json(rawdata, function(data) {
//     // Once we get a response, send the data.features object to the createFeatures function
//    createFeatures(data.features);
//    console.log(createFeatures)
//  });

// function createFeatures(disasterData) {
// // Loop through locations and create city and state markers
//   for (var i = 0; i <1000; i++) {
//   // Setting the marker radius for the state by passing population into the markerSize function
//     hailMarkers.push(
//       L.circle(rawdata[i].geometry.coordinates, {
//         stroke: false,
//         fillOpacity: 0.75,
//         color: "white",
//         fillColor: "white",
//         radius: 2
//       })
//     )}
//   };

// //   var hailMarkers = L.GeoJSON(createFeatures, {
// //     onEachFeature: function (feature, layer) {
// //         layer.bindPopup(properties.EVENT_NARRATIVE);
// //     }, filter: function (feature, layer) {
// //         return properties.EVENT_TYPE == "Hail";
// //     }
// // });

// var hail = L.layerGroup(hailLayer);

 // Overlays that may be toggled on or off




// //Creating controls
//  L.control.layers(baseMaps, {
//    collapsed: false
//  }).addTo(myMap);
//hailMarkers.push(
    //       L.circle(rawdata[i].geometry.coordinates, {
    //         stroke: false,
    //         fillOpacity: 0.75,
    //         color: "white",
    //         fillColor: "white",
    //         radius: 2
    //       })

//  //THIS WORKS
// // myMap.addLayer(markers);

// // // Adding tile layer to the map
/*
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
   maxZoom: 18,
   id: "mapbox.streets",
   accessToken: API_KEY
 }).addTo(myMap);
*/
// // // console.log(rawdata);

// // //var geojsonLayer = new L.GeoJSON.AJAX("disaster.js");       
// // //geojsonLayer.addTo(myMap);
// // var rawdata = "dis.json";
// // // Grab the data with d3
// // d3.json(rawdata, function(response) {
// //   console.log(response);

// //   // Create a new marker cluster group
// //   var markers = L.markerClusterGroup({
// //     animateAddingMarkers: true
// //   });

// //   // console.log(response)
// //   // Loop through data
// //   for (var i = 0; i < 10 ; i++) {

// // //    response.length

// //     // Set the data location property to a variable
// //     var location = response.features[i].geometry;
// //     // console.log(location);
// //     // Check for location property
// //     if (location) {
// //       // Add a new marker to the cluster group and bind a pop-up
// //       markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
// //        .bindPopup(response[i].descriptor)).addTo(myMap);
// //     }

// //   }

// //   // Add our marker cluster layer to the map
// //  myMap.addLayer(markers);

// // });
