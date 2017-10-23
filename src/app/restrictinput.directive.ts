import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[restrict-input]'
})
export class RestrictInputDirective {
  public type;
  public regexMap = {
    integer: '/^([^0-9]*)$/',
    float: '^[+-]?([0-9]*[.])?[0-9]+$',
    words: /[^A-zА-ЯЁ]/i,
    numbers: /[^0-9]/i,
    point25: '^\-?[0-9]*(?:\\.25|\\.50|\\.75|)$',
    percent: /^[1-9][0-9]?$|^100$/

    ///^(100|[0-9])%?$/
    //percent: '^[1-9][0-9]?$|^100$'
  };
  private regexp = null;
  constructor(public model: NgControl, private el: ElementRef) {}

  @Input('restrict-input')
  public set defineInputType(type: string) {
    this.type = type;
  }

  @HostListener('input', ['$event']) input(event) {
    let value = this.el.nativeElement.value;

    if (value) {
      this.model.valueAccessor.writeValue(value.replace(this.regexMap[this.type], ''));
    }
  }
}