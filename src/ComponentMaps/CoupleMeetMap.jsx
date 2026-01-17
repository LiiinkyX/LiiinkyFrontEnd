import { useLocation } from "react-router-dom";
import maplibregl from 'maplibre-gl';
import { useEffect, useRef } from 'react';

const CoupleMeetMap = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const paramsObj = Object.fromEntries(params);

  // Convert strings to numbers
  const lng1 = parseFloat(paramsObj.lang1);
  const lat1 = parseFloat(paramsObj.lat1);
  const lng2 = parseFloat(paramsObj.lang2);
  const lat2 = parseFloat(paramsObj.lat2);

  const mapRef = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapRef.current,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [10.1815,36.8065], // center between markers
      zoom: 6,
      projection: 'globe'
    });

    // First marker
    new maplibregl.Marker({ color: "blue" })
      .setLngLat([lng1, lat1])
      .addTo(map);

    // Second marker
    new maplibregl.Marker({ color: "red" })
      .setLngLat([lng2, lat2])
      .addTo(map);

    // Third marker (middle point)
    const midLng = (lng1 + lng2) / 2;
    const midLat = (lat1 + lat2) / 2;
    new maplibregl.Marker({ color: "black" })
      .setLngLat([midLng, midLat])
      .addTo(map);

    // Draw line between first and second marker
    map.on("load", () => {
      map.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [lng1, lat1],
              [lng2, lat2]
            ]
          }
        }
      });

      map.addLayer({
        id: "route-line",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "#000",
          "line-width": 4
        }
      });
    });

    return () => map.remove();
  }, [lng1, lat1, lng2, lat2]);

  return (
    <div>
      <div
        ref={mapRef}
        style={{ width: '100%', height: '100vh' }}
      />
    </div>
  );
};

export default CoupleMeetMap;
