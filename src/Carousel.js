// import React, { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img
//           classNameName="d-block w-100"
//           src="https://nmccat.com/wp-content/uploads/2021/10/02-Advantages-of-Renting-Construction-Equipment-min.jpg"
//           alt="First slide"
//           style={{height:"600px",width:"80%"}}
//         />
       
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           classNameName="d-block w-100"
//           src="https://i.ytimg.com/vi/sWUHuUiVSFg/maxresdefault.jpg"
//           alt="Second slide"
//           style={{height:"600px",width:"80%"}}
//         />

//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           classNameName="d-block w-100"
//           src="https://content3.jdmagicbox.com/comp/def_content/gaming-console-dealers/h4artixstv1-gaming-console-dealers-1-glz1z.jpg?clr=223344"
//           alt="Third slide"
//           style={{height:"600px",width:"80%"}}
//         />
//     </Carousel.Item>
//     </Carousel>
//   );
// }

// export default ControlledCarousel;

// render(<ControlledCarousel />);

function Carousel(){

    return(
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="data:image/jpeg;base64,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" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Carousel;