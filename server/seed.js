const {db} = require('./db/index')
const {User, Plant} = require('./db/models')

const plants = [
  {
    type: 'flowers',
    name: 'Peace Lily',
    price: 29,
    size: 'small',
    description:
      'The Peace Lily is a popular indoor houseplant. It lives best in shade and needs little sunlight to thrive, and is watered approximately once a week. The soil is best left moist but only needs watering if the soil is dry.'
  },
  {
    type: 'flowers',
    name: 'Sunflower',
    price: 29,
    size: 'medium',
    description:
      'Sunflowers are usually tall annual or perennial plants that in some species can grow to a height of 300 cm (120 in) or more. They bear one or more wide, terminal capitula (flower heads), with bright yellow ray florets at the outside and yellow or maroon (also known as a brown/red) disc florets inside.'
  },
  {
    type: 'flowers',
    name: 'Peony',
    price: 29,
    size: 'medium',
    description:
      'Peonies are hardy flowering plants that need little care and live through severe winters. After becoming established in a garden, Peonies bloom each spring for many years. Peonies are also extensively grown as ornamental plants for their very large, often scented cut flowers.'
  },
  {
    type: 'flowers',
    name: 'Rose',
    price: 29,
    size: 'medium',
    description:
      'The rose is a type of flowering shrub. Its name comes from the Latin word Rosa.[1] The flowers of the rose grow in many different colors, from the well-known red rose or yellow roses and sometimes white or purple roses. Roses belong to the family of plants called Rosaceae. All roses were originally wild and they come from several parts of the world, North America, Europe, northwest Africa and many parts of Asia and Oceania.'
  },
  {
    type: 'flowers',
    name: 'Hydrangea',
    price: 29,
    size: 'large',
    description:
      'Hydrangea macrophylla is a species of flowering plant in the family Hydrangeaceae, native to Japan. It is a deciduous shrub growing to 2 m (7 ft) tall by 2.5 m (8 ft) broad with large heads of pink or blue flowers in summer and autumn.'
  },
  {
    type: 'flowers',
    name: 'Hibiscus',
    price: 29,
    size: 'large',
    description:
      'Hibiscus rosa-sinensis is a bushy, evergreen shrub or small tree growing 2.5–5 m (8–16 ft) tall and 1.5–3 m (5–10 ft) wide, with glossy leaves and solitary, brilliant red flowers in summer and autumn. The 5-petaled flowers are 10 cm (4 in) in diameter, with prominent orange-tipped red anthers.'
  },
  {
    type: 'flowers',
    name: 'Miosotis',
    price: 29,
    size: 'small',
    description:
      'Miosotis is a moderately tall, sprawling wildflower that measures approximately 15-60 cm. in height. The radially symmetrical flowers are powder-blue with bright yellow centers. They are arranged in rounded, divergent clusters along the length of the branch. The leaves are oblong, hairy, and often stalkless.'
  },
  {
    type: 'flowers',
    name: 'Tulip',
    price: 29,
    size: 'medium',
    description:
      'Tulips typically bear cup-shaped flowers in almost every shade but true blue. They can be double or single, fringed or twisted, perfumed or nonscented. The plants range in size from rock garden miniatures to 2 1/2 feet or more in height. Most have broad leaves that quickly fade away in summer heat. Individual flowers last barely two weeks. However, since tulips offer various flowering seasons, you can have tulips in bloom from snow melt to the beginning of summer.'
  },
  {
    type: 'flowers',
    name: 'Pom Pom',
    price: 29,
    size: 'small',
    description:
      'Pompon dahlias, as their name suggests, have pompon-like flowers – the petals curve inwards to create stunning, intricate blooms up to 5cm across. Ball dahlias have a slightly flattened top, with blunt or rounded petals arranged in a spiral pattern. Miniature ball dahlias make good container displays.'
  },
  {
    type: 'trees',
    name: 'Palm Tree',
    price: 159,
    size: 'medium',
    description:
      'Palm trees are erect, slender-stemmed, single-trunked palms that can grow up to 30 m tall but normally trees are in between 10 to 15 m in height. Trunk is green when young, grey coloured in old trees with prominent white leaf scars.'
  },
  {
    type: 'trees',
    name: 'Oak',
    price: 159,
    size: 'large',
    description:
      'Oak trees live on the Northern hemisphere. They can survive in various forests, including those in temperate climates, Mediterranean and tropical areas.'
  },
  {
    type: 'trees',
    name: 'Weeping Willow',
    price: 159,
    size: 'large',
    description:
      'The Weeping willow is a short-trunked tree with long, drooping branches, a character which gives it its common name and helps distinguish it from other willows. Some of the longer branches may reach the ground. The bark is rough and gray. It is marked by long, branching ridges, resulting in rather deep furrows. It grows well, especially near water, and cuttings of twigs or branches root easily in moist soil.'
  },
  {
    type: 'trees',
    name: 'Cherry Blossom',
    price: 159,
    size: 'medium',
    description:
      'Cherry blossoms, also known as sakura in Japan, are the small, delicate pink flowers produced by cherry blossom trees. The springtime bloom is a lavish spectacle but remarkably brief; after only two weeks, they drop to the ground and wither, falling like snow with the ebb and flow of the winds.'
  },
  {
    type: 'trees',
    name: 'Crab Apple',
    price: 159,
    size: 'small',
    description:
      'There are numerous reasons to consider planting a crabapple tree. Their ability to help pollinate other fruit trees, the tasty fruit, and their beautiful blooms make them a great asset for your yard or orchard.'
  },
  {
    type: 'trees',
    name: 'Magnolia',
    price: 159,
    size: 'medium',
    description:
      "Magnolias were named after the French botanist, Pierre Magnol. These trees are either evergreen or deciduous and bear beautiful flowers. This genus belongs to the Magnoliaceae family. If you're planning to plant a magnolia tree in your yard make sure your soil has proper drainage, as they do not do well with wet feet."
  },
  {
    type: 'trees',
    name: 'Cypress',
    price: 159,
    size: 'large',
    description:
      'Bald cypress trees can live for hundreds of years, growing up to 150 feet in height. Cypress trees are ideal for landscapes that experience flooding with water up to several feet deep, but can also be grown in drier areas. The "knees" that are so closely associated with cypress are less likely to appear with trees planted on drier sites.'
  },
  {
    type: 'trees',
    name: 'Dogwood',
    price: 159,
    size: 'small',
    description:
      'The dogwood, one of the most popular trees in the country, offers an unmatched four-season display of beauty. The main attraction is the appearance of the showy white or pink flowers (actually bracts) that herald the arrival of spring. Unfussy in its care requirements, the dogwood readily thrives in the home landscape and grows quickly.'
  },
  {
    type: 'trees',
    name: 'Birch',
    price: 159,
    size: 'medium',
    description:
      'With papery bark that peels off trunks, these trees are often known as white birch trees. The tree has a single, slender trunk and gains visual impact when planted in groups to emphasize its spindly whiteness.'
  }
]
