import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {
  router: Router;
  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  routeTo(r: string) {
    if (r === 'projects') {
      this.router.navigate(['discover/projects']);
    }
    else if (r === 'artists') {
      this.router.navigate(['discover-artists']);
    }
    else if (r === 'propose') {
      this.router.navigate(['propose']);

    }
  }
}
