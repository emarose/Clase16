const getDataAsync = async () => {
  try{
      const response = await fetch('https://restcountries.com/v3.1/lang/spa');
      const data = await response.json()
      return console.log(data[1].name)
  } catch (error) {
      console.log(error)
  }
}

getDataAsync();
