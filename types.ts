
export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  hoverImage?: string;
  category: 'Christmas' | 'Halloween' | 'Bestsellers' | 'Nature';
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  avatar: string;
}
