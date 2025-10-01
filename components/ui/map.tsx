"use client";

import { useState } from 'react';
import { APIProvider, Map} from '@vis.gl/react-google-maps';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useTheme } from "next-themes"


import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';

export const MarkerWithInfowindow = () => {
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={{lat: 46.368550, lng: 15.102761}}
        title={'AdvancedMarker that opens an Infowindow when clicked.'}
      />
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}>
          Odjemno mesto št: 25050415
        </InfoWindow>
      )}
    </>
  );
};




export function Cardcomp() {
  let THEME = "";

  let {theme} = useTheme();

  if (theme === 'dark') {
    THEME = 'DARK';
  } else {
    THEME = 'LIGHT';
  }

  return (
    <Card className="@container/card ">
      <CardHeader>
        <CardTitle>Odjemno mesto:</CardTitle>
        <CardDescription>
         Koroška cesta 37, 3320 Velenje
        </CardDescription>
      </CardHeader>
      <CardContent>
       <APIProvider apiKey={'AIzaSyBF5I1HehXLS0sG5hiqnowASrxYXsYttXA'} >
      <Map
      defaultZoom={15}
      mapId={"129866e8ac5cf2f771429467"}
      reuseMaps={true}
      defaultCenter={{lat: 46.368550, lng: 15.102761}}
      gestureHandling={'cooperative'}
      colorScheme={THEME}
      disableDefaultUI={true}
      style={{width: '100%', height: '500px'}}
    >
      <MarkerWithInfowindow />
    </Map>
    </APIProvider>
      </CardContent>
   
    </Card>
  )
}



function MapComp() {
 

  return (
    <Cardcomp/>
  );
}

export default MapComp;