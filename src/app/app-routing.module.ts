import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributeComponent } from './modules/contribute/contribute.component';
import { HomeComponent } from './modules/home/home.component';
import { ProposalComponent } from './modules/proposal.component';
import {DiscoverArtistsComponent} from './discover-artists/discover-artists.component';

const routes: Routes = [
  {
    path: 'discover',
    component: HomeComponent
  },
  {
    path: 'discover-artists',
    component: DiscoverArtistsComponent
  },
  {
    path: 'propose',
    component: ProposalComponent
  },
  {
    path: 'contribute',
    component: ContributeComponent
  },
  {
    path: '**',
    redirectTo: 'discover'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
