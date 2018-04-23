import { Injectable } from '@angular/core';
import { DummyEvent } from '../_models/DummyEvent';
import { DUMMY_DATA } from './dummyData';

@Injectable()
export class DummyDataProvider {

  constructor() { }

  getData(): DummyEvent[] {
    return DUMMY_DATA;
  }

}
