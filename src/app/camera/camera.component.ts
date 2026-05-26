import { Component, signal } from '@angular/core';
import { Camera } from '@capacitor/camera';
import { IonButton, IonCard, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  imports: [IonCardContent, IonButton, IonCard],
  standalone: true,
  styleUrls: ['./camera.component.scss'],
})

export class CameraComponent {

  image = signal<string>('');

  constructor(){
    this.image.set('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGd2BLH5uSE4BSzViFqbqNDKCv9ZWWWxWvJg&s')
  }

  async openCamera() {

    const foto = await Camera.takePhoto({
      quality: 90,
    });

    if (foto.webPath) {
      this.image.set(foto.webPath);
    }

  }
  async takePicture(){

    try {
      this.openCamera()
    } catch (error){
      console.error('Error ao abrir camera', error)
    }
  }
}
