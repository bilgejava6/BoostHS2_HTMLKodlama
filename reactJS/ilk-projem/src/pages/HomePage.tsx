/***
 * Burada JS ile kodlama yapacağız, bu bir page olduğu için burada bir HTML kodu dönüşü yapacağız.
 * DİKKAT!!!
 * eğer bir tsx içerisindeki function dışarıya açılmaz ise ulaşılamaz. Aynen java class yapısındak, 
 * private yada protected method gibi düşünebiliriz.   
 */
function HomePage(){

    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">

                    </div>
                    <div className="col">
                        <button className="btn btn-success">Bu bir bootstrap butondur</button>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        </div>
    )
}

// Eğer bir method, değişken dışarıya erişime açılmak isteniyor ise export anahtar kelimesi kullanılır.
export default HomePage;
