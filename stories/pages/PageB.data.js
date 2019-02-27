import watchSrc from '../../static/watch-800x500.jpg';
import carInteriorSrc from '../../static/car-interior-800x500.jpg';

import face1Src from '../../static/face1-200x200.jpg';

const featuredCard1 = {
  image: {
    src: watchSrc,
  },
  label: `Finance`,
  heading: `Using Banners Will Increase Trade Show Traffic`,
  preamble: `There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.`,
  social: {
    views: 173,
    shares: 275,
    comments: 403,
  },
};

const featuredCard2 = {
  image: {
    src: carInteriorSrc,
  },
  label: `Finance`,
  heading: `Using Banners Will Increase Trade Show Traffic`,
  preamble: `There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.`,
  social: {
    views: 173,
    shares: 275,
    comments: 403,
  },
};

const articleCard1 = {
  author: {
    name: 'Kinga Cicewicz',
    title: 'Author',
    imageSrc: face1Src,
  },
  label: `Finance`,
  heading: `Using Banners Will Increase Trade Show Traffic`,
  publishedAt: `May 15, 2018`,
};

export default {
  featuredCard1,
  featuredCard2,
  articleCard1,
};
