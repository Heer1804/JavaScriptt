let cart = []
let total = 0

function addToCart(itemName) {
    let price
    switch (itemName) {
      case 'Cheesecake':
        price = 150
        break
      case 'Cupcake':
        price = 30
        break
        case 'brownie':
        price = 50
        break
        case 'creamroll':
        price = 35
        break
        case 'pastry':
        price = 90
        break
        case 'chocolate':
        price = 20
        break
        case 'brownie with icecream':
        price = 150
        break
        case 'candy':
        price = 50
        break
      default:
        price = 0
    }
    cart.push({name: itemName, price})
    total += price
    updateCart();

    function updateCart() {
        let cartItem = document.getElementById('cart-items')
        cartItem.innerHTML = ''
        cart.forEach(item => {
          let li = document.createElement('li')
          li.textContent = `${item.name} - ${item.price}`
          cartItem.appendChild(li)
        });
        document.getElementById('total').textContent = total
      }

  }