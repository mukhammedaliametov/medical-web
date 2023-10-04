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
    center: [43.75450155076469, 59.022443415213026],
    zoom: 16,
  };

  return (
    <div className="w-full flex justify-center">
      <YMaps>
      <Map defaultState={defaultState} width={1300} height={350}>
        <Placemark geometry={[43.75450155076469, 59.022443415213026]} />
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
