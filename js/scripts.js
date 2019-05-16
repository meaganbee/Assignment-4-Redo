
$('#report-button').on('click', function() {
alert('https://www1.nyc.gov/site/immigrants/about/annual-report.page');
});

mapboxgl.accessToken = 'pk.eyJ1IjoibWVhZ2FuYmVlIiwiYSI6ImNqdWQ5NWNjYTBmZTQzeXJ5YTdoZmo2ZnIifQ.2QCTx5st31pRF3nT1mZDjQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
center: [-73.907089,40.739844],
zoom: 11

});

map.addControl(new mapboxgl.NavigationControl());

var popup = new mapboxgl.Popup({ offset: 40 })
  .setText('Community Based Services');

var el = document.createElement('div');
el.className = 'marker';

new mapboxgl.Marker(el)
  .setLngLat([-73.8523193, 40.7362691])
  .setPopup(popup)
  .addTo(map);

  var communityCenters = [
    {
      name: "Forest Hills Community Center",
      services: "Legal Services, Citizenship, Language & Literacy, Social Services",
      lng: -73.8523193,
      lat: 40.7362691
    },
    {
      name: "Pomonok Community Center",
      services: "Housing, Social Services, Career Services",
      lng: -73.8165482,
      lat: 40.7349421
    },
    {
      name: "Kew Gardens",
      services: "Housing, Social Services, Career Services",
      lng: -73.8334202,
      lat: 40.713654
    },
    {
      name: "Sunnyside Community Services",
      services: "Language Classes, Career Services, Youth Programs",
      lng: -73.9277968,
      lat: 40.7451662
    },
    {
      name: "Commonpoint Queens",
      services: "Youth Programs, Social Services",
      lng: -73.8492869,
      lat: 40.728738
    },
    {
      name: "Immigration Advocacy Services",
      services: "Legal Services, Citizenship",
      lng: -73.9155134,
      lat: 40.7690691
    },
    {
      name: "ANSOB Center for Refugees",
      services: "Legal Services, Citizenship, Language & Literacy, Social Services",
      lng: -73.9160424,
      lat: 40.7648236
    },
    {
      name: "Queens Library",
      services: "Legal Services, Citizenship, Language & Literacy, Social Services",
      lng: -73.7969024,
      lat: 40.7077915
    },
    {
      name: "Catholic Migration Services",
      services: "Legal Services, Citizenship",
      lng: -73.9195764,
      lat: 40.7434193
    },
    {
      name: "Emerald Isle Immigration Center",
      services: "Legal Services, Citizenship, Language & Literacy, Social Services, Career Services",
      lng: -73.9069004,
      lat: 40.7450074
    },
    {
      name: "Make the Road NY",
      services: "Legal Services, Citizenship, Language & Literacy, Social Services",
      lng: -73.8763532,
      lat: 40.7484547
    }
  ]

communityCenters.forEach(function(centerData) {

  var el = document.createElement('div');
  el.className = 'marker';

  new mapboxgl.Marker(el)
    .setLngLat([centerData.lng, centerData.lat])
    .setPopup(new mapboxgl.Popup({ offset: 40 })
      .setHTML(`
        <h6>${centerData.name}</h5>
        <p> Services: ${centerData.services}</p>
      `))
    .addTo(map);
})

map.on('load', function () {

  map.addSource('queens-map', {
     type: 'geojson',
     data: './data/map.geojson',
   });
   console.log ("geojson load")

   map.addLayer({
      id: 'queens-fill',
      type: 'fill',
      paint: {
        'fill-color': '#088',
        'fill-opacity': 0.4
      },
      layout: {},
      source: {
          type: "geojson",
          'data': {
              type: "Feature",
              properties: {},
              geometry: {
                  type: "Polygon",
                  coordinates: [
                    [
                        [
                          -73.90811920166016,
                          40.790159617974396
                        ],
                        [
                          -73.96648406982422,
                          40.74023389131268
                        ],
                        [
                          -73.76014709472656,
                          40.65303410892721
                        ],
                        [
                          -73.71517181396484,
                          40.72410403167144
                        ],
                        [
                          -73.78280639648438,
                          40.7958778790764
                        ],
                        [
                          -73.90811920166016,
                          40.790159617974396
                        ]
                      ]
                  ]
              }
          }
         }
       });
});
