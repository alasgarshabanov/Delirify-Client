import React, { useEffect, useState, useRef } from "react";
import {GOOGLE_MAP_API_KEY} from "../../config";

import useStyles from './map.styles';

const defaultCoordinates = {
  lat: 40.379652,
  lng: 49.867092
}
const MapComponent = () => {
  const classes = useStyles();
  const googleMapRef = useRef(null);
  const [googleMap, setGoogleMap] = useState({
    map: {}, marker: {}, geoCoder: {},  dragStarted: false, textAddress: '', position: defaultCoordinates
  })

  const { map, marker, dragStarted, textAddress, position, geoCoder } = googleMap;

  /**
   * Initialize google map
   */
  useEffect(() => {
    // Create the script tag, set the appropriate attributes
    var script = document.createElement('script');
    // script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&callback=initMap&libraries=places`;
    script.defer = true;
    script.async = true;

    // script.addEventListener('load', () => {
    //   setGoogleMap({ map: createGoogleMap, marker: createMarker });
    // })

    // Attach your callback function to the `window` object
    window.initMap = function() {
      // JS API is loaded and available
      console.log('Control Map Times >> ');
      setGoogleMap({
        ...googleMap,
        geoCoder: new window.google.maps.Geocoder(),
        map: createGoogleMap()
      });
    };

    // Append the 'script' element to 'head'
    document.head.appendChild(script);
  }, []); // No need add any value, it has to be as component did mount

  /**
   * Create Marker
   */
  useEffect(() => {
    if (window.google && map) {
      setGoogleMap({
        ...googleMap,
        marker: createMarker()
      });
    }
  }, [map]);

  /**
   * Listen to events
   */
  useEffect(() => {
    if (map && marker && window.google) {
      // window.google.maps.event.addListener(map, 'dragend', function(ev) {
      //   if (!dragStarted) {
      //     setGoogleMap({...googleMap, position: {
      //       lat: map.center.lat(),
      //       lng: map.center.lng()
      //     }});
      //     if (typeof marker.draggable !== 'undefined')
      //       marker.setPosition(position);
      //   }
      // });
      window.google.maps.event.addListener(marker, 'dragend', function(ev) {
        console.log("MARKER DRAG END >>", marker);
        if (!dragStarted) setGoogleMap({ ...googleMap, dragStarted: true });
        const markerPosition = marker.getPosition();
        setGoogleMap({...googleMap, position: {
          lng: markerPosition.lng(),
          lat: markerPosition.lat()
        }})
        codeAddress(position);
        console.log('-- >Tex add', textAddress);
      });
    }
  }, [marker]);

  /**
   * Detect position change
   */
  useEffect(() => {
    console.log('-- >> ', position, geoCoder);
  }, [position, geoCoder]);

  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, {
      zoom: 14,
      center: position,
      // disableDefaultUI: true,
      fullscreenControl: true,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      rotateControl: false,
      streetViewControl: false,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP
    })

  const createMarker = () =>
    new window.google.maps.Marker({
      position,
      map,
      title: 'Set lat/lon values for this property',
      draggable: true
    })

  const codeAddress = (pos) => {
    geoCoder.geocode({
      latLng: pos
    }, function(responses) {
      if (responses && responses.length > 0) {
        setGoogleMap({ ...googleMap, textAddress: responses[0].formatted_address})
      } else {
        console.log('Cannot determine address at this location.')
      }
    });

    // geoCoder.geocode( { 'address': address}, function(results, status) {
    //   if (status == 'OK') {
    //     map.setCenter(results[0].geometry.location);
    //     if (typeof marker.draggable !== 'undefined')
    //       marker.setPosition(results[0].geometry.location)
    //   } else {
    //     console.log('Geocode was not successful for the following reason: ' + status);
    //   }
    // });
  }

  return (
    <div
      id="google-map"
      className={classes.googleMap}
      ref={googleMapRef}
    />
  )
}

export default MapComponent;
