import React from 'react';

export interface PromiseWrapperConsumer<T> {
  data?: T
  error?: T
  completed?: boolean
}

interface PromiseWrapperProps<T> {
  data: Promise<T>
  children: React.ReactElement<PromiseWrapperConsumer<T>>
}

interface PromiseWrapperState<T> {
  completed: boolean
  data?: T
  error?: T
}

class PromiseWrapper<T> extends React.Component<PromiseWrapperProps<T>, PromiseWrapperState<T>>{
  constructor(props: PromiseWrapperProps<T>) {
    super(props)
    this.state = {
      completed: false
    }
    props.data.then((data) => {
      this.setState({data, completed: true})
    }, (error) => {
      this.setState({error, completed: true})
    });
  }

  render() {
    const appendedChildren = React.cloneElement(this.props.children, {completed: this.state.completed, data: this.state.data, error: this.state.error})
    return <React.Fragment>{appendedChildren}</React.Fragment>;
  }
}

export {PromiseWrapper}