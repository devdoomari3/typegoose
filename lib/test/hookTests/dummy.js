"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typegoose_1 = require("../../typegoose");
var Dummy = /** @class */ (function (_super) {
    __extends(Dummy, _super);
    function Dummy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", String)
    ], Dummy.prototype, "text", void 0);
    Dummy = __decorate([
        typegoose_1.pre('save', function (next) {
            this.text = 'saved';
            next();
        })
        // eslint-disable-next-line only-arrow-functions (need `this` in hook)
        ,
        typegoose_1.pre('updateMany', function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this._update.text = 'updateManied';
                    return [2 /*return*/];
                });
            });
        }),
        typegoose_1.post('find', function (result) {
            result[0].text = 'changed in post find hook';
        }),
        typegoose_1.post('findOne', function (result) {
            result.text = 'changed in post findOne hook';
        })
    ], Dummy);
    return Dummy;
}(typegoose_1.Typegoose));
exports.Dummy = Dummy;
exports.model = new Dummy().getModelForClass(Dummy);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtbXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdC9ob29rVGVzdHMvZHVtbXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSw2Q0FBNkQ7QUFpQjdEO0lBQTJCLHlCQUFTO0lBQXBDOztJQUdBLENBQUM7SUFEQztRQURDLGdCQUFJLEVBQUU7O3VDQUNNO0lBRkYsS0FBSztRQWZqQixlQUFHLENBQVEsTUFBTSxFQUFFLFVBQVMsSUFBSTtZQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUVwQixJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQztRQUNGLHNFQUFzRTs7UUFDckUsZUFBRyxDQUFRLFlBQVksRUFBRTs7O29CQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7Ozs7U0FDcEMsQ0FBQztRQUNELGdCQUFJLENBQVEsTUFBTSxFQUFFLFVBQUMsTUFBTTtZQUMxQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLDJCQUEyQixDQUFDO1FBQy9DLENBQUMsQ0FBQztRQUNELGdCQUFJLENBQVEsU0FBUyxFQUFFLFVBQUMsTUFBTTtZQUM3QixNQUFNLENBQUMsSUFBSSxHQUFHLDhCQUE4QixDQUFDO1FBQy9DLENBQUMsQ0FBQztPQUNXLEtBQUssQ0FHakI7SUFBRCxZQUFDO0NBQUEsQUFIRCxDQUEyQixxQkFBUyxHQUduQztBQUhZLHNCQUFLO0FBS0wsUUFBQSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyJ9