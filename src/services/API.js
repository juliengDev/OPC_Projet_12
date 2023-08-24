export const USER_MAIN_DATA = {
  getInfo: async function (userId) {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}`)
      if (response.ok) {
        return await response.json()
      }
    } catch (err) {
      console.log("Erreur : ", err)
    }
  },
}

export const USER_ACTIVITY = {
  getInfo: async function (userId) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${userId}/activity`,
      )
      if (response.ok) {
        return await response.json()
      }
    } catch (err) {
      console.log("Erreur : ", err)
    }
  },
}

export const USER_AVERAGE_SESSIONS = {
  getInfo: async function (userId) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${userId}/average-sessions`,
      )
      if (response.ok) {
        return await response.json()
      }
    } catch (err) {
      console.log("Erreur : ", err)
    }
  },
}

export const USER_PERFORMANCE = {
  getInfo: async function (userId) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${userId}/performance`,
      )
      if (response.ok) {
        return await response.json()
      }
    } catch (err) {
      console.log("Erreur : ", err)
    }
  },
}

class User {
  constructor(
    id,
    userInfos,
    todayScore,
    keyData,
    activity,
    averageSessions,
    performance,
  ) {
    this.id = id
    this.userInfos = userInfos
    this.todayScore = todayScore
    this.keyData = keyData
    this.activity = activity
    this.averageSessions = averageSessions
    this.performance = performance
  }
}

const users = []
const userId = "12"

async function fetchAndPopulateUsersArray(userId) {
  const mainData = await USER_MAIN_DATA.getInfo(userId)
  const userActivity = await USER_ACTIVITY.getInfo(userId)
  const userAverageSession = await USER_AVERAGE_SESSIONS.getInfo(userId)
  const userPerformance = await USER_PERFORMANCE.getInfo(userId)

  const { id, userInfos, todayScore, keyData } = mainData.data

  const activity = userActivity.data.sessions
  const averageSessions = userAverageSession.data.sessions
  const performance = userPerformance.data

  users.push(
    new User(
      id,
      userInfos,
      todayScore,
      keyData,
      activity,
      averageSessions,
      performance,
    ),
  )
}

await fetchAndPopulateUsersArray(userId)

export default users
