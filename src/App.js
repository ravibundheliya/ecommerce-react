import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Partitial/Header';
import Footer from './Component/Partitial/Footer';
import Topheader from './Component/Partitial/Topheader';
import { Route, Routes } from 'react-router-dom';
import Homeindex from './Component/Home/Homeindex';


const sliderdata = [
  {
    sldimg: require('./img/back1.png'),
    smsldimg: require('./img/asset 38.jpeg'),
    btnname: "Shop Dresses",
    btnsrc: "/jodhpuri"
  },
  {
    sldimg: require('./img/back2.png'),
    smsldimg: require('./img/asset 39.jpeg'),
    btnname: "Shop Blazer",
    btnsrc: "/blazerandsuit"
  },
  {
    sldimg: require('./img/back3.png'),
    smsldimg: require('./img/asset 40.jpeg'),
    btnname: "Shop Koti-Kurta",
    btnsrc: "/kotikurta"
  }
]

const collectiondata = [
  {
    image: require('./img/asset 4.jpeg'),
    title: "Spring Collection",
    link: "/newcollection",
    linktitle: "Shop now"
  },
  {
    image: require('./img/asset 5.jpeg'),
    title: "Winter Collection",
    link: "/newcollection",
    linktitle: "Shop now"
  },
  {
    image: require('./img/asset 6.jpeg'),
    title: "Wool Sweater",
    link: "/newcollection",
    linktitle: "Shop now"
  }
]

const productslider1 = [
  {
    imageurl: require('./img/asset 9.jpeg'),
    title: "New Fashion Top",
    price: "7449"
  },
  {
    imageurl: require('./img/asset 10.jpeg'),
    title: "New Top",
    price: "1449"
  },
  {
    imageurl: require('./img/asset 7.jpeg'),
    title: "New Fashion Top",
    price: "7449"
  },
  {
    imageurl: require('./img/asset 8.jpeg'),
    title: "New Top",
    price: "1449"
  },
  {
    imageurl: require('./img/asset 10.jpeg'),
    title: "New Fashion Top",
    price: "7449"
  },
  {
    imageurl: require('./img/asset 11.jpeg'),
    title: "New Top",
    price: "1449"
  },
  {
    imageurl: require('./img/asset 12.jpeg'),
    title: "New Fashion Top",
    price: "7449"
  },
  {
    imageurl: require('./img/asset 7.jpeg'),
    title: "New Top",
    price: "1449"
  }
]

const categorydata = [
  {
    image: require('./img/i1.png'),
    title: "Bride"
  },
  {
    image: require('./img/i2.png'),
    title: "T-Shirt"
  },
  {
    image: require('./img/i3.png'),
    title: "Frog"
  },
  {
    image: require('./img/i4.png'),
    title: "Trousers"
  },
  {
    image: require('./img/i5.png'),
    title: "Blazer"
  },
  {
    image: require('./img/i6.png'),
    title: "Jacket"
  }
]

const productslider2 = [
  {
    imageurl: require('./img/asset 9.jpeg'),
    title: "New Fashion Top",
    price: "7449"
  },
  {
    imageurl: require('./img/asset 10.jpeg'),
    title: "New Top",
    price: "1449"
  },
  {
    imageurl: require('./img/asset 7.jpeg'),
    title: "New Fashion Top",
    price: "7449"
  },
  {
    imageurl: require('./img/asset 8.jpeg'),
    title: "New Top",
    price: "1449"
  },
  {
    imageurl: require('./img/asset 10.jpeg'),
    title: "New Fashion Top",
    price: "7449"
  },
  {
    imageurl: require('./img/asset 11.jpeg'),
    title: "New Top",
    price: "1449"
  },
  {
    imageurl: require('./img/asset 12.jpeg'),
    title: "New Fashion Top",
    price: "7449"
  },
  {
    imageurl: require('./img/asset 7.jpeg'),
    title: "New Top",
    price: "1449"
  }
]

function App() {
  return (
    <>
      <Topheader />
      <Header />
      <Routes>
        <Route path='/' element={<Homeindex slddata={sliderdata} cltdata={collectiondata} prdsld1={productslider1} prdsld2={productslider2} ctgdata={categorydata} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
