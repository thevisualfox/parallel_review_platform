import React from 'react';
import { transform } from '@babel/core';
import renderer from 'react-test-renderer';

describe('Starter Kit', () => {
    test('Transforms ES6', () => {

        // Template literals are introduced in ES2015 (ES6)
        const transformedCode = transform('`Lorem ipsum`');

        expect(transformedCode.code).toBe('"use strict";\n\n"Lorem ipsum";');
    });

    test('Renders React', () => {
        const Component = (props) => (
            <div>
                <p>{props.text}</p>
            </div>
        );

        const tree = renderer
            .create(<Component text="Lorem ipsum" />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
