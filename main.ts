input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let sprite = game.createSprite(4, 4)
sprite.set(LedSpriteProperty.Blink, 500)
let guard = game.createSprite(randint(1, 3), randint(1, 3))
guard = game.createSprite(randint(1, 3), randint(1, 3))
guard.set(LedSpriteProperty.Direction, 0)
let sight = game.createSprite(guard.get(LedSpriteProperty.X) + 1, guard.get(LedSpriteProperty.Y))
let key = game.createSprite(randint(0, 4), randint(0, 4))
key.set(LedSpriteProperty.Blink, 800)
sight.set(LedSpriteProperty.Brightness, 20)
game.setLife(5)
loops.everyInterval(500, function () {
    sight.delete()
    sight = game.createSprite(guard.get(LedSpriteProperty.X), guard.get(LedSpriteProperty.Y) - 1)
    sight.set(LedSpriteProperty.Brightness, 20)
    basic.pause(1000)
    sight.delete()
    sight = game.createSprite(guard.get(LedSpriteProperty.X) - 1, guard.get(LedSpriteProperty.Y))
    sight.set(LedSpriteProperty.Brightness, 20)
    basic.pause(1000)
    sight.delete()
    sight = game.createSprite(guard.get(LedSpriteProperty.X), guard.get(LedSpriteProperty.Y) + 1)
    sight.set(LedSpriteProperty.Brightness, 20)
    basic.pause(1000)
    sight.delete()
    sight = game.createSprite(guard.get(LedSpriteProperty.X) + 1, guard.get(LedSpriteProperty.Y))
    sight.set(LedSpriteProperty.Brightness, 20)
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 200) {
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    } else if (input.acceleration(Dimension.X) < -200) {
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    } else if (input.acceleration(Dimension.Y) > 200) {
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    } else if (input.acceleration(Dimension.Y) < -200) {
        sprite.change(LedSpriteProperty.Y, -1)
    }
    while (sprite.isTouching(sight) || sprite.isTouching(guard)) {
        basic.pause(5000)
        if (guard.get(LedSpriteProperty.X) < sprite.get(LedSpriteProperty.X)) {
            guard.change(LedSpriteProperty.X, 1)
            basic.pause(500)
        } else if (guard.get(LedSpriteProperty.X) > sprite.get(LedSpriteProperty.X)) {
            guard.change(LedSpriteProperty.X, -1)
            basic.pause(500)
        }
        if (guard.get(LedSpriteProperty.Y) < sprite.get(LedSpriteProperty.Y)) {
            guard.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        } else if (guard.get(LedSpriteProperty.Y) > sprite.get(LedSpriteProperty.Y)) {
            guard.change(LedSpriteProperty.Y, -1)
            basic.pause(500)
        }
        if (sprite.isTouching(guard)) {
            game.removeLife(1)
        }
    }
    if (sprite.get(LedSpriteProperty.X) == 0 && sprite.get(LedSpriteProperty.Y) == 0) {
        if (key.isDeleted() || guard.isTouching(key)) {
            game.addScore(1)
            sprite.delete()
            guard.delete()
            sprite = game.createSprite(4, 4)
            guard = game.createSprite(randint(1, 3), randint(1, 3))
            guard = game.createSprite(randint(1, 3), randint(1, 3))
        }
    }
    basic.pause(200)
    if (sprite.isTouching(key)) {
        key.delete()
    }
})
