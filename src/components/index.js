import Vue from 'vue';

import MainNavItem from './nav/main-nav-item';
import MainNav from './nav/main-nav';
import Image from './image/image';
import NewsList from './news/news-list';
import Modal from './modal/modal';

Vue.component('app-main-nav', MainNav);
Vue.component('app-main-nav-item', MainNavItem);
Vue.component('app-image', Image);
Vue.component('app-news-list', NewsList);
Vue.component('app-modal', Modal);
