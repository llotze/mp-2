export interface RandomUser {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        city: string;
        state: string;
        country: string;
    };
    email: string;
    dob: {
        age: number;
    };
    phone: string;
    picture: {
        large: string;
    };
    nat: string;
}