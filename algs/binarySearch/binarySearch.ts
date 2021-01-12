function binarySearch(searchVal: number, arr: number[], start = 0, end = arr.length - 1): number|null {
  const mid = Math.floor((start + end) / 2)

  if (searchVal === arr[mid]) {
    return mid
  } else {
    if (searchVal > arr[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }

    if (end < start) {
      return null
    } else {
      return binarySearch(searchVal, arr, start, end)
    }
  }
}

module.exports = binarySearch
