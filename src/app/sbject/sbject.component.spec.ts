import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbjectComponent } from './sbject.component';

describe('SbjectComponent', () => {
  let component: SbjectComponent;
  let fixture: ComponentFixture<SbjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SbjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SbjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
