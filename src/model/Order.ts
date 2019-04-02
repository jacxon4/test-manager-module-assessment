import {ITest} from "./ITest";
export class Order {
    get tests(): ITest[] {
        return this._tests;
    }

    set tests(value: ITest[]) {
        this._tests = value;
    }
    private _tests: ITest[];

    constructor(tests: ITest[]) {
        this._tests = tests;
    }

}