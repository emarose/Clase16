
function getData(url) {
  return new Promise((resolve, reject) => {
      fetch(url)
          .then(response => {
              if (response.status !== 200) {
                  console.log("Se rompió la respuesta" + response.status)
              }
              return
          })
          response.json().then(data =>{
              resolve(data)
          })
          .catch(function(err) {
              console.log("problema con ", err)
              reject(err)
          })
  })
}

const getDataAsync = async () => {
  try{
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const data = await response.json()
      return console.log(data)
      
  } catch (error) {
      console.log(error)
  }
}