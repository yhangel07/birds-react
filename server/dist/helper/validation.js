"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.empty = exports.isEmpty = exports.validatePassword = exports.isValidEmail = exports.comparePassword = exports.hashPassword = void 0;
/* eslint-disable camelcase */
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// import env from '../env';
/**
   * Hash Password Method
   * @param {string} password
   * @returns {string} returns hashed password
   */
const saltRounds = 10;
const salt = bcryptjs_1.default.genSaltSync(saltRounds);
const hashPassword = (password) => bcryptjs_1.default.hashSync(password, salt);
exports.hashPassword = hashPassword;
/**
   * comparePassword
   * @param {string} hashPassword
   * @param {string} password
   * @returns {Boolean} return True or False
   */
const comparePassword = (hashedPassword, password) => {
    return bcryptjs_1.default.compareSync(password, hashedPassword);
};
exports.comparePassword = comparePassword;
/**
   * isValidEmail helper method
   * @param {string} email
   * @returns {Boolean} True or False
   */
const isValidEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
};
exports.isValidEmail = isValidEmail;
/**
   * validatePassword helper method
   * @param {string} password
   * @returns {Boolean} True or False
   */
const validatePassword = (password) => {
    if (password.length <= 8 || password === '') {
        return false;
    }
    return true;
};
exports.validatePassword = validatePassword;
/**
   * isEmpty helper method
   * @param {string, integer} input
   * @returns {Boolean} True or False
   */
const isEmpty = (input) => {
    if (input === undefined || input === '') {
        return true;
    }
    if (input.toString().replace(/\s/g, '').length) {
        return false;
    }
    return true;
};
exports.isEmpty = isEmpty;
/**
   * empty helper method
   * @param {string, integer} input
   * @returns {Boolean} True or False
   */
const empty = (input) => {
    if (input === undefined || input === '') {
        return true;
    }
};
exports.empty = empty;
