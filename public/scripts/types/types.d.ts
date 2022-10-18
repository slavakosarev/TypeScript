export declare type MessageType = {
    text: string;
    type: string;
};
export declare type ActionType = {
    name: string;
    handler: () => void;
};
export declare type Id = number | string;
export declare type WeekDay = 'Пн' | 'Вт' | 'Ср' | 'Чт' | 'Пт' | 'Сб' | 'Вс';
export declare type WeekDayNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export declare type MonthNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export declare type Direction = 'back' | 'forward';
export declare type YesNo = boolean | 0 | 1;
export declare type TFavorite = {
    id: Id;
    name: string;
    image: string;
};
export declare type TFavorites = {
    [key: string]: TFavorite;
};
export declare type Book = {
    placeId: Id;
    checkInDate: Date;
    checkOutDate: Date;
    maxPrice?: number;
};
export declare type TRoom = {
    placeId: Id;
    checkInDate: Date;
    checkOutDate: Date;
    maxPrice?: number;
};
