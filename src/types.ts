export type MessageType = {
  text: string;
  type: string
};

export type ActionType = {
  name: string;
  handler: () => void
};

export type Id = number | string;
export type WeekDay = 'Пн' | 'Вт' | 'Ср' | 'Чт' | 'Пт' | 'Сб' | 'Вс';
export type WeekDayNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type MonthNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type Direction = 'back' | 'forward';
export type YesNo = boolean | 0 | 1;

export type TFavorite = {
  id: Id,
  name: string,
  image: string
};

export type TFavorites = {
  [key: string]: TFavorite
};

export type Book = {
  placeId: Id,
  checkInDate: Date,
  checkOutDate: Date,
  maxPrice?: number
};

export type TRoom = {
  placeId: Id,
  checkInDate: Date,
  checkOutDate: Date,
  maxPrice?: number
};
