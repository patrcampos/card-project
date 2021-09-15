.options {
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    grid-template-rows: repeat(4; 1fr); 
    grid-gap: 0px;
}

.up {
    grid-column: 2/ 4;
    grid-row: 1/ 2;
}

.right {
    grid-column: 3/ 4;
    grid-row: 2/3;
}

.down {
    grid-column: 2/ 4;
    grid-row: 3/4;
}

.left {
    grid-column: 1/ 2;
    grid-row: 2/ 3;
}