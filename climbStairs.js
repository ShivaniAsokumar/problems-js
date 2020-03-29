/**
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you    climb to the top?
 * @param{number} n is the number of stairs you are climbing
 * @returns{number} the number of ways you can climb a stair
 */
function climbStairs(n) {
	let stairsObject = {
		1: 1,
		2: 2,
		3: 3
	};

	if (stairsObject[n]) {
		return stairsObject[n];
	}

	for (let i = 4; i <= n; i++) {
		stairsObject[i] = stairsObject[i - 1] + stairsObject[i - 2];
	}

	return stairsObject[n];
}
