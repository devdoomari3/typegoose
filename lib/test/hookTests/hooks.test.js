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
var hooktestModel_1 = require("./hooktestModel");
var dummy_1 = require("./dummy");
var mongoConnect_1 = require("../utils/mongoConnect");
describe('Typegoose', function () {
    describe('Hooks', function () {
        before(function () { return mongoConnect_1.initDatabase(); });
        it('should update the property using isModified during pre save hook', function () { return __awaiter(_this, void 0, void 0, function () {
            var hook, savedHook;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, hooktestModel_1.model.create({
                            material: 'steel',
                        })];
                    case 1:
                        hook = _a.sent();
                        chai_1.expect(hook).to.have.property('shape', 'oldShape');
                        hook.set('shape', 'changed');
                        return [4 /*yield*/, hook.save()];
                    case 2:
                        savedHook = _a.sent();
                        chai_1.expect(savedHook).to.have.property('shape', 'newShape');
                        return [2 /*return*/];
                }
            });
        }); });
        it('should test findOne post hook', function () { return __awaiter(_this, void 0, void 0, function () {
            var dummy, dummyFromDb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dummy_1.model.create({ text: 'initial' })];
                    case 1:
                        dummy = _a.sent();
                        return [4 /*yield*/, dummy_1.model.findOne({ text: 'saved' })];
                    case 2:
                        dummyFromDb = _a.sent();
                        chai_1.expect(dummyFromDb).to.have.property('text', 'changed in post findOne hook');
                        return [2 /*return*/];
                }
            });
        }); });
        it('should find the unexpected dummies because of pre and post hooks', function () { return __awaiter(_this, void 0, void 0, function () {
            var dummy, foundDummies;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dummy_1.model.create([{ text: 'whatever' }, { text: 'whatever' }])];
                    case 1:
                        dummy = _a.sent();
                        return [4 /*yield*/, dummy_1.model.find({ text: 'saved' })];
                    case 2:
                        foundDummies = _a.sent();
                        // pre-save-hook changed text to saved
                        chai_1.expect(foundDummies.length).to.be.above(2);
                        chai_1.expect(foundDummies[0]).to.have.property('text', 'changed in post find hook');
                        chai_1.expect(foundDummies[1]).to.have.property('text', 'saved');
                        return [2 /*return*/];
                }
            });
        }); });
        it('should test the updateMany hook', function () { return __awaiter(_this, void 0, void 0, function () {
            var dummy, foundUpdatedDummies;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dummy_1.model.insertMany([{ text: 'foobar42' }, { text: 'foobar42' }])];
                    case 1:
                        dummy = _a.sent();
                        return [4 /*yield*/, dummy_1.model.updateMany({
                                text: 'foobar42',
                            }, {
                                text: 'lorem ipsum',
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, dummy_1.model.find({ text: 'updateManied' })];
                    case 3:
                        foundUpdatedDummies = _a.sent();
                        // pre-updateMany-hook changed text to 'updateManied'
                        chai_1.expect(foundUpdatedDummies.length).to.equal(2);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2hvb2tUZXN0cy9ob29rcy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQXdEQTs7QUF4REEsNkJBQThCO0FBRTlCLGlEQUFnRDtBQUNoRCxpQ0FBeUM7QUFDekMsc0RBQXFEO0FBRXJELFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFDcEIsUUFBUSxDQUFDLE9BQU8sRUFBRTtRQUNoQixNQUFNLENBQUMsY0FBTSxPQUFBLDJCQUFZLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQztRQUU3QixFQUFFLENBQUMsa0VBQWtFLEVBQUU7Ozs7NEJBQ3hELHFCQUFNLHFCQUFJLENBQUMsTUFBTSxDQUFDOzRCQUM3QixRQUFRLEVBQUUsT0FBTzt5QkFDbEIsQ0FBQyxFQUFBOzt3QkFGSSxJQUFJLEdBQUcsU0FFWDt3QkFDRixhQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO3dCQUVuRCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDWCxxQkFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUE3QixTQUFTLEdBQUcsU0FBaUI7d0JBQ25DLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7Ozs7YUFDekQsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFOzs7OzRCQUNwQixxQkFBTSxhQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUE7O3dCQUEvQyxLQUFLLEdBQUcsU0FBdUM7d0JBR2pDLHFCQUFNLGFBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQTs7d0JBQXBELFdBQVcsR0FBRyxTQUFzQzt3QkFDMUQsYUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSw4QkFBOEIsQ0FBQyxDQUFDOzs7O2FBQzlFLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxrRUFBa0UsRUFBRTs7Ozs0QkFDdkQscUJBQU0sYUFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBQTs7d0JBQXhFLEtBQUssR0FBRyxTQUFnRTt3QkFFekQscUJBQU0sYUFBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxFQUFBOzt3QkFBakQsWUFBWSxHQUFHLFNBQWtDO3dCQUV2RCxzQ0FBc0M7d0JBQ3RDLGFBQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNDLGFBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsMkJBQTJCLENBQUMsQ0FBQzt3QkFDOUUsYUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQzs7OzthQUMzRCxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsaUNBQWlDLEVBQUU7Ozs7NEJBQ3RCLHFCQUFNLGFBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUE7O3dCQUE1RSxLQUFLLEdBQUcsU0FBb0U7d0JBRWxGLHFCQUFNLGFBQUssQ0FBQyxVQUFVLENBQUM7Z0NBQ3JCLElBQUksRUFBRSxVQUFVOzZCQUNqQixFQUFFO2dDQUNELElBQUksRUFBRSxhQUFhOzZCQUNwQixDQUFDLEVBQUE7O3dCQUpGLFNBSUUsQ0FBQzt3QkFFeUIscUJBQU0sYUFBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUMsQ0FBQyxFQUFBOzt3QkFBL0QsbUJBQW1CLEdBQUcsU0FBeUM7d0JBRXJFLHFEQUFxRDt3QkFDckQsYUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7YUFDaEQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9