export interface InitOptions {
  key: string
}

export interface RequestServiceOptions {
  col: string,
  row: string,
  path: string
}

export type InitTypes = (options: InitOptions) => void