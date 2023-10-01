'use client'
import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const YandexMap = () => {

  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  return (
    <div className='w-full p-8 md:p-16'>
      <YMaps id='map'>
      <Map defaultState={defaultState}>
        <Placemark geometry={[55.684758, 37.738521]} />
      </Map>
    </YMaps>
    </div>
    
  );
};

export default YandexMap;
