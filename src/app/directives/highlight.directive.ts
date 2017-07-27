import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
    selector: '[tileHighlight]'
})
export class tileHighlightDirective {
    @Input() isCheckedIn: boolean;
    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('#EEE', '#607d8b', 'pointer');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(backgroundColor: string, color = '#fff', cursor = 'auto') {
        this.el.nativeElement.style.backgroundColor = backgroundColor;
        this.el.nativeElement.style.color = color;
        this.el.nativeElement.style.cursor = cursor;
    }
}