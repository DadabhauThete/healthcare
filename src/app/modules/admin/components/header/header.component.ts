import { AuthService } from './../../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    $(function () {
      // Sidebar toggle behavior
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content, #topnav').toggleClass('active');
      });
    });
  }
  logout(): void {
    this.auth.logout();
  }
}
