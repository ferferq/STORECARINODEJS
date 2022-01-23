"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresCategoriesRepository = void 0;
var AppError_1 = require("../../../../errors/AppError");
var PostgresCategoriesRepository = /** @class */ (function () {
    function PostgresCategoriesRepository() {
    }
    PostgresCategoriesRepository.prototype.findByName = function (name) {
        throw new AppError_1.AppError("Method not implemented.");
    };
    PostgresCategoriesRepository.prototype.list = function () {
        throw new AppError_1.AppError("Method not implemented.");
    };
    PostgresCategoriesRepository.prototype.create = function (_a) {
        var name = _a.name, description = _a.description;
        throw new AppError_1.AppError("Method not implemented.");
    };
    return PostgresCategoriesRepository;
}());
exports.PostgresCategoriesRepository = PostgresCategoriesRepository;
//# sourceMappingURL=PostgresCategoriesRepository.js.map