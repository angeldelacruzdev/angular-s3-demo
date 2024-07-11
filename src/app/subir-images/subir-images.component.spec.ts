import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirImagesComponent } from './subir-images.component';

describe('SubirImagesComponent', () => {
  let component: SubirImagesComponent;
  let fixture: ComponentFixture<SubirImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
