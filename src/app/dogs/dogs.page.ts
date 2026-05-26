import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonAvatar, IonImg, IonLabel, IonList } from '@ionic/angular/standalone';
import { Dog } from './dog.model';
import { Dogs } from './dog';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.page.html',
  styleUrls: ['./dogs.page.scss'],
  standalone: true,
  imports: [IonLabel, IonImg, IonAvatar, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, RouterLink] })
export class DogsPage implements OnInit {

  dogs: Dog[] = []

  constructor(private dogsService: Dogs) { }

  ngOnInit() {
    this.dogs = this.dogsService.getAllRecipes()
  }

}
