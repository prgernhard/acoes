import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesFormComponent } from './acoes-form.component';

describe('AcoesFormComponent', () => {
  let component: AcoesFormComponent;
  let fixture: ComponentFixture<AcoesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcoesFormComponent]
    });
    fixture = TestBed.createComponent(AcoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
