import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguangeCodingComponent } from './languange-coding.component';

describe('LanguangeCodingComponent', () => {
  let component: LanguangeCodingComponent;
  let fixture: ComponentFixture<LanguangeCodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguangeCodingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguangeCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
