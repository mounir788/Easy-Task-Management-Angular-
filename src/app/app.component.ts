import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
// import { HeaderComponent } from './components/header/header.component';
// import { UserComponent } from './components/user/user.component';
// import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string

  get selectedUser() {
    return this.users.find(u => u.id === this.selectedUserId)
  }

  onSelectUser(userId: string) {
    this.selectedUserId = userId
  }
}
