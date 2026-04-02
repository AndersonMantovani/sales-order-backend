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
exports.temporal_ = exports.temporal = exports.managed_ = exports.managed = exports.cuid_ = exports.cuid = void 0;
exports._cuidAspect = _cuidAspect;
exports._managedAspect = _managedAspect;
exports._temporalAspect = _temporalAspect;
// This is an automatically generated file. Please do not change its contents manually!
const _sap_common = __importStar(require("./sap/common"));
const __ = __importStar(require("./_"));
// the following represents the CDS aspect 'cuid'
function _cuidAspect(Base) {
    return class cuid extends Base {
        static kind = 'aspect';
    };
}
/**
* Aspect for entities with canonical universal IDs
*
* See https://cap.cloud.sap/docs/cds/common#aspect-cuid
*/
class cuid extends _cuidAspect(__.Entity) {
}
exports.cuid = cuid;
/**
* Aspect for entities with canonical universal IDs
*
* See https://cap.cloud.sap/docs/cds/common#aspect-cuid
*/
class cuid_ extends Array {
    $count;
}
exports.cuid_ = cuid_;
Object.defineProperty(cuid_, 'name', { value: 'cuid' });
// the following represents the CDS aspect 'managed'
function _managedAspect(Base) {
    return class managed extends Base {
        static kind = 'aspect';
    };
}
/**
* Aspect to capture changes by user and name
*
* See https://cap.cloud.sap/docs/cds/common#aspect-managed
*/
class managed extends _managedAspect(__.Entity) {
}
exports.managed = managed;
/**
* Aspect to capture changes by user and name
*
* See https://cap.cloud.sap/docs/cds/common#aspect-managed
*/
class managed_ extends Array {
    $count;
}
exports.managed_ = managed_;
Object.defineProperty(managed_, 'name', { value: 'managed' });
// the following represents the CDS aspect 'temporal'
function _temporalAspect(Base) {
    return class temporal extends Base {
        static kind = 'aspect';
    };
}
/**
* Aspect for entities with temporal data
*
* See https://cap.cloud.sap/docs/cds/common#aspect-temporal
*/
class temporal extends _temporalAspect(__.Entity) {
}
exports.temporal = temporal;
/**
* Aspect for entities with temporal data
*
* See https://cap.cloud.sap/docs/cds/common#aspect-temporal
*/
class temporal_ extends Array {
    $count;
}
exports.temporal_ = temporal_;
Object.defineProperty(temporal_, 'name', { value: 'temporal' });
//# sourceMappingURL=index.js.map