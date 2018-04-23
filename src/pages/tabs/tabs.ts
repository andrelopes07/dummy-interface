import { Component } from '@angular/core';

import { VacanciesPage } from '../vacancies/vacancies';
import { EventsPage } from '../events/events';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  eventsTab = EventsPage;
  vacanciesTab = VacanciesPage;

  constructor() { }
  
}
