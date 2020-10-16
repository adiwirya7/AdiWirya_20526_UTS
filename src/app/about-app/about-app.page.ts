import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.page.html',
  styleUrls: ['./about-app.page.scss'],
})
export class AboutAppPage implements OnInit {
  url = 'https://i.pinimg.com/originals/1d/50/02/1d50020c119381d4d5c85e0dbcc18d31.gif';
  constructor(
    private menu: MenuController,
  ) { }

  async openMenu(){
    await this.menu.enable(true, 'appMenu');
    await this.menu.open('appMenu');
  }

  ngOnInit() {
  }

}
