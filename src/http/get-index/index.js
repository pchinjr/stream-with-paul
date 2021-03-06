const Main = require('@architect/views/main.js')
const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Paul Chin Jr.', //←  Start by adding your name!
    title: 'My personal site!',
    occupation: 'Artist & Photographer',
    location: 'Va Beach, VA',
    bio: 'I am a new twitch streamer',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'your@email.com',
    twitter: 'yourTwitter',
    linkedin: 'your-linkedin-name',
    instagram: 'yourInsta',
    facebook: 'your-facebook-name',

    /**
     * Layout
     */
    photographer: 'Paul Chin JR ',
    service: 'github',
    credit: 'Www.paulchinjr.com',
    image: 'https://user-images.githubusercontent.com/10526646/76002768-1b763c80-5ed5-11ea-8ca6-8796e2d85362.jpg'
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
