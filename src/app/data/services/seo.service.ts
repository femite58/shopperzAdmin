import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root',
})
export class SeoService {
    constructor(private meta: Meta, private title: Title) {}

    setTitle(title) {
        this.title.setTitle(`${title} | Pavypay`);
    }

    setDesc(desc) {
        this.meta.updateTag({
            name: 'description',
            content: desc,
        });
    }
}
