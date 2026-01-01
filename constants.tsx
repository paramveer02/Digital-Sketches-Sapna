
import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Happy Reindeer',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1543589077-47d816067f70?q=80&w=600&auto=format&fit=crop',
    category: 'Christmas',
    description: 'A cheerful reindeer bounding through the snow.'
  },
  {
    id: '2',
    title: 'Merry Xmas Elf',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1543589077-47d816067f70?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?q=80&w=600&auto=format&fit=crop',
    category: 'Christmas',
    description: 'A playful elf spreading holiday magic.'
  },
  {
    id: '3',
    title: 'Santa Delivery',
    price: 11.00,
    category: 'Christmas',
    image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop',
    description: 'The big man himself caught mid-delivery!'
  },
  {
    id: '4',
    title: 'Snowy Cottage',
    price: 19.99,
    category: 'Christmas',
    image: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1543332145-6e5a07248383?q=80&w=600&auto=format&fit=crop',
    description: 'A cozy winter home perfect for postcards.'
  },
  {
    id: '5',
    title: 'Pumpkin King',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1603356022744-9f935324671b?q=80&w=600&auto=format&fit=crop',
    category: 'Halloween',
    description: 'The master of the pumpkin patch in hand-drawn style.'
  },
  {
    id: '6',
    title: 'Spooky Cat',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1508363778367-af993f3f4f7b?q=80&w=600&auto=format&fit=crop',
    category: 'Halloween',
    description: 'A mysterious gray cat watching the harvest moon.'
  },
  {
    id: '7',
    title: 'Friendly Ghost',
    price: 7.99,
    category: 'Halloween',
    image: 'https://images.unsplash.com/photo-1508363778367-af993f3f4f7b?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=600&auto=format&fit=crop',
    description: 'Not scary at all, just wants to be your friend.'
  },
  {
    id: '8',
    title: 'Wicked Bat',
    price: 6.99,
    category: 'Halloween',
    image: 'https://images.unsplash.com/photo-1509249023964-4a0363290685?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop',
    description: 'A cute little bat flapping in the night sky.'
  },
  {
    id: '9',
    title: 'Autumn Fox',
    price: 15.99,
    category: 'Bestsellers',
    image: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop',
    description: 'A vibrant orange fox among falling leaves.'
  },
  {
    id: '10',
    title: 'Forest Bear',
    price: 18.50,
    category: 'Bestsellers',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?q=80&w=600&auto=format&fit=crop',
    description: 'A friendly forest bear waving hello.'
  },
  {
    id: '11',
    title: 'Happy Elephant',
    price: 12.00,
    category: 'Bestsellers',
    image: 'https://images.unsplash.com/photo-1607171076534-83b1378d0537?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop',
    description: 'A colorful elephant with a giant smile.'
  },
  {
    id: '12',
    title: 'Little Rabbit',
    price: 9.50,
    category: 'Bestsellers',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1607171076534-83b1378d0537?q=80&w=600&auto=format&fit=crop',
    description: 'A soft rabbit drawing for your child room.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'ERICH Z.',
    text: 'I got a digital sketch for my daughter and she loves coloring it! High-quality and worth every penny.',
    avatar: 'https://i.pravatar.cc/150?u=erich'
  },
  {
    id: 'r2',
    author: 'MARGARITA C.',
    text: 'Rate it 5 stars! My son loves the Christmas collection. We print them out for his room decor.',
    avatar: 'https://i.pravatar.cc/150?u=margarita'
  },
  {
    id: 'r3',
    author: 'BEN A.',
    text: 'This store selection is out of this world. Clearly they love what they do. I went for Halloween sketches and was blown away.',
    avatar: 'https://i.pravatar.cc/150?u=ben'
  },
  {
    id: 'r4',
    author: 'JOHN S.',
    text: 'Great place to get custom children art. Staff are patient and always willing to help. Highly recommend!',
    avatar: 'https://i.pravatar.cc/150?u=john'
  }
];
