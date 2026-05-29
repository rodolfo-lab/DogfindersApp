import { Injectable } from '@angular/core';
import { Dog } from '../models/dog.model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class DogService {

  private dogs: Dog[] = [];

  constructor(private databaseService: DatabaseService) {}

  async getAllDogs(): Promise<Dog[]>{
    try {
      this.dogs = await this.databaseService.getDogs();
    } catch (error) {
      console.error('Erro ao carregar cães:', error);
    }
    return [...this.dogs];
  }

  async getDog(dogId: number): Promise<Dog | undefined> {
    try {
      const dogFound = this.dogs.find((dog) => dog.id === dogId);
      if (dogFound) {
        return { ...dogFound };
      }
      const dogFromDb = await this.databaseService.getDogById(dogId);
      return dogFromDb ?? undefined;
    } catch (error) {
      console.error('Erro ao buscar cão:', error);
      return undefined;
    }
  }

  async newDog(dog: Dog): Promise<number> {
    try {
      const newId = await this.databaseService.addMissingDog(
        dog.description,
        dog.title,
        dog.image,
        dog.location.latitude,
        dog.location.longitude
      );
      if (newId > 0) {
        await this.getAllDogs();
      }
      return newId;
    } catch (error) {
      console.error('Erro ao criar cão:', error);
      return 0;
    }
  }

}
