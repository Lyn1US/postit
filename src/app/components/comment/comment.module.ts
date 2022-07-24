import { NgModule } from "@angular/core";
import { CommentComponent } from "./comment.component";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

@NgModule({
    declarations: [
        CommentComponent,
    ],
    imports: [        
        CommonModule,
        IonicModule
    ],
    exports: [
        CommentComponent,
    ],
})
export class CommentModule { };
