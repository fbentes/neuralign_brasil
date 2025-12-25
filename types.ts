export interface DemoFormData {
  fullName: string;
  email: string;
  zipCode: string;
  userType: string;
  demoUserName: string;
  demoUserAge: string;
}

export enum UserType {
  PROVIDER = 'Provedor',
  CLIENT = 'Cliente',
  PARENT = 'Mãe / Pai / Responsável'
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role?: string;
}

export interface Plan {
  id: number;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}