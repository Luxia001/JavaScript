const checkAuth = (id, pass) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const authData = 'xTyk012pDyz12'
        console.log('User authenicated')
        resolve({id: id, pass: pass, auth: authData})
    },1000);
  });
};
const getStudent2 = (auth) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const data = {name: 'jeerawuth', permission:'admin'}
            resolve(data)
        },2000)
    })
}
const getTheResult = async() => {
    const auth = await checkAuth(1,'mypassword')
    const data = await getStudent2(auth)
    console.log(data)
}
getTheResult()