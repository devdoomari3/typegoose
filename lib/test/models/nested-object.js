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
var tg = require("../../typegoose");
var AddressNested = /** @class */ (function () {
    function AddressNested(street) {
        this.street = street;
    }
    return AddressNested;
}());
exports.AddressNested = AddressNested;
var PersonNested = /** @class */ (function (_super) {
    __extends(PersonNested, _super);
    function PersonNested() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moreAddresses = [];
        return _this;
    }
    __decorate([
        tg.prop(),
        __metadata("design:type", String)
    ], PersonNested.prototype, "name", void 0);
    __decorate([
        tg.prop(),
        __metadata("design:type", AddressNested)
    ], PersonNested.prototype, "address", void 0);
    __decorate([
        tg.prop(),
        __metadata("design:type", Array)
    ], PersonNested.prototype, "moreAddresses", void 0);
    return PersonNested;
}(tg.Typegoose));
exports.PersonNested = PersonNested;
exports.PersonNestedModel = new PersonNested().getModelForClass(PersonNested);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L21vZGVscy9uZXN0ZWQtb2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG9DQUFzQztBQUV0QztJQUdFLHVCQUFZLE1BQWM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSxzQ0FBYTtBQVExQjtJQUFrQyxnQ0FBWTtJQUE5QztRQUFBLHFFQU9DO1FBREMsbUJBQWEsR0FBb0IsRUFBRSxDQUFDOztJQUN0QyxDQUFDO0lBTEM7UUFEQyxFQUFFLENBQUMsSUFBSSxFQUFFOzs4Q0FDRztJQUViO1FBREMsRUFBRSxDQUFDLElBQUksRUFBRTtrQ0FDRCxhQUFhO2lEQUFDO0lBRXZCO1FBREMsRUFBRSxDQUFDLElBQUksRUFBRTs7dURBQzBCO0lBQ3RDLG1CQUFDO0NBQUEsQUFQRCxDQUFrQyxFQUFFLENBQUMsU0FBUyxHQU83QztBQVBZLG9DQUFZO0FBU1osUUFBQSxpQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDIn0=