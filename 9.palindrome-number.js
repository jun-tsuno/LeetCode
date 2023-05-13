/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	const originalArr = String(x)
		.split('')
		.map((ele) => Number(ele));
	const reversedArr = [...originalArr].reverse();

	for (let i = 0; i < originalArr.length - 1; i++) {
		if (originalArr[i] !== reversedArr[i]) {
			return false;
		}
	}
	return true;
};

// @lc code=end
