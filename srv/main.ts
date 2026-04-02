import { Customer, Customers } from '@models/sales';


const customer: Customer = {
   email: 'test@example.com',
   firstName: 'John',
   lastName: 'Doe',
   id: '123456'
};

const customers: Customers = [customer];

const funcao = (variavel: string) => console.log(variavel);

funcao('123');