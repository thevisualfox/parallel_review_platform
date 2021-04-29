import $ from 'jquery';
import 'parsleyjs';

const parsleyConfig = {
    errorClass: 'is-error',
    excluded: 'input[type=button], input[type=submit], input[type=reset], input[type=hidden], [disabled], :hidden',
    successClass: 'is-success'
};

$('form:not([novalidate])').parsley(parsleyConfig);
