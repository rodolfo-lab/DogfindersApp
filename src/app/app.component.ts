import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  constructor(private platform: Platform) {
    this.initializeApp();

  }

  async initializeApp() {
    await this.platform.ready();

    if (Capacitor.isPluginAvailable('SplashScreen')) {
      await SplashScreen.hide();
    }
  }
}