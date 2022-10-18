export declare class Place {
    private readonly provider;
    readonly originalId: string;
    readonly image: string;
    readonly name: string;
    readonly description: string;
    readonly remoteness: number;
    readonly price: number;
    readonly bookedDates: Date[] | number[];
    readonly coordinates?: number[];
    constructor(provider: string, originalId: string, image: string, name: string, description: string, remoteness: number, price: number, bookedDates: Date[] | number[], coordinates?: number[]);
    get id(): string;
    isProvidedBy(providerName: string): boolean;
}
