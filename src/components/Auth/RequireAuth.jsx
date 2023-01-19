import { React } from 'react'
import { Navigate } from "react-router-dom"
import TokenStorageService from "../../_services/TokenStorageService";


export default function RequireAuth({ children }) {
  const token = TokenStorageService.getToken();
console.log("TOKEN"); 
  return token != null
    ? children
    : <Navigate to="/login" replace />;
}