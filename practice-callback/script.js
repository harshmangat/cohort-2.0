function displayUser(user, cb) {
  console.log('Fetching User Data...')
  setTimeout(function () {
    cb({ username: user, id: 1 })
  }, 1000)

}

function fetchUserData(id, cb) {
  console.log('Fetching User Data from ID...')
  setTimeout(function () {
    cb({ id: id, username: 'harsh' })
  }, 2000)
}

displayUser('harsh', function (user) {
  console.log(`Initial user object received: ${user.username}, ID: ${user.id}`)
  fetchUserData(user.id, function (data) {
    console.log('Final Data Fetched:')
    console.log(data)
  })
})


//2. 

function authenticateUser(username, password, cb) {
  console.log('Authenticating User...')
  setTimeout(function () {
    cb({ username: username, password: password })
  }, 1000)
}


function fetchUserPermissions(username, cb) {
  console.log('fetching user permissions...')
  setTimeout(function () {
    cb({ username: 'admin', permissions: ['read', 'write', 'execute'] })
  }, 1000)
}

authenticateUser('admin', '1234', function (authData) {
  console.log(`User authenticated: ${authData.username}`)
  fetchUserPermissions(authData.username, function (permissions) {
    console.log(`Permissions for ${permissions.username}: ${permissions.permissions.join(', ')}`)
  })
})


//3.

function mapArray(arr, cb) {
  console.log('Mapping array...')
  setTimeout(function () {
    for (let i = 0; i < arr.length; i++) {
      cb(arr[i])

    }
  }, 1000)
}


function squareNumber(num, cb) {
  console.log('Squaring number...')
  setTimeout(function () {
    cb(num * num)
  }, 500)
}


mapArray([1, 2, 3, 4, 5], function (num) {
  squareNumber(num, function (squared) {
    console.log(`Original: ${num}, Squared: ${squared}`)
  })
})

//4.

function processPayment(amount, creditCard, cb) {
  console.log('Processing Payment...')
  setTimeout(function () {
    if (creditCard === '1234-5678-9012-3456') {
      cb('Payment Successful')
    } else {
      cb('Payment Failed: Invalid Credit Card')
    }
  }, 1500)
}


processPayment(100, '1234-5678-9012-56', function (paymentStatus) {
  console.log(`Payment Status: ${paymentStatus}`)

})

//.5
