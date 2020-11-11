export const check404 = () => {
  const isCardpage = window.location.pathname.slice(0,9) === '/cardpage';
  const is404 = window.location.pathname.slice(0,4) === '/404';
  const isAuth = window.location.pathname.slice(0,5) === '/auth';
  const isEmpty = window.location.pathname === '/';

  if(isCardpage || is404 || isAuth ||isEmpty){
    alert('page exist. returning false');
    return false
  }else{
    alert('page doesnt exist. moving to 404');
    window.location.assign("http://localhost:8080/404");//...отправляем на мою 404
    // window.location.assign("https://jsdiploma.nef-an.ru/404");//...отправляем на мою 404
  }
}

