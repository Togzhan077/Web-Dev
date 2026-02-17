import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of product 1.',
      price: 1000,
      rating: 4.5,
      image: 'path_to_image1',
      images: ['image1_url1', 'image1_url2', 'image1_url3'],
      link: 'https://kaspi.kz/product1'
    },
    
  ];

  constructor() { }

  ngOnInit(): void { }

  share(link: string, name: string): void {
    const message = `Check out this product: ${name} ${link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(name)}`;
    
    window.open(whatsappUrl, '_blank');
  }
}
