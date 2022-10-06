//console.log('Node terminal test');

function generateRandom(num) {
    return Math.floor(Math.random() * num)
  }

const possibilities = {
    firstLine: ['============================='],
    day: ['Today', 'Tomorrow', 'Monday', 'Tuesday', 'Friday'],
    precipitation: ['rainy', 'dry', 'snowing'],
    high: ['25 degrees', '50 degrees', '95 degrees'],
    lastLine: ['=============================']
}

let forecast = [];

for(let prop in possibilities) {
    let optionIdx = generateRandom(possibilities[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'firstLine':
        forecast.push(`${possibilities[prop][optionIdx]}`)
        break
      case 'day':
        forecast.push(`${possibilities[prop][optionIdx]}`)
        break
      case 'precipitation':
        forecast.push(`it will be ${possibilities[prop][optionIdx]}`)
        break
      case 'high':
        forecast.push(`with a high of ${possibilities[prop][optionIdx]}.`)
        break
      case 'lastLine':
        forecast.push(`${possibilities[prop][optionIdx]}`)
        break
      default:
        forecast.push('There is not enough info.')
    }
  }

  function formatForecast(stuff) {
    const formatted = forecast.join('\n')
    console.log(formatted)
  }
  
  formatForecast(forecast);