import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleInDevelopmentComponent } from './module-in-development.component';

describe('ModuleInDevelopmentComponent', () => {
  let component: ModuleInDevelopmentComponent;
  let fixture: ComponentFixture<ModuleInDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleInDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleInDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
