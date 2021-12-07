export interface IEvent {
  event: 'click' | 'mouse';
  command: (event?: any) => void;
}

export interface IMenuItem {
  id?: string;
  style?: any;
  url?: string;
  icon?: string;
  label?: string;
  title?: string;
  visible?: boolean;
  disabled?: boolean;
  items?: IMenuItem[];
  styleClass?: string;
  events?: IEvent[];
  type?: 'button' | 'label' | 'checkbox';
}

export class MenuItem implements IMenuItem {
  id?: string;
  style?: any;
  url?: string;
  icon?: string;
  label?: string;
  title?: string;
  visible?: boolean;
  disabled?: boolean;
  items?: IMenuItem[];
  styleClass?: string;
  events?: IEvent[];
  type?: 'button' | 'label' | 'checkbox';
  // public user?: User;
  constructor(menu: IMenuItem) {
    this.id = menu.id;
    this.style = menu.style;
    this.url = menu.url;
    this.icon = menu.icon;
    this.label = menu.label;
    this.title = menu.title;
    this.visible = menu.visible;
    this.disabled = menu.disabled;
    this.items = menu.items;
    this.disabled = menu.disabled;
    this.events = menu.events;
    this.type = menu.type;
  }
}
