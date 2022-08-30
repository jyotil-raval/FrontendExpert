# Testing Framework

Implement the following three functions of a basic JavaScript testing framework:

1. **describe:**

   This function defines a test suite of related test cases. It takes in a string testSuiteName and a callback func, which makes one or more calls to it.

2. **it:**

   This function defines a single test case in a test suite and is called within a describe's callback func. It takes in a string testCaseName and its own callback func, which makes one or more calls to expect.

3. **expect:**

   This function defines a single check in a test case and is called within an it's callback func. It takes in an arbitrary parameter actual and returns an object with the following three functions that are used to compare actual to other values:

   1. _expect(actual).toExist():_

      This function checks that actual is neither null nor undefined.

   2. _expect(actual).toBe (expected):_

      This function checks that actual is strictly equal to expected.

   3. _expect(actual).toBeType(type):_

      This function checks that actual is of the type type , which can be any string returned by the typeof operator.

As a test suite and its test cases are executed, they should print the following strings:

```javascript
// When a test suite begins:
'beginning test suite {testSuiteName}';

// When a test suite successfully completes:
'successfully completed test suite {testSuiteName}';

// When a test case begins:
'beginning test case {testCaseName}';

// When a test case successfully completes:
'successfully completed test case {testCaseName}';

// When a test suite fails (because a check in one of its test cases fails):
'failed running test suite {testSuiteName} on test case {testCaseName} with error message {errorMessage}';

// When `expect(actual).toExist() ' fails, 'errorMessage' should be:
'expected value to exist but got {actual}';

// When `expect(actual).toBe (expected)' fails, 'errorMessage
'expected {actual} to be {expected}';

// When `expect(actual).toBeType (type)' fails, 'errorMessage' should be:
'expected {actual} to be of type {type} but got {typeOfActual}';
```
