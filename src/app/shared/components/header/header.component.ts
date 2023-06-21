import { isPlatformBrowser } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    PLATFORM_ID,
    ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
    auth;
    showSearch = false;
    scrolled = false;
    @Input() whiteBg = true;

    dropOpened = false;

    @ViewChild('nav') nav: ElementRef;

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        // let s = '([])}';
        // console.log(this.validate(s));
        this.getAuth();
        this.whiteBg = this.router.url == '/' ? false : true;
    }

    // validate(s: string) {
    //     // let s = '([{]})';
    //     let compIn = [];
    //     for (let i = 0; i < s.length; i++) {
    //         if (s[i].match(/\(|\[|\{/)) {
    //             compIn = compI(s[i], i);
    //             if (compIn[0] < 0 || !compIn[1]) return false;
    //             if (compIn[0] != i + 1) {
    //                 if ((compIn[0] - i - 1) % 2 != 0) return false;
    //             }
    //         } else {
    //             continue;
    //         }
    //     }
    //     return true;
    //     function compI(c: string, i) {
    //         switch (c) {
    //             case '(':
    //                 return [
    //                     s.indexOf(')', i),
    //                     s.match(/\(/g).length == s.match(/\)/g).length,
    //                 ];
    //             case '[':
    //                 return [
    //                     s.indexOf(']', i),
    //                     s.match(/\[/g).length == s.match(/\]/g).length,
    //                 ];
    //             default:
    //                 return [
    //                     s.indexOf('}', i),
    //                     s.match(/\{/g).length == s.match(/\}/g).length,
    //                 ];
    //         }
    //     }
    // }

    ngOnDestroy(): void {
        if (isPlatformBrowser(this.platformId)) {
            window.removeEventListener('scroll', this.scrollEv);
        }
    }

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            window.addEventListener('scroll', this.scrollEv);
        }
    }

    scrollEv = () => {
        let top = document.scrollingElement.scrollTop;
        if (top > 100) {
            this.scrolled = true;
        } else {
            this.scrolled = false;
        }
    };

    private getAuth() {
        this.authService.user.subscribe((auth) => {
            this.auth = auth;
        });
    }

    logout() {
        this.authService.logout();
    }
}
