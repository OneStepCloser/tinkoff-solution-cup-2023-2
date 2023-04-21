import React, {FC} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {decrement, increment} from '../../store/counter.slice';
import type {RootState} from '../../store/store';

export const WeatherPage: FC = (props) => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            Hey ya! I'm the weather
            <br/>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    );
};