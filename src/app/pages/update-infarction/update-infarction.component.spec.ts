import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProtocolWithAcuteMyocardialInfarctionComponent } from './update-protocol-with-acute-myocardial-infarction.component';

describe('UpdateProtocolWithAcuteMyocardialInfarctionComponent', () => {
  let component: UpdateProtocolWithAcuteMyocardialInfarctionComponent;
  let fixture: ComponentFixture<UpdateProtocolWithAcuteMyocardialInfarctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProtocolWithAcuteMyocardialInfarctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProtocolWithAcuteMyocardialInfarctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
