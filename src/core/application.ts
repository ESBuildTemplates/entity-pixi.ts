import { ApplicationEntity } from "@ghom/entity-pixi"
import { setup } from "../app/sketch"

export const root = new ApplicationEntity({
  resizeTo: window,
}, setup)

export const app = root.application
