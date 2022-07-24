import { Component, } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostitModalComponent } from 'src/app/modals/postit-modal.component';
import { PostItColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {

  constructor( public modalController: ModalController ) { }

  public postItArray: PostItProxy[] = [
    {
      id: 0,
      title: 'POST 1',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius sapien eros, sit amet rhoncus odio lobortis sit amet. In interdum molestie eleifend. Nam quam sem, tincidunt ac pharetra ut, efficitur consectetur elit. Cras scelerisque libero at urna feugiat, at consequat elit consequat. Maecenas maximus justo nec lectus eleifend, eu rutrum lacus lacinia. Morbi lorem risus, luctus ac felis at, tincidunt sollicitudin felis. Cras sed ante convallis, convallis nibh et, posuere est. Etiam a ligula sit amet leo pharetra accumsan id sed eros.',
      color: PostItColorEnum.GREEN,
    },
    {
      id: 1,
      title: 'POST 2',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius sapien eros, sit amet rhoncus odio lobortis sit amet. In interdum molestie eleifend. Nam quam sem, tincidunt ac pharetra ut, efficitur consectetur elit. Cras scelerisque libero at urna feugiat, at consequat elit consequat. Maecenas maximus justo nec lectus eleifend, eu rutrum lacus lacinia. Morbi lorem risus, luctus ac felis at, tincidunt sollicitudin felis. Cras sed ante convallis, convallis nibh et, posuere est. Etiam a ligula sit amet leo pharetra accumsan id sed eros.',
      color: PostItColorEnum.YELLOW,
    },
    {
      id: 2,
      title: 'POST 3',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius sapien eros, sit amet rhoncus odio lobortis sit amet. In interdum molestie eleifend. Nam quam sem, tincidunt ac pharetra ut, efficitur consectetur elit. Cras scelerisque libero at urna feugiat, at consequat elit consequat. Maecenas maximus justo nec lectus eleifend, eu rutrum lacus lacinia. Morbi lorem risus, luctus ac felis at, tincidunt sollicitudin felis. Cras sed ante convallis, convallis nibh et, posuere est. Etiam a ligula sit amet leo pharetra accumsan id sed eros.',
      color: PostItColorEnum.BLUE,
    },
    {
      id: 3,
      title: 'POST 4',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius sapien eros, sit amet rhoncus odio lobortis sit amet. In interdum molestie eleifend. Nam quam sem, tincidunt ac pharetra ut, efficitur consectetur elit. Cras scelerisque libero at urna feugiat, at consequat elit consequat. Maecenas maximus justo nec lectus eleifend, eu rutrum lacus lacinia. Morbi lorem risus, luctus ac felis at, tincidunt sollicitudin felis. Cras sed ante convallis, convallis nibh et, posuere est. Etiam a ligula sit amet leo pharetra accumsan id sed eros.',
      color: PostItColorEnum.PURPLE,
    },
    {
      id: 4,
      title: 'POST 5',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius sapien eros, sit amet rhoncus odio lobortis sit amet. In interdum molestie eleifend. Nam quam sem, tincidunt ac pharetra ut, efficitur consectetur elit. Cras scelerisque libero at urna feugiat, at consequat elit consequat. Maecenas maximus justo nec lectus eleifend, eu rutrum lacus lacinia. Morbi lorem risus, luctus ac felis at, tincidunt sollicitudin felis. Cras sed ante convallis, convallis nibh et, posuere est. Etiam a ligula sit amet leo pharetra accumsan id sed eros.',
      color: PostItColorEnum.RED,
    },
    {
      id: 5,
      title: 'POST 6',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius sapien eros, sit amet rhoncus odio lobortis sit amet. In interdum molestie eleifend. Nam quam sem, tincidunt ac pharetra ut, efficitur consectetur elit. Cras scelerisque libero at urna feugiat, at consequat elit consequat. Maecenas maximus justo nec lectus eleifend, eu rutrum lacus lacinia. Morbi lorem risus, luctus ac felis at, tincidunt sollicitudin felis. Cras sed ante convallis, convallis nibh et, posuere est. Etiam a ligula sit amet leo pharetra accumsan id sed eros.',
      color: PostItColorEnum.PINK,
    },
  ];

  public postItColorEnum: typeof PostItColorEnum = PostItColorEnum;

  public showColor(color): void {

    console.log(color)
  }

  public printPostIt(event: PostItProxy): void {
    console.log('postit', event);
  }

  public async openPostModal(postIt: PostItProxy): Promise<void> {

    const modal = await this.modalController.create({
      component: PostitModalComponent,
      cssClass: 'background-modal',
      backdropDismiss: true,
      componentProps: {
        postIt
      }
    });

    await modal.present();

    modal.onDidDismiss().then(async ({ data }) => {
      console.log(data);
      if (data.isDeleted) {
        this.postItArray = this.postItArray.filter(post => post.id !== data.postit.id);
      }
    });
  }
  
  public async openNewPostModal(color: string): Promise<void> {
    const modal  = await this.modalController.create({
      component: PostitModalComponent,
      cssClass:'background-modal',
      componentProps: {
        color,
        create: true,
      }

    })

    await modal.present();

    modal.onDidDismiss().then(async ({ data: postIt }) => {
      if (postIt) {
        this.postItArray.push(postIt);
      }
    });
  }
}


