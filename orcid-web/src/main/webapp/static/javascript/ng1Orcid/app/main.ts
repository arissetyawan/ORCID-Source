//This is only to bootstrap

import 'reflect-metadata';
import 'zone.js';

import { Component, NgModule } 
	from '@angular/core';

import { BrowserModule } 
	from "@angular/platform-browser";

import { platformBrowserDynamic } 
	from '@angular/platform-browser-dynamic';

import { UpgradeModule } 
	from '@angular/upgrade/static';

import { orcidApp } from './modules/ng1_app.ts';
import { Ng2AppModule } from './modules/ng2_app.ts';

import { enableProdMode } from '@angular/core';

if (NODE_ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(Ng2AppModule).then(
    platformRef => {
        const upgrade = (<any>platformRef.instance).upgrade; 

        // bootstrap angular1
        upgrade.bootstrap(document.body, [orcidApp.name]);
    }
);
