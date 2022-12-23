import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#03A9F4',
                success: '#0F9D58',
                error: '#EF5350',
                ct: '#757575',
            },
            dark: {
                primary: '#03A9F4',
                success: '#0F9D58',
                error: '#EF5350',
                ct: '#F5F5F5',
            },
        },
    },
})
