/// <reference types="@types/jasmine" />

// NOTE: the line above helps VSCode to understand that `describe()`, `expect()` and other global functions are all coming from the Jasmine framework.
// I noticed that putting this reference even in a single file, helps VSCode to identify Jasmine as the testing framework for all spec files in the workspace.
// Without the line above, VSCode assumes that `describe()` comes from Mocha and `expect()` from Chai...
// This confusion probably comes from the fact that Cypress (which is installed in the workspace) uses Chai and not Jasmine.
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
