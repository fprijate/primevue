import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/accordion',
        name: 'accordion',
        component: () => import('./views/accordion/AccordionDemo.vue')
    },
    {
        path: '/button',
        name: 'button',
        component: () => import('./views/button/ButtonDemo.vue')
    },
    {
        path: '/card',
        name: 'card',
        component: () => import('./views/card/CardDemo.vue')
    },
    {
        path: '/checkbox',
        name: 'checkbox',
        component: () => import('./views/checkbox/CheckboxDemo.vue')
    },
    {
        path: '/fieldset',
        name: 'fieldset',
        component: () => import('./views/fieldset/FieldsetDemo.vue')
    },
    {
        path: '/flexgrid',
        name: 'flexgrid',
        component: () => import('./views/flexgrid/FlexGridDemo.vue')
    },
    {
        path: '/inputtext',
        name: 'inputtext',
        component: () => import('./views/inputtext/InputTextDemo.vue')
    },
    {
        path: '/listbox',
        name: 'listbox',
        component: () => import('./views/listbox/ListboxDemo.vue')
    },
    {
        path: '/panel',
        name: 'panel',
        component: () => import('./views/panel/PanelDemo.vue')
    },
    {
        path: '/radiobutton',
        name: 'radiobutton',
        component: () => import('./views/radiobutton/RadioButtonDemo.vue')
    },
    {
        path: '/selectbutton',
        name: 'selectbutton',
        component: () => import('./views/selectbutton/SelectButtonDemo.vue')
    },
    {
        path: '/textarea',
        name: 'textarea',
        component: () => import('./views/textarea/TextareaDemo.vue')
    },
    {
        path: '/tabview',
        name: 'tabview',
        component: () => import('./views/tabview/TabViewDemo.vue')
    },
    {
        path: '/togglebutton',
        name: 'togglebutton',
        component: () => import('./views/togglebutton/ToggleButtonDemo.vue')
    },
    {
        path: '/toolbar',
        name: 'toolbar',
        component: () => import('./views/toolbar/ToolbarDemo.vue')
    }
  ]
});
