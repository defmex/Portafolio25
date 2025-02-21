import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInitComponent } from './page-init.component';

describe('PageInitComponent', () => {
  let component: PageInitComponent;
  let fixture: ComponentFixture<PageInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageInitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
