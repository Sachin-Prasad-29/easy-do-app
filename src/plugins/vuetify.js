import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#448AFF',
                success: '#0F9D58',
                error: '#EF5350',
                ct: '#424242',
            },
            dark: {
                primary: '#448AFF',
                success: '#0F9D58',
                error: '#EF5350',
                ct: '#F5F5F5',
            },
        },
    },
})
