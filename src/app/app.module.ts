import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistCardComponent } from './discover-artists/artist-card/artist-card.component';
import { DiscoverArtistsComponent } from './discover-artists/discover-artists.component';
import { ContributeComponent } from './modules/contribute/contribute.component';
import { HeaderComponent } from './modules/header/header.component';
import { CardComponent } from './modules/home/components/card/card.component';
import { FilterComponent } from './modules/home/components/filter/filter.component';
import { ProjectComponent } from './modules/home/components/project/project.component';
import { HomeComponent } from './modules/home/home.component';
import { ProposalComponent } from './modules/proposal.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    HeaderComponent,
    FilterComponent,
    ProposalComponent,
    ContributeComponent,
    DiscoverArtistsComponent,
    ArtistCardComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
