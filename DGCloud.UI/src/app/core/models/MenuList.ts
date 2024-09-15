export class NavModules {
  modulesName: string;
  navRootComponents: NavRootComponent[];

  constructor(modulesName: string, navRootComponents: NavRootComponent[]) {
    this.modulesName = modulesName;
    this.navRootComponents = navRootComponents;
  }
}
export class NavRootComponent {
  label: string;
  path?: string;
  icon?: string;
  menuLists?: MenuList[];

  constructor(label: string) {
    this.label = label;
  }
}

export class MenuList {
  label: string;
  path: string;

  constructor(label: string, path: string) {
    this.label = label;
    this.path = path;
  }
}
