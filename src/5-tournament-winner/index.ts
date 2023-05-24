const team1 = 'HTML'
const team2 = 'Python'
const team3 = 'Rust'

const competitions = [
  [team1, team2],
  [team2, team3],
  [team2, team3],
]

const results = [0,0,1] // team2, team3, team2

const giveWinnerTeam = (competitions: Array<Array<string>>, results: Array<number>): string => {
  const scores: Record<string, number> = {}

  for (const [index, match] of competitions.entries()) {
    scores[match[results[index] === 0 ? 1 : 0]] = (scores[match[results[index] === 0 ? 1 : 0]] ?? 0) + 3
  }

  return Object.entries(scores).reduce((acc, [teamName, teamScore]) => {
    if (teamScore > acc[1]) {
      return [teamName, teamScore]
    }

    return acc
  }, ['none', 0])[0]
}

console.log(giveWinnerTeam(competitions, results))
