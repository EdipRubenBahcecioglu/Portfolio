import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloProjectComponent } from './solo-project.component';

describe('SoloProjectComponent', () => {
  let component: SoloProjectComponent;
  let fixture: ComponentFixture<SoloProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoloProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoloProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
