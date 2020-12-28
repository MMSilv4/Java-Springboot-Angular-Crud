import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoDetailsComponent } from './estabelecimento-details.component';

describe('EstabelecimentoDetailsComponent', () => {
  let component: EstabelecimentoDetailsComponent;
  let fixture: ComponentFixture<EstabelecimentoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstabelecimentoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabelecimentoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
