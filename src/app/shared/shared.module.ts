import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimeNGModule } from './utils/primeng/primeng.module';
import { AnimatedButtonComponent } from './ui/animated-button/animated-button.component';
import { DynamicFormService } from './ui/dynamic-form/dynamic-form.service';
import { DynamicFormComponent } from './ui/dynamic-form/dynamic-form.component';
import { FileUploadInputComponent } from './ui/file-upload-input/file-upload-input.component';
import { InfoIconComponent } from './ui/info-icon/info-icon.component';
import { ListComponent } from './ui/list/list.component';
import { ListService } from './ui/list/list.service';
import { ColumnsManagementDialogComponent } from './ui/table/columns-management-dialog/columns-management-dialog.component';
import { EditionDialogComponent } from './ui/table/edition-dialog/edition-dialog.component';
import { TableComponent } from './ui/table/table.component';
import { DynamicFormControlComponent } from './ui/dynamic-form-control/dynamic-form-control.component';
import { TableToolbarComponent } from './ui/table/table-toolbar/table-toolbar.component';
import { TableFilterCellComponent } from './ui/table/table-filter-cell/table-filter-cell.component';
import { TableActionsCellComponent } from './ui/table/table-actions-cell/table-actions-cell.component';
import { RegistrationComponent } from './ui/registration/registration.component';
import { RegistrationDialogComponent } from './ui/registration-dialog/registration-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ItemDialogComponent } from './ui/item-dialog/item-dialog.component';
import { ItemComponent } from './ui/item/item.component';
import {MatIconModule} from "@angular/material/icon";
import { ShareItemDialogComponent } from './ui/share-item-dialog/share-item-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import {MatBadgeModule} from "@angular/material/badge";
import { SharedUserListComponent } from './ui/shared-user-list/shared-user-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    InfoIconComponent,
    AnimatedButtonComponent,
    ListComponent,
    FileUploadInputComponent,
    DynamicFormComponent,
    TableComponent,
    EditionDialogComponent,
    ColumnsManagementDialogComponent,
    DynamicFormControlComponent,
    TableToolbarComponent,
    TableFilterCellComponent,
    TableActionsCellComponent,
    RegistrationComponent,
    RegistrationDialogComponent,
    ItemDialogComponent,
    ItemComponent,
    ShareItemDialogComponent,
    SharedUserListComponent
  ],
  providers: [
    DynamicFormService,
    ListService
  ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        PrimeNGModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatIconModule,
        MatSelectModule,
        MatBadgeModule,
        MatCardModule,
        MatListModule
    ],
  exports: [
    CommonModule,
    InfoIconComponent,
    AnimatedButtonComponent,
    ListComponent,
    ReactiveFormsModule,
    FormsModule,
    FileUploadInputComponent,
    PrimeNGModule,
    DynamicFormComponent,
    TableComponent,
    RegistrationComponent,
    RegistrationDialogComponent,
    ItemComponent
  ]
})
export class SharedModule { }
