import { Component  } from '@angular/core';
import { CommonModule, LowerCasePipe } from '@angular/common';
import { NavModules } from '../../../core/models/MenuList';
import { RouterLink } from '@angular/router';
import { ReplacePipe } from '../../../reusable/pipes/replace.pipe';

@Component({
  selector: 'app-vertical-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink,LowerCasePipe,ReplacePipe],
  templateUrl: './vertical-navbar.component.html',
  styleUrl: './vertical-navbar.component.css'
})
export class VerticalNavbarComponent  {
  navBarList: NavModules[] = [
    {
      "modulesName": "Pages",
      "navRootComponents": [
        {
          "label": "Events",
          "menuLists": [
            {
              "label": "Create Events",
              "path": "Event"
            },
            {
              "label": "Reports",
              "path": "/reports"
            }
          ]
        },
        {
          "label": "User Management",
          "path": "/users",
          "icon": "user-management-icon",
          "menuLists": [
            {
              "label": "Users",
              "path": "/users/list"
            },
            {
              "label": "Roles",
              "path": "/users/roles"
            }
          ]
        }
      ]
    },
    {
      "modulesName": "Settings",
      "navRootComponents": [
        {
          "label": "General Settings",
          "path": "/settings",
          "icon": "settings-icon",
          "menuLists": []
        }
      ]
    },
    {
      "modulesName": "Help",
      "navRootComponents": [
        {
          "label": "Help Center",
          "path": "/help",
          "icon": "help-icon",
          "menuLists": [
            {
              "label": "FAQ",
              "path": "/help/faq"
            },
            {
              "label": "Contact Support",
              "path": "/help/support"
            }
          ]
        }
      ]
    }
  ]
}
