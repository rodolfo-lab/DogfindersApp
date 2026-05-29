import { Component, signal } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Geolocation, PermissionStatus } from '@capacitor/geolocation';
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
  private error = signal<string | null>(null);

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

  needsToFindLocation() {
    return this.latitude() === null || this.longitude() === null;
  }

  private async requestGeolocationPermission(): Promise<boolean> {
    try {
      const permission = await Geolocation.requestPermissions();
      const status = (permission as PermissionStatus).location ?? (permission as any).location;
      return status === 'granted' || status === 'prompt';
    } catch (error) {
      console.error('Erro ao solicitar permissão de geolocalização:', error);
      return false;
    }
  }

  private geolocationErrorMessage(error: any): string {
    const code = error?.code;
    switch (code) {
      case 1:
        return 'Permissão de localização negada. Ative a localização no dispositivo ou no navegador.';
      case 2:
        return 'Posição indisponível. Verifique se o dispositivo tem GPS ativo ou tente novamente em um local com sinal.';
      case 3:
        return 'Tempo esgotado ao obter localização. Tente novamente ou verifique a conexão.';
      default:
        return 'Erro ao obter localização. Verifique as configurações do dispositivo.';
    }
  }

  async findLocalization() {
    this.error.set(null);
    this.loading.set(true);

    try {
      const permissionGranted = await this.requestGeolocationPermission();
      if (!permissionGranted) {
        this.error.set('Permissão de geolocalização não concedida.');
        return;
      }

      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 10000,
      });

      this.latitude.set(position.coords.latitude);
      this.longitude.set(position.coords.longitude);

      await this.loadMap();
    } catch (error) {
      console.error('Erro ao pegar localização:', error);
      this.error.set(this.geolocationErrorMessage(error));
    } finally {
      this.loading.set(false);
    }
  }

  getLatitude(): number{
    return this.latitude() ?? 0
  }

  getLongitude(): number {
    return this.longitude() ?? 0;
  }

  getLoading(): boolean {
    return this.loading();
  }

  getError(): string | null {
    return this.error();
  }

  setLatitude(latitude: number) {
    this.latitude.set(latitude);
  }

  setLongitude(longitude: number) {
    this.longitude.set(longitude);
  }

}
