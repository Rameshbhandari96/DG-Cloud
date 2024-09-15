import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxModalComponent } from './search-box-modal.component';

describe('SearchBoxModalComponent', () => {
  let component: SearchBoxModalComponent;
  let fixture: ComponentFixture<SearchBoxModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBoxModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBoxModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
