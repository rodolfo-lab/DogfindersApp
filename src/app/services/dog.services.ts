import { Injectable } from '@angular/core';
import { Dog } from '../models/dog.model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class Dogs {

    private dogs: Dog[] = []

  constructor(private databaseService :DatabaseService){}

  async getAllDogs(): Promise<Dog[]>{
    try {
      this.dogs = await this.databaseService.getDogs()

    } catch (error) {

    }
    return [...this.dogs]
  }

  getDog(dogId: string): Dog | undefined {

    try {
      const dogFound = this.dogs.find(
        dog => dog.id === dogId
      );

      if (dogFound) {
        return { ...dogFound };
      }

      return undefined;

    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  newDog(dog: Dog){
    try {
      this.databaseService.addMissingDog(dog.description,
                                         dog.title,
                                         dog.image,
                                         dog.location.latitude,
                                         dog.location.longitude )

    } catch (error) {

    }

  }

}
