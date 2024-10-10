import { Usuarios } from './usuarios';
import { DatosDireccion } from './usuarios';

describe('Usuarios', () => {
  it('should create an instance', () => {
    expect(new Usuarios()).toBeTruthy();
  });
});

describe('DatosDireccion', () => {
  it('should create an instance', () => {
    expect(new DatosDireccion()).toBeTruthy();
  });
});
