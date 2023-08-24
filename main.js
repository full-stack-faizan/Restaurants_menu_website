const arrdata = [

    {
        "name": "Buttermilk Pancakes",
        "prize": "$15.99",
        "image": "./images/pic1.jpeg",
        "detal": "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        "category": "Breakfast"

    },

    {
        "name": "Street Food",
        "prize": "$15.99",
        "image": "./images/pic9.jpg",
        "detal": "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        "category": "Party-Dishes"

    },

    {
        "name": "Country Delight",
        "prize": "$20.99",
        "image": "./images/pic2.jpeg",
        "detal": "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
        "category": "Breakfast"

    },
    {
        "name": "Bacon Overflow",
        "prize": "$8.99",
        "image": "./images/pic3.jpg",
        "detal": "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
        "category": "Breakfast"

    },
    {
        "name": "Diner Double",
        "prize": "$13.99",
        "image": "./images/pic4.jpg",
        "detal": "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        "category": "Lunch"

    },
    {
        "name": "Healty Fruits",
        "prize": "$22.99",
        "image": "./images/pic5.jpg",
        "detal": "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
        "category": "Lunch"

    },
    {
        "name": "American Classic",
        "prize": "$12.99",
        "image": "./images/pic6.jpg",
        "detal": "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
        "category": "Lunch"

    },
    {
        "name": "Godzilla Milkshake",
        "prize": "$6.99",
        "image": "./images/pic11.jpeg",
        "detal": "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
        "category": "Shakes"

    },
    {
        "name": "Oreo Dream",
        "prize": "$18.99",
        "image": "./images/pic12.jpeg",
        "detal": "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        "category": "Shakes"

    },
    {
        "name": "Quarantine Buddy",
        "prize": "$16.99",
        "image": "./images/pic8.jpg",
        "detal": "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        "category": "Shakes"

    },
    {
        "name": "Steak Dinner",
        "prize": "$39.99",
        "image": "./images/pic14.jpg",
        "detal": "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        "category": "Dinner"

    }

]

let CardContainer = document.querySelector('.card-container')
let FlterContainer = document.querySelector('.filter-buttons')

let Card = document.querySelector('.card')
console.log(Card)


window.addEventListener('DOMContentLoaded', (e) => {
    
    ArrayFilterfunctionForBtns()
    ArrayMapfunction(arrdata)

})


const ArrayMapfunction = (ParameterOfArray) => {
    let MappedArray = ParameterOfArray.map((e, i, a) => {
        return `<div class="card">
            <div class="card-img">
              <img src="${e.image}" 
              
            class="card-img-class"alt="Image" />
            </div>
            <div class="card-info">
              <div class="title-prize">
              <div class="card-title"><h3>${e.name}</h3></div>
              <div class="card-prize"><h3>${e.prize}</h3></div>
            </div>
              <div class="card-description"><p>${e.detal}</p></div>
            </div>
            </div>  `
    })

    CardContainer.innerHTML = MappedArray.join('')

}

const ArrayFilterfunctionForBtns = () => {
   
    let AddNewbuttons = arrdata.reduce((a, c) => {
        if (!a.includes(c.category)) {
            a.push(c.category)
        }
        return a;
    }, ['All'])

    let newbtn = AddNewbuttons.map((e, i, a) => {
        return `<button data-id=${e}  class="filter-btns">${e}</button>`

    }).join('')
    FlterContainer.innerHTML = newbtn
    const FilterButtons = document.querySelectorAll('.filter-btns')
    console.log(FilterButtons)
    FilterButtons.forEach((Buttons) => {
        Buttons.addEventListener('click', (e) => {
            console.log(e)
            let DatasetId = e.currentTarget.dataset.id
            console.log(DatasetId)

            let Filtervariable = arrdata.filter((e) => {
                if (DatasetId == e.category) {
                    return e
                }
            })
            if (DatasetId == "All") {
                return ArrayMapfunction(arrdata)
            }
            else {
                return ArrayMapfunction(Filtervariable)
            }


        })

    })


}














