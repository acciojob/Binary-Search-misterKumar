function binarySearch(nums, target) {
	let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // Target found, return the index
    } else if (nums[mid] < target) {
      left = mid + 1; // Adjust left boundary
    } else {
      right = mid - 1; // Adjust right boundary
    }
  }

  return -1; // Target not found
// Your code here
// Return index if target is present
// else return -1
}

module.exports = binarySearch;