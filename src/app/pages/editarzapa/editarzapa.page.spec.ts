import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarzapaPage } from './editarzapa.page';

describe('EditarzapaPage', () => {
  let component: EditarzapaPage;
  let fixture: ComponentFixture<EditarzapaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarzapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
