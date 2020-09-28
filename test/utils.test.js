// IMPORT MODULES under test here:
import { isThisAYes } from '../isThisAYes.js';

const test = QUnit.test;

test('If input is "yes" is output "true" ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isThisAYes('yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('If input is "no" is output "false" ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isThisAYes('no');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('If input is "yyyyy" is output "true" ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isThisAYes('yyyyy');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('If input is "random text" is output "false" ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isThisAYes('random text');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});