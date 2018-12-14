import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RepositoryService } from './../services/repository.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent implements OnInit {

  public createForm : FormGroup;

  constructor( private repository : RepositoryService ) { }

  ngOnInit() {
    this.createForm = new FormGroup({
      formidNo: new FormControl('',[Validators.required]),
      formname: new FormControl('',[Validators.required]),
      formemail: new FormControl('',[Validators.required]),
    })
  }

  public validateControl(controlName: string) {
    if (this.createForm.controls[controlName].invalid && this.createForm.controls[controlName].touched)
      return true;

    return false;
  }
  public hasError(controlName: string, errorName: string) {
    if (this.createForm.controls[controlName].hasError(errorName))
      return true;

    return false;
  }

  public createFormData(value){
    console.log(value);
  }

}
