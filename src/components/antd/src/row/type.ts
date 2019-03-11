import { number } from "prop-types";

export class Props {
    public editSetting = {
        key: 'gaea-row',
        name: '行',
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
                field: 'align',
                text: '对齐方式',
                type: 'select',
                data: [
                    {
                        value: 'top',
                        text: 'top'
                    },
                    {
                        value: 'middle',
                        text: 'middle'
                    },
                    {
                        value: 'bottom',
                        text: 'bottom'
                    }
                ]
            },
            {
                field: 'gutter',
                text: '间隔',
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
    public align: RowAlignType = 'top';
    public gutter: number = 0;
}

export class State { }

type RowAlignType = 'top' | 'middle' | 'bottom';