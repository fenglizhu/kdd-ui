# kdd-ui

## Install
```
npm install kdd-ui
```

## Vue使用

```
import KddUI from 'kdd-ui';
Vue.use(KddUI)
```

## 组件使用

### 九宫格图片
```
<kdd-picture 
    :pictures="pictures" 
    :radius="true"
    @click="clickHandler">
</kdd-picture>

// 图片集合
pictures: [
    'https://www.zhufengli.com/wp-content/uploads/2021/12/cover.jpg',
    'https://www.zhufengli.com/wp-content/uploads/2021/12/cover.jpg',
    'https://www.zhufengli.com/wp-content/uploads/2021/12/cover.jpg'
]

/**
* url: 当前点击图片地址
* index: 下标
*/
clickHandler(url, index) {

}

```