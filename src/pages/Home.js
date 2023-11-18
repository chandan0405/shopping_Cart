import React from 'react'
import ProductCard from '../components/ProductCard';
import UseTitles from '../hooks/UseTitles';
function Home() {
  UseTitles("Home")
  const productArray = [
    {
      id: 1,
      imageSrc:
        "https://www.reliancedigital.in/medias/Xiaomi-Basic-EP-492520057-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NDg0N3xpbWFnZS9qcGVnfGltYWdlcy9oYzQvaDFiLzk5ODE3Mzk2OTYxNTguanBnfGYxNThlMWJlNDFjODFkNzkxNTU2MWU4NTczODQ5ZjA0NzZjZjM2MDNmZjhjN2UxMDRkYjE0ZmMxOGIyM2YxN2M",
      alt: "wired oneplus ",
      productName: "OnePlus Nord E103A Wired Earphone",
      price: "15",
    },
    {
      id: 2,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvypLIybiGn5rcbw26npKvBwuxg3H_jZYkGA&usqp=CAU",
      alt: "boat headphone",
      productName: "boAt Bassheads 950v2",
      price: "30",
    },
    {
      id: 3,
      imageSrc: "https://m.media-amazon.com/images/I/61DenEygBML.jpg",
      alt: "boat headphone",
      productName: "boAt BassHeads 950v2",
      price: "115",
    },
    {
      id: 4,
      imageSrc: "https://m.media-amazon.com/images/I/61C4enyKMtL._SX569_.jpg",
      alt: "boat headphone",
      productName: "boAt Gaming headphone",
      price: "20",
    },
    {
      id: 5,
      imageSrc:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS3fdnXA65D_oC32YX1KXtsgJYLV0IQjdSaQm1AiKczqKotmIRICjloZ8QC3GSb5YQwZ95uvMDD4pRsCP2dYwX6FB9qT5WPKZS7hjowrhxHonhBb2UekjdMDQ",
      alt: "Boat Nirvanaa 751 ANC",
      productName: "Boat Nirvanaa 751 ANC",
      price: "30",
    },
    {
      id: 6,
      imageSrc:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQUuOXbwCd2QqKY_xuNmBXDVWoI_V9Pm29hgulGK1EdnUbOIriEAP2N1OS6UbNm40qJBJbEZ07mtKHevkDDPpgRnldpKkPuov4hK-LjhD_lekWDtr7d1hlj",
      alt: "Sony ZX110",
      productName: "Sony ZX110",
      price: "320",
    },
    {
      id: 7,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT5tv0zECh0ticxnuJnaEern25O5d-NwMbA_PSO6NJMvlpcxfvtXBx660YpcAKy72eWRUU1HDhdRVXpR-TL-TottjJMSLA6DaS8FZaZc8mmqlBZ-GvpCbPT",
      alt: "ZEBRONICS Storm Wired Headphone",
      productName: "ZEBRONICS Storm Wired Headphone",
      price: "8",
    },
    {
      id: 8,
      imageSrc:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZ2QK0N-3hZDftzds56SrW0ytoEV-JYzXONaLRHabzseMo_aMAJSrrjrMQbKRoKD2jgAjHU4yeQjUTTLp7gwekJpQKVq_lP_Tgkb1rzgoPxCcROWxSwie0",
      alt: "Zebronics Orion Headphones Black",
      productName: "Zebronics Orion Headphones Black",
      price: "40",
    },
    {
      id: 9,
      imageSrc:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRII-ll5aff0bDxsIM8V8SyRUhDS9YMLxXYpYI8aNjAf9iOLTOndMsyd_06eI8i1W8YolxfrVp_IJYQM7Mz6BKJyCEoN1O0Gieo41Ur-2l9yvav2lnU4V1kqw",
      alt: "Zebronics Zeb-blitz With Dolby Atmos",
      productName: "Zebronics Zeb-blitz With Dolby Atmos",
      price: "43",
    },
    {
      id: 10,
      imageSrc:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTj-q5PQd3h33aw6CU9G9vMd_taIMUpE3xTk1BEIu-u7wgyHp1jahcOV3-foK0S9Ezcen7FqfXDGcpF3H6S0ef6s400jT6zw9sZqpnwFYl3rEFJ4cgQjybV",
      alt: "Zebronics Orion Headphones Black",
      productName: "Zebronics Zeb-blitz With Dolby Atmos",
      price: "39",
    },
  ];
  return (
    <div style={{display:"flex",flexWrap:"wrap"}} className='home'>
      {
        productArray.map((product)=>
        {
          return (<ProductCard key={product.id} product={product} />);
        })
      }
    </div>
  );
}

export default Home;