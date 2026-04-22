"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerServiceImpl = void 0;
const customer_1 = require("srv/models/customer");
class CustomerServiceImpl {
    afterRead(customerList) {
        const customers = customerList.map(c => {
            const customer = customer_1.CustomerModel.create({
                id: c.id,
                firstName: c.firstName,
                lastName: c.lastName,
                email: c.email
            });
        });
    }
}
exports.CustomerServiceImpl = CustomerServiceImpl;
