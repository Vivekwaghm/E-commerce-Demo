
export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', id: 'women_tops', href: '/women/clothing/tops' },
              { name: 'Dresses', id: 'women_dresses', href: '/women/clothing/dresses' },
              { name: 'Women Jeans', id: 'women_jeans', href: '/women/clothing/jeans' },
              { name: 'Lengha Choli', id: 'lengha_choli', href: '/women/clothing/lengha-choli' },
              { name: 'Sweaters', id: 'women_sweaters', href: '/women/clothing/sweaters' },
              { name: 'T-Shirts', id: 'women_t-shirts', href: '/women/clothing/t-shirts' },
              { name: 'Jackets', id: 'women_jackets', href: '/women/clothing/jackets' },
              { name: 'Gowns', id: 'women_gowns', href: '/women/clothing/gowns' },
              { name: 'Sarees', id: 'women_sarees', href: '/women/clothing/sarees' },
              { name: 'Kurtas', id: 'women_kurtas', href: '/women/clothing/kurtas' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: 'women_watches', href: '/women/accessories/watches' },
              { name: 'Wallets', id: 'women_wallets', href: '/women/accessories/wallets' },
              { name: 'Bags', id: 'women_bags', href: '/women/accessories/bags' },
              { name: 'Sunglasses', id: 'women_sunglasses', href: '/women/accessories/sunglasses' },
              { name: 'Hats', id: 'women_hats', href: '/women/accessories/hats' },
              { name: 'Belts', id: 'women_belts', href: '/women/accessories/belts' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', id: 'women_full_nelson', href: '/women/brands/full-nelson' },
              { name: 'My Way', id: 'women_my_way', href: '/women/brands/my-way' },
              { name: 'Re-Arranged', id: 'women_re_arranged', href: '/women/brands/re-arranged' },
              { name: 'Counterfeit', id: 'women_counterfeit', href: '/women/brands/counterfeit' },
              { name: 'Significant Other', id: 'women_significant_other', href: '/women/brands/significant-other' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt: 'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Mens Kurtas', id: 'men_kurtas', href: '/men/clothing/kurtas' },
              { name: 'Shirts', id: 'men_shirts', href: '/men/clothing/shirts' },
              { name: 'Men Jeans', id: 'men_jeans', href: '/men/clothing/jeans' },
              { name: 'Sweaters', id: 'men_sweaters', href: '/men/clothing/sweaters' },
              { name: 'T-Shirts', id: 'men_t-shirts', href: '/men/clothing/t-shirts' },
              { name: 'Jackets', id: 'men_jackets', href: '/men/clothing/jackets' },
              { name: 'Activewear', id: 'men_activewear', href: '/men/clothing/activewear' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: 'men_watches', href: '/men/accessories/watches' },
              { name: 'Wallets', id: 'men_wallets', href: '/men/accessories/wallets' },
              { name: 'Bags', id: 'men_bags', href: '/men/accessories/bags' },
              { name: 'Sunglasses', id: 'men_sunglasses', href: '/men/accessories/sunglasses' },
              { name: 'Hats', id: 'men_hats', href: '/men/accessories/hats' },
              { name: 'Belts', id: 'men_belts', href: '/men/accessories/belts' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', id: 'men_re_arranged', href: '/men/brands/re-arranged' },
              { name: 'Counterfeit', id: 'men_counterfeit', href: '/men/brands/counterfeit' },
              { name: 'Full Nelson', id: 'men_full_nelson', href: '/men/brands/full-nelson' },
              { name: 'My Way', id: 'men_my_way', href: '/men/brands/my-way' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/company' },
      { name: 'Stores', id: '/stores' },
    ],
  };