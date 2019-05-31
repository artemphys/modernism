// TODO: remove after DB integration

export const ARTISTS_DATA = [
  {
    id: "Vincent-Willem-van-Gogh",
    name: "Vincent Willem van Gogh",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1135px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
  },
  {
    id: "Eugene-Henri-Paul-Gauguin",
    name: "Eugene Henri Paul Gauguin",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Paul_Gauguin_036.jpg/1148px-Paul_Gauguin_036.jpg"
  },
  {
    id: "Paul-Cezanne",
    name: "Paul Cezanne",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Woman_in_a_Green_Hat_%28by_Paul_C%C3%A9zanne%2C_1894-95%29.jpg"
  },
  {
    id: "Pablo-Picasso",
    name: "Pablo Picasso",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/869px-Les_Demoiselles_d%27Avignon.jpg"
  },
  {
    id: "Wassily-Kandinsky",
    name: "Wassily Kandinsky",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Vassily_Kandinsky%2C_1912_-_Improvisation_27%2C_Garden_of_Love_II.jpg"
  }
];

export const DATA = [
  {
    id: "Post-Impressionism",
    name: "Post-Impressionism",
    description:
      "Postmodern art is a body of art movements that sought to contradict some aspects of modernism or some aspects that emerged or developed in its aftermath. There are several characteristics which lend art to being postmodern; these include bricolage, the use of text prominently as the central artistic element, collage, simplification, appropriation, performance art, the recycling of past styles and themes in a modern-day context, as well as the break-up of the barrier between fine and high arts and low art and popular culture...",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Vincent_van_Gogh_%281853-1890%29_-_The_Olive_Trees_%281889%29.jpg"
  },
  {
    id: "Surrealism",
    name: "Surrealism",
    description:
      "Surrealism, movement in visual art and literature, flourishing in Europe between World Wars I and II. Surrealism grew principally out of the earlier Dada movement, which before World War I produced works of anti-art that deliberately defied reason; but Surrealism’s emphasis was not on negation but on positive expression. The movement represented a reaction against what its members saw as the destruction wrought by the “rationalism” that had guided European culture and politics in the past and that had culminated in the horrors of World War I... ",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/100_4419.jpg"
  },
  {
    id: "Cubism",
    name: "Cubism",
    description:
      "Cubism, highly influential visual arts style of the 20th century that was created principally by the artists Pablo Picasso and Georges Braque in Paris between 1907 and 1914. The Cubist style emphasized the flat, two-dimensional surface of the picture plane, rejecting the traditional techniques of perspective, foreshortening, modeling, and chiaroscuro, and refuting time-honoured theories that art should imitate nature. Cubist painters were not bound to copying form, texture, colour, and space; instead, they presented a new reality in paintings that depicted radically fragmented objects...",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/1914_Gris_Le_Petit_D%C3%A9jeuner.jpg"
  }
];

export const columns = [
  {
    title: "artistName",
    dataIndex: "artistName",
    key: "artistName"
  },
  {
    title: "genre",
    dataIndex: "genre",
    key: "genre"
  },
  {
    title: "country",
    dataIndex: "country",
    key: "country"
  },
  {
    title: "address",
    dataIndex: "address",
    key: "address"
  }
];

export const table_data = [
         {
           key: "1",
           artistName: "Vincent Willem van Gogh",
           genre: "Post-Impressionism",
           country: "HET KRÖLLER-MÜLLER MUSEUM",
           address: "Kröller-Müller Museum Houtkampweg 6 6731 AW Otterlo"
         },
         {
           key: "2",
           artistName: "Dalí Salvador",
           genre: "Surrealism",
           country: "Spain",
           address:
             "Gala-Salvador Dalí Square, 5 E-17600 Figueres. Catalonia"
         }
       ];
