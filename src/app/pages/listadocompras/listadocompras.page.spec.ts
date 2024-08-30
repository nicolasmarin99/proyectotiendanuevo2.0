import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadocomprasPage } from './listadocompras.page';

describe('ListadocomprasPage', () => {
  let component: ListadocomprasPage;
  let fixture: ComponentFixture<ListadocomprasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadocomprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
