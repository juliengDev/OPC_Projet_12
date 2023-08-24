import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../assets/mock/datas"

/* 
What properties do we need ?

###### BANNER ######

Identification : USER_MAIN_DATA 
Prenom : userInfos.firstName

###### CARDS ######

Les key datas : USER_MAIN_DATA

Calories : keyData.calorieCount
Proteines : keyData.proteinCount
Glucides : keyData.carbohydrateCount
Lipides : keyData.lipidCount


###### WIDGETS ######

Widget Activite quotidienne  USER_ACTIVITY:
Poids (kg) : sessions.kilogram
Calories brulees (kCal) : sessions.calories


Widget Duree moyenne des sessions USER_AVERAGE_SESSIONS:
Jour : sessions.day
Duree de la session : sessions.sessionLength


Widget Performance : USER_PERFORMANCE
Categorie : kind.1 kind.2 etc... kind.6
Valeurs : data.value et data.kind


Widget Score : USER_MAIN_DATA
Score :  todayScore

*/

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

// Créer des instances d'utilisateurs en utilisant les données fournies
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

// Maintenant vous avez un tableau d'objets User représentant vos données
export default users
