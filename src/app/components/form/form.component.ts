import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, //important for binding
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  myForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    // email: ['', [Validators.required, Validators.email]],
    // Add more form controls as needed...
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // Add more form controls as needed...
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Process form data here
      console.log(this.myForm.value);
    }
  }

}
