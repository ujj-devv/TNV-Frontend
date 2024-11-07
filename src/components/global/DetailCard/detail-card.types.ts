export type DetailCardProps = {
    detailName:string,
    data: Record<string, string | number | boolean | JSX.Element>; // Object with keys as strings and values as string, number, boolean or JSX elements
};
