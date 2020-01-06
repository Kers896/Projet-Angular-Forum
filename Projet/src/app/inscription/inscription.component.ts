import { Component, OnInit, ElementRef, ViewChild , ChangeDetectionStrategy, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, NgForm, FormGroupDirective, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

import { RequestService } from '../request.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throttleTime, debounceTime } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}






@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

    @ViewChild('fileInput', { read: ElementRef, static: false }) private fileInput: ElementRef;

    formulaire: FormGroup;

  constructor(
    private requestService: RequestService,
    //private form: FormBuilder
  ) {}
    pseudo_form = ' ';
    email_form = ' ';
    mdp_form = ' ';




  ngOnInit() {
  }
/*
  this.httpClient.post('http://localhost:3000//inscription', {
      pseudo: this.formulaireget('pseudo').value,
      email: this.formulaire.get('email').value,
*/

}
