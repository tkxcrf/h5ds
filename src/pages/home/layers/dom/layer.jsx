import React from 'react';

// 设置 dom
export function layerdom(layer, zIndex) {
    return <div className="dom-inner" dangerouslySetInnerHTML={{ __html: layer.data }} />;
}

// 原始数据
export class Origindata {
    constructor() {
        this.id = null;
        this.type = 'dom';
        this.animate = [];
        this.data = '<div>DOM</div>';
        this.estyle = {};
        this.style = {
            width: 200,
            height: 100,
            top: 0,
            left: 0
        };
        this.color = '';
        this.ue = {};
    }
}
