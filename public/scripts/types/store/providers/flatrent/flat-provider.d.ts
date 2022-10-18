import { Provider } from '../../domain/provider';
import { SearchFilter } from '../../domain/search-filter';
import { CRoom } from '../../domain/room';
export declare class FlatProvider implements Provider {
    static provider: string;
    private static apiUrl;
    find(filter: SearchFilter): Promise<CRoom[]>;
    getByParams(checkInDate: Date, checkOutDate: Date, maxPrice?: number): Promise<CRoom>;
    private assertIsValidResponse;
    private convertFilterToQueryString;
    private convertRoomListResponse;
    private convertRoomResponse;
}
