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
exports.Timezones = exports.Timezone = exports.Currencies = exports.Currency = exports.Countries = exports.Country = exports.Languages = exports.Language = exports.FlowHistory_ = exports.FlowHistory = exports.TextsAspect_ = exports.TextsAspect = exports.CodeList_ = exports.CodeList = void 0;
exports._CodeListAspect = _CodeListAspect;
exports._TextsAspectAspect = _TextsAspectAspect;
exports._FlowHistoryAspect = _FlowHistoryAspect;
exports._LanguageAspect = _LanguageAspect;
exports._CountryAspect = _CountryAspect;
exports._CurrencyAspect = _CurrencyAspect;
exports._TimezoneAspect = _TimezoneAspect;
// This is an automatically generated file. Please do not change its contents manually!
const __ = __importStar(require("./../../_"));
const _ = __importStar(require("./../.."));
// the following represents the CDS aspect 'CodeList'
function _CodeListAspect(Base) {
    return class CodeList extends Base {
        static kind = 'aspect';
    };
}
/**
* Aspect for a code list with name and description
*
* See https://cap.cloud.sap/docs/cds/common#aspect-codelist
*/
class CodeList extends _CodeListAspect(__.Entity) {
}
exports.CodeList = CodeList;
/**
* Aspect for a code list with name and description
*
* See https://cap.cloud.sap/docs/cds/common#aspect-codelist
*/
class CodeList_ extends Array {
    $count;
}
exports.CodeList_ = CodeList_;
Object.defineProperty(CodeList_, 'name', { value: 'sap.common.CodeList' });
// the following represents the CDS aspect 'TextsAspect'
function _TextsAspectAspect(Base) {
    return class TextsAspect extends Base {
        static kind = 'aspect';
    };
}
class TextsAspect extends _TextsAspectAspect(__.Entity) {
}
exports.TextsAspect = TextsAspect;
class TextsAspect_ extends Array {
    $count;
}
exports.TextsAspect_ = TextsAspect_;
Object.defineProperty(TextsAspect_, 'name', { value: 'sap.common.TextsAspect' });
// the following represents the CDS aspect 'FlowHistory'
function _FlowHistoryAspect(Base) {
    return class FlowHistory extends Base {
        static kind = 'aspect';
    };
}
class FlowHistory extends _FlowHistoryAspect(__.Entity) {
}
exports.FlowHistory = FlowHistory;
class FlowHistory_ extends Array {
    $count;
}
exports.FlowHistory_ = FlowHistory_;
Object.defineProperty(FlowHistory_, 'name', { value: 'sap.common.FlowHistory' });
function _LanguageAspect(Base) {
    return class Language extends _CodeListAspect(Base) {
        static kind = 'entity';
    };
}
/**
* Code list for languages
*
* See https://cap.cloud.sap/docs/cds/common#entity-languages
*/
class Language extends _LanguageAspect(__.Entity) {
}
exports.Language = Language;
Object.defineProperty(Language, 'name', { value: 'sap.common.Languages' });
Object.defineProperty(Language, 'is_singular', { value: true });
/**
* Code list for languages
*
* See https://cap.cloud.sap/docs/cds/common#entity-languages
*/
class Languages extends Array {
    $count;
}
exports.Languages = Languages;
Object.defineProperty(Languages, 'name', { value: 'sap.common.Languages' });
function _CountryAspect(Base) {
    return class Country extends _CodeListAspect(Base) {
        static kind = 'entity';
    };
}
/**
* Code list for countries
*
* See https://cap.cloud.sap/docs/cds/common#entity-countries
*/
class Country extends _CountryAspect(__.Entity) {
}
exports.Country = Country;
Object.defineProperty(Country, 'name', { value: 'sap.common.Countries' });
Object.defineProperty(Country, 'is_singular', { value: true });
/**
* Code list for countries
*
* See https://cap.cloud.sap/docs/cds/common#entity-countries
*/
class Countries extends Array {
    $count;
}
exports.Countries = Countries;
Object.defineProperty(Countries, 'name', { value: 'sap.common.Countries' });
function _CurrencyAspect(Base) {
    return class Currency extends _CodeListAspect(Base) {
        static kind = 'entity';
    };
}
/**
* Code list for currencies
*
* See https://cap.cloud.sap/docs/cds/common#entity-currencies
*/
class Currency extends _CurrencyAspect(__.Entity) {
}
exports.Currency = Currency;
Object.defineProperty(Currency, 'name', { value: 'sap.common.Currencies' });
Object.defineProperty(Currency, 'is_singular', { value: true });
/**
* Code list for currencies
*
* See https://cap.cloud.sap/docs/cds/common#entity-currencies
*/
class Currencies extends Array {
    $count;
}
exports.Currencies = Currencies;
Object.defineProperty(Currencies, 'name', { value: 'sap.common.Currencies' });
function _TimezoneAspect(Base) {
    return class Timezone extends _CodeListAspect(Base) {
        static kind = 'entity';
    };
}
/**
* Code list for time zones
*
* See https://cap.cloud.sap/docs/cds/common#entity-timezones
*/
class Timezone extends _TimezoneAspect(__.Entity) {
}
exports.Timezone = Timezone;
Object.defineProperty(Timezone, 'name', { value: 'sap.common.Timezones' });
Object.defineProperty(Timezone, 'is_singular', { value: true });
/**
* Code list for time zones
*
* See https://cap.cloud.sap/docs/cds/common#entity-timezones
*/
class Timezones extends Array {
    $count;
}
exports.Timezones = Timezones;
Object.defineProperty(Timezones, 'name', { value: 'sap.common.Timezones' });
(function (Languages) {
    function _textAspect(Base) {
        return class text extends _TextsAspectAspect(Base) {
            static kind = 'entity';
        };
    }
    Languages._textAspect = _textAspect;
    class text extends _textAspect(__.Entity) {
    }
    Languages.text = text;
    Object.defineProperty(text, 'name', { value: 'sap.common.Languages.texts' });
    Object.defineProperty(text, 'is_singular', { value: true });
    class texts extends Array {
        $count;
    }
    Languages.texts = texts;
    Object.defineProperty(texts, 'name', { value: 'sap.common.Languages.texts' });
})(Languages || (exports.Languages = Languages = {}));
(function (Countries) {
    function _textAspect(Base) {
        return class text extends _TextsAspectAspect(Base) {
            static kind = 'entity';
        };
    }
    Countries._textAspect = _textAspect;
    class text extends _textAspect(__.Entity) {
    }
    Countries.text = text;
    Object.defineProperty(text, 'name', { value: 'sap.common.Countries.texts' });
    Object.defineProperty(text, 'is_singular', { value: true });
    class texts extends Array {
        $count;
    }
    Countries.texts = texts;
    Object.defineProperty(texts, 'name', { value: 'sap.common.Countries.texts' });
})(Countries || (exports.Countries = Countries = {}));
(function (Currencies) {
    function _textAspect(Base) {
        return class text extends _TextsAspectAspect(Base) {
            static kind = 'entity';
        };
    }
    Currencies._textAspect = _textAspect;
    class text extends _textAspect(__.Entity) {
    }
    Currencies.text = text;
    Object.defineProperty(text, 'name', { value: 'sap.common.Currencies.texts' });
    Object.defineProperty(text, 'is_singular', { value: true });
    class texts extends Array {
        $count;
    }
    Currencies.texts = texts;
    Object.defineProperty(texts, 'name', { value: 'sap.common.Currencies.texts' });
})(Currencies || (exports.Currencies = Currencies = {}));
(function (Timezones) {
    function _textAspect(Base) {
        return class text extends _TextsAspectAspect(Base) {
            static kind = 'entity';
        };
    }
    Timezones._textAspect = _textAspect;
    class text extends _textAspect(__.Entity) {
    }
    Timezones.text = text;
    Object.defineProperty(text, 'name', { value: 'sap.common.Timezones.texts' });
    Object.defineProperty(text, 'is_singular', { value: true });
    class texts extends Array {
        $count;
    }
    Timezones.texts = texts;
    Object.defineProperty(texts, 'name', { value: 'sap.common.Timezones.texts' });
})(Timezones || (exports.Timezones = Timezones = {}));
//# sourceMappingURL=index.js.map