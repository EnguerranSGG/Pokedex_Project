import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeFilterComponent } from './pokefilter.component';

describe('PokeFilterComponent', () => {
  let component: PokeFilterComponent;
  let fixture: ComponentFixture<PokeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
