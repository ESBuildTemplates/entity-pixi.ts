import * as PIXI from "pixi.js"
import { ApplicationEntity } from "@ghom/entity-pixi"
import { getHeight, getWidth } from "../core/viewport"
import { getSprite } from "../core/components"

// todo: extends ContainerEntity instead ? (more simple maybe)

let hello: PIXI.Sprite

/**
 * After resources is loaded, setup your Game
 */
export async function setup(root: ApplicationEntity) {
  hello = getSprite("hello")
  root.application.stage.addChild(hello)
}

/**
 * Called for each Game tick
 */
export async function update(root: ApplicationEntity) {
  const oscillation = Math.sin(Date.now() / 100) * 10
  hello.position.set(getWidth() / 2, getHeight() / 2 + oscillation)
}
