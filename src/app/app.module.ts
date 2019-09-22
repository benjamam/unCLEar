import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './modules/home/components/card/card.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/header/header.component';
import { FilterComponent } from './modules/home/components/filter/filter.component';
import { ProposalComponent } from './modules/proposal.component';
import { ContributeComponent } from './modules/contribute/contribute.component';
import { DiscoverArtistsComponent } from './discover-artists/discover-artists.component';
import { ArtistCardComponent } from './discover-artists/artist-card/artist-card.component';

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
    ArtistCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
