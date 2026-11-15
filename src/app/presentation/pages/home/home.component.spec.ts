import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { appConfig } from '../../../app.config';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: appConfig.providers,
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the profile, skills, technologies, and projects', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Sebastian Henao Gamboa');
    expect(compiled.querySelectorAll('#perfil ul li').length).toBeGreaterThan(0);
    expect(compiled.querySelectorAll('app-card-proyecto')).toHaveLength(5);
  });
});
