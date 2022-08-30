# Testing Framework

Implement the following three functions of a basic JavaScript testing framework:

1. ==describe==
   This function defines a test suite of related test cases. It takes in a string testSuiteName and a callback func , which makes one or more calls to it.
2. ==it==
   This function defines a single test case in a test suite and is called within a describe 's callback func . It takes in a string testCaseName and its own callback func , which makes one or more calls to expect .
3. ==expect==
   This function defines a single check in a test case and is called within an it's callback func . It takes in an arbitrary parameter actual and returns an object with the following three functions that are used to compare actual to other values:
4. ==expect(actual).toExist()==
   This function checks that actual is neither null nor undefined .
5. ==expect(actual).toBe (expected)==
   This function checks that actual is strictly equal to expected
6. ==expect(actual).toBeType(type)==
   This function checks that actual is of the type type , which can be any string returned by the typeof operator.
   As a test suite and its test cases are executed, they should print the following strings:
