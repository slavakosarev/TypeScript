export class CRoom {
    constructor(provider, originalId, placeId, name, description, image, remoteness, bookedDates, price) {
        this.provider = provider;
        this.originalId = originalId;
        this.placeId = placeId;
        this.name = name;
        this.description = description;
        this.image = image;
        this.remoteness = remoteness;
        this.bookedDates = bookedDates;
        this.price = price;
    }
    get id() {
        return this.provider + '-' + this.originalId;
    }
    isProvidedBy(providerName) {
        return this.provider === providerName;
    }
}
export class FRoom {
    constructor(provider, originalId, placeId, name, description, image, remoteness, bookedDates, price) {
        this.provider = provider;
        this.originalId = originalId;
        this.placeId = placeId;
        this.name = name;
        this.description = description;
        this.image = image;
        this.remoteness = remoteness;
        this.bookedDates = bookedDates;
        this.price = price;
    }
    get id() {
        return this.provider + '-' + this.originalId;
    }
    isProvidedBy(providerName) {
        return this.provider === providerName;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdG9yZS9kb21haW4vcm9vbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sS0FBSztJQUVoQixZQUNtQixRQUFnQixFQUNqQixVQUFrQixFQUMzQixPQUFXLEVBQ1gsSUFBWSxFQUNaLFdBQW1CLEVBQ25CLEtBQWEsRUFDYixVQUFtQixFQUNuQixXQUFnQixFQUNoQixLQUFjO1FBUkosYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQzNCLFlBQU8sR0FBUCxPQUFPLENBQUk7UUFDWCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGVBQVUsR0FBVixVQUFVLENBQVM7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQUs7UUFDaEIsVUFBSyxHQUFMLEtBQUssQ0FBUztJQUVuQixDQUFDO0lBRUwsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQzlDLENBQUM7SUFFTSxZQUFZLENBQUMsWUFBb0I7UUFDdEMsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQTtJQUN2QyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sS0FBSztJQUVoQixZQUNtQixRQUFnQixFQUNqQixVQUFrQixFQUMzQixPQUFXLEVBQ1gsSUFBWSxFQUNaLFdBQW1CLEVBQ25CLEtBQWEsRUFDYixVQUFrQixFQUNsQixXQUFnQixFQUNoQixLQUFjO1FBUkosYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQzNCLFlBQU8sR0FBUCxPQUFPLENBQUk7UUFDWCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsZ0JBQVcsR0FBWCxXQUFXLENBQUs7UUFDaEIsVUFBSyxHQUFMLEtBQUssQ0FBUztJQUVuQixDQUFDO0lBRUwsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQzlDLENBQUM7SUFFTSxZQUFZLENBQUMsWUFBb0I7UUFDdEMsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQTtJQUN2QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZCB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIENSb29tIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb3ZpZGVyOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IG9yaWdpbmFsSWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgcGxhY2VJZDogSWQsXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICBwdWJsaWMgaW1hZ2U6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVtb3RlbmVzcz86IG51bWJlcixcbiAgICBwdWJsaWMgYm9va2VkRGF0ZXM/OiBbXSxcbiAgICBwdWJsaWMgcHJpY2U/OiBudW1iZXIsXG5cbiAgKSB7IH1cblxuICBnZXQgaWQoKTogSWQge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyICsgJy0nICsgdGhpcy5vcmlnaW5hbElkXG4gIH1cblxuICBwdWJsaWMgaXNQcm92aWRlZEJ5KHByb3ZpZGVyTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXIgPT09IHByb3ZpZGVyTmFtZVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGUm9vbSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm92aWRlcjogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBvcmlnaW5hbElkOiBzdHJpbmcsXG4gICAgcHVibGljIHBsYWNlSWQ6IElkLFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgcHVibGljIGltYWdlOiBzdHJpbmcsXG4gICAgcHVibGljIHJlbW90ZW5lc3M6IG51bWJlcixcbiAgICBwdWJsaWMgYm9va2VkRGF0ZXM/OiBbXSxcbiAgICBwdWJsaWMgcHJpY2U/OiBudW1iZXIsXG5cbiAgKSB7IH1cblxuICBnZXQgaWQoKTogSWQge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyICsgJy0nICsgdGhpcy5vcmlnaW5hbElkXG4gIH1cblxuICBwdWJsaWMgaXNQcm92aWRlZEJ5KHByb3ZpZGVyTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXIgPT09IHByb3ZpZGVyTmFtZVxuICB9XG59XG4iXX0=