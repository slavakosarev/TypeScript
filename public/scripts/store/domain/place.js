export class Place {
    constructor(provider, originalId, image, name, description, remoteness, price, bookedDates, coordinates) {
        this.provider = provider;
        this.originalId = originalId;
        this.image = image;
        this.name = name;
        this.description = description;
        this.remoteness = remoteness;
        this.price = price;
        this.bookedDates = bookedDates;
        this.coordinates = coordinates;
    }
    get id() {
        return this.provider + '-' + this.originalId;
    }
    isProvidedBy(providerName) {
        return this.provider === providerName;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3RvcmUvZG9tYWluL3BsYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxLQUFLO0lBQ2hCLFlBQ21CLFFBQWdCLEVBQ2pCLFVBQWtCLEVBQ2xCLEtBQWEsRUFDYixJQUFZLEVBQ1osV0FBbUIsRUFDbkIsVUFBa0IsRUFDbEIsS0FBYSxFQUNiLFdBQThCLEVBQzlCLFdBQXNCO1FBUnJCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDakIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBVztJQUNwQyxDQUFDO0lBRUwsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQzlDLENBQUM7SUFDTSxZQUFZLENBQUMsWUFBb0I7UUFDdEMsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQTtJQUN2QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGxhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb3ZpZGVyOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IG9yaWdpbmFsSWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW1hZ2U6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSByZW1vdGVuZXNzOiBudW1iZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IHByaWNlOiBudW1iZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IGJvb2tlZERhdGVzOiBEYXRlW10gfCBudW1iZXJbXSxcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29vcmRpbmF0ZXM/OiBudW1iZXJbXVxuICApIHsgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlciArICctJyArIHRoaXMub3JpZ2luYWxJZFxuICB9XG4gIHB1YmxpYyBpc1Byb3ZpZGVkQnkocHJvdmlkZXJOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlciA9PT0gcHJvdmlkZXJOYW1lXG4gIH1cbn1cbiJdfQ==