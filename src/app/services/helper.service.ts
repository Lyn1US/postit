import { Injectable } from "@angular/core";
import { AlertController, ToastController, AlertButton } from "@ionic/angular";

@Injectable({
    providedIn: 'root',
})

/**
 * Serviço ajuda a enviar feedbacks para o usuário
 */
export class HelperService {

    constructor(
        private readonly toastController: ToastController,
        private readonly alertController: AlertController,
    ) { }
    //variaveis
    //funções

    public async showToast(message: string, duration: number = 2000): Promise<void> {
        const toast =  await this.toastController.create({
            message: message,
            duration: duration
          })
          toast.present();
    }

    /*
    public async showAlert(headerText: string, buttonText: string): Promise<void> {

        // pensar num código para colocar alerts com botões dinâmicos

        const alert = await  this.alertController.create({
            header: headerText,
            buttons: [
              {
                text: buttonText,
                handler: () => { console.log('funcionando') }
              }
            ]
          });
          alert.present();
    }
    */


   public async showAlert(headerText: string, buttons: (AlertButton | string)[]): Promise<void> {

        // pensar num código para colocar alerts com botões dinâmicos

        const alert = await  this.alertController.create({
            header: headerText,
            buttons,
          });
          alert.present();
    }  


}