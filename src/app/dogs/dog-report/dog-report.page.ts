import { Dog } from '../../models/dog.model';
import { Component, ViewChild, effect, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonInput, IonItem, IonButton } from '@ionic/angular/standalone';
import { CameraComponent } from 'src/app/camera/camera.component';
import { LocationComponent } from 'src/app/location/location.component';
import { Dogs } from 'src/app/services/dog.services';

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
                      image: ''
                    }

  @ViewChild(CameraComponent)
  camera!: CameraComponent;

  @ViewChild(LocationComponent)
  location!: LocationComponent;

  constructor(private dogs: Dogs){

    effect(() => {
      this.getLocationAndImage()
    });
  }

  getLocationAndImage(){
      this.dogInform.image = this.camera?.image();
      this.dogInform.location.latitude = this.location?.getLatitude();
      this.dogInform.location.longitude = this.location?.getLongitude();
  }

  save(){
    this.getLocationAndImage()
    console.log(this.dogInform);

    this.dogs.newDog(this.dogInform)
  }

}
