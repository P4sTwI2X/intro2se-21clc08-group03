
export type CartItem = {
  productId: number;
  productName: string;
  image: string;
  quantity: number;
  price: number;
  description: string;
  cartQuantity: number;
}

export type Cart= {
length: number,
arr: CartItem[]
}