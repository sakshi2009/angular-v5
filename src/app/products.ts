export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Hp Laptop',
    price: 50000,
    description: 'Laptop with best battery'
  },
  {
    id: 2,
    name: 'Realme Phone',
    price: 20000,
    description: 'Phone with 64 mp camera'
  },
  {
    id: 3,
    name: 'Ipad',
    price: 30000,
    description: ''
  }
];
