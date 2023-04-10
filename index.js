let puzzle = [
    [8, 9, 5, 7, 4, 2, 1, 3, 6],
    [2, 7, 1, 9, 6, 3, 4, 8, 5],
    [4, 6, 3, 5, 8, 1, 7, 9, 2],

    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],

    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7]
];

let puzzleCopy = [
    [8, 9, 5, 7, 4, 2, 1, 3, 6],
    [2, 7, 1, 9, 6, 3, 4, 8, 5],
    [4, 6, 3, 5, 8, 1, 7, 9, 2],

    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],

    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7]
];

let p8zzle = [
    [8, 9, 5, 7, 4, 2, 1, 3, 6],
    [8, 7, 1, 9, 6, 3, 4, 8, 5],
    [4, 6, 3, 5, 8, 1, 7, 9, 2],

    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],

    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7]
];

const getRow = (grid, row) => {
    return grid[row];
}

const getColumn = (grid, column) => {
    let newArr = [];
    for (let i = 0; i < grid.length; i++) {
        newArr.push(grid[i][column]);
    }
    return newArr;
}

const getSection = (grid, x, y) => {
    let newArr = [];
    let row = x * 3;
    let column = y * 3;
    for (let i = column; i < column + 3; i++) {
        for (let j = row; j < row + 3; j++) {
            newArr.push(grid[i][j]);
        }
    }
    return newArr;
}

const includes1to9 = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.includes(arr[i])) {
            return false;
        } else {
            newArr.push(arr[i]);
        }
    }
    return true;
}

const sudokuIsValid = (grid) => {
    let row;
    let column;
    let subGrid;
    for (let i = 0; i < grid.length; i++) {
        if (includes1to9(getRow(grid, i))) {
            row = true;
        } else {
            return false;
        }
    }
    for (let i = 0; i < grid.length; i++) {
        if (includes1to9(getColumn(grid, i))) {
            column = true;
        } else {
            return false;
        }
    }
    for (let i = 0; i < grid.length / 3; i++) {
        for (let j = 0; j < grid.length / 3; j++) {
            if (includes1to9(getSection(grid, j, i))) {
                subGrid = true;
            } else {
                return false;
            }
        }
    }
    if (row && column && subGrid) {
        return true;
    }
}

const isSame = (grid1, grid2) => {
    let result;
    for (let i = 0; i < grid1.length; i++) {
        for (let j = 0; j < grid1.length; j++) {
            if (grid1[i][j] === grid2[i][j]) {
                result = true;
            } else {
                return false;
            }
        }
    }
    return result;
}
