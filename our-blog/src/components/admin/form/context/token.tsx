import React from "react"

export interface TokenContext {
    token: string,
    updateToken: (token: string) => void
}

export const Token = React.createContext<TokenContext | null>(null)
