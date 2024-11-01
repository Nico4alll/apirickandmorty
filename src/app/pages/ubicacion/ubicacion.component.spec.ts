import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RickyMortyDbService } from 'src/app/services/ricky-morty-db.service';

import { UbicacionComponent } from './ubicacion.component';

describe('UbicacionComponent', () => {
  let component: UbicacionComponent;
  let fixture: ComponentFixture<UbicacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UbicacionComponent]
    });
    fixture = TestBed.createComponent(UbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
