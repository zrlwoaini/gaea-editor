import { Row as AntRow, Col as AntCol } from 'antd';
import * as React from 'react';
import { Props, State } from './type';

export class Row extends React.Component<Props, State> {
    public static defaultProps = new Props();
    public state = new State();

    public render() {
        return <AntRow
            align={this.props.align}
            gutter={this.props.gutter}
            style={this.props.style}
        >
            {this.props.children}
        </AntRow>;
    }
}