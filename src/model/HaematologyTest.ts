import {TestType} from "../shared/enum/TestType";
import {IOperation} from "../operation/IOperation";
import {ITest} from "./ITest";
export class HaematologyTest implements ITest {
    private _testType:TestType;
    private _name:string;
    private _haematologyTestProp: string;

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
    get haematologyTestProp(): string {
        return this._haematologyTestProp;
    }

    set haematologyTestProp(value: string) {
        this._haematologyTestProp = value;
    }


    constructor(testProp: string, haematologyTestTestProp: string) {
        this.name = testProp;
        this.testType = TestType.Haematology;
        this._haematologyTestProp = haematologyTestTestProp;
    }

    public accept = (operation: IOperation) => operation.perform(this);

}
