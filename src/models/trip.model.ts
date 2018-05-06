import { Time } from "@angular/common";

export interface Trip{
    user_id: string;
    origin: string;
    destination: string;
    departureDate: Date;
    departureTime: Time;
    totalSeats: number,
    avaiableSeats: number;
    price: number;
}