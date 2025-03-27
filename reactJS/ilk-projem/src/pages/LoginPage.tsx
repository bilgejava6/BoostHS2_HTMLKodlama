
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
   */
   const doLogin = ()=>{
     alert("Butona basıldı");
   }  
  return (
    <>
        <h1>Login Page</h1>
        <hr />
        <div>
             <input type="text" placeholder="Kullanıcı Adı" />
        </div>
       <div>
            <input type="password" placeholder="Şifre" />
       </div>
        <div>
             <button onClick={doLogin}>Giriş Yap</button>
        </div>
       
    </>    
  )
}

export default LoginPage