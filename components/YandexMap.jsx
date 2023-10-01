import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const YandexMap = () => {
  return (
    <YMaps>
      <div>
        <Map defaultState={{ center: [42.836144, 59.008739], zoom: 6 }}>
          <Placemark geometry={[42.836144, 59.008739]} />
        </Map>
      </div>
    </YMaps>
  );
};

export default YandexMap;
