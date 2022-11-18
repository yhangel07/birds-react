"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const birdController_1 = require("../controllers/birdController");
const router = express_1.default.Router();
router.get('/birds', birdController_1.getListOfBirds);
router.get('/birds/:id', birdController_1.getBirdDetails);
exports.default = router;
