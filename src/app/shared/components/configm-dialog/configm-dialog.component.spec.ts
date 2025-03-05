import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigmDialogComponent } from './configm-dialog.component';

describe('ConfigmDialogComponent', () => {
  let component: ConfigmDialogComponent;
  let fixture: ComponentFixture<ConfigmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigmDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
