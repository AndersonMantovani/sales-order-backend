"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEntityProxy = exports.Entity = void 0;
// This is an automatically generated file. Please do not change its contents manually!
const cds_1 = __importDefault(require("@sap/cds"));
const cds_2 = require("@sap/cds");
class Entity {
    static data(_input) {
        return {}; // mock
    }
}
exports.Entity = Entity;
const key = Symbol('key'); // to avoid .key showing up in IDE's auto-completion
const createEntityProxy = function (fqParts, opts = {}) {
    const { target, customProps } = { target: {}, customProps: [], ...opts };
    const fq = fqParts.filter((p) => !!p).join('.');
    return new Proxy(target, {
        get: function (target, prop) {
            if (cds_1.default.entities) {
                target.__proto__ = cds_1.default.entities(fqParts[0])[fqParts[1]];
                // overwrite/simplify getter after cds.entities is accessible
                this.get = (target, prop) => target[prop];
                return target[prop];
            }
            // we already know the name so we skip the cds.entities proxy access
            if (prop === 'name')
                return fq;
            // custom properties access on 'target' as well as cached _entity property access goes here
            if (Object.hasOwn(target, prop))
                return target[prop];
            // inline enums have to be caught here for first time access, as they do not exist on the entity
            if (customProps.includes(prop))
                return target[prop];
            // last but not least we pass the property access to cds.entities
            throw new Error(`Property ${prop} does not exist on entity '${fq}' or cds.entities is not yet defined. Ensure the CDS runtime is fully booted before accessing properties.`);
        }
    });
};
exports.createEntityProxy = createEntityProxy;
//# sourceMappingURL=index.js.map