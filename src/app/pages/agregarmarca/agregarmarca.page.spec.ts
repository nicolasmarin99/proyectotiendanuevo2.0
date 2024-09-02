import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarmarcaPage } from './agregarmarca.page';

describe('AgregarmarcaPage', () => {
  let component: AgregarmarcaPage;
  let fixture: ComponentFixture<AgregarmarcaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarmarcaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
