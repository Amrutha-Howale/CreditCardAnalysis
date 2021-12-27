import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphdisplayComponent } from './graphdisplay.component';

describe('GraphdisplayComponent', () => {
  let component: GraphdisplayComponent;
  let fixture: ComponentFixture<GraphdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
