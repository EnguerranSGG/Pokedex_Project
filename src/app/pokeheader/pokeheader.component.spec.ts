import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeheaderComponent } from './pokeheader.component';

describe('PokeheaderComponent', () => {
  let component: PokeheaderComponent;
  let fixture: ComponentFixture<PokeheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
