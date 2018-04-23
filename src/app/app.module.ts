import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { VacanciesPage } from '../pages/vacancies/vacancies';
import { EventsPage } from '../pages/events/events';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DummyDataProvider } from '../_services/dummy-data.provider';
import { EventActivityPage } from '../pages/event-activity/event-activity';
import { ActivityListPage } from '../pages/activity-list/activity-list';
import { SafePipe } from '../_pipes/safe.pipe';

@NgModule({
  declarations: [
    MyApp,
    VacanciesPage,
    EventsPage,
    TabsPage,
    EventActivityPage,
    ActivityListPage,
    SafePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VacanciesPage,
    EventsPage,
    TabsPage,
    EventActivityPage,
    ActivityListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DummyDataProvider
  ]
})
export class AppModule {}
