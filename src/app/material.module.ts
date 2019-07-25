import {
  MatButtonModule, MatCheckboxModule, MatFormField, MatInputModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule
  ],
})
export class MaterialModule { }
