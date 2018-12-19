export interface Column {
    name: string | string[];
    label: string;
    type?: COLUMN_TYPE;
    clickCell?: boolean;
}
export const enum COLUMN_TYPE {
    'Data'
}
