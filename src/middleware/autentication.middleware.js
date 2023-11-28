import { jwtDecode } from 'jwt-decode';

function decodeToken(token) {
  return jwtDecode(token);
}

function checkTokenExpiration(token) {
  const decodedToken = decodeToken(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    return false;
  }
  return true;
}
export { checkTokenExpiration, decodeToken };
