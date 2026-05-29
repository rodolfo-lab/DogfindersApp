import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonAvatar, IonImg, IonLabel, IonList } from '@ionic/angular/standalone';
import { Dog } from '../models/dog.model';
import { DogService } from '../services/dog.service';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.page.html',
  styleUrls: ['./dogs.page.scss'],
  standalone: true,
  imports: [IonLabel, IonImg, IonAvatar, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, RouterLink] })
export class DogsPage implements OnInit {

  dogs: Dog[] = []

  constructor(private dogsService: DogService) { }

  async ngOnInit() {
    this.dogs = await this.dogsService.getAllDogs()
  }

}
