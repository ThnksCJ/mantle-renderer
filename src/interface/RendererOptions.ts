import { Canvas3d } from "../platformSpecifics/BasePlatformUtils.js"
import LightOptions from "./LightOptions.js"

export interface RendererPlayerOptions {
    skin?: string // path, url, username or uuid
    slim?: boolean // steve or alex model
    onSkinLoad?: () => void // callback for initial skin loading
}

export default interface RendererOptions {
    live: boolean
    canvas?: HTMLCanvasElement | Canvas3d
    fov?: number // field of view of camera. defaults to 70 (degrees)
    antialias?: boolean // simple antialiasing
    alpha?: boolean // transparent background

    ambientLight?: LightOptions // evenly illuminate entire scene

    player?: RendererPlayerOptions // omit to have no player in scene

    fxaa?: boolean // better but more expensive antialiasing
    ssaa?: boolean // most expensive antialiasing (due to supersampling). causes goofy colour banding for now

    controls?: boolean
}