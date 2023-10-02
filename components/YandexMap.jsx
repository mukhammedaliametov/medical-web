"use client";
import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
  TypeSelector,
  GeolocationControl
} from "@pbe/react-yandex-maps";

const YandexMap = () => {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  return (
    <div className="w-full flex justify-center">
      <YMaps>
      <Map defaultState={defaultState} width={1300} height={350}>
        <Placemark geometry={[55.684758, 37.738521]} />
        <FullscreenControl />
        <ZoomControl options={{ float: "right" }} />
        <TypeSelector options={{ float: "right" }} />
        <GeolocationControl options={{ float: "left" }} />
      </Map>
    </YMaps>
    </div>
  );
};

export default YandexMap;
