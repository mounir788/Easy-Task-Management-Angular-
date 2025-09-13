import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.module';
// import { CardComponent } from "../../ui/card/card.component";


@Component({
  selector: 'app-user',
  // standalone: true,
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Old Way
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }


  // New Way
  // user = input.required<User>();
  // select = output<string>();
  // imagePath = computed(() => `assets/users/${this.user().avatar}`);


  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
