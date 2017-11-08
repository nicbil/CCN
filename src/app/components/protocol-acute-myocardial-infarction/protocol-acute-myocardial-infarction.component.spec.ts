import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolAcuteMyocardialInfarctionComponent } from './protocol-acute-myocardial-infarction.component';

describe('ProtocolAcuteMyocardialInfarctionComponent', () => {
  let component: ProtocolAcuteMyocardialInfarctionComponent;
  let fixture: ComponentFixture<ProtocolAcuteMyocardialInfarctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolAcuteMyocardialInfarctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolAcuteMyocardialInfarctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
