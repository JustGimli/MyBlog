import { Navigate } from "react-router-dom";
import React, { useContext } from "react";

import { Token, TokenContext } from "../admin/form/context/token";

export default function ProtectedRoute({children}) {
    const {token} = useContext(Token) as TokenContext
    if (token === '') {
        return <Navigate to="/error" replace />
    }

    return children

}