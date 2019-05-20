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
var findOrCreate = require('mongoose-findorcreate');
var car_1 = require("./car");
var genders_1 = require("../enums/genders");
var job_1 = require("./job");
var role_1 = require("../enums/role");
var typegoose_1 = require("../../typegoose");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User_1 = User;
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (full) {
            var split = full.split(' ');
            this.firstName = split[0];
            this.lastName = split[1];
        },
        enumerable: true,
        configurable: true
    });
    User.findByAge = function (age) {
        return this.findOne({ age: age });
    };
    User.prototype.incrementAge = function () {
        var age = this.age || 1;
        this.age = age + 1;
        return this.save();
    };
    User.prototype.addLanguage = function () {
        this.languages.push('Hungarian');
        return this.save();
    };
    User.prototype.addJob = function (job) {
        if (job === void 0) { job = {}; }
        this.previousJobs.push(job);
        return this.save();
    };
    var User_1;
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], User.prototype, "firstName", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], User.prototype, "fullName", null);
    __decorate([
        typegoose_1.prop({ default: 'Nothing' }),
        __metadata("design:type", String)
    ], User.prototype, "nick", void 0);
    __decorate([
        typegoose_1.prop({ index: true, unique: true }),
        __metadata("design:type", String)
    ], User.prototype, "uniqueId", void 0);
    __decorate([
        typegoose_1.prop({ unique: true, sparse: true }),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        typegoose_1.prop({ expires: '24h' }),
        __metadata("design:type", Date)
    ], User.prototype, "expireAt", void 0);
    __decorate([
        typegoose_1.prop({ min: 10, max: 21 }),
        __metadata("design:type", Number)
    ], User.prototype, "age", void 0);
    __decorate([
        typegoose_1.prop({ enum: Object.values(genders_1.Genders), required: true }),
        __metadata("design:type", String)
    ], User.prototype, "gender", void 0);
    __decorate([
        typegoose_1.prop({ enum: role_1.Role }),
        __metadata("design:type", String)
    ], User.prototype, "role", void 0);
    __decorate([
        typegoose_1.arrayProp({ items: String, enum: role_1.Role, default: role_1.Role.Guest }),
        __metadata("design:type", Array)
    ], User.prototype, "roles", void 0);
    __decorate([
        typegoose_1.arrayProp({ items: String, enum: role_1.Role, default: void 0 }),
        __metadata("design:type", Array)
    ], User.prototype, "extraRoles", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", job_1.Job)
    ], User.prototype, "job", void 0);
    __decorate([
        typegoose_1.prop({ ref: car_1.Car }),
        __metadata("design:type", Object)
    ], User.prototype, "car", void 0);
    __decorate([
        typegoose_1.arrayProp({ items: String, required: true }),
        __metadata("design:type", Array)
    ], User.prototype, "languages", void 0);
    __decorate([
        typegoose_1.arrayProp({ items: job_1.Job }),
        __metadata("design:type", Array)
    ], User.prototype, "previousJobs", void 0);
    __decorate([
        typegoose_1.arrayProp({
            items: job_1.Job,
            _id: false,
            default: void 0,
        }),
        __metadata("design:type", Array)
    ], User.prototype, "futureJobs", void 0);
    __decorate([
        typegoose_1.arrayProp({ itemsRef: car_1.Car }),
        __metadata("design:type", Array)
    ], User.prototype, "previousCars", void 0);
    __decorate([
        typegoose_1.instanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "incrementAge", null);
    __decorate([
        typegoose_1.instanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "addLanguage", null);
    __decorate([
        typegoose_1.instanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], User.prototype, "addJob", null);
    __decorate([
        typegoose_1.staticMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], User, "findByAge", null);
    User = User_1 = __decorate([
        typegoose_1.plugin(findOrCreate)
    ], User);
    return User;
}(typegoose_1.Typegoose));
exports.User = User;
exports.model = new User().getModelForClass(User);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L21vZGVscy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBRXRELDZCQUE0QjtBQUM1Qiw0Q0FBbUQ7QUFDbkQsNkJBQTRCO0FBQzVCLHNDQUFxQztBQUNyQyw2Q0FVeUI7QUFRekI7SUFBMEIsd0JBQVM7SUFBbkM7O0lBNkZBLENBQUM7YUE3RlksSUFBSTtJQVFmLHNCQUFJLDBCQUFRO2FBQVo7WUFDRSxPQUFVLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVUsQ0FBQztRQUM5QyxDQUFDO2FBQ0QsVUFBYSxJQUFJO1lBQ2YsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDOzs7T0FMQTtJQXlETSxjQUFTLEdBQWhCLFVBQXNELEdBQVc7UUFDL0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFHRCwyQkFBWSxHQUFaO1FBQ0UsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFHRCwwQkFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFakMs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