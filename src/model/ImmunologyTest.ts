import {TestType} from "../shared/enum/TestType";
import {IOperation} from "../operation/IOperation";
import {ITest} from "./ITest";
export class ImmunologyTest implements ITest {
    private _testType:TestType;
    private _name:string;
    private _inmunologyTestProp: string;

    get testType() {
        return this._testType;
    }

    set testType(value:TestType) {
        this._testType = value;
    }

    get name() {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }

    get inmunologyTestProp(): string {
        return this._inmunologyTestProp;
    }

    set inmunologyTestProp(value: string) {
        this._inmunologyTestProp = value;
    }


    constructor(testProp: string, inmunologyTestProp: string) {
        this.name = testProp;
        this.testType = TestType.Immunology;
        this._inmunologyTestProp = inmunologyTestProp;
    }

    public accept = (operation: IOperation) => operation.perform(this);
}