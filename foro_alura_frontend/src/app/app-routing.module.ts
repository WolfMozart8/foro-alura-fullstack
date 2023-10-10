import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumMainComponent } from './components/forum/forum-main/forum-main.component';
import { PostComponent } from './components/forum/post/post.component';
import { ForumListComponent } from './components/forum/forum-list/forum-list.component';
import { CreatePostComponent } from './components/form/create-post/create-post.component';
import { LoginComponent } from './components/form/login/login.component';
import { RegisterComponent } from './components/form/register/register.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';

const routes: Routes = [
  {path: "", component: ForumMainComponent},
  {path: "posts/new", component: CreatePostComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "posts/:id", component: PostComponent},
  {path: "user/:id", component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
