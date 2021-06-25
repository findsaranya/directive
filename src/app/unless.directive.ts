import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

 @Input()set appUnless(value:boolean){
       if(value){
          this.viewContainerRef.createEmbeddedView(this.template);
       }else{
          this.viewContainerRef.clear();
       }
 }
  constructor(private template:TemplateRef<any>,private viewContainerRef:ViewContainerRef) { }

}
