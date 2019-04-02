import {TestType} from "../shared/enum/TestType";
import {IOperation} from "../operation/IOperation";
import {ITest} from "./ITest";
export class MicrobiologyTest implements ITest {
    private _testType:TestType;
    private _name:string;
    private _microbiologyTestProp: string;

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

    get microbiologyTestProp(): string {
        return this._microbiologyTestProp;
    }

    set microbiologyTestProp(value: string) {
        this._microbiologyTestProp = value;
    }


    constructor(testProp: string, microbiologyTestProp: string) {
        this.name = testProp;
        this.testType = TestType.Microbiology;
        this._microbiologyTestProp = microbiologyTestProp;
    }

    public accept = (operation: IOperation) => operation.perform(this);
}
