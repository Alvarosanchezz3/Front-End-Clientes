import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnsComponent } from './tecns.component';

describe('TecnsComponent', () => {
  let component: TecnsComponent;
  let fixture: ComponentFixture<TecnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TecnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
