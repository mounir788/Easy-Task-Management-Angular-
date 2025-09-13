import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { SharedModule } from "./ui/shared.module";
import { TasksModule } from "./components/tasks/tasks.module";
// import { TasksComponent } from "./components/tasks/tasks.component";
// import { CardComponent } from "./ui/card/card.component";
// import { TaskComponent } from "./components/tasks/task/task.component";
// import { NewTaskComponent } from "./components/tasks/new-task/new-task.component";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule { }