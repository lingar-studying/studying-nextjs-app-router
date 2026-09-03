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
                roundRunning: true,
                gridSize: state.gridSize+1

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
                roundRunning: false,
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
            console.log("success round");
            return ;

        }
        case "FAILURE_ROUND": {
            console.log("failure round");
            return ;
        }
        case "SUCCESS_CHOICE": {
            console.log("success CHOICE");
            return ;
        }
        case "FAILURE_CHOICE": {

            console.log("failure CHOICE");

            return {
                ...state,
                roundRunning: false
            }
        }
        default:
            return state;


    }

}