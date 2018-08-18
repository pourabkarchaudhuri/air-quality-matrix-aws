import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'sub',
        icon: 'ti-home',
        children: [
          {
            state: 'default',
            name: 'Home'
          }
        ]
      }//,
      // {
      //   state: 'widget',
      //   short_label: 'W',
      //   name: 'Widget',
      //   type: 'sub',
      //   icon: 'ti-view-grid',
      //   badge: [
      //     {
      //       type: 'danger',
      //       value: '100+'
      //     }
      //   ],
      //   children: [
      //     {
      //       state: 'static',
      //       name: 'Widget Statistic'
      //     }
      //     // },
      //     // {
      //     //   state: 'data',
      //     //   name: 'Widget Data'
      //     // },
      //     // {
      //     //   state: 'chart',
      //     //   name: 'Widget Chart'
      //     // },
      //     // {
      //     //   state: 'advanced',
      //     //   name: 'Widget Chart Advcance'
      //     // }
      //   ]
      // }
    ],
  },
  {
    label: 'Support',
    main: [/*
      {
        state: 'documentation',
        short_label: 'D',
        name: 'Documentation',
        external: 'http://html.codedthemes.com/guru-able/doc-angular-4',
        type: 'external',
        icon: 'ti-file',
        target: true
      },*/
      // {
      //   state: 'submit-issue',
      //   short_label: 'S',
      //   external: 'https://goo.gl/forms/KNNd8iS5lmgBRUNz1',
      //   name: 'Submit Issue',
      //   type: 'external',
      //   icon: 'ti-layout-list-post',
      //   target: true
      // },
      {
        state: 'api-console',
        short_label: 'A',
        external: 'https://app.swaggerhub.com/apis/G186/ErospaceAPI/1.0',
        name: 'API Console',
        type: 'external',
        icon: 'ti-plug',
        target: true
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
