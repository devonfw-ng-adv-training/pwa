import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {NavigationComponent} from './navigation/navigation.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {BookService} from '../book/book.service';
import {SwPushSubBtnComponent} from './sw-push-sub-btn/sw-push-sub-btn.component';
import {IfInBrowserDirective} from './if-in-browser/if-in-browser.directive';
import {SubscriptionService} from './subscription.service';

@NgModule({
  imports: [
    CommonModule, RouterModule,
    MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule, MatListModule, MatProgressSpinnerModule
  ],
  declarations: [ToolbarComponent, NavigationComponent, HomeComponent, SwPushSubBtnComponent, IfInBrowserDirective],
  exports: [
    CommonModule,
    ToolbarComponent, NavigationComponent,
    MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule, MatCardModule]
})
export class SharedModule {
  /**
   * Use this method in your root module to provide singleton services from ALL modules including this shared one.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      // put here providers of singleton services from ALL modules including this shared one
      providers: [BookService, SubscriptionService]
    };
  }
}
