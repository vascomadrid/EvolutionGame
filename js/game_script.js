function start_game() {
    game_area.start()
}

var game_area = {
    canvas: document.getElementById("game_canvas"),
    start: function () {
        this.canvas.width = 600;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function update_game_area() {

}

function component() {

}