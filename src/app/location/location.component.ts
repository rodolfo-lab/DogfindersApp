import { Component, signal } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { IonButton, IonCard, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  imports: [IonButton, IonCard, IonCardContent],
  standalone: true,

})

export class LocationComponent {

  private latitude = signal<number | null>(null);
  private longitude = signal<number | null>(null);
  private loading = signal(false);

  async findLocalization() {

    try {

      this.loading.set(true);

      const position = await Geolocation.getCurrentPosition({enableHighAccuracy: true});

      this.latitude.set(position.coords.latitude);
      this.longitude.set(position.coords.longitude);

    } catch (error) {

      console.error( 'Erro ao pegar localização:', error);

    } finally {
      this.loading.set(false);
    }
  }

  getLatitude(): number{
    return this.latitude() ?? 0
  }

  getLongitude(): number{
    return this.longitude() ?? 0
  }

  getLoading(): boolean{
    return this.loading()
  }

}
