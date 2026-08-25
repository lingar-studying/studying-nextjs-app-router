export const gameReducer = (state, action) => {
    switch (action.type) {
        case "START_GAME":
            return {
                ...state,
                gameRunning: true
            };
        case "START_NEXT_ROUND":

            return {
                ...state,
                roundRunning: true
            };
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
        case "FINISH_GAME": {
            return {
                ...state,

            }
        }
        default:
            return state;


    }

}

export const roundReducer = (state, action) => {
    switch (action.type) {
        case "RUN_QUEUE":
            return {
                ...state,
                queueRunning: true
            };
        case "FINISH_QUEUE":{

        }
        case "SUCCESS_ROUND": {

        }
        case "FAILURE_ROUND": {

        }
        case "SUCCESS_CHOICE": {

        }
        case "FAILURE_CHOICE": {
            return {
                ...state,
                roundRunning: false
            }
        }
        default:
            return state;


    }

}