export class PizzaElement {
    public id: number;
    public name: string;
    public price: number;
    public imgURL: string;
    public type: string;

    constructor(id: number, name: string, price: number, imgURL:string, type:string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.imgURL = imgURL;
        this.type = type;
    }
}