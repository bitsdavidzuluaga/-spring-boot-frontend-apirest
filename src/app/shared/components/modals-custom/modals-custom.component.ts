import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modals-custom',
  templateUrl: './modals-custom.component.html',
  styleUrls: ['./modals-custom.component.scss']
})
export class ModalsCustomComponent implements OnInit {

  @Output() public view = new EventEmitter();

  public viewModal = true;

  @HostListener('click', ['$event'])
  onClick(event: any) {
    // get the clicked element
    if (event.target.id === 'modal') {
      this.closeModal();
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  private closeModal(): void {
    this.viewModal = false;
    this.view.emit(false);
  }

}
