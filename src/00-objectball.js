function gameObject(){
    return {
        home: {
            teamName: ['Brooklyn Nets'],
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                    },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                    },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                    },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                    },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                    }
                }
            },
        

        away: {
            teamName: ['Charlotte Hornets'],
            colors: ["Turqoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                    },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                    },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                    },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                    },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                    },
                
        } 

        }
    }
}

function homeTeamName() {
    //Grabs Home team name
    let teamName = gameObject();
    return teamName["home"]["teamName"];
}

function numPointsScored(playerName){
    // assigns gameObject to pointsScored
    let pointsScored = gameObject();
    //if playerName is in the gameObject key "home" pulls point volume for name entered
    if (playerName in pointsScored["home"]["players"]) {
        return pointsScored["home"]["players"][playerName]["points"];
    // if not in home pulls point value for player entered from away
    } else {
        return pointsScored["away"]["players"][playerName]["points"];
    }
}

function shoeSize(playerName){
    let size = gameObject();
    if (playerName in size["home"]["players"]) {
        return size["home"]["players"][playerName]["shoe"]
    } else {
        return size["away"]["players"][playerName]["shoe"]
    }
}

function teamColors(teamName){
    let obj = gameObject();
    if (teamName === obj["home"]["teamName"]) {
        return obj["home"]["colors"]
    } else {
        return obj["away"]["colors"]
    }

}

function teamNames(teamName) {
    let obj = gameObject();
    if (teamName === obj["home"]["teamName"]) {
        return obj["home"]["teamName"]
    } else {
        return obj["away"]["teamName"]
    }
}

function playerNumbers(teamName) {
    let jerseyNumbers= [];
    let obj = gameObject();
    let players;

    if (teamName === obj['home']['teamName']) {
        players = obj['home']['players'];
    } else {
        players = obj['away']['players'];
    }

    for (let player in players) {
        //console.log(player)
        jerseyNumbers.push(players[player]['number'])
    }

    return jerseyNumbers;
}

function playerStats(playerName) {
    let obj = gameObject();
    if (playerName in obj['home']['players']) {
        return obj['home']['players'][playerName];
    } else {
        return obj['away']['players'][playerName];
    }
}

function  bigShoeRebounds(){
    let obj = gameObject();
    let currentLargestShoeSize = 0;
    let currentPlayerName = null;
    let currentRebounds = 0;
    let playersHome = obj['home']['players'];
    let playersAway = obj['away']['players'];
    let allPlayers = Object.assign({}, playersHome, playersAway);

    for (let playerName in allPlayers){
        if (allPlayers[playerName]['shoe'] > currentLargestShoeSize) {
            currentLargestShoeSize = allPlayers[playerName]['shoe'];
            currentPlayerName = playerName;
            currentRebounds = allPlayers[playerName]['rebounds'];
        }
 
    }

    return currentRebounds;
}

function mostPointsScored(){
    let obj = gameObject();
    let currentPoints = 0;
    let currentPlayerName = null;
    let playersHome = obj['home']['players'];
    let playersAway = obj['away']['players'];
    let allPlayers = Object.assign({}, playersHome, playersAway);

    for (let playerName in allPlayers) {
        if (allPlayers[playerName]['points'] > currentPoints) {
            currentPoints = allPlayers[playerName]['points'];
            currentPlayerName = playerName;
        }
    }

    return currentPlayerName;
}

function winningTeam(){
    let obj = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
    for (let homePlayer in obj['home']['players']){
        homeTeamPoints += obj['home']['players'][homePlayer['points']]
    }
    for (let awayPlayer in obj['away']['players']){
        awayTeamPoints += obj['away']['players'][awayPlayer['points']]
    }

    if (homeTeamPoints > awayTeamPoints){
        return obj['home']['teamName']
    } else {
        return obj['away']['teamName']
    }
}

function playerWithLongestName(){
    let obj = gameObject();
    let playerNameLength = 0;
    let currentPlayer = undefined;
    let playersHome = obj['home']['players'];
    let playersAway = obj['away']['players'];
    let allPlayers = Object.assign({}, playersHome, playersAway);

    for (let playerNames in allPlayers) {
        if (playerNames.length > playerNameLength){
            currentPlayer = playerNames;
            playerNameLength = playerNames.length;
        }
    };

    return currentPlayer;
}