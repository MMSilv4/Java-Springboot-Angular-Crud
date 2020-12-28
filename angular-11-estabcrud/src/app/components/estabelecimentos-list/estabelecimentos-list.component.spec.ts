import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentosListComponent } from './estabelecimentos-list.component';

describe('EstabelecimentosListComponent', () => {
  let component: EstabelecimentosListComponent;
  let fixture: ComponentFixture<EstabelecimentosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstabelecimentosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabelecimentosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
