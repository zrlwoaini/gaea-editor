import * as React from 'react';
import Component from '../src/index';

class Props {}

class State {}

export default class Page extends React.PureComponent<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    return (
      <Component
        // disableBuiltInPlugin={['preview']}
        // preComponents={[
        //   {
        //     gaeaKey: 'gaea-button',
        //     components: [
        //       {
        //         name: 'gaea-button1',
        //         props: { text: '123' }
        //       },
        //       {
        //         name: 'gaea-button2',
        //         props: { text: '456' }
        //       }
        //     ]
        //   }
        // ]}
        onSave={data => {
          // tslint:disable-next-line:no-console
          console.log(JSON.stringify(data, null, 2));
        }}
        locale="zh"
      />
    );
  }
}
