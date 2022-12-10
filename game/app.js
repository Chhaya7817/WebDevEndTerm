document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/img1.jpg'
    },
    {
      name: 'cheeseburger',
      img: 'images/img2.jpg'
    },
    {
      name: 'ice-cream',
      img: 'images/img3.jpg'
    },
    {
      name: 'pizza',
      img: 'images/img4.jpg'
    },
    {
      name: 'milkshake',
      img: 'images/img5.jpg'
    },
    {
      name: 'hotdog',
      img: 'images/img6.jpg'
    },
    {
      name: 'fries',
      img: 'images/img7.jpg'
    },
    {
      name: 'cheeseburger',
      img: 'images/img8.jpg'
    },
    {
      name: 'ice-cream',
      img: 'images/img9.jpg'
    },
    {
      name: 'pizza',
      img: 'images/img10.jpg'
    },
    {
      name: 'milkshake',
      img: 'images/img11.jpg'
    },
    {
      name: 'hotdog',
      img: 'images/img12.jpg'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.style.height='100px';
      card.style.width='100px';

      card.setAttribute('src', 'images/empty.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/empty.jpg')
      cards[optionTwoId].setAttribute('src', 'images/empty.jpg')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.jpg')
      cards[optionTwoId].setAttribute('src', 'images/white.jpg')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/empty.jpg')
      cards[optionTwoId].setAttribute('src', 'images/empty.jpg')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
