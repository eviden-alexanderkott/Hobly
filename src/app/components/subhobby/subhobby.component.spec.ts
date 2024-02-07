import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubhobbyComponent } from './subhobby.component';

describe('SubhobbyComponent', () => {
  let component: SubhobbyComponent;
  let fixture: ComponentFixture<SubhobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubhobbyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubhobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
