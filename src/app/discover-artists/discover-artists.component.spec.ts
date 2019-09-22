import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverArtistsComponent } from './discover-artists.component';

describe('DiscoverArtistsComponent', () => {
  let component: DiscoverArtistsComponent;
  let fixture: ComponentFixture<DiscoverArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
