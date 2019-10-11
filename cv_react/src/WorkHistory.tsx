import React from 'react';
import {PromiseWrapperConsumer} from './Util';
import { Data, Work } from './datatypes';
import Spinner from './components/Spinner';

interface WorkHistoryEntryProps {
  entry: Work
}

const WorkHistoryEntry: React.FC<WorkHistoryEntryProps> = ({entry}) => (
  <div>
    <div>{entry.Company}</div>
    <div>{entry.Period}</div>
    <div>{entry.Description}</div>
    <div>{entry.Skills}</div>
  </div>
)

const WorkHistoryList: React.FC<PromiseWrapperConsumer<Data>> = ({data, error, completed}) => {
  if (completed && data) {
    const e = data.Work.map(e => <WorkHistoryEntry key={e.Description} entry={e}/>);
    return <React.Fragment>{e}</React.Fragment>;
  }
  return <Spinner/>;
}

export default WorkHistoryList;