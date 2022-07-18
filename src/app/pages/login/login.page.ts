import { Component, } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { LoginPayload } from 'src/app/models/payload/loginPayload';
import { HelperService } from 'src/app/services/helper.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(
      private readonly helper: HelperService,
      private animationController: AnimationController,
    ){ 
      
    }

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
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

  public isRegisterActive: boolean = false;

  public goToRegister(): void {
    this.isRegisterActive = true;
  
  }

  public backToLogin(): void {
    this.isRegisterActive = false;
  }

  public returnCurrentState() {
    return this.isRegisterActive;
  }
}
