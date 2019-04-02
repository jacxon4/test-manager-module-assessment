import {ITest} from "../model/ITest";
export interface IOperation {
    perform(test: ITest):string;
}
