import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  router: Router;
  constructor(router: Router) {
    this.router = router;
   }

  ngOnInit() {
  }

  showProject(project: string){
    console.log('project/${project}');
    this.router.navigate(['discover/projects/' + project]);
  }
}
