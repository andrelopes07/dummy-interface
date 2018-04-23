import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DummyEvent, Activity } from '../../_models/DummyEvent';
import { DummyDataProvider } from '../../_services/dummy-data.provider';
import { EventActivityPage } from '../event-activity/event-activity';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  events: DummyEvent[];

  constructor(
    public navCtrl: NavController,
    private dummyDataProvider: DummyDataProvider
  ) { }

  ionViewDidLoad() {
    this.events = this.dummyDataProvider.getData();
  }

  goToActivity(title: string, activity: Activity) {
    this.navCtrl.push(EventActivityPage, {title, activity});
  }

}
