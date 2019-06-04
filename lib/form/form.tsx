import * as React from 'react';
import {FormHTMLAttributes, ReactFragment} from 'react';
import Input from '../input/input';
import classes from '../helpers/classnames';
import './form.scss';

export interface FormValue {
    [k: string]: any
}

interface Props extends FormHTMLAttributes<HTMLFormElement>{
    value: FormValue;
    fields: Array<{ name: string, label: string, input: { type: string } }>;
    buttons: ReactFragment;
    onSubmit: React.FormEventHandler<HTMLFormElement>,
    onChange: (value: FormValue) => void,
    errors: { [k: string]: string[] },
    errorsDisplayMode?: 'first' | 'all',
    transformError?: (message: string) => string
}

const Form: React.FunctionComponent<Props> = (props) => {
    const formData = props.value;
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        props.onSubmit(e);
    };
    const onInputChange = (name: string, value: string) => {
        const newFormValue = {...formData, [name]: value};
        props.onChange(newFormValue);
    };
    const transformError = (message: string) => {
        const map: any = {
            unique:'重复',
            required: '必填',
            minLength: '太短',
            maxLength: '太长',
            pattern: '格式错误'
        };
        return props.transformError && props.transformError(message) || map[message] || '未知错误';
    };
    return (
        <form onSubmit={onSubmit}>
            <table className='sui-form-table'>
                <tbody>
                {props.fields.map(f =>
                    <tr className={classes('sui-form-tr')} key={f.name}>
                        <td className='sui-form-td'>
                            <span className='sui-form-label'> {f.label}</span>
                        </td>
                        <td className='sui-form-td'>
                            <Input className='sui-form-input' type={f.input.type} value={formData[f.name]}
                                   onChange={(e) => {onInputChange(f.name, e.target.value);}}
                            />

                            <div className='sui-form-error'>
                                {props.errors[f.name] ?
                                    (props.errorsDisplayMode === 'first' ?
                                        transformError(props.errors[f.name][0]) :
                                        props.errors[f.name].map(transformError!).join())
                                    :
                                    <span>&nbsp;</span>}
                            </div>
                        </td>

                    </tr>
                )}
                <tr className='sui-form-tr'>
                    <td className='sui-form-td'/>
                    <td className='sui-form-td'>{props.buttons}</td>
                </tr>
                </tbody>
            </table>

        </form>
    );
};
Form.defaultProps = {
    errorsDisplayMode: 'first'
};
export default Form;