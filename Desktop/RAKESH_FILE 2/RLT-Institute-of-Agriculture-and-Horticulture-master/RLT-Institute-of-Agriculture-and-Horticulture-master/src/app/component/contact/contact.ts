import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink,CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
userName: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userName = this.route.snapshot.queryParamMap.get('name');
  }
}
