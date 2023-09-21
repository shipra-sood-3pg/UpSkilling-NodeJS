//An interface is a specification identifying a related set of properties and methods.

/*
Interface can be used as a type to strongly type the objects/classes in the system. 

To import an Interface as data typye: import { interfacename } from '{filepath}'

Example : => 

import { ICourse } from "./course";

course: ICourse[] = [];
*/
export interface ICourse {
    id: string;
    courseCode: string;
    courseName: string;
    credits: number;
    duration: string;
    fee: number;
    complexity: number;
}

//Interface can also be used as a feature set to declare a set of methods for a feature as we have in the c# 
/*
--Declaration of interface
export interface  InterfaceName {
    var1: {type};
    methodname+1(param1: {type}, param2: {type}): return_type;
    methodname+2(param1: {type}, param2: {type}): return_type;
}

--Interface inherited by a component object
export class componentClassName implements InterfaceName {
    var1: {type} = {value};

    methodname+1(param1: {type}, param2: {type}): return_type {
        //implementation goes here
    };

    methodname+2(param1: {type}, param2: {type}): return_type {
        //implementation goes here
    };
}
*/  