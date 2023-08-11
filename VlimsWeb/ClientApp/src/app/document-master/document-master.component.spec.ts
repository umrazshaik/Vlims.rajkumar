import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentMasterComponent } from './document-master.component';

describe('DocumentMasterComponent', () => {
  let component: DocumentMasterComponent;
  let fixture: ComponentFixture<DocumentMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
