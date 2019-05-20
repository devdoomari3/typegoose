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
Object.defineProperty(exports, "__esModule", { value: true });
var typegoose_1 = require("../../typegoose");
var Hook = /** @class */ (function (_super) {
    __extends(Hook, _super);
    function Hook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], Hook.prototype, "material", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", String)
    ], Hook.prototype, "shape", void 0);
    Hook = __decorate([
        typegoose_1.pre('save', function (next) {
            if (this.isModified('shape')) {
                this.shape = 'newShape';
            }
            else {
                this.shape = 'oldShape';
            }
            next();
        })
    ], Hook);
    return Hook;
}(typegoose_1.Typegoose));
exports.Hook = Hook;
exports.model = new Hook().getModelForClass(Hook);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3Rlc3RNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2hvb2tUZXN0cy9ob29rdGVzdE1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDZDQUF1RDtBQVd2RDtJQUEwQix3QkFBUztJQUFuQzs7SUFNQSxDQUFDO0lBSkM7UUFEQyxnQkFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzswQ0FDUjtJQUdqQjtRQURDLGdCQUFJLEVBQUU7O3VDQUNRO0lBTEosSUFBSTtRQVRoQixlQUFHLENBQU8sTUFBTSxFQUFFLFVBQVMsSUFBSTtZQUM5QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO2FBQ3pCO1lBRUQsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUM7T0FDVyxJQUFJLENBTWhCO0lBQUQsV0FBQztDQUFBLEFBTkQsQ0FBMEIscUJBQVMsR0FNbEM7QUFOWSxvQkFBSTtBQVFKLFFBQUEsS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMifQ==