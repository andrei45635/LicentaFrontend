import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SimilarityPage } from './similarity.page';

describe('Tab1Page', () => {
  let component: SimilarityPage;
  let fixture: ComponentFixture<SimilarityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimilarityPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SimilarityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
