import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmHeaderComponent } from './fm-header.component';

describe('FmHeaderComponent', () => {
  let component: FmHeaderComponent;
  let fixture: ComponentFixture<FmHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
