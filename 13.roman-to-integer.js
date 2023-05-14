/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	const symbol = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let result = 0;

	for (let i = 0; i < s.length; i++) {
		const curr = symbol[s[i]];
		const next = symbol[s[i + 1]];

		if (curr < next) {
			result += next - curr;
			i++;
		} else {
			result += curr;
		}
	}

	return result;
};

// @lc code=end
