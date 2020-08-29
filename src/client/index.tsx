import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const app = document.querySelector('#app');

// type ReturnAThing = <T>(aThing: T) => T;
// const returnAThing: ReturnAThing = (aThing) => aThing;
//
// const number = returnAThing<number>(5);

interface Props {
  initialCount?: number;
}
interface State {
  counter: number;
}

class Counter extends Component<Props, State> {
  intervalId?: NodeJS.Timeout;

  constructor(props: Props) {
    super(props);

    const { initialCount } = props;

    this.state = {
      counter: initialCount || 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const { counter } = this.state;

      this.setState({
        counter: counter + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const { counter } = this.state;

    return (
      <span>{counter}</span>
    )
  }
}

ReactDOM.render(
  <Counter />,
  app,
);
