# Test Manager Module Assesment

> Boilerlate extracted from [https://github.com/jsynowiec/node-typescript-boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate)

### Case Description


A Laboratory Information System  (LIS) is a software which responsibility is providing a set of interfaces and tools for lab technicians to perform their day to day tasks in a Clinical Laboratory.
Usually patients go to the hospital (or primary care center) for sample (e.g. blood) collection. The sample depending on the sample type is placed in a container (e.g. a tube for blood or serum) and the container is labeled for ensuring the proper assignation to the patient. Once the container with the sample arrives to the laboratory, it is registered in the LIS as an Order which contains the collection of Tests (glucose, sodium, hemoglobin, etc) to be performed on a Patient’s sample (those tests were previously “ordered” by a clinician to the patient).


Tests can be of different types, for instance:


- Biochemistry
- Immunology
- Microbiology
- Hematology


A Test has a set of common properties, plus specific properties depending on the test type.Also different operations can be applied over Tests of a given Order, and the same type of operation (e.g. a calculation) can vary based on the type of tests.
These operations are managed by the ``Test Manager Module``.
Stakeholders might ask to add new type of operations to be performed over the tests of an order, so the system should be flexible to add new operation types, which as said before, might differ depending on the test type.


### Pattern chosen
The chosen pattern is the [Visitor pattern](https://www.codeproject.com/Articles/186185/Visitor-Design-Pattern) as it's main purpose is to detach the model (also called Elements) from the operations (also called Visitors) that may be applied to it.
As Tests may have different types, and the same operation performed over them differ on the implementation, the visitor pattern ensures that each operation gather all possible implementation in a cohesive approach.


Depending on the technology, specific method can be implemented for each Operation - Test type pair or using polymorphism to identify them. As a demonstration purpose, this project use the same signature for any of the operations over different Test types

By using the Visitor pattern, the next quality attributes are achieved:

- Extensibility: New operations can be added without needing to change the core of the application. For each new operation, a new class should be implemented covering each Test type without the need to modify the model

- Maintainability: Developers can easily add new operations to be applied over the tests of an order. By creating the new operation class, it will be available for any Test type as interfaces will be maintained


### UML diagram

![Test Manager module](https://github.com/jantoniocanizares/TestManagerModuleAssesment/blob/master/src/shared/assets/Test_Manager_Module.png)

### How to start project
The project does not have a runnable code as it only depicts the structure, model and pattern implementation, but instead a test for each operation implemented as an example verifies that fulfills the requirements.
To execute the test, trough a console execute the next sentence on the root folder

```javascript
npm run test
```

See `package.json` for more scripts

#### Project structure
```
Test Manager Module
`-- src                     <Source code root folder>
    |-- model               <Order and test model definition>
    |-- operation           <Operations that can be performed over Tests>
    `-- shared
        `-- enum            <Enumerations needed. Currently Test types>
```
