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
    let errors: { [key: string]: OneError[] } = {};
    const addError = (key: string, error: OneError) => {
        if (errors[key] === undefined) {
            errors[key] = [];
        }
        errors[key].push(error);
    };

    function hasError(item: [string, string] | [string, undefined]): item is [string, string] {
        return typeof item[1] === 'string';
    }

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
    const flattenErrors = flat<[string, OneError]>(
        Object.keys(errors).map<[string, OneError][]>(key =>
            errors[key].map<[string, OneError]>((error) => [key, error])
        ));
    const newPromises = flattenErrors.map(([key, promiseOrString]) => (
        promiseOrString instanceof Promise ? promiseOrString : Promise.reject(promiseOrString)
    ).then<[string, undefined], [string, string]>(() => [key, undefined], (reason: string) => [key, reason]));


    Promise.all(newPromises).then((res: Array<[string, string] | [string, undefined]>) => {
        callback(zip(res.filter(hasError)));
    });


};
export default Validator;

function flat<T>(array: Array<T | T[]>) {
    const result: T[] = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Array) {   // T[]
            result.push(...array[i] as T[]);
        } else {  //T
            result.push(array[i] as T);
        }
    }

    return result;
}

//kvList=['username':'p1'],['username':'p2'],...]
function zip(kvList: Array<[string, string]>) {
    const result: { [k: string]: string[] } = {};
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
