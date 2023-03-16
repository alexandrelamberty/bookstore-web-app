import { Injectable } from '@angular/core';
import { Publisher } from '../model/publisher.model';
import { BOOKS } from './publishers';

@Injectable({
  providedIn: 'root',
})
export class PublishersService {
  publishers: Publisher[] = [];

  addPublisher(publisher: Publisher) {
    this.publishers.push(publisher);
  }

  getPublishers(): Publisher[] {
    return this.publishers;
  }

  removePublisher(publisher: Publisher) {
    //
  }
}
