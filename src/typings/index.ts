export type GRID = [ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW]

export type NUMBERS = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type N = 0 | NUMBERS

export type ROW = [N, N, N, N , N, N, N, N, N]

export type SQUARE = [SQUAREROW, SQUAREROW, SQUAREROW]

export type SQUAREROW = [N, N, N]

export type BLOCK_COORD = [INDEX, INDEX]

export type INDEX = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8