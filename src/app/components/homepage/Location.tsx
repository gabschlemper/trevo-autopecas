"use client";
import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai";

const containerStyle = {
  width: "100%",
  height: "350px",
  opacity: "0.5",
};

const location = {
  lat: -19.228464126586914,
  lng: -42.32614517211914,
};

export function Location() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={16}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={location} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Location);
