import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { User } from "../models/users.model";

@Injectable()
export class UserService{

    private usersRef = this.db.list<User>('ColmeCar');

    constructor(private db:AngularFireDatabase){

    }

    addUser(value: User){
        return this.usersRef.push(value);
    }

    updateUser(value: User){

        return this.usersRef.update(value.key,value);
    }

    removeUser(value: User){
        
        return this.usersRef.remove(value.key);
    }

    getUsers(){
        return this.usersRef;
    }
}