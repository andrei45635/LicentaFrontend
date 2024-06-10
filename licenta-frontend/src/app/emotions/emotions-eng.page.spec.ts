import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EmotionsEngPage } from './emotions-eng.page';

describe('Tab3Page', () => {
  let component: EmotionsEngPage;
  let fixture: ComponentFixture<EmotionsEngPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmotionsEngPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EmotionsEngPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
