import { Directive, 
  ElementRef, 
  HostBinding, 
  HostListener,
   Input, 
   OnInit, 
   Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBettterDirective]'
})
export class BettterDirectiveDirective implements OnInit {
  @Input() defaultColor:string;
  @Input('appBettterDirective') highlightColor:string;
   @HostBinding('style.background')bgColor:string;
  constructor(private element : ElementRef,private renderer:Renderer2) { }
  
  ngOnInit(){
    // this.renderer.setStyle(this.element.nativeElement,'background-color','red');
    //this.defaultColor="transparent";
    this.bgColor=this.defaultColor;
  }
  @HostListener('mouseenter') mousehover(eventData : Event){
    //  this.renderer.setStyle(this.element.nativeElement,'background-color','red');
    //  this.bgColor="red";
    this.bgColor = this.highlightColor;


  }
   @HostListener('mouseleave') mouseleft(eventData : Event){
    // this.renderer.setStyle(this.element.nativeElement,'background-color','transparent');
     //this.bgColor="transparent";
     this.bgColor = this.defaultColor;

  }
}
