import { Row as AntRow, Col as AntCol } from 'antd';
import * as React from 'react';
import { Props, State } from './type';

export class Col extends React.Component<Props, State> {
    public static defaultProps = new Props();
    public state = new State();

    public render() {
        return <AntCol
            offset={this.props.offset}
            order={this.props.order}
            pull={this.props.pull}
            push={this.props.push}
            span={this.props.span}
            style={this.props.style}
        >
            {this.props.children}
        </AntCol>;
    }
}