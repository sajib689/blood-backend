export interface IUser {
    name: string;
    bloodGroup: string;
    role: string;
    dateOfBirth: string;
    gender: 'male' | 'female';
    email: string;
    contactNumber: string;
    emergencyContactNumber: string;
    presentAddress: string;
    permanentAddress: string;
}