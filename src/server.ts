import test from "@/test";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.TEST_ENV);
const testing = test();
console.log(testing);
