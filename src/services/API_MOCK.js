import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../assets/mock/datas"

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

USER_MAIN_DATA.forEach((mainData) => {
  const userId = mainData.id
  const userInfos = mainData.userInfos
  const todayScore = mainData.todayScore
  const keyData = mainData.keyData

  const activity = USER_ACTIVITY.find(
    (activityData) => activityData.userId === userId,
  )
  const averageSessions = USER_AVERAGE_SESSIONS.find(
    (sessionData) => sessionData.userId === userId,
  )
  const performance = USER_PERFORMANCE.find(
    (performanceData) => performanceData.userId === userId,
  )

  users.push(
    new User(
      userId,
      userInfos,
      todayScore,
      keyData,
      activity,
      averageSessions,
      performance,
    ),
  )
})

// console.log(users)
export default users
