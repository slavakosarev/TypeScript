import { Provider } from "../../domain/provider.js";
import { SearchFilter } from "../../domain/search-filter.js";
import { Place } from "../../domain/place.js";
export declare class HomyProvider implements Provider {
    static provider: string;
    private static apiUrl;
    search(query: SearchFilter): Promise<Place[]>;
    private convertFilterToQueryString;
    private dateToUnixStamp;
    private convertFlatListResponse;
    private convertFlatResponse;
}
