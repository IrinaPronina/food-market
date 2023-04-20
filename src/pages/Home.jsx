import React from 'react';

// import axios from 'axios';

import Plus from './../components/Plus/Plus';
import Products from './../components/Products/Products';

function Home() {
  // React.useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '4ea8a63116msh5efbe405b931da5p1243d0jsn1f2772481660',
  //       'X-RapidAPI-Host': 'weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com',
  //     },
  //   };

  //   fetch(
  //     'https://weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com/details?category=${categoryN}',
  //     options,
  //   )
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <>
      {/* <Slider /> */}
      <Plus />
      <Products />
    </>
  );
}

export default Home;
