import { Dogs } from './../dog';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonList, IonItem, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { Dog } from '../dog.model';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.page.html',
  styleUrls: ['./dog-detail.page.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonList, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem]
})
export class DogDetailPage implements OnInit {

  loadedDog!: Dog

  constructor(private activatedRoute: ActivatedRoute,
              private dogServices: Dogs
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('dogId')){
        return
      }

      const dogId = paramMap.get('dogId')

      if (dogId) {
        this.loadedDog = this.dogServices.getRecipe(dogId) as Dog
      }
    })
  }

}
