import { ReactNode } from "react"

export type ComponentWithChildren<T> = T & { children: ReactNode }
