//Import all the angular components

import { NgForOf, NgIf } 
    from '@angular/common'; 

import { AfterViewInit, Component, OnDestroy, OnInit } 
    from '@angular/core';

import { Observable } 
    from 'rxjs/Rx';

import { Subject } 
    from 'rxjs/Subject';

import { Subscription }
    from 'rxjs/Subscription';

import { AccountService } 
    from '../../shared/account.service.ts';

import { ModalService } 
    from '../../shared/modal.service.ts'; 


@Component({
    selector: 'deactivate-account-ng2',
    template:  scriptTmpl("deactivate-account-ng2-template")
})
export class DeactivateAccountComponent implements AfterViewInit, OnDestroy, OnInit {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
   
    primaryEmail: string;

    constructor(
        private accountService: AccountService,
        private modalService: ModalService
    ) {
        this.primaryEmail = "";
    }

    sendDeactivateEmail(): void {

        this.modalService.notifyOther({action:'open', moduleId: 'modalDeactivateAccountMessage'});

        
        this.accountService.sendDeactivateEmail()
        .takeUntil(this.ngUnsubscribe)
        .subscribe(
            data => {
                this.modalService.notifyOther({action:'open', moduleId: 'modalDeactivateAccountMessage'});
            },
            error => {
                //console.log('setformDataError', error);
            } 
        );

    };

    //Default init functions provided by Angular Core
    ngAfterViewInit() {
        //Fire functions AFTER the view inited. Useful when DOM is required or access children directives
    };

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };

    ngOnInit() {
    }; 
}