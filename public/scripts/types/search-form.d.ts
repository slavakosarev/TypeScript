import { Place } from "./store/domain/place.js";
export interface iSearchFormData {
    startDate: string;
    endDate: string;
    maxPrice?: number;
    flatRent?: boolean;
    homy?: boolean;
}
export interface iPlace {
    provider: string;
    originalId: string;
    image: string;
    name: string;
    description: string;
    remoteness: number;
    price: number;
    bookedDates: Date[] | number[];
    coordinates?: number[];
}
export interface iSortParams {
    key: string;
    by: number;
    value: string;
}
export declare function CallBack(value: string | Place): Error | [];
export declare function sortPlaces(arr: Place[], sort: iSortParams): Place[];
export declare function search(formName: string, cb?: Function): void;
export declare function findData(data: iSearchFormData, sortParams?: iSortParams): void;
export declare function renderSearchFormBlock(data: iSearchFormData): void;
