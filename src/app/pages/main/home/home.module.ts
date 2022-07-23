import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { postItModule } from 'src/app/components/postit/postit.module';
import { PostItModalModule } from 'src/app/modals/postit-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    postItModule,
    PostItModalModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
