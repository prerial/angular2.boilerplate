import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { routing, appRoutingProviders } from './app.routes';

import { AppComponent }        from './app.component';
import { AlertComponent}        from './alert.component';
import {ChildSelectComponent} from './child-select.component';

import ComponentOne from './component-one/component-one';
import {IfExampleComponent} from './component-one/if-example.component';
import {ForExampleComponent} from './component-one/for-example.component';

import {Tab3Component} from './component-one/switch-example.component';
import {TabComponent} from './component-one/switch-example.component';
import {TabContentComponent} from './component-one/switch-example.component';
import {SwitchExampleComponent} from './component-one/switch-example.component';
import {MultipleStructuralComponent} from './component-one/multiple-example.component';

import ComponentTwo from './component-two/component-two';
import {ViewChildComponent} from './component-two/view-child.component';
import {ViewChildrenComponent} from './component-two/view-children.component';
import {HelloListComponent} from './component-two/hello-list.component';
import {HelloComponent} from './component-two/hello.component';
import {HelloNoneComponent} from './component-two/hello-none.component';
import {HelloEmulatedComponent} from './component-two/hello-emulated.component';
import {HelloNativeComponent} from './component-two/hello-native.component';
import {ElementRefComponent} from './component-two/element-ref.component';

import ComponentThree from './component-three/component-three';
import {ObserveBasicComponent} from './component-three/observe-basic.component';

import ComponentFour from './component-four/component-four';
import { ChatWidget, AuthService, AuthWidget, ChatSocket } from './shared/index';
import {InjectOneComponent} from './component-four/inject-one.component';
import {RandomComponent} from './component-four/random.component';
import {ApiKeyComponent} from './component-four/api-key.component';
import { EmailModule, apiConfig as emailApiConfig } from './email/index';
import { LoggerModule, apiConfig as loggerApiConfig } from './logger/index';
import { EmailService } from './email/index';
import { LoggerService } from './logger/index';

import ComponentFive from './component-five/component-five';
import {SearcArtistComponent} from './component-five/search-artist.component';
import { SearchService } from './services/search.service';

import ComponentSix from './component-six/component-six';
import ActivateGuard from './component-six/activate-guard';
import DeactivateGuard from './component-six/deactivate-guard';
import {ChildRoutes} from './component-six/child-routes';
import ChildOne from './component-six/child-one';
import ChildTwo from './component-six/child-two';
//import ComponentAux from './component-six/component-aux';

import ComponentSeven from './component-seven/component-seven';

const randomFactory = () => { return Math.random(); };

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    ChildSelectComponent,
    AlertComponent,
    ComponentOne,
    ForExampleComponent,
    IfExampleComponent,
    TabContentComponent,
    TabComponent,
    Tab3Component,
    SwitchExampleComponent,
    MultipleStructuralComponent,
    ComponentTwo,
    ViewChildComponent,
    ViewChildrenComponent,
    HelloListComponent,
    HelloComponent,
    HelloNoneComponent,
    HelloEmulatedComponent,
    HelloNativeComponent,
    ElementRefComponent,
    ComponentThree,
    ObserveBasicComponent,
    ComponentFour,
    InjectOneComponent,
    RandomComponent,
    ApiKeyComponent,
    ComponentFive,
    SearcArtistComponent,
    ComponentSix,
    ChildRoutes,
    ChildOne,
    ChildTwo,
    ComponentSeven,
//    ComponentAux
],
  providers: [
    appRoutingProviders,
    ChatWidget,
    AuthService,
    AuthWidget,
    ChatSocket,
    EmailService,
    LoggerService,
    { provide: 'Random', useFactory: randomFactory },
    { provide: emailApiConfig, useValue: { apiKey: 'email-key', context: 'registration' } },
    { provide: loggerApiConfig, useValue: { apiKey: 'logger-key' } },
    ActivateGuard,
    DeactivateGuard,

    SearchService
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule { }
