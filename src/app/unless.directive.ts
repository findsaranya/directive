import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

 @Input()set unless(value){

 }
  constructor(private template:TemplateRef<any>,private viewContainerRef:ViewContainerRef) { }

}
