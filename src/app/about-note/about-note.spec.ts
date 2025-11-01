import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNote } from './about-note';

describe('AboutNote', () => {
  let component: AboutNote;
  let fixture: ComponentFixture<AboutNote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutNote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutNote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
