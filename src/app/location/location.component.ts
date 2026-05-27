import { Component, signal } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { IonButton, IonCard, IonCardContent } from '@ionic/angular/standalone';
import Leaf from 'leaflet';

delete (Leaf.Icon.Default.prototype as any)._getIconUrl;

Leaf.Icon.Default.mergeOptions({
  iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
  iconUrl: 'assets/leaflet/marker-icon.png',
  shadowUrl: 'assets/leaflet/marker-shadow.png',
})

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

  map!: Leaf.Map;
  marker!: Leaf.Marker;

  async loadMap() {

    if (this.latitude() === null || this.longitude() === null) {
      return;
    }

    const lat = this.getLatitude();
    const lng = this.getLongitude();

    if (this.map) {
      this.map.remove();
    }

    await new Promise(resolve => setTimeout(resolve, 100));

    this.map = Leaf.map('map').setView([lat, lng], 16);

    Leaf.tileLayer(
      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: '&copy; OpenStreetMap' }
    ).addTo(this.map);

    this.marker = Leaf.marker([lat, lng], {
      draggable: true
    }).addTo(this.map);

    requestAnimationFrame(() => {
      this.map.invalidateSize(true);
    });
  }

  async findLocalization() {

    try {

      this.loading.set(true);

      const position = await Geolocation.getCurrentPosition({enableHighAccuracy: true});

      this.latitude.set(position.coords.latitude);
      this.longitude.set(position.coords.longitude);

      await this.loadMap();


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
