"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cds_1 = __importDefault(require("@sap/cds"));
exports.default = (service) => {
    service.after('READ', 'Customers', (results) => {
        results.forEach(customer => {
            if (!customer.email?.includes('@')) {
                customer.email = `${customer.email}@gmail.com`;
            }
        });
    });
    service.before('CREATE', 'SalesOrderHeaders', async (request) => {
        const params = request.data;
        if (!params.customer_id) {
            return request.reject(400, 'Customer invalido');
        }
        if (!params.items || params.items?.length === 0) {
            return request.reject(400, 'Itens invalido');
        }
        const customerQuery = SELECT.one.from('sales.Customers').where({ id: params.customer_id });
        const customer = await cds_1.default.run(customerQuery);
        if (!customer) {
            return request.reject(404, 'Customer não encontrado');
        }
        const productsIds = params.items.map((item) => item.product_id);
        const productsQuery = SELECT.from('sales.Products').where({ id: productsIds });
        const products = await cds_1.default.run(productsQuery);
        for (const item of params.items) {
            const dbProduct = products.find(product => product.id === item.product_id);
            if (!dbProduct) {
                return request.reject(404, `Produto ${item.product_id} não encontrado`);
            }
            if (dbProduct.stock === 0) {
                return request.reject(400, `Produto ${dbProduct.name}(${dbProduct.id}) sem estoque disponivel`);
            }
        }
    });
};
