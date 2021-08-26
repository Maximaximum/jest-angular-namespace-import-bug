import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import * as Exported from './exported';

@Component({
  selector: 'app-test',
  template: 'template',
})
export class TestComponent {
  constructor(private exported: Exported.Exported) {}
}

describe('TestComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TestComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
