declare module '*.svg' {
    export type SVGComponent = React.StatelessComponent<
        React.SVGAttributes<SVGElement>
    >;

    export const ReactComponent: React.StatelessComponent<React.SVGAttributes<
        SVGElement
    >>;

    const url: string;
    export default url;
}

declare module 'google-maps-react' {
    import google from '@types/googlemaps'
    import * as React from 'react'

    interface IGoogleApiOptions {
        apiKey: string,
        libraries?: string[],
        client?: string,
        url?: string,
        version?: string,
        language?: string,
        region?: string,
        LoadingContainer?: any
    }
    type GoogleApiOptionsFunc = (props: any) => IGoogleApiOptions

    type Omit<T1, T2> = Pick<T1, Exclude<keyof T1, keyof T2>>

    export type GoogleAPI = typeof google
    export function GoogleApiWrapper(opts: IGoogleApiOptions | GoogleApiOptionsFunc):
        <TProps extends IProvidedProps>(ctor: React.ComponentType<TProps>) => React.ComponentType<Omit<TProps, IProvidedProps>>

    export interface IProvidedProps {
        google: GoogleAPI
        loaded?: boolean
    }

    type mapEventHandler = (mapProps?: IMapProps, map?: google.maps.Map, event?) => any

    type Style = Object<string, string | number | boolean>

    export interface IMapProps extends google.maps.MapOptions {
        google: GoogleAPI
        loaded?: boolean

        style?: Style
        containerStyle?: Style

        bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral
        centerAroundCurrentLocation?: boolean
        initialCenter?: google.maps.LatLngLiteral
        center?: google.maps.LatLngLiteral

        visible?: boolean

        className?: string
        zoom: number

        onReady?: mapEventHandler
        onClick?: mapEventHandler
        onDragend?: mapEventHandler
        onRecenter?: mapEventHandler
        onBoundsChanged?: mapEventHandler
        onCenterChanged?: mapEventHandler
        onDblclick?: mapEventHandler
        onDragstart?: mapEventHandler
        onHeadingChange?: mapEventHandler
        onIdle?: mapEventHandler
        onMaptypeidChanged?: mapEventHandler
        onMousemove?: mapEventHandler
        onMouseover?: mapEventHandler
        onMouseout?: mapEventHandler
        onProjectionChanged?: mapEventHandler
        onResize?: mapEventHandler
        onRightclick?: mapEventHandler
        onTilesloaded?: mapEventHandler
        onTiltChanged?: mapEventHandler
        onZoomChanged?: mapEventHandler

        // TODO(melvin): for whatever reasons the typings from google.maps.MapOptions
        // are not being used, so I copied them over here for now
        backgroundColor?: string;
        center?: LatLng | LatLngLiteral;
        clickableIcons?: boolean;
        controlSize?: number;
        disableDefaultUI?: boolean;
        disableDoubleClickZoom?: boolean;
        draggable?: boolean;
        draggableCursor?: string;
        draggingCursor?: string;
        fullscreenControl?: boolean;
        fullscreenControlOptions?: FullscreenControlOptions;
        gestureHandling?: GestureHandlingOptions;
        heading?: number;
        keyboardShortcuts?: boolean;
        mapTypeControl?: boolean;
        mapTypeControlOptions?: MapTypeControlOptions;
        mapTypeId?: MapTypeId | string;
        maxZoom?: number;
        minZoom?: number;
        noClear?: boolean;
        panControl?: boolean;
        panControlOptions?: PanControlOptions;
        restriction?: MapRestriction;
        rotateControl?: boolean;
        rotateControlOptions?: RotateControlOptions;
        scaleControl?: boolean;
        scaleControlOptions?: ScaleControlOptions;
        scrollwheel?: boolean;
        streetView?: StreetViewPanorama;
        streetViewControl?: boolean;
        streetViewControlOptions?: StreetViewControlOptions;
        styles?: MapTypeStyle[];
        tilt?: number;
        zoom?: number;
        zoomControl?: boolean;
        zoomControlOptions?: ZoomControlOptions;
    }

    type markerEventHandler = (props?: IMarkerProps, marker?: google.maps.Marker, event?) => any

    export interface IMarkerProps extends Partial<google.maps.MarkerOptions> {
        mapCenter?: google.maps.LatLng | google.maps.LatLngLiteral

        onClick?: markerEventHandler
        onMouseover?: markerEventHandler

        // TODO(melvin): for whatever reasons the typings from google.maps.MapOptions
        // are not being used, so I copied them over here for now
        anchorPoint?: Point;
        animation?: Animation;
        clickable?: boolean;
        crossOnDrag?: boolean;
        cursor?: string;
        draggable?: boolean;
        // tslint:disable-next-line:no-unnecessary-qualifier
        icon?: string | Icon | google.maps.Symbol;
        label?: string | MarkerLabel;
        map?: Map | StreetViewPanorama;
        opacity?: number;
        optimized?: boolean;
        position?: LatLng | LatLngLiteral;
        shape?: MarkerShape;
        title?: string;
        visible?: boolean;
        zIndex?: number;
    }

    export class Map extends React.Component<IMapProps, any> {

    }

    export class Marker extends React.Component<IMarkerProps, any> {

    }

    export class Polygon extends React.Component<any, any> {

    }

    export class Polyline extends React.Component<any, any> {

    }

    export class Circle extends React.Component<any, any> {

    }

    export interface IInfoWindowProps extends Partial<google.maps.InfoWindowOptions> {
        google: typeof google
        map: google.maps.Map
        marker: google.maps.Marker

        mapCenter?: google.maps.LatLng | google.maps.LatLngLiteral
        visible?: boolean

    }

    export class InfoWindow extends React.Component<IInfoWindowProps, any> {

    }
}
