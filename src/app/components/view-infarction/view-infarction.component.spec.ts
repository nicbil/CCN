import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProtocolWithAcuteMyocardialInfarctionComponent } from './view-protocol-with-acute-myocardial-infarction.component';

describe('ViewProtocolWithAcuteMyocardialInfarctionComponent', () => {
  let component: ViewProtocolWithAcuteMyocardialInfarctionComponent;
  let fixture: ComponentFixture<ViewProtocolWithAcuteMyocardialInfarctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProtocolWithAcuteMyocardialInfarctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProtocolWithAcuteMyocardialInfarctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
