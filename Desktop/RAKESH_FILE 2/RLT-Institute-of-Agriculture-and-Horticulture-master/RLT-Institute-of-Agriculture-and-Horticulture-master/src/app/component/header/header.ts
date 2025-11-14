import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MobileHeader } from '../mobile-header/mobile-header';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive,MobileHeader],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
