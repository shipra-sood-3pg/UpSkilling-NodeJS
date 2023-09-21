import { outputAst } from "@angular/compiler";
import { Component, EventEmitter, Input, OnChanges,Output } from "@angular/core";

@Component({
    selector: 'module-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() complexity: number = 0;
    cropWidth: number = 75;
    @Output() complexityClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void{
        this.cropWidth = (this.complexity/5) * 75;
    }

    onClick(): void{
        this.complexityClicked.emit(`Rating Clicked : ${this.complexity}`);
    }
}