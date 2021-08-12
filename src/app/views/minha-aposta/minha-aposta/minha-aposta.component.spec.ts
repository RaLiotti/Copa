import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaApostaComponent } from './minha-aposta.component';

describe('MinhaApostaComponent', () => {
  let component: MinhaApostaComponent;
  let fixture: ComponentFixture<MinhaApostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhaApostaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaApostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
