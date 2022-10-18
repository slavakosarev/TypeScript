import { Provider } from "../../domain/provider.js";
import { SearchFilter } from "../../domain/search-filter.js";
import { Place } from "../../domain/place.js";
export declare class FlatrentProvider implements Provider {
    static provider: string;
    private static sdk;
    search(query: SearchFilter): Promise<Place[]>;
    private convertFlatListResponse;
    private convertFlatResponse;
}
