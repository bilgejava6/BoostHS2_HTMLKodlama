import { useState } from "react";


function ToplamaVeUseStatePage() {
  let s1='',s2='',toplam=0;
  const [sonuc, setSonuc] = useState(0);
  const toplamaYap = ()=>{
    // ner kadar doğru??? DİKKAT!!! inputlardan gelen deeğerler string olarak geliyor
    // bu yüzden stringleri numbera çevirmemiz lazım
    // parseInt() ve parseFloat() kullanabiliriz
    toplam = parseInt(s1) + parseInt(s2);
    setSonuc(toplam);
    console.log('toplam sonuç....: ', toplam);
  }
  return (
    <div>
        <h1>Toplama İşlemi</h1>
        <hr />
        <div>
            <input onChange={evt=> s1 =  evt.target.value} type="text" placeholder="1. sayıyı giriniz"  />
        </div>
        <div>
            <input onChange={evt=> s2 = evt.target.value} type="text" placeholder="2. sayıyı giriniz" />
        </div>
        <div>
            <button onClick={toplamaYap}>Toplama Yap</button>
        </div>
        <div>
            <h3>Sonuç: {sonuc}</h3>
        </div>
    </div>
  )
}

export default ToplamaVeUseStatePage