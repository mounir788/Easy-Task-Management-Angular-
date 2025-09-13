import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { TasksService } from '../tasks.service';
// import { FormsModule } from '@angular/forms';
// import { Task } from '../task/task.module';

@Component({
  selector: 'app-new-task',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<Task>();
  @Input({ required: true }) userId!: string;
  title = signal('');
  summary = signal('');
  dueDate = signal('');
  private tasksServices = inject(TasksService)

  onCancel() {
    this.close.emit();
  }

  onCreateTask() {
    this.tasksServices.addTask({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate()
    })
    this.close.emit();
  }
}
