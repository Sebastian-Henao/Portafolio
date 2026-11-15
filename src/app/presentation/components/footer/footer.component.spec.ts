import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    fixture.componentRef.setInput('nombre', 'Ada Lovelace');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the current year and the provided name', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain(String(new Date().getFullYear()));
    expect(compiled.textContent).toContain('Ada Lovelace');
  });
});
