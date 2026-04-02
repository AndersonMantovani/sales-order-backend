"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItems = exports.SalesOrderItem = exports.Products = exports.Product = exports.Customers = exports.Customer = exports.SalesOrderHeaders = exports.SalesOrderHeader = void 0;
exports._SalesOrderHeaderAspect = _SalesOrderHeaderAspect;
exports._CustomerAspect = _CustomerAspect;
exports._ProductAspect = _ProductAspect;
exports._SalesOrderItemAspect = _SalesOrderItemAspect;
// This is an automatically generated file. Please do not change its contents manually!
const _ = __importStar(require("./.."));
const __ = __importStar(require("./../_"));
class default_1 {
}
exports.default = default_1;
function _SalesOrderHeaderAspect(Base) {
    return class SalesOrderHeader extends Base {
        static kind = 'entity';
    };
}
class SalesOrderHeader extends _SalesOrderHeaderAspect(__.Entity) {
}
exports.SalesOrderHeader = SalesOrderHeader;
Object.defineProperty(SalesOrderHeader, 'name', { value: 'MainService.SalesOrderHeaders' });
Object.defineProperty(SalesOrderHeader, 'is_singular', { value: true });
class SalesOrderHeaders extends Array {
    $count;
}
exports.SalesOrderHeaders = SalesOrderHeaders;
Object.defineProperty(SalesOrderHeaders, 'name', { value: 'MainService.SalesOrderHeaders' });
function _CustomerAspect(Base) {
    return class Customer extends Base {
        static kind = 'entity';
    };
}
class Customer extends _CustomerAspect(__.Entity) {
}
exports.Customer = Customer;
Object.defineProperty(Customer, 'name', { value: 'MainService.Customers' });
Object.defineProperty(Customer, 'is_singular', { value: true });
class Customers extends Array {
    $count;
}
exports.Customers = Customers;
Object.defineProperty(Customers, 'name', { value: 'MainService.Customers' });
function _ProductAspect(Base) {
    return class Product extends Base {
        static kind = 'entity';
    };
}
class Product extends _ProductAspect(__.Entity) {
}
exports.Product = Product;
Object.defineProperty(Product, 'name', { value: 'MainService.Products' });
Object.defineProperty(Product, 'is_singular', { value: true });
class Products extends Array {
    $count;
}
exports.Products = Products;
Object.defineProperty(Products, 'name', { value: 'MainService.Products' });
function _SalesOrderItemAspect(Base) {
    return class SalesOrderItem extends Base {
        static kind = 'entity';
    };
}
class SalesOrderItem extends _SalesOrderItemAspect(__.Entity) {
}
exports.SalesOrderItem = SalesOrderItem;
Object.defineProperty(SalesOrderItem, 'name', { value: 'MainService.SalesOrderItems' });
Object.defineProperty(SalesOrderItem, 'is_singular', { value: true });
class SalesOrderItems extends Array {
    $count;
}
exports.SalesOrderItems = SalesOrderItems;
Object.defineProperty(SalesOrderItems, 'name', { value: 'MainService.SalesOrderItems' });
//# sourceMappingURL=index.js.map