export const addImage = imgSrc => {
  const myPromise = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'my image');
    imgElem.src = imgSrc;
    const pageElem = document.querySelector('.page');
    pageElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => reject(new Error('Image load is failed...')));
  });

  return myPromise;
};

// test data
// const imgSrc = 'https://server.com/image.png';

// const resPromise = addImage(imgSrc);
// resPromise.then(data => console.log(data));
// resPromise.catch(error => console.log(error));

// console.log(resPromise);
