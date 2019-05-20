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
var __1 = require("../..");
var prop_1 = require("../../prop");
var typegoose_1 = require("../../typegoose");
var car_1 = require("./car");
var user_1 = require("./user");
var Rating = /** @class */ (function (_super) {
    __extends(Rating, _super);
    function Rating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typegoose_1.prop({ ref: car_1.Car }),
        __metadata("design:type", Object)
    ], Rating.prototype, "car", void 0);
    __decorate([
        typegoose_1.prop({ ref: user_1.User }),
        __metadata("design:type", Object)
    ], Rating.prototype, "user", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Number)
    ], Rating.prototype, "stars", void 0);
    __decorate([
        prop_1.arrayProp({ items: Array }),
        __metadata("design:type", Array)
    ], Rating.prototype, "location", void 0);
    Rating = __decorate([
        __1.index({ car: 1, user: 1 }, { unique: true }),
        __1.index({ location: '2dsphere' })
    ], Rating);
    return Rating;
}(typegoose_1.Typegoose));
exports.Rating = Rating;
exports.model = new Rating().getModelForClass(Rating);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3QvbW9kZWxzL3JhdGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSwyQkFBOEI7QUFDOUIsbUNBQTRDO0FBQzVDLDZDQUFrRDtBQUNsRCw2QkFBNEI7QUFDNUIsK0JBQThCO0FBSTlCO0lBQTRCLDBCQUFTO0lBQXJDOztJQVlBLENBQUM7SUFWQztRQURDLGdCQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsU0FBRyxFQUFFLENBQUM7O3VDQUNMO0lBR2Q7UUFEQyxnQkFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLFdBQUksRUFBRSxDQUFDOzt3Q0FDSjtJQUdoQjtRQURDLGdCQUFJLEVBQUU7O3lDQUNPO0lBR2Q7UUFEQyxnQkFBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDOzs0Q0FDUDtJQVhWLE1BQU07UUFGbEIsU0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDNUMsU0FBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQyxDQUFDO09BQ2xCLE1BQU0sQ0FZbEI7SUFBRCxhQUFDO0NBQUEsQUFaRCxDQUE0QixxQkFBUyxHQVlwQztBQVpZLHdCQUFNO0FBY04sUUFBQSxLQUFLLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyJ9