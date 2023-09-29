import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumMainComponent } from './components/forum/forum-main/forum-main.component';
import { PostComponent } from './components/forum/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";
import { ForumListComponent } from './components/forum/forum-list/forum-list.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ResponseComponent } from './components/forum/post/response/response.component';
import { CreatePostComponent } from './components/form/create-post/create-post.component';
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { NoUnderscorePipe } from './pipes/no-underscore.pipe';
import { LoginComponent } from './components/form/login/login.component';
import { RegisterComponent } from './components/form/register/register.component';
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatMenuModule } from "@angular/material/menu";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { CrateResponseComponent } from './components/form/crate-response/crate-response.component';
import { MatDividerModule } from "@angular/material/divider";
import { PageTitleComponent } from './components/layout/page-title/page-title.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumMainComponent,
    PostComponent,
    ForumListComponent,
    HeaderComponent,
    ResponseComponent,
    CreatePostComponent,
    NoUnderscorePipe,
    LoginComponent,
    RegisterComponent,
    CrateResponseComponent,
    PageTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
