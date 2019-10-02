import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpPokemonComponent } from './pop-up-pokemon.component';

describe('PopUpPokemonComponent', () => {
  let component: PopUpPokemonComponent;
  let fixture: ComponentFixture<PopUpPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
