import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UserDetails } from "../../../new-user/create-account/create-account.component";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  @Output() delete: EventEmitter<void> = new EventEmitter();

  @Input() user: UserDetails;
  @Input() isSelected: boolean;
  constructor() {}

  ngOnInit(): void {}

  deleteEntry(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.delete.emit();
  }
}
