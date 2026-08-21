export const gameReducer = (state, action) => {
    switch (action.type) {
        case "START_GAME":
        case "START_NEXT_ROUND":

            return {
                ...state,
                roundRunning: true
            }
        case "GAME_OVER": {

        }
        case "WAITING_APPROVAL": {

        }
        case "ROUND_RUNNING": {

        }
        case "ROUND_FINISHED": {
            return {
                ...state,
                roundRunning: false
            }
        }


    }

}