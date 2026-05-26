import { Dog } from './../dog.model';
import { Component, ViewChild, effect, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonInput, IonItem, IonButton } from '@ionic/angular/standalone';
import { CameraComponent } from 'src/app/camera/camera.component';
import { LocationComponent } from 'src/app/location/location.component';

@Component({
  selector: 'app-dog-report',
  templateUrl: './dog-report.page.html',
  styleUrls: ['./dog-report.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonInput, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CameraComponent, LocationComponent]
})
export class DogReportPage {

  dogInform: Dog = {
                      id: '',
                      title: '',
                      description: '',
                      location: {
                          latitude: 0,
                          longitude: 0,
                      },
                      imageUrl: ''
                    }

  @ViewChild(CameraComponent)
  camera!: CameraComponent;

  @ViewChild(LocationComponent)
  location!: LocationComponent;

  constructor(){

    effect(() => {

      this.dogInform.imageUrl = this.camera?.image();
      this.dogInform.location.latitude = this.location?.getLatitude();
      this.dogInform.location.longitude = this.location?.getLongitude();

    });
  }

  save(){}

}
