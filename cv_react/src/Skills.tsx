import React from 'react';
import { Data } from './datatypes';
import { PromiseWrapperConsumer } from './Util';
import Spinner from './components/Spinner';


const Skills: React.FC<PromiseWrapperConsumer<Data>> = ({data, error, completed}) => {
  if (completed && data) {
    const e = Object.keys(data.Skills).map(key => <div>{key}: {data.Skills[key].join(", ")}</div>);
    return <React.Fragment>{e}</React.Fragment>;
  }
  return <Spinner/>;
}

export default Skills;