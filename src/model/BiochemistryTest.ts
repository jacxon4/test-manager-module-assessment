import {TestType} from "../shared/enum/TestType";
import {IOperation} from "../operation/IOperation";
import {ITest} from "./ITest";

export class BiochemistryTest implements ITest {
    private _testType:TestType;
    private _name:string;
    private _bioChemistryTestProp: string;

    constructor(testProp: string, bioChemistryTestProp: string) {
        this._name = testProp;
        this._testType = TestType.Biochemistry;
        this._bioChemistryTestProp = bioChemistryTestProp;
    }


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
    get bioChemistryTestProp(): string {
        return this._bioChemistryTestProp;
    }

    set bioChemistryTestProp(value: string) {
        this._bioChemistryTestProp = value;
    }


    accept = (operation: IOperation) => operation.perform(this);


}
