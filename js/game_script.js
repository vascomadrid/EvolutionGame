var startVal = false;
function startGame() {
    startVal = true;
}

document.addEventListener('DOMContentLoaded', () => {

    const scoreDisplay = document.getElementById('score')
    const width = 20
    let score = 0
    const grid = document.querySelector('.grid')
    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 4, 0, 0, 0, 0, 0, 0, 4, 4, 3, 4, 0, 0, 0, 1, 2, 2, 2, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 0, 2, 2, 2, 2, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 0, 2, 2, 2, 2, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 1, 1, 1, 0, 2, 2, 2, 2, 1,
        1, 0, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 1,
        1, 0, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 0, 0, 1, 2, 2, 2, 1,
        1, 0, 4, 4, 4, 4, 4, 4, 4, 4, 5, 1, 0, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 1, 1, 4, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 4, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 3, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        4, 4, 4, 4, 0, 4, 4, 4, 4, 0, 6, 0, 4, 4, 4, 4, 4, 0, 4, 4,
        1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 1, 1, 0, 1, 1, 5, 4, 4, 0, 0, 0, 0, 1, 1, 1, 4, 1, 1,
        1, 1, 1, 1, 0, 4, 4, 4, 1, 1, 1, 1, 1, 0, 0, 0, 4, 3, 1, 1,
        1, 1, 3, 4, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1,
        1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
    // 0 - pac-dots
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty
    // 5 - fetus
    // 6 - file

    const squares = []

    //create your board
    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div')
            grid.appendChild(square)
            squares.push(square)

            //add layout to the board
            if (layout[i] === 0) {
                squares[i].classList.add('pac-dot')
            } else if (layout[i] === 1) {
                squares[i].classList.add('wall')
            } else if (layout[i] === 2) {
                squares[i].classList.add('ghost-lair')
            } else if (layout[i] === 3) {
                squares[i].classList.add('power-pellet')
            } else if (layout[i] === 5) {
                squares[i].classList.add('fetus')
            } else if (layout[i] === 6) {
                squares[i].classList.add('file')
            }
        }
    }
    createBoard()


    //create Characters
    //draw pacman onto the board
    let pacmanCurrentIndex = 21
    squares[pacmanCurrentIndex].classList.add('pac-man')
    //get the coordinates of pacman on the grid with X and Y axis
    // function getCoordinates(index) {
    //   return [index % width, Math.floor(index / width)]
    // }

    // console.log(getCoordinates(pacmanCurrentIndex))

    //move pacman
    function movePacman(e) {
        if (startVal) {
            squares[pacmanCurrentIndex].classList.remove('pac-man')
            switch (e.keyCode) {
                case 37:
                    if (
                        pacmanCurrentIndex % width !== 0 &&
                        !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
                        !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair')
                    )
                        pacmanCurrentIndex -= 1
                    if (squares[pacmanCurrentIndex - 1] === squares[259]) {
                        pacmanCurrentIndex = 279
                    }
                    break
                case 38:
                    if (
                        pacmanCurrentIndex - width >= 0 &&
                        !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
                        !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')
                    )
                        pacmanCurrentIndex -= width
                    break
                case 39:
                    if (
                        pacmanCurrentIndex % width < width - 1 &&
                        !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
                        !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')
                    )
                        pacmanCurrentIndex += 1
                    if (squares[pacmanCurrentIndex + 1] === squares[280]) {
                        pacmanCurrentIndex = 260
                    }
                    break
                case 40:
                    if (
                        pacmanCurrentIndex + width < width * width &&
                        !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
                        !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')
                    )
                        pacmanCurrentIndex += width
                    break
            }
            squares[pacmanCurrentIndex].classList.add('pac-man')
            pacDotEaten()
            powerPelletEaten()
            fetusEaten()
            fileEaten()
            ghostEaten()
            checkForGameOver()
            checkForWin()
        }
    }
    document.addEventListener('keyup', movePacman)

    // what happens when you eat a pac-dot
    function pacDotEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
            score++
            scoreDisplay.innerHTML = score
            squares[pacmanCurrentIndex].classList.remove('pac-dot')
        }
    }
    // what happens when you eat a fetus
    function fetusEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('fetus')) {
            score++
            scoreDisplay.innerHTML = score
            squares[pacmanCurrentIndex].classList.remove('fetus')
        }
    }
    // what happens when you eat a file
    function fileEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('file')) {
            score++
            scoreDisplay.innerHTML = score
            squares[pacmanCurrentIndex].classList.remove('file')
        }
    }

    //what happens when you eat a power-pellet
    function powerPelletEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
            ghosts.forEach(ghost => ghost.isScared = true)
            setTimeout(unScareGhosts, 10000)
            score++
            scoreDisplay.innerHTML = score
            squares[pacmanCurrentIndex].classList.remove('power-pellet')
        }
    }


    //make the ghosts stop flashing
    function unScareGhosts() {
        ghosts.forEach(ghost => ghost.isScared = false)
    }

    //create ghosts using Constructors
    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.isScared = false
            this.timerId = NaN
        }
    }

    //all my ghosts
    ghosts = [
        new Ghost('blinky', 58, 900),
        new Ghost('pinky', 146, 800),
        new Ghost('inky', 269, 600),
        new Ghost('clyde', 327, 500)
    ]

    //draw my ghosts onto the grid
    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add('ghost')
    })
    function ghostEaten() {
        for (var i = 0; i < ghosts.length; i++) {
            ghost = ghosts[i]
            if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                ghost.currentIndex = 58
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
            }
        }
    }
    //move the Ghosts randomly
    ghosts.forEach(ghost => moveGhost(ghost))
    function moveGhost(ghost) {
        const directions = [-1, +1, width, -width]
        let direction = directions[Math.floor(Math.random() * directions.length)]

        ghost.timerId = setInterval(function () {
            if (startVal) {
                //if the next squre your ghost is going to go to does not have a ghost and does not have a wall
                if (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
                    !squares[ghost.currentIndex + direction].classList.contains('wall')) {
                    //remove the ghosts classes
                    squares[ghost.currentIndex].classList.remove(ghost.className)
                    squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
                    //move into that space
                    ghost.currentIndex += direction
                    squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
                    //else find a new random direction ot go in
                } else direction = directions[Math.floor(Math.random() * directions.length)]

                //if the ghost is currently scared
                if (ghost.isScared) {
                    squares[ghost.currentIndex].classList.add('scared-ghost')
                }
                if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
                    squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                    ghost.currentIndex = 58
                    squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
                }
                checkForGameOver()
            }
            
        }, ghost.speed)
    }

    //check for a game over
    function checkForGameOver() {
        if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
            !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            setTimeout(500)
            scoreDisplay.innerHTML = "YOU LOST ):"
        }
    }

    //check for a win - more is when this score is reached
    function checkForWin() {
        if (score === 104) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            setTimeout(500)
            scoreDisplay.innerHTML = "YOU WON!"
        }
    }
})
