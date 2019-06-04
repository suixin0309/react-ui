import * as React from 'react';
import Form, {FormValue} from './form';
import {Fragment, useState} from 'react';
import Validator, {noError} from './validator';
import Button from '../button/button';
import './form.example.scss';

const usernames = ['frank', 'jack', 'jack', 'frankfrank', 'alice', 'bob'];
const checkUserName = (username: string, succeed: (res: string) => any, fail: (rej: string) => any) => {
    setTimeout(() => {
        if (usernames.indexOf(username) >= 0) {
            succeed('fail');
            //return false
        } else {
            succeed('succeed');
            //return true
        }
    }, 3000);
};
const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        userName: '',
        password: ''
    });
    const [fields] = useState([
        {name: 'userName', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ]);
    const [errors, setErrors] = useState({});

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const rules = [
            {key: 'userName', required: true},
            {key: 'userName', minLength: 2, maxLength: 5},
            {key: 'userName', pattern: /^[A-Za-z0-9]+$/},
            {
                key: 'userName', validator: {
                    name: 'unique',
                    validate(username: string) {
                        return new Promise<any>((resolve, reject) => {
                            checkUserName(username, resolve, reject);
                        });
                    }
                }
            },
            {key: 'password', required: true, pattern: /^[A-Za-z0-9]+$/}
        ];
        Validator(formData, rules, (errors) => {
            setErrors(errors);
            if (noError(errors)) {

            }
        });


    };
    const transformError = (message: string) => {
        const map: any = {
            unique: 'username is taken',
            // required: 'required',
            minLength: 'too short',
            maxLength: 'too long',
        };
        return map[message];
    };
    return (
        <Form value={formData} fields={fields}
              buttons={
                  <Fragment>
                      <Button level='important' type="submit">提交</Button>
                  </Fragment>
              }
              onSubmit={onSubmit}
              onChange={(newValue) => setFormData(newValue)}
              errors={errors}
              transformError={transformError}
        />

    );
};
export default FormExample;