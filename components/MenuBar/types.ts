export interface Menu {
  name: string
  path: string
}

export interface MainMenu {
  name: string
  path?: string
  subItems?: Menu[]
}