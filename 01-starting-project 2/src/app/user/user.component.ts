import {Component, Input, Output, EventEmitter, computed, input} from '@angular/core'
@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl:'./user.component.css'
})
export class UserComponent{

    @Input() id!: string;
    @Input() avatar!: string;
    @Input() name!: string;
    @Output() select = new EventEmitter();

    // avatar = input.required<string>();
    // name = input.required<string>();

    // imagePath = computed(()->{
    //     return 'assets/users/'+this.avatar;
    // });

    get imagePath(){
        return 'assets/users/'+this.avatar;
    }

    onSelectUser(id: string){
        this.select.emit(this.id);
    }

}