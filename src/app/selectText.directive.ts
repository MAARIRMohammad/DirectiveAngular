import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({selector: 'label [selectText]'})

export class SelectTextDirective {
  @Input() color: string;
  @HostListener('mouseenter', ['$event.target'])onMouseEnter(elem) {
    console.log('element : ' + elem);
    this.updateColor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.updateColor(null);
  }

  constructor(private elem: ElementRef) {}
  private updateColor(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }
}
