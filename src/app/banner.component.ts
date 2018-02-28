import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var jQuery: any;
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styles: []
})
export class BannerComponent implements AfterViewInit  {

  constructor() { }
   ngAfterViewInit(): void {
					jQuery("#slider3").responsiveSlides({
					auto: true,
					pager:true,
					nav:true,
					speed: 500,
					namespace: "callbacks",
					before: function () {
					jQuery('.events').append("<li>before event fired.</li>");
					},
					after: function () {
						jQuery('.events').append("<li>after event fired.</li>");
					}
				});
   }
  ngOnInit() {
  }

}
