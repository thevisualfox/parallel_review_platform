import $ from 'jquery';
import Parsley from 'parsleyjs';

import 'parsleyjs/dist/i18n/nl';

var parsleyConfig = {
    errorClass: 'is-error',
    excluded: 'input[type=button], input[type=submit], input[type=reset], input[type=hidden], [disabled], :hidden',
    successClass: 'is-success'
};

Parsley.addMessages('nl', {
    mincheck: 'Selecteer tenminste %s optie(s).',
    maxcheck: 'Selecteer maximaal %s optie(s).',
    check: 'Selecteer tussen %s en %s optie(s).'
}).setLocale(document.documentElement.lang);

$('form:not([novalidate])').parsley(parsleyConfig);
