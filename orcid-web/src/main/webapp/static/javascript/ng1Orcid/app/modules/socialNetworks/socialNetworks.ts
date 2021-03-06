import * as angular 
    from 'angular';

import { Directive, NgModule } 
    from '@angular/core';

import { downgradeComponent, UpgradeModule } 
    from '@angular/upgrade/static';

//User generated
import { SocialNetworksComponent } 
    from './socialNetworks.component.ts';

import { CommonNg2Module }
    from './../common/common.ts';

// This is the Angular 1 part of the module
export const SocialNetworksModule = angular.module(
    'SocialNetworksModule', 
    []
);

// This is the Angular 2 part of the module
@NgModule(
    {
        imports: [
            CommonNg2Module
        ],
        declarations: [ 
            SocialNetworksComponent
        ],
        entryComponents: [ 
            SocialNetworksComponent 
        ],
        providers: [
            
        ]
    }
)
export class SocialNetworksNg2Module {}

// components migrated to angular 2 should be downgraded here
//Must convert as much as possible of our code to directives
SocialNetworksModule.directive(
    'socialNetworksNg2', 
    <any>downgradeComponent(
        {
            component: SocialNetworksComponent,
        }
    )
);
