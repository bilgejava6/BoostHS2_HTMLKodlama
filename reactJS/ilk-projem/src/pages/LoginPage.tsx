
/**
 * DİKKAT!!!!!
 * return işlemi sadece bir tane parent element döndürmelidir.
 * public int toplam(int s1, int s2){
 *   int result = s1+s2;
 *   return result, "muhammet hoca";
 * }
 * eğer istenir ise sadece boş tag ile döndürülebilir.
 */
function LoginPage() {
  /**
   * Eğer giriş butonuna basılır ise butona basıldı yazsın.
   * ()=> {} arrow function
   */
  let userName = '';
  let password = '';
  let isWrongPassword = false;
   const doLogin = ()=>{
     if(userName === 'muhammet' && password === '123456'){
          // başarılı
          isWrongPassword = false;
          console.log('Giriş yapıldı.');
     }else{
          // kullanıcı adı veya şifre hatalı
          isWrongPassword = true;
          console.log('Kullanıcı adı veya şifre hatalı....: ', isWrongPassword);
     }
     
   }  
  return (
    <>
        <h1>Login Page</h1>
        <hr />
        <div>
             <input type="text" placeholder="Kullanıcı Adı" onChange={evt=>{
               userName = evt.target.value;
               console.log('olan olay......: ', evt);
               }}/>
        </div>
       <div>
            <input type="password" placeholder="Şifre" onChange={evt=> password = evt.target.value}/>
       </div>
       <div>
          {
               // hatalı bilgi girşi yapılmış ve bu değer true olmuş ise
               isWrongPassword &&  <label style={{color: 'red'}}>* Kullanıcı adı ya da şifre hatalıdır</label>
          }
         
       </div>
        <div>
             <button onClick={doLogin}>Giriş Yap</button>
        </div>
       
    </>    
  )
}

export default LoginPage