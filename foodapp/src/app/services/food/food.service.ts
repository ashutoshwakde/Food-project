import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!
  }

  getAll():Foods[]{
    return[
      {
        id:1,
        name:'BIRYANI',
        cookTime: '20-30',
        price: 10,
        favorite: false,
        star: 4,
        imageUrl:'/assets/biryani.webp',
        origins: ['India'],
        tags: ['Lunch'],
      },
      {
        id:2,
        name:'BURGER',
        cookTime: '10-20',
        price: 5,
        favorite: true,
        star: 4.5,
        imageUrl:'/assets/buger.jpg',
        origins: ['US'],
        tags: ['Lunch', 'Fast Food'],
      },
      {
        id:3,
        name:'CAKE',
        cookTime: '20-30',
        price: 12.56,
        favorite: false,
        star: 3.4,
        imageUrl:'/assets/cake.jpg',
        origins: ['Egypt'],
        tags: ['Lunch'],
      },
      {
        id:4,
        name:'CUP CAKE',
        cookTime: '10-20',
        price: 8,
        favorite: false,
        star: 4,
        imageUrl:'/assets/gallary_2.jpg',
        origins: ['America'],
        tags: ['Lunch'],
      },
      {
        id:5,
        name:'CUP CAKE',
        cookTime: '10-20',
        price: 8,
        favorite: false,
        star: 4,
        imageUrl:'/assets/gallary_3.jpg',
        origins: ['America'],
        tags: ['Lunch'],
      },
      {
        id:6,
        name:'CUP CAKE',
        cookTime: '10-20',
        price: 8,
        favorite: false,
        star: 4,
        imageUrl:'/assets/gallary_4.jpg',
        origins: ['America'],
        tags: ['Lunch'],
      },
      {
        id:7,
        name:'PIZZA',
        cookTime: '20-30',
        price: 10,
        favorite: false,
        star: 4,
        imageUrl:'/assets/gallary_5.jpg',
        origins: ['Italy'],
        tags: ['Pizza'],
      },
      {
        id:8,
        name:'CAKE',
        cookTime: '20-30',
        price: 13,
        favorite: false,
        star: 4,
        imageUrl:'/assets/gallary_6.jpg',
        origins: ['America'],
        tags: ['Cake'],
      },
      {
        id:9,
        name:'ICE CREAM',
        cookTime: '5-10',
        price: 6,
        favorite: true,
        star: 4.1,
        imageUrl:'/assets/ice_cream.jpg',
        origins: ['China'],
        tags: ['Lunch'],
      },
      {
        id:10,
        name:'JUICE',
        cookTime: '5-10',
        price: 5,
        favorite: true,
        star: 3.7,
        imageUrl:'/assets/juse.jpg',
        origins: ['India'],
        tags: ['Lunch'],
      },
      {
        id:11,
        name:'LASAGNA',
        cookTime: '10-20',
        price: 34,
        favorite: true,
        star: 4.7,
        imageUrl:'/assets/lasagna.webp',
        origins: ['Italy'],
        tags: ['Lunch'],
      },
      {
        id:12,
        name:'PASTA',
        cookTime: '5-10',
        price: 2.73,
        favorite: false,
        star: 3.5,
        imageUrl:'/assets/pasta.jpg',
        origins: ['China'],
        tags: ['Lunch'],
      },
      {
        id:13,
        name:'SANDWICH',
        cookTime: '10-20',
        price: 7,
        favorite: true,
        star: 4.8,
        imageUrl:'/assets/sandwich.jpg',
        origins: ['US'],
        tags: ['Lunch'],
      },
      {
        id:14,
        name:'SPANCHI',
        cookTime: '10-20',
        price: 7.4,
        favorite: false,
        star: 3.3,
        imageUrl:'/assets/Spanchi.jpg',
        origins: ['Spanish'],
        tags: ['Lunch'],
      },
      {
        id:15,
        name:'BEAN BURGER',
        cookTime: '10-20',
        price: 8,
        favorite: true,
        star: 4.6,
        imageUrl:'/assets/chickpea_burger.avif',
        origins: ['US'],
        tags: ['Lunch'],
      },
      {
        id:16,
        name:'CHEESEBURGER',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        star: 4.9,
        imageUrl:'/assets/cheeseburger.avif',
        origins: ['US'],
        tags: ['Lunch'],
      },
      {
        id:17,
        name:'BETOND MEAT BURGER',
        cookTime: '10-20',
        price: 15,
        favorite: true,
        star: 4.3,
        imageUrl:'/assets/burger_0.avif',
        origins: ['US'],
        tags: ['Lunch'],
      },
      {
        id:18,
        name:'ITALIAN PIZZA',
        cookTime: '20-30',
        price: 7,
        favorite: true,
        star: 4,
        imageUrl:'/assets/italian Pizza.jpg',
        origins: ['US'],
        tags: ['Lunch'],
      },
      {
        id:19,
        name:'DETROIT PIZZA',
        cookTime: '20-30',
        price: 4,
        favorite: true,
        star: 5,
        imageUrl:'/assets/detroit-pizza.jpg',
        origins: ['US'],
        tags: ['Lunch'],
      },
      {
        id:20,
        name:'CALIFORNIA PIZZA',
        cookTime: '20-30',
        price: 7.7,
        favorite: false,
        star: 3.8,
        imageUrl:'/assets/california-pizza.jpg',
        origins: ['US'],
        tags: ['Lunch'],
      },
    ];
  }
} 