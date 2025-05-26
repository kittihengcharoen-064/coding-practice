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
    `${status} func: \x1b[36m${funcName}\x1b[0m | case: \x1b[34m${JSON.stringify(
      testCase
    )}\x1b[0m | Received: \x1b[33m${JSON.stringify(
      received
    )}\x1b[0m | Expected: \x1b[31m${JSON.stringify(expected)}\x1b[0m`
  );
}

/**
 *
 * @param {Array} value
 * @param {Array} other
 * @returns {boolean}
 */
function checkEqulity(value, other) {
  if (typeof value !== "object" && typeof other !== "object") {
    return Object.is(value, other);
  }

  if (value === null && other === null) {
    return true;
  }

  if (typeof value !== typeof other) {
    return false;
  }

  if (value === other) {
    return true;
  }

  if (Array.isArray(value) && Array.isArray(other)) {
    if (value.length !== other.length) {
      return false;
    }

    for (let i = 0; i < value.length; i++) {
      if (!checkEqulity(value[i], other[i])) {
        return false;
      }
    }

    return true;
  }

  if (Array.isArray(value) || Array.isArray(other)) {
    return false;
  }

  if (Object.keys(value).length !== Object.keys(other).length) {
    return false;
  }

  for (const [k, v] of Object.entries(value)) {
    if (!(k in other)) {
      return false;
    }

    if (!checkEqulity(v, other[k])) {
      return false;
    }
  }

  return true;
}
