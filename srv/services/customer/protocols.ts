import { Customer, Customers } from "@cds-models/sales";

export interface CustomerService {
    afterRead(customerList: Customers): Customers;
}