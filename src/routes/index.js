import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import UserView from '../views/UserView';
import ItemView from '../views/ItemView';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
          path: '/',
          redirect: '/news',
        },
        {
            // path : url 주소
            path: '/news',
            // url 주소로 갔을 때 표시될 컴포넌트
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/user',
            component: UserView,
        },
        {
            path: '/item',
            component: ItemView,
        },
    ]
});