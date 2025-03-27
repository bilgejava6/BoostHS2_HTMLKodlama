# REACTJS 

    İlk kurulumlar
    web server ve uygulamanın derlenmesi için gerekli ayrıca npm paket yöneticisi içerir
    - https://nodejs.org/en/download
    react js in kendi sitesinden gerekli dokümanlara ve kurumlara bakınız.
    https://react.dev/learn/build-a-react-app-from-scratch

## Yeni bir proje başlatmak
    ilk olarak farklı türlerde react proje türleri vardır.
    - nextJS, sunucu tarafı çalışabilen küçük server apileri de geliştirebileceğiniz bir cersiyon
    - vite, react+vite ile daha hızlı ve derlenebilir bir yapı ihtiva eden server side geliştirme 
    yapabileceğiniz bir versiyon.

```bash
    npm create vite@latest ilk-projem
```
    DİKKAT!!!! Hata alan windows kullanıcıları
    terminal ekranında, kullanılan bash yönetim aracı eğer PowerShell ise hata alıyor olma ihtimaliniz yüksek,
    bu nedenle terminal ekranında Command Prompt a geçmelisiniz. Bunu yapmak için + işaretinin hemen sağındaki
    ok tuşuna basarak bunu seçmelisiniz. sonra komutlar çalışacaktır.

    step1- Select a framework -> React
    step2- select a variant -> TypeScript
    step3- kurulum bitecek ve sonra ilgili projenin dizinine geçmelisiniz bu işlem için terminalde
    "cd ilk-projem" (* kendi proje adınızı yazınız) enter
    step4- ilgili dizne geçtikten sonra, kullanılacak olan bağımlılıkların yüklenmesi için 
    "npm install" komutunu terminal de çalıştırın.
    step5- tüm bu işlemler bittiğinde artık projeniz çalışır duruma gelmeye hazırdır. uygulamayı 
    ayağa kaldırmak için 
    "npm run dev" komutunu terminal ekranında çalıştırınız.

## React Router Kullanımı
    yükleme ve detaylı bilgi için: https://reactrouter.com/start/declarative/installation

    react router kurulmalı ve react router dom kurulmalı
    "npm install react-router"
    "npm install react-router-dom"

    Kullanım,
    - öncelikle routing işlemlerin yönetecek bir TSX, JS dosyası oluşturunuz, (routerpage.tsx)
    - return kısmına BrowserRouter bileşeni eklenir.
    - bu bileşenin içierisine Routers bileşeni eklenir
    - bu bileşeninde içerisine uygulamanızda bulunan sayfa componentlerini ve url lerini içeren
    route ları ekliyorsunuz.




