import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Publisher } from '../../models/publisher.model';
import { PublishersService } from '../../services/publishers.service';
import { PublisherResponse } from '../../models/publisher-responses.model';

@Component({
  selector: 'app-publishers-details',
  templateUrl: './publishers-details.component.html',
  styleUrls: ['./publishers-details.component.css'],
})
export class PublishersDetailsComponent {
  publisher: Publisher | undefined = undefined;

  constructor(
    private router: ActivatedRoute,
    private publishersService: PublishersService
  ) {
    console.log(PublishersDetailsComponent.name);
  }

  ngOnInit() {
    console.log('OnInit');
    // Retrieve the publisherId
    const publisherId = this.router.snapshot.paramMap.get('id');
    console.log(publisherId);
    if (publisherId != null)
      this.publishersService.getById(publisherId).subscribe({
        next: (res: PublisherResponse) => {
          this.publisher = res.result;
        },
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('PublisherDetailsComponent::OnChange', changes);
    // changes.prop contains the old and the new value...
  }
}
