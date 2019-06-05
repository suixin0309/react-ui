import * as React from 'react';
import Button from './button';

const ButtonExample:React.FunctionComponent=()=> {
    return (
        <div>
            <Button level='normal' type='button'>Default</Button>
            <Button level='important' type='submit'>important</Button>
            <Button level='danger' type='button'>danger</Button>
        </div>
    );
}

export default ButtonExample;