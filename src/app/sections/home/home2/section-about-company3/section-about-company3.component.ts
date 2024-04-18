import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section-about-company3',
  templateUrl: './section-about-company3.component.html',
  styleUrls: ['./section-about-company3.component.css']
})
export class SectionAboutCompany3Component {
  from: number = 1;
  constructor(
    private route: ActivatedRoute
  ){
    this.route.fragment.subscribe(fragment => {
      if(fragment)
        this.from = +fragment;
      // Do whatever you want with the fragment value
    });
  }
}
