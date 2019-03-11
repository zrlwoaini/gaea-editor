import { Affix as AntAffix } from 'antd';
import * as React from 'react';
import { Props, State } from './type';

export class Affix extends React.Component<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    return (
      <AntAffix
        offsetBottom={this.props.offsetBottom}
        offsetTop={this.props.offsetTop}
        target={this.props.target}
        onChange={this.props.onChange}
      >
        {this.props.children}
      </AntAffix>
    );
  }
}
