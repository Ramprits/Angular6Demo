export class Ingredeant {
  constructor(id: number, name: string, price: number) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
  id: number;
  name: string;
  price: number;
}
