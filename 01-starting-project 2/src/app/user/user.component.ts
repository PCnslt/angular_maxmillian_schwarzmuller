import {Component, Input, Output, EventEmitter, computed, input} from '@angular/core'
import {type User} from "./user.model"
import { CardComponent } from "../shared/card/card.component";
// interface User{
//         id: string;
//         avatar: string;
//         name: string;
//     }
@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl:'./user.component.css',
    imports: [CardComponent]
})
export class UserComponent{


    @Input() user!: User;
    @Input({required: true}) selected!:boolean;
    @Output() select = new EventEmitter();

    get imagePath(){
        return 'assets/users/'+this.user.avatar;
    }

    onSelectUser(id: string){
        this.select.emit(this.user.id);
    }

}