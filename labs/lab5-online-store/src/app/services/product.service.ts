import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  categories: Category[] = [
    { id: 1, name: 'Смартфондар' },
    { id: 2, name: 'Ноутбуктер' },
    { id: 3, name: 'Құлаққаптар' },
    { id: 4, name: 'Планшеттер' },
  ];

  products: Product[] = [
    { id: 1, name: 'iPhone', description: 'Жаңа iPhone', price: 1000, imageUrl: 'link', rating: 4.5, likes: 0, categoryId: 1, link: 'kaspi.kz/link' },
    { id: 2, name: 'Samsung Galaxy', description: 'Қымбат смартфон', price: 800, imageUrl: 'link', rating: 4.0, likes: 0, categoryId: 1, link: 'kaspi.kz/link' },
    { id: 3, name: 'MacBook Pro', description: 'Жоғары сапалы ноутбук', price: 2000, imageUrl: 'link', rating: 4.7, likes: 0, categoryId: 2, link: 'kaspi.kz/link' },
    { id: 4, name: 'Dell XPS', description: 'Керемет ноутбук', price: 1500, imageUrl: 'link', rating: 4.2, likes: 0, categoryId: 2, link: 'kaspi.kz/link' },
    { id: 5, name: 'Bose Headphones', description: 'Құлаққаптар жоғары сапамен', price: 250, imageUrl: 'link', rating: 4.6, likes: 0, categoryId: 3, link: 'kaspi.kz/link' },
    { id: 6, name: 'Sony Headphones', description: 'Жоғары сапалы дыбыс', price: 300, imageUrl: 'link', rating: 4.5, likes: 0, categoryId: 3, link: 'kaspi.kz/link' },
    { id: 7, name: 'iPad Pro', description: 'Жоғары сапалы планшет', price: 1200, imageUrl: 'link', rating: 4.8, likes: 0, categoryId: 4, link: 'kaspi.kz/link' },
    { id: 8, name: 'Samsung Tablet', description: 'Таблет жоғары сапамен', price: 800, imageUrl: 'link', rating: 4.3, likes: 0, categoryId: 4, link: 'kaspi.kz/link' },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategoryId(categoryId: number): Product[] {
    return this.products.filter((product) => product.categoryId === categoryId);
  }
}