export class CustomPizza {
  name: string;
  price: number;
  description: string;
  imgURL: string;

  constructor(
    name: string,
    price: number,
    decsription: string,
    imgURL: string
  ) {
    this.name = name;
    this.price = price;
    this.description = decsription;
    this.imgURL = imgURL;
  }
}
