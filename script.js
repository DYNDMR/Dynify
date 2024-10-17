document.addEventListener('DOMContentLoaded', () => {


    const artistData = [
        { name: 'Slipknot', image: './assets/slipknot1.jpg' },
        { name: 'Disturbed', image: './assets/disturbed1.jpg' },
        { name: 'Imagine Dragons', image: './assets/imagineDragons1.jpg' },
        { name: 'Linkin Park', image: './assets/linkinPark1.jpg' }
    ];

    const albumsData = [
        { name: 'Slipknot', image: './assets/slipknot1.jpg' },
        { name: 'Slipknot', image: './assets/slipknot2.jpg' },
        { name: 'Slipknot', image: './assets/slipknot3.jpg' },
        { name: 'Slipknot', image: './assets/slipknot4.jpg' },
        { name: 'Disturbed', image: './assets/disturbed1.jpg' },
        { name: 'Disturbed', image: './assets/disturbed2.jpg' },
        { name: 'Imagine Dragons', image: './assets/imagineDragons1.jpg' },
        { name: 'Imagine Dragons', image: './assets/imagineDragons2.jpg' },
        { name: 'Imagine Dragons', image: './assets/imagineDragons3.jpg' },
        { name: 'Imagine Dragons', image: './assets/imagineDragons4.jpg' },
        { name: 'Linkin Park', image: './assets/linkinPark1.jpg' },
        { name: 'Linkin Park', image: './assets/linkinPark2.jpg' },
        { name: 'Linkin Park', image: './assets/linkinPark3.jpg' }
    ];

    const artistGrid = document.querySelector('.artists-grid')
    const albumGrid = document.querySelector('.albums-grid')

    artistData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
        <img src="${artist.image}" alt="imagem do ${artist.name}">
        <i class="fa-solid fa-circle-play fa-xl" style="color: #B197FC;"></i>
        <h3>${artist.name}</h3>
        <p>Artist</p>
    `
        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach(albums => {
        const albumsCard = document.createElement('div')
        albumsCard.classList.add('album-card')

        albumsCard.innerHTML = `
        <img src="${albums.image}" alt="imagem do ${albums.name}">
        <i class="fa-solid fa-circle-play fa-xl" style="color: #B197FC;"></i>
        <p>${albums.name}</p>
        `

        albumGrid.appendChild(albumsCard)
    })
})
