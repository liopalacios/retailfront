import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateclientsComponent } from './createclients.component';

describe('CreateclientsComponent', () => {
  let component: CreateclientsComponent;
  let fixture: ComponentFixture<CreateclientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateclientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
