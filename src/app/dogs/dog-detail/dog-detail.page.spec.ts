import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogDetailPage } from './dog-detail.page';

describe('DogDetailPage', () => {
  let component: DogDetailPage;
  let fixture: ComponentFixture<DogDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DogDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
