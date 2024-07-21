import { JsonPipe } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'in-output',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css',
})
export class InOutput {
  @Input() content: string;
}
