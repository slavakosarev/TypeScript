import { Place } from './store/domain/place.js';
export interface SearchFormData {
    startDate: string;
    endDate: string;
    maxPrice?: number;
    flatRent?: boolean;
    homy?: boolean;
}
export interface SortParams {
    key: string;
    by: number;
    value: string;
}
export declare function CallBack(value: string | Place): any[];
export declare function sortPlaces(arr: Place[], sort: SortParams): Place[];
export declare function search(formName: string, cb?: Function): void;
export declare function findData(data: SearchFormData, sortParams?: SortParams): void;
export declare function renderSearchFormBlock(data: SearchFormData): void;
