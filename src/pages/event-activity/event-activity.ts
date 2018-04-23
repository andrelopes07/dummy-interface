import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Activity, List } from '../../_models/DummyEvent';
import { ActivityListPage } from '../activity-list/activity-list';

@Component({
  selector: 'page-event-activity',
  templateUrl: 'event-activity.html',
})
export class EventActivityPage {
  title: string;
  activity: Activity;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.title = this.navParams.get('title');
    this.activity = this.navParams.get('activity');
  }

  goToList(title: string, list: List) {
    this.navCtrl.push(ActivityListPage, {title, list});
  }

}