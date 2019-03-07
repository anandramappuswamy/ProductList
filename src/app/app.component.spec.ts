import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list-component/product-list-component';
import {ProductComponent} from './Products/product-component/product.component';
import {HttpClientModule} from '@angular/common/http'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProductListComponent,
        ProductComponent
      ],
      imports: [       
        HttpClientModule
     ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
