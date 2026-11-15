import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    fixture.componentRef.setInput('nombre', 'Ada Lovelace');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the name and the portfolio navigation links', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.brand')?.textContent).toContain('Ada Lovelace');
    expect(compiled.querySelectorAll('nav a')).toHaveLength(2);
    expect(compiled.querySelector('nav')?.getAttribute('aria-label')).toBe('Principal');
  });
});
