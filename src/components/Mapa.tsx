import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const center = {
  lat: -6.03121229831943, 
  lng: -38.3478884287808
};

export default function Mapa() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAtDDCHvd1QY4lV6aTIPTT_Zq_WFLkZcCA"
  })

  return (
    <div className="h-[400px] w-[700px] shadow-[0px_0px_10px_rgba(0,0,0,0.9)] mobile:w-[70%]">
      {  isLoaded ? (
          <GoogleMap
            mapContainerStyle={{width: '100%', height: '100%'}}
            center={center}
            zoom={15}
          >
            <Marker position={center} options={{
              label: {
                text: "Weverton barber",
                className: "mt-[-30px]"
              }
            }} />
          </GoogleMap>
        ) : <></>}
    </div>
  )
}