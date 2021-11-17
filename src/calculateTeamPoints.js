// Given an array of players
// returns a sorted array of teams with the total team points for active players.
// The output is sorted in descending order by points
// input: [{ team: 'green', name: 'Bob', points: 5, isActive: true }, ...]
// output: [{ team: 'green', points: 40 }, ...]

const calculateTeamPoints = (players) => {
  const result = new Map()

  players.forEach((player) => {
    if (!result.has(player.team)) {
      result.set(player.team, 0)
    }

    if (player.isActive) {
      const previousPoints = result.get(player.team)
      result.delete(player.team)
      result.set(player.team, previousPoints + player.points)
    }
  })

  return mergeSort(Array.from(result, ([team, points]) => ({ team, points })))
}

// Merge sort algorithm
const merge = (left, right) => {
  const result = []

  while (left.length && right.length) {
    if (left[0].points > right[0].points) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  return [...result, ...left, ...right]
}

const mergeSort = (array) => {
  const middle = array.length / 2

  if (array.length === 1) {
    return array
  }

  const left = array.slice(0, middle)
  const right = array.slice(middle, array.length)
  return merge(mergeSort(left), mergeSort(right))
}

module.exports = calculateTeamPoints
