export class Props {
  public editSetting = {
    key: 'gaea-Affix',
    name: 'Affix固钉',
    isContainer: true,
    editors: [
      'Layout',
      {
        type: 'box-editor'
      },
      'Function',
      {
        field: 'offsetBottom',
        text: '距离底部距离',
        type: 'number'
      },
      {
        field: 'offsetTop',
        text: '距离头部距离',
        type: 'number'
      },
      {
        field: 'target',
        text: 'Target',
        type: 'string'
      }
    ],
    events: [
      {
        text: '固定状态改变时',
        field: 'onChange'
      }
    ]
  };

  public style: React.CSSProperties = {};
  public offsetBottom: number = 0;
  public offsetTop: number = 0;
  public target: any = null;
  public onChange = () => {
    //
  };
}

export class State {}
