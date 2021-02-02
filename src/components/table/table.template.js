const CODES = {
    A: 65,
    Z: 90
}
function createCell() {
    return `
        <div class="cell" contenteditable="true"></div>
    `
}

function createColumn(col) {
    return `
        <div class="column">${col}</div>
    `
}

function createRow(content, numRow) {
    return `
       <div class="row">
       <div class="row-info">${numRow}</div>
       <div class="row-data">${content}</div>
       </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(el => createColumn(el))
        .join('')

    rows.push(createRow(cols, ''))

    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(rowsCount)
            .fill('')
            .map(createCell)
            .join('')

        rows.push(createRow(cells, i + 1))
    }
    console.log(rows)
    return rows.join('')
}