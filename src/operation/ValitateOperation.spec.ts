import {Order} from "../model/Order";
import {BiochemistryTest} from "../model/BiochemistryTest";
import {ValidateOperation} from "./ValidateOperation";
import {HaematologyTest} from "../model/HaematologyTest";
import {ImmunologyTest} from "../model/ImmunologyTest";
import {MicrobiologyTest} from "../model/MicrobiologyTest";
import {IOperation} from "./IOperation";
import {ITest} from "../model/ITest";

describe("Order tests should", () => {
    test("Accept Validate operation", () => {

        const operation: IOperation = new ValidateOperation();
        const order: Order = new Order([
            new BiochemistryTest("BIO1", "Biochemistry prop"),
            new HaematologyTest("HEM1", "Haematology prop"),
            new ImmunologyTest("IMM1", "Immunology prop"),
            new MicrobiologyTest("MIC1", "Microbiology prop"),
        ]);
        order.tests.forEach((test:ITest) => {
            expect(test.accept(operation)).toEqual(`Performing Validate over ${test.name} test typed as  ${test.testType}`);
        });
    });
});