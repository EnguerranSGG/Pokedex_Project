import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFocusComponent } from './pokefocus.component';

describe('PokemonComponent', () => {
  let component: PokemonFocusComponent;
  let fixture: ComponentFixture<PokemonFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonFocusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
