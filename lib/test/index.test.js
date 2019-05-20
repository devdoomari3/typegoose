"use strict";
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var mongoose = require("mongoose");
var user_1 = require("./models/user");
var car_1 = require("./models/car");
var person_1 = require("./models/person");
var rating_1 = require("./models/rating");
var nested_object_1 = require("./models/nested-object");
var genders_1 = require("./enums/genders");
var role_1 = require("./enums/role");
var mongoConnect_1 = require("./utils/mongoConnect");
var utils_1 = require("../utils");
var assert_1 = require("assert");
describe('Typegoose', function () {
    before(function () { return mongoConnect_1.initDatabase(); });
    after(function () { return mongoConnect_1.closeDatabase(); });
    it('should create a User with connections', function () { return __awaiter(_this, void 0, void 0, function () {
        var car, _a, trabant, zastava, user, foundUser, _b, janitor, manager, president, _c, foundTrabant, foundZastava, foundUser, createdUser, foundUser, err_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, car_1.model.create({
                        m: 'Tesla',
                        version: 'ModelS',
                        price: mongoose.Types.Decimal128.fromString('50123.25'),
                    })];
                case 1:
                    car = _d.sent();
                    return [4 /*yield*/, car_1.model.create([{
                                model: 'Trabant',
                                price: mongoose.Types.Decimal128.fromString('28189.25'),
                            }, {
                                model: 'Zastava',
                                price: mongoose.Types.Decimal128.fromString('1234.25'),
                            }])];
                case 2:
                    _a = _d.sent(), trabant = _a[0], zastava = _a[1];
                    return [4 /*yield*/, user_1.model.create({
                            _id: mongoose.Types.ObjectId(),
                            firstName: 'John',
                            lastName: 'Doe',
                            age: 20,
                            uniqueId: 'john-doe-20',
                            gender: genders_1.Genders.MALE,
                            role: role_1.Role.User,
                            job: {
                                title: 'Developer',
                                position: 'Lead',
                                jobType: {
                                    salery: 5000,
                                    field: "IT",
                                },
                            },
                            car: car.id,
                            languages: ['english', 'typescript'],
                            previousJobs: [{
                                    title: 'Janitor',
                                }, {
                                    title: 'Manager',
                                }],
                            futureJobs: [{
                                    title: 'Mr President',
                                }],
                            previousCars: [trabant.id, zastava.id],
                        })];
                case 3:
                    user = _d.sent();
                    return [4 /*yield*/, user_1.model
                            .findById(user.id)
                            .populate('car previousCars')
                            .exec()];
                case 4:
                    foundUser = _d.sent();
                    chai_1.expect(foundUser).to.have.property('nick', 'Nothing');
                    chai_1.expect(foundUser).to.have.property('firstName', 'John');
                    chai_1.expect(foundUser).to.have.property('lastName', 'Doe');
                    chai_1.expect(foundUser).to.have.property('uniqueId', 'john-doe-20');
                    chai_1.expect(foundUser).to.have.property('age', 20);
                    chai_1.expect(foundUser).to.have.property('gender', genders_1.Genders.MALE);
                    chai_1.expect(foundUser).to.have.property('role', role_1.Role.User);
                    chai_1.expect(foundUser).to.have.property('roles').to.have.length(1).to.include(role_1.Role.Guest);
                    chai_1.expect(foundUser).to.have.property('job');
                    chai_1.expect(foundUser).to.have.property('car');
                    chai_1.expect(foundUser).to.have.property('languages').to.have.length(2).to.include('english').to.include('typescript');
                    chai_1.expect(foundUser.job).to.have.property('title', 'Developer');
                    chai_1.expect(foundUser.job).to.have.property('position', 'Lead');
                    chai_1.expect(foundUser.job).to.have.property('startedAt').to.be.instanceof(Date);
                    chai_1.expect(foundUser.job.jobType).to.not.have.property('_id');
                    chai_1.expect(foundUser.job.titleInUppercase()).to.eq("Developer".toUpperCase());
                    chai_1.expect(foundUser.job.jobType).to.have.property('salery', 5000);
                    chai_1.expect(foundUser.job.jobType).to.have.property('field', 'IT');
                    chai_1.expect(foundUser.job.jobType).to.have.property('salery').to.be.a('number');
                    chai_1.expect(foundUser.car).to.have.property('model', 'Tesla');
                    chai_1.expect(foundUser.car).to.have.property('version', 'models');
                    chai_1.expect(foundUser).to.have.property('previousJobs').to.have.length(2);
                    chai_1.expect(foundUser).to.have.property('fullName', 'John Doe');
                    _b = foundUser.previousJobs, janitor = _b[0], manager = _b[1];
                    chai_1.expect(janitor).to.have.property('title', 'Janitor');
                    chai_1.expect(manager).to.have.property('title', 'Manager');
                    president = foundUser.futureJobs[0];
                    chai_1.expect(president).not.to.have.property('_id');
                    chai_1.expect(foundUser).to.have.property('previousCars').to.have.length(2);
                    _c = foundUser.previousCars, foundTrabant = _c[0], foundZastava = _c[1];
                    chai_1.expect(foundTrabant).to.have.property('model', 'Trabant');
                    chai_1.expect(foundTrabant).to.have.property('isSedan', true);
                    chai_1.expect(foundZastava).to.have.property('model', 'Zastava');
                    chai_1.expect(foundZastava).to.have.property('isSedan', undefined);
                    foundUser.fullName = 'Sherlock Holmes';
                    chai_1.expect(foundUser).to.have.property('firstName', 'Sherlock');
                    chai_1.expect(foundUser).to.have.property('lastName', 'Holmes');
                    return [4 /*yield*/, foundUser.incrementAge()];
                case 5:
                    _d.sent();
                    chai_1.expect(foundUser).to.have.property('age', 21);
                    return [4 /*yield*/, user_1.model.findByAge(21)];
                case 6:
                    foundUser = _d.sent();
                    chai_1.expect(foundUser).to.have.property('firstName', 'Sherlock');
                    chai_1.expect(foundUser).to.have.property('lastName', 'Holmes');
                    return [4 /*yield*/, user_1.model.findOrCreate({
                            firstName: 'Jane',
                            lastName: 'Doe',
                            gender: genders_1.Genders.FEMALE,
                        })];
                case 7:
                    createdUser = _d.sent();
                    chai_1.expect(createdUser).to.be.ok;
                    chai_1.expect(createdUser).to.have.property('created');
                    chai_1.expect(createdUser.created).to.be.true;
                    chai_1.expect(createdUser).to.have.property('doc');
                    chai_1.expect(createdUser.doc).to.have.property('firstName', 'Jane');
                    return [4 /*yield*/, user_1.model.findOrCreate({
                            firstName: 'Jane',
                            lastName: 'Doe',
                        })];
                case 8:
                    foundUser = _d.sent();
                    chai_1.expect(foundUser).to.be.ok;
                    chai_1.expect(foundUser).to.have.property('created');
                    chai_1.expect(foundUser.created).to.be.false;
                    chai_1.expect(foundUser).to.have.property('doc');
                    chai_1.expect(foundUser.doc).to.have.property('firstName', 'Jane');
                    _d.label = 9;
                case 9:
                    _d.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, user_1.model.create({
                            _id: mongoose.Types.ObjectId(),
                            firstName: 'John',
                            lastName: 'Doe',
                            age: 20,
                            gender: genders_1.Genders.MALE,
                            uniqueId: 'john-doe-20',
                        })];
                case 10:
                    _d.sent();
                    return [3 /*break*/, 12];
                case 11:
                    err_1 = _d.sent();
                    chai_1.expect(err_1).to.have.property('code', 11000);
                    return [3 /*break*/, 12];
                case 12: return [2 /*return*/];
            }
        });
    }); });
    it('should add a language and job using instance methods', function () { return __awaiter(_this, void 0, void 0, function () {
        var user, savedUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1.model.create({
                        firstName: 'harry',
                        lastName: 'potter',
                        gender: genders_1.Genders.MALE,
                        languages: ['english'],
                        uniqueId: 'unique-id',
                    })];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, user.addJob({ position: 'Dark Wizzard', title: 'Archmage' })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, user.addJob()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, user.addLanguage()];
                case 4:
                    savedUser = _a.sent();
                    chai_1.expect(savedUser.languages).to.include('Hungarian');
                    chai_1.expect(savedUser.previousJobs.length).to.be.above(0);
                    savedUser.previousJobs.map(function (prevJob) {
                        chai_1.expect(prevJob.startedAt).to.be.ok;
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('should add compound index', function () { return __awaiter(_this, void 0, void 0, function () {
        var user, car, created;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1.model.findOne()];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, car_1.model.findOne()];
                case 2:
                    car = _a.sent();
                    return [4 /*yield*/, rating_1.model.create({ user: user._id, car: car._id, stars: 4 })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, rating_1.model.create({ user: user._id, car: car._id, stars: 5 })
                            .then(function () { return true; }).catch(function () { return false; })];
                case 4:
                    created = _a.sent();
                    chai_1.expect(created).to.be.false;
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('getClassForDocument()', function () {
    before(function () { return mongoConnect_1.initDatabase(); });
    it('should return correct class type for document', function () { return __awaiter(_this, void 0, void 0, function () {
        var car, carReflectedType, user, userReflectedType;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, car_1.model.create({
                        model: 'Tesla',
                        price: mongoose.Types.Decimal128.fromString('50123.25'),
                    })];
                case 1:
                    car = _a.sent();
                    carReflectedType = utils_1.getClassForDocument(car);
                    chai_1.expect(carReflectedType).to.equals(car_1.Car);
                    return [4 /*yield*/, user_1.model.create({
                            _id: mongoose.Types.ObjectId(),
                            firstName: 'John2',
                            lastName: 'Doe2',
                            gender: genders_1.Genders.MALE,
                            languages: ['english2', 'typescript2'],
                        })];
                case 2:
                    user = _a.sent();
                    userReflectedType = utils_1.getClassForDocument(user);
                    chai_1.expect(userReflectedType).to.equals(user_1.User);
                    // assert negative to be sure (false positive)
                    chai_1.expect(carReflectedType).to.not.equals(user_1.User);
                    chai_1.expect(userReflectedType).to.not.equals(car_1.Car);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should use inherited schema', function () { return __awaiter(_this, void 0, void 0, function () {
        var user, car;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, person_1.model.create({
                        email: 'my@email.com',
                    })];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, car_1.model.create({
                            model: 'Tesla',
                            price: mongoose.Types.Decimal128.fromString('50123.25'),
                        })];
                case 2:
                    car = _a.sent();
                    return [4 /*yield*/, user.addCar(car)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, person_1.model.findById(user.id).populate('cars')];
                case 4:
                    user = _a.sent();
                    // verify properties
                    chai_1.expect(user).to.have.property('createdAt');
                    chai_1.expect(user).to.have.property('email', 'my@email.com');
                    chai_1.expect(user.cars.length).to.be.above(0);
                    user.cars.map(function (currentCar) {
                        chai_1.expect(currentCar.m).to.be.ok;
                    });
                    // verify methods
                    chai_1.expect(user.getClassName()).to.equals('Person');
                    chai_1.expect(person_1.model.getStaticName()).to.equals('Person');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should store nested address', function () { return __awaiter(_this, void 0, void 0, function () {
        var personInput, person;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    personInput = new nested_object_1.PersonNested();
                    personInput.name = 'Person, Some';
                    personInput.address = new nested_object_1.AddressNested('A Street 1');
                    personInput.moreAddresses = [
                        new nested_object_1.AddressNested('A Street 2'),
                        new nested_object_1.AddressNested('A Street 3'),
                    ];
                    return [4 /*yield*/, nested_object_1.PersonNestedModel.create(personInput)];
                case 1:
                    person = _a.sent();
                    chai_1.expect(person).is.not.undefined;
                    chai_1.expect(person.name).equals('Person, Some');
                    chai_1.expect(person.address).is.not.undefined;
                    chai_1.expect(person.address.street).equals('A Street 1');
                    chai_1.expect(person.moreAddresses).is.not.undefined;
                    chai_1.expect(person.moreAddresses.length).equals(2);
                    chai_1.expect(person.moreAddresses[0].street).equals('A Street 2');
                    chai_1.expect(person.moreAddresses[1].street).equals('A Street 3');
                    return [2 /*return*/];
            }
        });
    }); });
    // faild validation will need to be checked
    it('Should validate Decimal128', function () { return __awaiter(_this, void 0, void 0, function () {
        var e_1, car, foundCar;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, car_1.model.create({
                            model: 'Tesla',
                            price: 'NO DECIMAL',
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    chai_1.expect(e_1).to.be.a.instanceof(mongoose.Error.ValidationError);
                    return [3 /*break*/, 3];
                case 3: return [4 /*yield*/, car_1.model.create({
                        model: 'Tesla',
                        price: mongoose.Types.Decimal128.fromString('123.45'),
                    })];
                case 4:
                    car = _a.sent();
                    return [4 /*yield*/, car_1.model.findById(car._id).exec()];
                case 5:
                    foundCar = _a.sent();
                    chai_1.expect(foundCar.price).to.be.a.instanceof(mongoose.Types.Decimal128);
                    chai_1.expect(foundCar.price.toString()).to.eq('123.45');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should validate email', function () { return __awaiter(_this, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, person_1.model.create({
                            email: 'email',
                        })];
                case 1:
                    _a.sent();
                    assert_1.fail('Validation must fail.');
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    chai_1.expect(e_2).to.be.a.instanceof(mongoose.Error.ValidationError);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L2luZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBZ1RBOztBQWhUQSw2QkFBOEI7QUFDOUIsbUNBQXFDO0FBRXJDLHNDQUFnRTtBQUNoRSxvQ0FBNEQ7QUFDNUQsMENBQWtEO0FBQ2xELDBDQUFrRDtBQUNsRCx3REFBd0Y7QUFDeEYsMkNBQTBDO0FBQzFDLHFDQUFvQztBQUNwQyxxREFBbUU7QUFDbkUsa0NBQStDO0FBQy9DLGlDQUE4QjtBQUU5QixRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ3BCLE1BQU0sQ0FBQyxjQUFNLE9BQUEsMkJBQVksRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO0lBRTdCLEtBQUssQ0FBQyxjQUFNLE9BQUEsNEJBQWEsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBRTdCLEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRTs7Ozt3QkFDOUIscUJBQU0sV0FBRyxDQUFDLE1BQU0sQ0FBQzt3QkFDM0IsQ0FBQyxFQUFFLE9BQU87d0JBQ1YsT0FBTyxFQUFFLFFBQVE7d0JBQ2pCLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO3FCQUN4RCxDQUFDLEVBQUE7O29CQUpJLEdBQUcsR0FBRyxTQUlWO29CQUV5QixxQkFBTSxXQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQzNDLEtBQUssRUFBRSxTQUFTO2dDQUNoQixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQzs2QkFDeEQsRUFBRTtnQ0FDRCxLQUFLLEVBQUUsU0FBUztnQ0FDZCxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FB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