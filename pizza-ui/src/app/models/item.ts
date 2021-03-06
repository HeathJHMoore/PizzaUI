export class Item {
  id: number;
  name: string;
  price: number;
  description: string;
  imgURL: string;
  type: string;
  orderItemIndex: number;

  constructor(
    id = 0,
    name = '',
    price = 0,
    description = '',
    imgURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdzPOXKKEseCX0pFjCAioe2oymlM91NxTGyw&usqp=CAU',
    type = '',
    orderItemIndex = 0
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imgURL = imgURL;
    this.type = type;
    this.orderItemIndex = orderItemIndex;
  }
}
