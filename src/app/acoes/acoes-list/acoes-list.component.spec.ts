import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesListComponent } from './acoes-list.component';

describe('AcoesListComponent', () => {
  let component: AcoesListComponent;
  let fixture: ComponentFixture<AcoesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcoesListComponent]
    });
    fixture = TestBed.createComponent(AcoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
