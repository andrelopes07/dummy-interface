import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { List } from '../../_models/DummyEvent';

@Component({
  selector: 'page-activity-list',
  templateUrl: 'activity-list.html',
})
export class ActivityListPage {
  title: string;
  list: List;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.title = this.navParams.get('title');
    this.list = this.navParams.get('list');
  }

}