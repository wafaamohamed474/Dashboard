
import { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import "@arcgis/core/assets/esri/themes/light/main.css";
import MapConfig from "./MapConfig";
const ArcGisMap = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({ basemap: "streets-navigation-vector" });

    const view = new MapView({
      container: mapRef.current,
      map: map,
      center: [30.0444, 31.2357],  
      zoom: 6,
    });

    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    const camps =  MapConfig.campsData

    camps.forEach((camp) => {
      const point = new Point({ longitude: camp.longitude, latitude: camp.latitude });

      const symbol = new SimpleMarkerSymbol({
        color: "blue",
        size: "12px",
      });

      const popupTemplate = new PopupTemplate({
        title: camp.name,
        content: `
          <div style="padding: 10px; background-color: white; border-radius: 8px; width: 200px; text-align: center; font-family: sans-serif;">
            <img src="${camp.image}" alt="${camp.name}" style="width: 100%; height: 10px; object-fit: cover; border-radius: 8px;"/>
            <h3 style="font-size: 16px; font-weight: bold; margin-top: 10px;">${camp.name}</h3>
            <p style="font-size: 14px; color: #4A5568;"><b>People:</b> ${camp.peopleCount}</p>
            <p style="font-size: 14px; color: #4A5568;">${camp.description}</p>
          </div>
        `,
      });

      const pointGraphic = new Graphic({
        geometry: point,
        symbol: symbol,
        popupTemplate: popupTemplate,
      });

      graphicsLayer.add(pointGraphic);
    });

    return () => view.destroy();
  }, []);

  return <div ref={mapRef} className="w-full h-full" />;
};

export default ArcGisMap;
