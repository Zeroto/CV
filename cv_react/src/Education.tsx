import React from 'react';
import {PromiseWrapperConsumer} from './Util';
import { Data, Education } from './datatypes';
import Spinner from './components/Spinner';

interface EducationEntryProps {
  entry: Education
}

const EducationEntry: React.FC<EducationEntryProps> = ({entry}) => (
  <div>
    <div>{entry.Description}</div>
    <div>{entry.Location}</div>
    <div>{entry.Period}</div>
  </div>
)

const EducationList: React.FC<PromiseWrapperConsumer<Data>> = ({data, error, completed}) => {
  if (completed && data) {
    const e = data.Education.map(e => <EducationEntry entry={e}/>);
    return <React.Fragment>{e}</React.Fragment>;
  }
  return <Spinner/>;
}

export default EducationList;