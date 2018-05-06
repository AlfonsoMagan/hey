//users.service para nuestro proyecto
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Contacto } from "../models/contacto.model";
import { updateDate } from "ionic-angular/util/datetime-util";
@Injectable()
export class ContactService{
private contactsRef=this.db.list<Contacto>('ColmeCar');
constructor(private db:AngularFireDatabase){
}
addContact(value: Contacto){
return this.contactsRef.push(value);
}
updateDate(value:Contacto){
return this.contactsRef.update(value.key,value);
}
removeContact(value: Contacto){
return this.contactsRef.remove(value.key);
    }
getContacts(){
return this.contactsRef;
}
}