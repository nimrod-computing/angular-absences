
export interface IEmployee { 
    id: number;
    lastName: string;
    firstName: string;
    jobTitle: string;
    title: string;
    sex: string;
    dateOfBirth?: Date;
    startDate?: Date;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    homePhone: string;
    extension: string;
    notes: string;
    managerId: number;
    photoPath: string;
    manager: string;
}
