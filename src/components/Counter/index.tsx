import * as React from "react";
import "./styles.css";

export interface ICounterProps {
  count?: ICounterState;
}

export interface ICounterState {
  count: number;
}

export default class Counter extends React.Component<
  ICounterProps,
  ICounterState
> {
  constructor(props: ICounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = (): any => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };

  decrement = (): any => {
    const { count } = this.state;
    this.setState({
      count: count - 1,
    });
  };

  renderColor = (): any => {
    const { count } = this.state;

    if (count > 0) {
      return "positive";
    } else if (count < 0) {
      return "negative";
    }

    return "";
  };

  public render() {
    const { count } = this.state;

    return (
      <div className="container">
        <div className="d-flex flex-column align-items-center w-50">
          <h1 className={`number ${this.renderColor()}`}>{count}</h1>
          <div className="d-flex justify-content-between w-50">
            <button
              className="btn-acrescentar"
              onClick={() => {
                this.increment();
              }}
            >
              Incrementar
            </button>
            <button
              className="btn-diminuir"
              onClick={() => {
                this.decrement();
              }}
            >
              Diminuir
            </button>
          </div>
        </div>
      </div>
    );
  }
}
