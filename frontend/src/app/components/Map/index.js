import React from "react";
import {compose, withHandlers, withStateHandlers} from "recompose"
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import MarkerIcon from "../../../assets/images/adi-marker.png";

const AdiMap = compose(
    withHandlers(() => {
        const refs = {
            map: undefined,
        }
        return {
            onMapMounted: () => ref => {
                refs.map = ref
            },
            onDragEnd: ({onDragEnd, fetchMarkers}) => (center) => {
                onDragEnd(refs.map.getCenter());
                fetchMarkers(refs.map.getCenter());
            }
        }
    }),
    withStateHandlers(() => ({
        isOpen: false,
    }), {
        onToggleOpen: ({isOpen}) => () => ({
            isOpen: !isOpen,
        })
    }),
    withScriptjs,
    withGoogleMap
)(props => {
        return <GoogleMap
            defaultZoom={12}
            defaultCenter={props.centerPosition}
            ref={props.onMapMounted}
            onDragEnd={props.onDragEnd}
            onTilesLoaded={() => {
                if (props.markers.length === 0) props.onDragEnd();
            }}
            options={{"disableDefaultUI": true}}
        >

            {props.markers.map((marker) => {
                let position = {lat: parseFloat(marker.latitude_google), lng: parseFloat(marker.longitude_google)};
                return <Marker
                    key={marker.id}
                    position={position}
                    onClick={() => {
                        if (!props.currentMarker || props.currentMarker.id !== marker.id)
                            props.setCurrentMarker(marker)
                    }}
                    icon={MarkerIcon}
                    title={marker.name}
                />
            })}
        </GoogleMap>
    }
);

export default AdiMap;