let x = 0
let y = 0
let pintar_x = 0
let pintar_y = 0
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if (x < -700) {
        pintar_x = 0
    } else if (x < -200) {
        pintar_x = 1
    } else if (x > 700) {
        pintar_x = 4
    } else if (x > 200) {
        pintar_x = 3
    }
    if (y < -700) {
        pintar_y = 0
    } else if (y < -200) {
        pintar_y = 1
    } else if (y > 700) {
        pintar_y = 4
    } else if (y > 200) {
        pintar_y = 3
    }
})
