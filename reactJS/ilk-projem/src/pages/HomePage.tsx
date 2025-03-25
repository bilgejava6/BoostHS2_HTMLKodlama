/***
 * Burada JS ile kodlama yapacağız, bu bir page olduğu için burada bir HTML kodu dönüşü yapacağız.
 * DİKKAT!!!
 * eğer bir tsx içerisindeki function dışarıya açılmaz ise ulaşılamaz. Aynen java class yapısındak, 
 * private yada protected method gibi düşünebiliriz.   
 */
function HomePage(){

    return (
        <div>
            <h1>Ana Sayfa</h1>
        </div>
    )
}

// Eğer bir method, değişken dışarıya erişime açılmak isteniyor ise export anahtar kelimesi kullanılır.
export default HomePage;
