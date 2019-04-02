import {IOperation} from "../operation/IOperation";
import {TestType} from "../shared/enum/TestType";
export interface ITest {
    testType: TestType;
    name: string;
    accept(operation: IOperation):string;
}

