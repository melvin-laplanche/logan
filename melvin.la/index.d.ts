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