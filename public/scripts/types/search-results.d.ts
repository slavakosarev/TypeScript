import { Place } from "./store/domain/place.js";
export declare function renderSearchStubBlock(): void;
export declare function renderEmptyOrErrorSearchBlock(reasonMessage: string): void;
export declare function renderSearchResultsBlock(results: Place[], sort?: string): void;
