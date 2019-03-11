import { number } from "prop-types";

export class Props {
    public editSetting = {
        key: 'gaea-col',
        name: '列',
        isContainer: true,
        editors: [
            'Layout',
            {
                type: 'display'
            },
            {
                type: 'box-editor'
            },
            'Function',
            {
                field: 'offset',
                text: '左侧间隔',
                type: 'number',
            },
            {
                field: 'order',
                text: '栅格顺序',
                type: 'number'
            },
            {
                field: 'pull',
                text: '左移格数',
                type: 'number'
            },
            {
                field: 'push',
                text: '右移格数',
                type: 'number'
            },
            {
                field: 'span',
                text: '占位格数',
                type: 'number'
            },
            'Style',
            {
                field: 'style.backgroundColor',
                text: '背景色',
                type: 'color'
            },
            {
                field: 'style.height',
                text: '高度',
                type: 'string',
            },
            {
                field: 'style.opacity',
                text: '透明度',
                type: 'number',
                data: {
                    useSlider: true,
                    step: 1,
                    inputRange: [0, 100],
                    outputRange: [0, 1]
                }
            }
        ]
    };

    public style: React.CSSProperties = {
        height: '100px'
    };
    public offset: number = 0;
    public order: number = 0;
    public pull: number = 0;
    public push: number = 0;
    public span: number = 8;
}

export class State { }