import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarzapaPage } from './agregarzapa.page';

describe('AgregarzapaPage', () => {
  let component: AgregarzapaPage;
  let fixture: ComponentFixture<AgregarzapaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarzapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
