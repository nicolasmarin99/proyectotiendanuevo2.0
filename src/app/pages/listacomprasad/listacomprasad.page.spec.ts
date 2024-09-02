import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListacomprasadPage } from './listacomprasad.page';

describe('ListacomprasadPage', () => {
  let component: ListacomprasadPage;
  let fixture: ComponentFixture<ListacomprasadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacomprasadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
