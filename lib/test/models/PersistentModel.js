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
var car_1 = require("./car");
var PersistentModel = /** @class */ (function (_super) {
    __extends(PersistentModel, _super);
    function PersistentModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // define an 'instanceMethod' that will be overwritten
    PersistentModel.prototype.getClassName = function () {
        return 'PersistentModel';
    };
    // define an 'instanceMethod' that will be overwritten
    PersistentModel.getStaticName = function () {
        return 'PersistentModel';
    };
    // define an instanceMethod that is called by the derived class
    PersistentModel.prototype.addCar = function (car) {
        if (!this.cars) {
            this.cars = [];
        }
        this.cars.push(car);
        return this.save();
    };
    __decorate([
        tg.prop(),
        __metadata("design:type", Date)
    ], PersistentModel.prototype, "createdAt", void 0);
    __decorate([
        tg.arrayProp({ itemsRef: car_1.Car }),
        __metadata("design:type", Array)
    ], PersistentModel.prototype, "cars", void 0);
    __decorate([
        tg.instanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PersistentModel.prototype, "getClassName", null);
    __decorate([
        tg.instanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [car_1.Car]),
        __metadata("design:returntype", void 0)
    ], PersistentModel.prototype, "addCar", null);
    __decorate([
        tg.staticMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PersistentModel, "getStaticName", null);
    return PersistentModel;
}(tg.Typegoose));
exports.PersistentModel = PersistentModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc2lzdGVudE1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3QvbW9kZWxzL1BlcnNpc3RlbnRNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBc0M7QUFDdEMsNkJBQTRCO0FBRTVCO0lBQThDLG1DQUFZO0lBQTFEOztJQThCQSxDQUFDO0lBdkJDLHNEQUFzRDtJQUV0RCxzQ0FBWSxHQUFaO1FBQ0UsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBRUQsc0RBQXNEO0lBRS9DLDZCQUFhLEdBQXBCO1FBQ0UsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBRUQsK0RBQStEO0lBRS9ELGdDQUFNLEdBQU4sVUFBK0MsR0FBUTtRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQTNCRDtRQURDLEVBQUUsQ0FBQyxJQUFJLEVBQUU7a0NBQ0MsSUFBSTtzREFBQztJQUdoQjtRQURDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBRyxFQUFFLENBQUM7O2lEQUNYO0lBSXJCO1FBREMsRUFBRSxDQUFDLGNBQWM7Ozs7dURBR2pCO0lBVUQ7UUFEQyxFQUFFLENBQUMsY0FBYzs7eUNBQ2tDLFNBQUc7O2lEQVF0RDtJQWREO1FBREMsRUFBRSxDQUFDLFlBQVk7Ozs7OENBR2Y7SUFhSCxzQkFBQztDQUFBLEFBOUJELENBQThDLEVBQUUsQ0FBQyxTQUFTLEdBOEJ6RDtBQTlCcUIsMENBQWUifQ==