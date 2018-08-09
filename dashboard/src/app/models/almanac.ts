export class Location {
    street1: string = '';
    street2: string = '';
    state: string = '';
    postal: number = null;
    country: string = '';
    events: Array<string> = [];
}

export class Event {
    date: string = '';
    location: string = '';
    people: Array<string> = [];
    callings: Array<string> = [];
}

export class Name {
    first: string = '';
    last: string = '';
    person: string = '';
}

export class Date {
    month: number = null;
    day: number = null;
    year: number = null;
    person = {
        deaths: [],
        births: []
    }
    callings = {
        starts: [],
        ends: []
    }
}

export class Person {
    name: string = '';
    birth: Event = new Event();
    death: Event = new Event();
    photo: string = '';
    bio: string = '';
    callings: Array<string> = [];
}

export class Calling {
    name: string = '';
    start: Date = new Date();
    end: Date = new Date();
    people: Array<string> = [''];
    emeritus: boolean = null;
}