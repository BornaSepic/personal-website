import styled from "styled-components";
import ReactMapGL from 'react-map-gl';

export const MapContainer = styled(ReactMapGL)`
    width: 100% !important;
`;

export const MapMarker = styled('div')`
    .map-marker {
        height: 80px;
        width: 80px;
    }
`;