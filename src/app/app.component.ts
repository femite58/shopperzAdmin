import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Shopperz';

  ngOnInit(): void {
    document.documentElement.style.setProperty(
      '--scrollBW',
      `${window.innerWidth - document.body.clientWidth}px`
    );
  }
}
