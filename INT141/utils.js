export function p(...x) {
  console.log(...x);
}

/**
 * Runs test cases on a given function.
 *
 * @param {(input: any) => any} condition - Function to be tested.
 * @param {Array<[any, any]>} cases - Array of test cases in [input, expectedOutput] format.
 */
export function test(condition, cases) {
  if (typeof condition !== "function") {
    throw new Error("First argument must be a function.");
  }
  if (!Array.isArray(cases)) {
    throw new Error("Second argument must be an array of test cases.");
  }

  for (const [testCase, expectedOutput] of cases) {
    try {
      const result = condition.call(null, ...testCase);
      const success = checkEqulity(result, expectedOutput);
      logTestResult(condition.name, testCase, result, expectedOutput, success);
    } catch (error) {
      console.error(
        `Error executing function ${condition.name} with input ${testCase}:`,
        error
      );
    }
  }
}

/**
 * Logs the result of a test case.
 */
function logTestResult(funcName, testCase, received, expected, success) {
  const status = success ? "✅" : "❌";
  p(
    `${status} func: \x1b[36m${funcName}\x1b[0m | case: \x1b[34m${JSON.stringify(testCase)}\x1b[0m | Received: \x1b[33m${JSON.stringify(received)}\x1b[0m | Expected: \x1b[31m${JSON.stringify(expected)}\x1b[0m`
  );
}

/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {boolean}
 */
function checkEqulity(left, right) {
  if (
    Array.isArray(left) &&
    Array.isArray(right) &&
    left.length == right.length
  ) {
    return left.every((l, i) => l === right[i]);
  } else if (
    typeof left === "object" &&
    left !== null &&
    typeof right === "object" &&
    right !== null
  ) {
    return Object.entries(left).every(([key, value]) => right[key] == value);
  }
  return left === right;
}
