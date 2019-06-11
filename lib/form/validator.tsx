import {FormValue} from './form';

interface FormRule {
    key: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validator?: (value: string) => Promise<string>
}

type FormRules = Array<FormRule>

// interface FormErrors {
//     [k: string]: string[]
// }

function isEmpty(value: any) {
    return value === undefined || value === null || value === '';
}

export function noError(errors: any) {
    return Object.values(errors).length === 0;
}

type OneError = string | Promise<string>

const Validator = (formValue: FormValue, rules: FormRules, callback: (errors: any) => void): void => {
    let errors: any = {};
    const addError = (key: string, error: OneError) => {
        if (errors[key] === undefined) {
            errors[key] = [];
        }
        errors[key].push(error);
    };
    rules.map(async rule => {
        const value = formValue[rule.key];
        if (rule.required && isEmpty(value)) {
            addError(rule.key, 'required');
        }
        if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
            addError(rule.key, 'minLength');
        }
        if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
            addError(rule.key, 'maxLength');
        }
        if (rule.pattern && !isEmpty(value) && !(rule.pattern.test(value))) {
            addError(rule.key, 'pattern');
        }
        if (rule.validator) {
            const promise = rule.validator(value);
            addError(rule.key, promise);
        }
    });
    const flattenErrors = flat(
        Object.keys(errors).map(key =>
        errors[key].map((promise: Promise<string>) => [key, promise])
    ));
    console.log(flattenErrors);
    console.log('flattenErrors');
    const newPromises = flattenErrors.map(([key, promiseOrString]) => (
        promiseOrString instanceof Promise ? promiseOrString : Promise.reject(promiseOrString)
    ).then(() => [key, undefined], (reason: string) =>[key, reason]));
    console.log(newPromises);
    console.log('newPromises');
    Promise.all(newPromises).then((res:Array<[string,string]>) => {
        callback(zip(res.filter(item => item[1])));
    });

};
export default Validator;

function flat(array: Array<[any]>) {
    const result= [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Array) {
            result.push(...array[i]);
        } else {
            result.push(array[i]);
        }
    }

    return result;
}

//kvList=['username':'p1'],['username':'p2'],...]
function zip(kvList: Array<[string, string]>) {
    const result:{[k:string]:[string]} = {};
    kvList.map(([key, value]) => {
        result[key] = result[key] || [];
        result[key].push(value);
    });
    return result;
}

//
// function fromEntries(array: Array<[string, string[]]>) {
//     const result: { [key: string]: string[] } = {};
//     for (let i = 0; i < array.length; i++) {
//         result[array[i][0]] = array[i][1];
//     }
//     return result;
// }
