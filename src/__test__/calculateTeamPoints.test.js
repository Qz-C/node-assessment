const data = require('./__data__/players.json')
const calculateTeamPoints = require('../calculateTeamPoints')

// Testing using the provided data
describe('calculateTeamPoints', () => {
  it('Should be able to aggregates points by team, and sorts teams in descending order by total points.', async () => {
    const result = calculateTeamPoints(data)
    // check sort
    for (let i = 0; i <= result.length - 2; i++) {
      expect(result[i].points).toBeGreaterThanOrEqual(result[i + 1].points)
    }
  })
})
