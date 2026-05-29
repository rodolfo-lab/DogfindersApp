import { DogService } from '../../services/dog.service';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonList, IonItem, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { Dog } from '../../models/dog.model';
import { LocationComponent } from 'src/app/location/location.component';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.page.html',
  styleUrls: ['./dog-detail.page.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonList, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, LocationComponent]
})

export class DogDetailPage implements OnInit, AfterViewInit {

  loadedDog!: Dog;

  @ViewChild(LocationComponent)
  location!: LocationComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dogService: DogService
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(async paramMap => {

      const dogId = paramMap.get('dogId');

      if (!dogId) {
        return;
      }

      const dog = await this.dogService.getDog(Number(dogId));

      if (!dog) {
        return;
      }

      this.loadedDog = dog;
      console.log(this.loadedDog);
    });
  }
  ngAfterViewInit(): void {
    this.updateMap();

  }

  private updateMap() {

    if (!this.loadedDog || !this.location) {
      return;
    }

    if (this.loadedDog.location) {

      this.location.setLatitude(
        this.loadedDog.location.latitude
      );

      this.location.setLongitude(
        this.loadedDog.location.longitude
      );
    }
  }
}