export type CellTypes = 'code' | 'Text';

export interface Cell {
    id: string;
    type: CellTypes;
    content: string;
}