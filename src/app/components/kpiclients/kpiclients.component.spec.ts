import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiclientsComponent } from './kpiclients.component';

describe('KpiclientsComponent', () => {
  let component: KpiclientsComponent;
  let fixture: ComponentFixture<KpiclientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiclientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
