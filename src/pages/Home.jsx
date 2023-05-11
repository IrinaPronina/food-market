import React from 'react';

// import axios from 'axios';

import Plus from './../components/Plus/Plus';
import Products from './../components/Products/Products';

function Home() {
  const [cards, setCards] = React.useState([]);
  // React.useEffect(() => {
  //   const url =
  //     'https://weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com/search?zipcode=77494&keyword=tofu&limit=60&offset=0';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '4ea8a63116msh5efbe405b931da5p1243d0jsn1f2772481660',
  //       'X-RapidAPI-Host': 'weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com',
  //     },
  //   };

  //   try {
  //     const response = fetch(url, options);
  //     const result = response.text();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  // const url = 'https://store-groceries.p.rapidapi.com/search/chicken';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '4ea8a63116msh5efbe405b931da5p1243d0jsn1f2772481660',
  //     'X-RapidAPI-Host': 'store-groceries.p.rapidapi.com',
  //   },
  // };

  // try {
  //   const response = fetch(url, options);
  //   const result = response.text();
  //   console.log(result);
  // } catch (error) {
  //   console.error(error);
  // }

  React.useEffect(() => {
    const apiUrl = 'https://store-groceries.p.rapidapi.com/search/chicken';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4ea8a63116msh5efbe405b931da5p1243d0jsn1f2772481660',
        'X-RapidAPI-Host': 'store-groceries.p.rapidapi.com',
      },
    };

    async function getAll() {
      const res = await fetch(apiUrl, options);
      const result = await res.json();
      console.log(result);
      setCards(result);

      if (!res.ok) {
        console.log('error');
      }
    }

    getAll();

    window.scrollTo(0, 0); //at render scroll to top
    console.log('update Home fetch'); //check
  }, []);

  return (
    <>
      {/* <Slider /> */}
      <Plus />
      <Products cards={cards} />
    </>
  );
}

export default Home;
