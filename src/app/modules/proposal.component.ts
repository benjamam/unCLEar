import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitFunction() {
    alert('Thank you ' + document.getElementById('name') + '! We will review your proposal and get back to you ASAP!');
  }
}
