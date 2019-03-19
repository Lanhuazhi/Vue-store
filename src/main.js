// 这个是js 的入口文件


import Vue from "vue"
import app from "./App.vue";
import "./css/index.css";
// 导入 Mui 的样式
import "./lib/dist/css/mui.min.css"

import { Header,Cell} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Cell.name, Cell);


var vm = new Vue({
    el:"#app",
    data:{
        msg:123
    },
    render: function(e){
        return e(app)
    }
})