import {IOperation} from "./IOperation";
import {ITest} from "../model/ITest";
export class RepeatOperation implements IOperation{
    perform = (test:ITest):string => `Performing Repeat over ${test.name} test typed as  ${test.testType}`
}
