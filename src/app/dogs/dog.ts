import { Injectable } from '@angular/core';
import { Dog } from './dog.model';

@Injectable({
  providedIn: 'root',
})
export class Dogs {

    private dogs: Dog[] = [
    {
      id: 'r1',
      title: 'chihuahua',
      description: 'chihuahua fujao',
      location: {latitude: 1, longitude: 2},
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tTW3VNnR4YzeWfGPKXRD1QlPTc4d0cURx0iZMgHuUa1EE4BBPoD6f1WLUk5sys3UKIuYGWROVXWq-5qYQpdP3IUq8Uifqy1Hzli4I98p&s=10'
    },
    {
      id: 'r2',
      title: 'boxer',
      description: 'boxer fujao',
      location: {latitude: 3, longitude: 4},
      imageUrl: 'https://petcare.com.br/wp-content/uploads/2022/11/20.jpg'
    },
    {
      id: 'r1',
      title: 'chihuahua',
      description: 'chihuahua fujao',
      location: {latitude: 1, longitude: 2},
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tTW3VNnR4YzeWfGPKXRD1QlPTc4d0cURx0iZMgHuUa1EE4BBPoD6f1WLUk5sys3UKIuYGWROVXWq-5qYQpdP3IUq8Uifqy1Hzli4I98p&s=10'
    },
    {
      id: 'r2',
      title: 'boxer',
      description: 'boxer fujao',
      location: {latitude: 3, longitude: 4},
      imageUrl: 'https://petcare.com.br/wp-content/uploads/2022/11/20.jpg'
    },
    {
      id: 'r1',
      title: 'chihuahua',
      description: 'chihuahua fujao',
      location: {latitude: 1, longitude: 2},
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tTW3VNnR4YzeWfGPKXRD1QlPTc4d0cURx0iZMgHuUa1EE4BBPoD6f1WLUk5sys3UKIuYGWROVXWq-5qYQpdP3IUq8Uifqy1Hzli4I98p&s=10'
    },
    {
      id: 'r2',
      title: 'boxer',
      description: 'boxer fujao',
      location: {latitude: 3, longitude: 4},
      imageUrl: 'https://petcare.com.br/wp-content/uploads/2022/11/20.jpg'
    },
    {
      id: 'r1',
      title: 'chihuahua',
      description: 'chihuahua fujao',
      location: {latitude: 1, longitude: 2},
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tTW3VNnR4YzeWfGPKXRD1QlPTc4d0cURx0iZMgHuUa1EE4BBPoD6f1WLUk5sys3UKIuYGWROVXWq-5qYQpdP3IUq8Uifqy1Hzli4I98p&s=10'
    },
    {
      id: 'r2',
      title: 'boxer',
      description: 'boxer fujao',
      location: {latitude: 3, longitude: 4},
      imageUrl: 'https://petcare.com.br/wp-content/uploads/2022/11/20.jpg'
    },
    {
      id: 'r1',
      title: 'chihuahua',
      description: 'chihuahua fujao',
      location: {latitude: 1, longitude: 2},
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tTW3VNnR4YzeWfGPKXRD1QlPTc4d0cURx0iZMgHuUa1EE4BBPoD6f1WLUk5sys3UKIuYGWROVXWq-5qYQpdP3IUq8Uifqy1Hzli4I98p&s=10'
    },
    {
      id: 'r2',
      title: 'boxer',
      description: 'boxer fujao',
      location: {latitude: 3, longitude: 4},
      imageUrl: 'https://petcare.com.br/wp-content/uploads/2022/11/20.jpg'
    },
    {
      id: 'r1',
      title: 'chihuahua',
      description: 'chihuahua fujao',
      location: {latitude: 1, longitude: 2},
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tTW3VNnR4YzeWfGPKXRD1QlPTc4d0cURx0iZMgHuUa1EE4BBPoD6f1WLUk5sys3UKIuYGWROVXWq-5qYQpdP3IUq8Uifqy1Hzli4I98p&s=10'
    },
    {
      id: 'r2',
      title: 'boxer',
      description: 'boxer fujao',
      location: {latitude: 3, longitude: 4},
      imageUrl: 'https://petcare.com.br/wp-content/uploads/2022/11/20.jpg'
    },
    {
      id: 'r1',
      title: 'chihuahua',
      description: 'chihuahua fujao',
      location: {latitude: 1, longitude: 2},
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tTW3VNnR4YzeWfGPKXRD1QlPTc4d0cURx0iZMgHuUa1EE4BBPoD6f1WLUk5sys3UKIuYGWROVXWq-5qYQpdP3IUq8Uifqy1Hzli4I98p&s=10'
    },
    {
      id: 'r2',
      title: 'boxer',
      description: 'boxer fujao',
      location: {latitude: 3, longitude: 4},
      imageUrl: 'https://petcare.com.br/wp-content/uploads/2022/11/20.jpg'
    },
    {
      id: 'r1',
      title: 'chihuahua',
      description: 'chihuahua fujao',
      location: {latitude: 1, longitude: 2},
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tTW3VNnR4YzeWfGPKXRD1QlPTc4d0cURx0iZMgHuUa1EE4BBPoD6f1WLUk5sys3UKIuYGWROVXWq-5qYQpdP3IUq8Uifqy1Hzli4I98p&s=10'
    },
    {
      id: 'r2',
      title: 'boxer',
      description: 'boxer fujao',
      location: {latitude: 3, longitude: 4},
      imageUrl: 'https://petcare.com.br/wp-content/uploads/2022/11/20.jpg'
    },
    {
      id: 'r1',
      title: 'chihuahua',
      description: 'chihuahua fujao',
      location: {latitude: 1, longitude: 2},
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tTW3VNnR4YzeWfGPKXRD1QlPTc4d0cURx0iZMgHuUa1EE4BBPoD6f1WLUk5sys3UKIuYGWROVXWq-5qYQpdP3IUq8Uifqy1Hzli4I98p&s=10'
    },
    {
      id: 'r2',
      title: 'boxer',
      description: 'boxer fujao',
      location: {latitude: 3, longitude: 4},
      imageUrl: 'https://petcare.com.br/wp-content/uploads/2022/11/20.jpg'
    },
    {
      id: 'r1',
      title: 'chihuahua',
      description: 'chihuahua fujao',
      location: {latitude: 1, longitude: 2},
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tTW3VNnR4YzeWfGPKXRD1QlPTc4d0cURx0iZMgHuUa1EE4BBPoD6f1WLUk5sys3UKIuYGWROVXWq-5qYQpdP3IUq8Uifqy1Hzli4I98p&s=10'
    },
    {
      id: 'r2',
      title: 'boxer',
      description: 'boxer fujao',
      location: {latitude: 3, longitude: 4},
      imageUrl: 'https://petcare.com.br/wp-content/uploads/2022/11/20.jpg'
    },
    {
      id: 'r1',
      title: 'chihuahua',
      description: 'chihuahua fujao',
      location: {latitude: 1, longitude: 2},
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tTW3VNnR4YzeWfGPKXRD1QlPTc4d0cURx0iZMgHuUa1EE4BBPoD6f1WLUk5sys3UKIuYGWROVXWq-5qYQpdP3IUq8Uifqy1Hzli4I98p&s=10'
    },
    {
      id: 'r2',
      title: 'boxer',
      description: 'boxer fujao',
      location: {latitude: 3, longitude: 4},
      imageUrl: 'https://petcare.com.br/wp-content/uploads/2022/11/20.jpg'
    },
    {
      id: 'r1',
      title: 'chihuahua',
      description: 'chihuahua fujao',
      location: {latitude: 1, longitude: 2},
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tTW3VNnR4YzeWfGPKXRD1QlPTc4d0cURx0iZMgHuUa1EE4BBPoD6f1WLUk5sys3UKIuYGWROVXWq-5qYQpdP3IUq8Uifqy1Hzli4I98p&s=10'
    },
    {
      id: 'r2',
      title: 'boxer',
      description: 'boxer fujao',
      location: {latitude: 3, longitude: 4},
      imageUrl: 'https://petcare.com.br/wp-content/uploads/2022/11/20.jpg'
    },
    {
      id: 'r1',
      title: 'chihuahua',
      description: 'chihuahua fujao',
      location: {latitude: 1, longitude: 2},
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tTW3VNnR4YzeWfGPKXRD1QlPTc4d0cURx0iZMgHuUa1EE4BBPoD6f1WLUk5sys3UKIuYGWROVXWq-5qYQpdP3IUq8Uifqy1Hzli4I98p&s=10'
    },
    {
      id: 'r2',
      title: 'boxer',
      description: 'boxer fujao',
      location: {latitude: 3, longitude: 4},
      imageUrl: 'https://petcare.com.br/wp-content/uploads/2022/11/20.jpg'
    },
    {
      id: 'r1',
      title: 'chihuahua',
      description: 'chihuahua fujao',
      location: {latitude: 1, longitude: 2},
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tTW3VNnR4YzeWfGPKXRD1QlPTc4d0cURx0iZMgHuUa1EE4BBPoD6f1WLUk5sys3UKIuYGWROVXWq-5qYQpdP3IUq8Uifqy1Hzli4I98p&s=10'
    },
    {
      id: 'r2',
      title: 'boxer',
      description: 'boxer fujao',
      location: {latitude: 3, longitude: 4},
      imageUrl: 'https://petcare.com.br/wp-content/uploads/2022/11/20.jpg'
    },
    {
      id: 'r1',
      title: 'chihuahua',
      description: 'chihuahua fujao',
      location: {latitude: 1, longitude: 2},
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tTW3VNnR4YzeWfGPKXRD1QlPTc4d0cURx0iZMgHuUa1EE4BBPoD6f1WLUk5sys3UKIuYGWROVXWq-5qYQpdP3IUq8Uifqy1Hzli4I98p&s=10'
    },
    {
      id: 'r2',
      title: 'boxer',
      description: 'boxer fujao',
      location: {latitude: 3, longitude: 4},
      imageUrl: 'https://petcare.com.br/wp-content/uploads/2022/11/20.jpg'
    },
  ]

  constructor(){}

  getAllRecipes(){
    return [...this.dogs]
  }

  getRecipe(dogId: string) {
    return {
        ...this.dogs.find( dog => {
          return dog.id === dogId
      })
    }
  }

}
