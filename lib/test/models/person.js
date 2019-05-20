"use strict";
/** @format */
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
var PersistentModel_1 = require("./PersistentModel");
// add a pre-save hook to PersistentModel
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // override instanceMethod
    Person.prototype.getClassName = function () {
        return 'Person';
    };
    // override staticMethod
    Person.getStaticName = function () {
        return 'Person';
    };
    __decorate([
        tg.prop({ required: true, validate: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/ }),
        __metadata("design:type", String)
    ], Person.prototype, "email", void 0);
    __decorate([
        tg.instanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Person.prototype, "getClassName", null);
    __decorate([
        tg.staticMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Person, "getStaticName", null);
    Person = __decorate([
        tg.pre('save', function (next) {
            if (!this.createdAt) {
                this.createdAt = new Date();
            }
            next();
        })
    ], Person);
    return Person;
}(PersistentModel_1.PersistentModel));
exports.Person = Person;
exports.model = new Person().getModelForClass(Person);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3QvbW9kZWxzL3BlcnNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsb0NBQXNDO0FBQ3RDLHFEQUFvRDtBQUVwRCx5Q0FBeUM7QUFPekM7SUFBNEIsMEJBQWU7SUFBM0M7O0lBZ0JBLENBQUM7SUFYQywwQkFBMEI7SUFFMUIsNkJBQVksR0FBWjtRQUNFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCx3QkFBd0I7SUFFakIsb0JBQWEsR0FBcEI7UUFDRSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBWkQ7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUseUNBQXlDLEVBQUUsQ0FBQzs7eUNBQ25FO0lBSWQ7UUFEQyxFQUFFLENBQUMsY0FBYzs7Ozs4Q0FHakI7SUFJRDtRQURDLEVBQUUsQ0FBQyxZQUFZOzs7O3FDQUdmO0lBZlUsTUFBTTtRQU5sQixFQUFFLENBQUMsR0FBRyxDQUFrQixNQUFNLEVBQUUsVUFBUyxJQUFJO1lBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7YUFDN0I7WUFDRCxJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQztPQUNXLE1BQU0sQ0FnQmxCO0lBQUQsYUFBQztDQUFBLEFBaEJELENBQTRCLGlDQUFlLEdBZ0IxQztBQWhCWSx3QkFBTTtBQWtCTixRQUFBLEtBQUssR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDIn0=