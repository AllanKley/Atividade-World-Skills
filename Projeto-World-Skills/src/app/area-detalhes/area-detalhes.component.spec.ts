import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDetalhesComponent } from './area-detalhes.component';

describe('AreaDetalhesComponent', () => {
  let component: AreaDetalhesComponent;
  let fixture: ComponentFixture<AreaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
