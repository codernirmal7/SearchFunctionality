export type Product = {
  id: number;
  image: string;
  title: string;
  price: number;
};

export type ProductProps = {
  products: Product[];
};