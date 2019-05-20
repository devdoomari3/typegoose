"use strict";
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
var JobType = /** @class */ (function () {
    function JobType() {
    }
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], JobType.prototype, "field", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", Number)
    ], JobType.prototype, "salery", void 0);
    return JobType;
}());
exports.JobType = JobType;
var Job = /** @class */ (function () {
    function Job() {
    }
    Job.prototype.titleInUppercase = function () {
        return this.title.toUpperCase();
    };
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", String)
    ], Job.prototype, "title", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", String)
    ], Job.prototype, "position", void 0);
    __decorate([
        typegoose_1.prop({ required: true, default: Date.now }),
        __metadata("design:type", Date)
    ], Job.prototype, "startedAt", void 0);
    __decorate([
        typegoose_1.prop({ _id: false }),
        __metadata("design:type", JobType)
    ], Job.prototype, "jobType", void 0);
    __decorate([
        typegoose_1.instanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Job.prototype, "titleInUppercase", null);
    return Job;
}());
exports.Job = Job;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9iLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3QvbW9kZWxzL2pvYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZDQUF1RDtBQUV2RDtJQUFBO0lBTUEsQ0FBQztJQUpDO1FBREMsZ0JBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MENBQ1g7SUFHZDtRQURDLGdCQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzJDQUNWO0lBQ2pCLGNBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSwwQkFBTztBQVFwQjtJQUFBO0lBaUJBLENBQUM7SUFIQyw4QkFBZ0IsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQWREO1FBREMsZ0JBQUksRUFBRTs7c0NBQ1E7SUFHZjtRQURDLGdCQUFJLEVBQUU7O3lDQUNXO0lBR2xCO1FBREMsZ0JBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztrQ0FDaEMsSUFBSTswQ0FBQztJQUdqQjtRQURDLGdCQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUM7a0NBQ1gsT0FBTzt3Q0FBQztJQUdsQjtRQURDLDBCQUFjOzs7OytDQUdkO0lBQ0gsVUFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLGtCQUFHIn0=