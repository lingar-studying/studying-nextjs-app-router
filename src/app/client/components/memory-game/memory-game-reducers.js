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
            console.log("finished game")
            return {
                ...state,
                roundRunning: false,
            }
        }
        case "FINISH_GAME": {
            return {
                ...state,
                gameRunning: false

            }
        }
        default:
            return state;


    }

}

export const roundReducer = (state, action) => {
    switch (action.type) {
        case "START_QUEUE":
            return {
                ...state,
                queueRunning: true,
                freeze: false
            };
        case "FINISH_QUEUE":{

        }
        case "SUCCESS_FINISH_ROUND": {
            console.log("success round");
            return {
                ...state,
                roundRunning: false,
                freeze: false
            };

        }
        case "FAILURE_ROUND": {
            console.log("failure round");
            return ;
        }
        case "SUCCESS_CHOICE": {
            console.log("success CHOICE");
            return state;
        }
        case "FAILURE_CHOICE": {

            console.log("failure CHOICE");

            return {
                ...state,
                roundPoints: state.roundPoints-1,
                freeze: true
            }
        }
        default:
            return state;


    }

}