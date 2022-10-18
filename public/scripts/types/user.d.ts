export declare function renderUserBlock(userName: string, avatarUrl: string, favoriteItemsAmount?: number): void;
declare type User = {
    userName: unknown;
    avatarUrl: unknown;
};
export declare function getUserData(): User | null;
export declare function getFavoritesAmount(): number;
export {};
