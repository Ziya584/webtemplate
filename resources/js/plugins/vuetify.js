// src/plugins/vuetify.js

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const opts = {

    theme: {
        dark: false,
        themes: {
            light: {
                primary: "#336092",
            },
            dark: {
                primary: "#336092",
            },
        },
    }
}

export default new Vuetify(opts)