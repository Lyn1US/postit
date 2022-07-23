import { Component,} from '@angular/core';
import { Router } from '@angular/router';
import { LoginPayload } from 'src/app/models/payload/loginPayload';
import { HelperService } from 'src/app/services/helper.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss' ],
})
export class LoginPage  {

  //[class.register-container]="returnCurrentState()"

  // *ngIf="!isRegisterActive"

  constructor(
      private readonly helper: HelperService,
      private readonly router: Router,
      
    ){  }

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  }

  public registerPayload = {
    name: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  }

  public isLoading: boolean = false;
  
  public async login(): Promise<void> {

    if(!this.canLogin()) return;

    this.isLoading = true;

    //toast
    await this.helper.showToast('Carregando...');

    //alert

    //await this.helper.showAlert('Primeiro teste', 'OK');

    
      await this.helper.showAlert('Primeiro teste', [
      
     {
       text: 'Ok',
       handler: ()=> { console.log('Passando pelo alert') }
      }
      ]);
     
    //console.log(this.loginPayload);

    await this.router.navigate(['/home']);
  }

  public canLogin(): boolean {

    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    const emailIsValid = regex.test(this.loginPayload.email);

    if (emailIsValid && this.loginPayload.password.length >= 6) return true

    return false;
  }

  public logoClick($event: boolean): void {
    console.log($event)
  }

  //

  public registring: boolean = false;

  public goToRegister(): void {

    this.registring = true;

  } 

  public backToLogin(): void {
    this.registring = false;
  }

  public isRegistring(): boolean {

    if (this.registring == true) return true;

    return false;
  }

}
