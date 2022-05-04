/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = function(nums, k) {
  const obj = {};
  let count = 0;

  for(let i=0; i< nums.length; i++) {
    if(obj[k - nums[i]] && obj[k - nums[i]] > 0 ) {
      count++;
      obj[k - nums[i]] -= 1;
    } else {
      obj[nums[i]] ? obj[nums[i]] += 1 : obj[nums[i]] = 1;
    }
  }

  return count;

};