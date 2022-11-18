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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBirdDetails = exports.getListOfBirds = void 0;
const status_1 = require("../helper/status");
const fs_1 = __importDefault(require("fs"));
const getListOfBirds = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const birdRaw = fs_1.default.readFileSync('bird.json');
        const birdJson = JSON.parse(birdRaw.toString());
        status_1.successMessage.data = birdJson;
        return res.status(status_1.status.success).send(status_1.successMessage);
    }
    catch (error) {
        status_1.errorMessage.error = 'ERROR: ' + error;
        return res.status(status_1.status.error).send(status_1.errorMessage);
    }
});
exports.getListOfBirds = getListOfBirds;
const getBirdDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const birdRaw = fs_1.default.readFileSync('bird.json');
        const birdJson = JSON.parse(birdRaw.toString());
        if (birdJson && birdJson.birds.length != 0) {
            status_1.successMessage.data = birdJson.birds[parseInt(id) - 1];
            return res.status(status_1.status.success).send(status_1.successMessage);
        }
        else {
            throw "Bird Id not found";
        }
    }
    catch (error) {
        status_1.errorMessage.error = 'ERROR: ' + error;
        return res.status(status_1.status.error).send(status_1.errorMessage);
    }
});
exports.getBirdDetails = getBirdDetails;
