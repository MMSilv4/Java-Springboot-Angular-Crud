import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstabelecimentoComponent } from './add-estabelecimento.component';

describe('AddEstabelecimentoComponent', () => {
  let component: AddEstabelecimentoComponent;
  let fixture: ComponentFixture<AddEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEstabelecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
