"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = void 0;
const exceptions_1 = require("../helpers/exceptions");
const users_1 = require("../db/users");
const hashing_1 = require("./hashing");
const jwt_1 = require("./jwt");
const authenticateUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, users_1.getUserByEmail)(email);
    if (!user || !(0, hashing_1.checkPassword)(password, user.password)) {
        throw new exceptions_1.CredentialException("incorrect username or password");
    }
    const token = (0, jwt_1.createJWT)((0, jwt_1.createTokenData)(user.id));
    return token;
});
exports.authenticateUser = authenticateUser;
//# sourceMappingURL=auth.js.map