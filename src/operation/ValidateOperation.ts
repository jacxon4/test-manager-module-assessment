import {IOperation} from "./IOperation";
import {ITest} from "../model/ITest";
export class ValidateOperation implements  IOperation{
    perform = (test:ITest):string => `Performing Validate over ${test.name} test typed as  ${test.testType}`
}
