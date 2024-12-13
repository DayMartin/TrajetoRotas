import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState } from "react";
import { Map } from "../utils/map";
import { getCurrentPosition } from "./geolocation";

export function useMap(containerRef: React.RefObject<HTMLDivElement>) {
  const [map, setMap] = useState<Map>();

  useEffect(() => {
    (async () => {
      const loader = new Loader({
        apiKey: "AIzaSyA6FS7NUcFZoDJum2gnrphB-7siPlnsIf8" as string,
        libraries: ["routes", "geometry", "marker"],
      });
      const [, , , position] = await Promise.all([
        loader.importLibrary("routes"),
        loader.importLibrary("geometry"),
        loader.importLibrary("marker"),
        getCurrentPosition({ enableHighAccuracy: true }),
      ]);
      const map = new Map(containerRef.current!, {
        mapId: "8908bd91545b5262", //theme
        zoom: 15,
        center: position,
      });
      setMap(map);
    })();
  }, [containerRef]);

  return map;
}
