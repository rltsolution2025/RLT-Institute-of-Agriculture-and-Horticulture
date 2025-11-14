import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-mobile-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './mobile-header.html',
  styleUrl: './mobile-header.css'
})
export class MobileHeader {
  isMenuOpen = false;
  dropdownStates: { [key: string]: boolean } = {};

  menuItems = [
    {
      key: 'p.g-diploma',
      label: 'P.G. Diploma',
      children: [
        { label: 'P.G. Diploma in Agriculture Management', link: '/diploma-in-agriculture-management' },
        { label: 'P.G. Diploma in Horticultural Management', link: '/diploma-in-horticultural-management' },
        { label: 'P.G. Diploma in Plantation Management', link: '/diploma-in-plantation-management' }
      ]
    },
    {
      key: 'u.g-diploma',
      label: 'U.G. Diploma',
      children: [
        { label: 'Diploma in Agriculture', link: '/diploma-in-agriculture' },
        { label: 'Diploma in Horticultural', link: '/diploma-in-horticultural' },
        { label: 'Diploma in Farm Management', link: '/diploma-in-farm-management' },
        { label: 'Diploma in Fodder & Feed Management', link: '/diploma-in-fodder-feed-management' },
        { label: 'Diploma in Vegetable Production', link: '/diploma-in-vegetable-production' },
        { label: 'Diploma in Seed Management', link: '/diploma-in-seed-management' },
      ]
    },
    {
      key: 'Certificated-courses',
      label: 'Certificate Courses',
      children: [
        { label: 'Certificate Course in Mushroom Production', link: '/certificate-course-in-mushroom-production' },
        { label: 'Certificate Course in Organic Farming', link: '/certificate-course-in-organic-farming' },
        { label: 'Certificate Course in Bio Fertilizer Production', link: '/certificate-course-in-bio-fertilizer-production' },
        { label: 'Certificate Course in Farm Management', link: '/certificate-course-in-farm-management' },
        { label: 'Certificate Course in Horticulture', link: '/certificate-courses-in-horticulture' },
        { label: 'Certificate Course in Fodder & Feed Management', link: '/certificate-courses-in-fodder-feed-management' },
        { label: 'Certificate Course in Poultry Farming', link: '/certificate-courses-in-poultry-farming' },
        { label: 'Certificate Course in Dairy Farming', link: '/certificate-courses-in-dairy-farming' }
      ]
    },
    
  ];

  constructor(private router: Router) { }

  toggleMenu(event?: Event) {
    if (event) event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.dropdownStates = {};
  }

  toggleDropdown(key: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();

    // close all others
    Object.keys(this.dropdownStates).forEach(k => {
      if (k !== key) {
        this.dropdownStates[k] = false;
      }
    });

    // toggle the clicked one
    this.dropdownStates[key] = !this.dropdownStates[key];
  }

  isDropdownOpen(key: string): boolean {
    return !!this.dropdownStates[key];
  }

  navigateAndClose() {
    this.closeMenu();
  }
}
