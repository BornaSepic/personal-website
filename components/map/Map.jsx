import React, {useState} from 'react';
import {Marker} from 'react-map-gl';
import * as Styled from "./Map.css";

const Map = () => {
    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: '100%',
        latitude: 45.333,
        longitude: 14.441,
        zoom: 12
    });

    return (
        <Styled.MapContainer
            mapStyle="mapbox://styles/mapbox/streets-v9"
            //key is restricted by URLs from with the requests are coming from
            mapboxApiAccessToken="pk.eyJ1IjoiYm9ybmFzZXBpYyIsImEiOiJjazVwOTFrbTkwNmNwM3BvMzJtaDRnbDJnIn0.FRhIF6-Mympx4eIKa3VZvw"
            onViewportChange={(viewport) => setViewPort(viewport)}
            {...viewPort}
        >
            <Marker latitude={45.333} longitude={14.441} offsetLeft={-20} offsetTop={-10}>
                <Styled.MapMarker>
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="map-pin"
                         className="svg-inline--fa fa-map-pin fa-w-9 map-marker" role="img"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 288 512">
                        <g className="fa-group">
                            <path className="fa-secondary"
                                  d="M144 320a175.77 175.77 0 0 0 32-3.06v156.69l-22 33a12 12 0 0 1-20 0l-22-33V316.94a175.77 175.77 0 0 0 32 3.06z"
                                  opacity="1" fill="indianred"></path>
                            <path className="fa-primary" fill="indianred"
                                  d="M144 0a144 144 0 1 0 144 144A144 144 0 0 0 144 0zm0 76a68.07 68.07 0 0 0-68 68 12 12 0 0 1-24 0 92.11 92.11 0 0 1 92-92 12 12 0 0 1 0 24z"></path>
                        </g>
                    </svg>
                </Styled.MapMarker>
            </Marker>
        </Styled.MapContainer>
    );
}

export default Map;