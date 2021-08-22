import {GRID} from 'typings';
import {getRandomIndex, solveGrid} from 'utils';
import copyGrid from 'utils/copy-grid';
import global from 'global';


function removeNumbers(grid: GRID, attempts = 5): GRID{
    while (attempts > 0) {
        let row = getRandomIndex()
        let col = getRandomIndex()

        while(grid[row][col] === 0){
            row = getRandomIndex()
            col = getRandomIndex()
        }

        const backup = grid[row][col]
        grid[row][col] = 0

        // copy grid
        const gridCopy = copyGrid(grid);
        // set a global counter
        global.counter = 0;
        solveGrid(gridCopy);

        
        // if global counter is not 1

        // grid[row][col] = backup

        // decrement attempts
        // attempt to solve the grid
        if (global.counter !== 1) {
            grid[row][col] = backup
            attempts--
        }

    }

    return grid
}

export default removeNumbers;
