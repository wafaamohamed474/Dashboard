const MapConfig = {
    basemap : "streets-navigation-vector",
    initialCenter : [25,30],
    initialZoom : 4,
    popupEnabled : true , 
    campsData : [
        {
          name: "Cairo Camp",
          longitude: 31.0444,
          latitude: 30.2357,
          peopleCount: 200,
          image: "https://example.com/cairo-camp.jpg",
          description: "A beautiful camp near the Nile.",
        },
        {
          name: "Alexandria Camp",
          longitude: 29.9187,
          latitude: 31.2001,
          peopleCount: 150,
          image: "https://example.com/alexandria-camp.jpg",
          description: "A beachfront camp with amazing views.",
        },
      ]

}
export default MapConfig