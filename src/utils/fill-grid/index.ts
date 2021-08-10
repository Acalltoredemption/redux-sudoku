import {GRID, NUMBERS} from '../../../src/typings';
import { shuffle } from 'utils';
const gridExample = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const numbers: NUMBERS[] = [1,2,3,4,5,6,7,8,9]

//backtracking/recursive function to check all the possible combinations of numbers until a solution is found

function fillGrid(grid: GRID){
    let row = 0;
    let col = 0;

    for (let i = 0; i <81; i++){
        row = Math.floor(i/9)
        col = i % 9

        if (grid[row][col] === 0) {
            shuffle(numbers)
            
            for(let value of numbers){
                //is it not in the grid row?
                if(!grid[row].includes(value)){
                        //is it not in the grid col?
                    let isNotInCol = true;
                    for (let i = 0; i < 9; i++){
                        if(value === grid[i][col]) isNotInCol = false;
                    }
                    if(isNotInCol){
                        //is it not in the grid square?
                    }
                }
                

                
                
                //..... if this is the case

                grid[row][col] = value
                //check grid if it is full, if yes, stop and return true

                // otherwise run fillgrid(grid) again

            }

            break;
        }
    }

    grid[row][col] = 0;
}

export default fillGrid;