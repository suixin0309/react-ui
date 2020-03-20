import * as React from 'react';
import '../index.scss';
import './table.scss';
// import * as ReactDOM from 'react-dom';
// import {scopedClassMaker} from '../helpers/classnames';

interface Props {
    thList: Array<string>;
    tbodyList: Array<{name: string, type: string, Required:boolean,default:string,Description:string}>;
    // Array<{ name: string, label: string, input: { type: string } }>
}

// const scopedClass = scopedClassMaker('sui-table');
// const sc = scopedClass;

const Table: React.FunctionComponent<Props> = (props) => {
    const listThs = props.thList.map((item) =>
        <th key={item.toString()}>{item}</th>
        );
    const listTds = props.tbodyList.map((item) =>
        <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.Required.toString()}</td>
            <td>{item.default}</td>
            <td>{item.Description}</td>
        </tr>
        );
    const x =
        props.tbodyList ?<table className='demo-api'>
            <thead>
                <tr>{listThs}</tr>
            
            </thead>
            <tbody>
            {listTds}
            </tbody>
        </table>
            :
            <div>暂无属性</div>;
    return x;
};

export default Table;
;