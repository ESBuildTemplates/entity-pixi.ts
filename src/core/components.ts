import * as PIXI from "pixi.js"

export function getSprite(name: string): PIXI.Sprite {
  const resource = PIXI.Loader.shared.resources[`assets/sprites/${name}.png`]
  const sprite = new PIXI.Sprite(resource.texture)
  sprite.anchor.set(0.5)
  sprite.visible = true
  return sprite
}
