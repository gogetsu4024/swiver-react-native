import React from 'react'
import jwt_decode from 'jwt-decode'
const verifyExpire = (exp) =>{
    return Date.now() < exp * 1000;

};
const verifyToken = (token) =>{
    if (token == null) return false;
    var decoded = jwt_decode(token);
    return verifyExpire(decoded.exp)
};
export default verifyToken;
