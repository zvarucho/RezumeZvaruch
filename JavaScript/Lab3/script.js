document.write('<h2>Завдання 1:</h2>')
  let now = new Date();
  document.write(now)


document.write('<h2>Завдання 2:</h2>')
  //0 означає 01.01.1970 UTC+0
  let Jan01_1970 = new Date(0)
  document.write(Jan01_1970)
  // тепер додамо 24 години, отримаємо 02.01.1970 UTC+0
  let Jan02_1970 = new Date(24 * 3600 *1000)
  document.write('<br>' + Jan02_1970)


document.write('<h2>Завдання 3:</h2>')
  // 1 грудня 1969 року
  let Dec31_1969 = new Date(-24 * 3600 * 1000)
  document.write(Dec31_1969)


document.write('<h2>Завдання 4:</h2>')
  let date = new Date("2022-10-09")
  document.write(date)


document.write('<h2>Завдання 5:</h2>')
  new  Date(2011, 0, 1, 0, 0, 0, 0) //1 січня 2011 року, 00:00:00
  new Date(2011, 0, 1) // теж саме бо нуль всеодно за замовчуванням

  let date1 = new Date(2011, 0 , 1, 2, 3, 4, 567)
  document.write(date1)


document.write('<h2>Завдання 6:</h2>')
  //поточна дата
  let date3 = new Date()
  //години у поточному часовому поясі
  document.write(date3.getHours())
  document.write('<br>' + new Date().getTimezoneOffset())


document.write('<h2>Завдання 7:</h2>')
  let today = new Date()
  today.setHours(0)
  document.write(today)

  today.setHours(0,0,0,0)
  document.write('<br>' + today)


document.write('<h2>Завдання 8:</h2>')
  let date4 = new Date(2013, 0, 32)
  document.write(date4)

  let date5 = new Date(2016, 1, 28)
  date5.setDate(date5.getDate() + 2)
  document.write('<br>' + date5)

  let date6 = new Date()
  date6.setSeconds(date6.getSeconds() + 70)
  document.write('<br>' + date6)

  let date7 = new Date(2016, 0, 2)
  date7.setDate(1)
  document.write('<br>' + date7)

  date7.setDate(0)
  document.write('<br>' + date7)


document.write('<h2>Завдання 9:</h2>')
  let date8 = new Date()
  document.write(+date8)

  let start = new Date()

  for(let i = 0; i < 100000; i++) {
      let doSomething = i * i * i;
  }

  let end = new Date()
  document.write(`<br> Цикл зайняв ${end - start} мс`)


document.write('<h2>Завдання 10:</h2>')
  let start2 = Date.now()

  for(let i = 0; i < 100000; i++) {
      let doSomething = i * i * i;
  }
  let end2 = Date.now()

  document.write(`Цикл зайняв ${end2 - start2} мс`)


document.write('<h2>Завдання 11:</h2>')
  function diffSubstract(date9, date10) {
      return date10 - date9;
  }

  function diffGetTime(date9, date10) {
      return date9.getTime() - date10.getTime();
  }

  function bench(f) {
      let date9 = new Date(0)
      let date10 = new Date()

      let start = Date.now()
      for(let i = 0; i < 10000; i++) f(date9, date10)
      return Date.now() - start
  }

  document.write('Час diffSubstract: ' + bench(diffSubstract) + ' мс')
  document.write('<br> Час diffGetTime: ' + bench(diffGetTime) + ' мс')


document.write('<h2>Завдання 12:</h2>')
  function diffSubstract(date9, date10) {
      return date10 - date9;
  }

  function diffGetTime(date9, date10) {
      return date9.getTime() - date10.getTime();
  }

  function bench(f) {
      let date9 = new Date(0)
      let date10 = new Date()

      let start = Date.now()
      for(let i = 0; i < 10000; i++) f(date9, date10)
      return Date.now() - start
  }

  let time1 = 0
  let time2 = 0

  bench(diffSubstract)
  bench(diffGetTime)

  for(let i = 0; i <getLastDayOfMonth; i++) {
      time1 += bench(diffSubstract);
      time2 += bench(diffGetTime);
  }
  document.write('Загальний час для diffSubstract:' + time1)
  document.write('<br> Загальний час для diffGetTime:' + time2)


document.write('<h2>Завдання 13:</h2>')
  let ms = Date.parse('2012-01-26T13:51:50.417-07:00')
  document.write(ms)

  let date12 = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'))
  document.write('<br>' + date12)


document.write('<h2>Завдання 14:</h2>')
  let today2 = new Date(),
  newYearDate = new Date(today.getFullYear() + 1, 0, 1)

  document.write('<p> today: ' + today.toLocaleString() + '</p>')
  document.write('<p> newYearDate: ' + newYearDate.toLocaleString() + '</p>')
  document.write('<p> newYearDate - today: ' + (newYearDate - today) + '</p>')
  document.write('<p> newYearDate.getTime() - today.getTi,e(): ' + (newYearDate.getTime() - today.getTime()) + '</p>')


  let msDiff = newYearDate - today2,
      days = Math.floor(msDiff / (24 * 60 * 60 * 1000)),
      hours = Math.floor((msDiff / (1000 * 60 * 60)) % 24),
      mins = Math.floor((msDiff / 1000 / 60) % 60),
      secs = Math.floor((msDiff / 1000) % 60)

  document.write('<p> До нового року: | ' + days + ' : ' + hours + ' : ' + mins + ' : ' + secs + '</p>')


document.write('<h2>Завдання 15:</h2>')
  document.write('<h2>Today is:</h2>')
  let today3  = new Date()
  let options = {
      era: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
  }
  document.write(`<p>${today3.toLocaleString('ar-EG')}</p>`)
  document.write(`<p>${today3.toLocaleString('ar-EG', options)}</p>`)
  document.write(`<p>${today3.toLocaleString('en-EN')}</p>`)
  document.write(`<p>${today3.toLocaleString('en-GB')}</p>`)
  document.write(`<p>${today3.toLocaleString('en-GB', options)}</p>`)
  document.write(`<p>${today3.toLocaleString('uk-UK', options)}</p>`)
  document.write('<h2>Today is:</h2>')
  let today4  = new Date()
  let options2 = {
      year: '2-digit',
      month: 'short',
      day: '2-digit',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
  }
  document.write(`<p>${today4.toLocaleString('ar-EG', options2)}</p>`)
  document.write(`<p>${today4.toLocaleString('en-GB', options2)}</p>`)
  document.write(`<p>${today4.toLocaleString('ru-RU', options2)}</p>`)
  document.write(`<p>${today4.toLocaleString('uk-UK', options2)}</p>`)


document.write('<h2>Індивідуальне завдання 1:</h2>')
  let date15 = new Date(2012, 1, 20, 3, 12)
  document.write(date15)


document.write('<h2>Індивідуальне завдання 2:</h2>')
  function getWeekDay(date) {
      let days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    
      return days[date.getDay()]
    }
    
    let date16 = new Date(2014, 0, 3)
    document.write(getWeekDay(date16))


document.write('<h2>Індивідуальне завдання 3:</h2>')
  function getLastDayOfMonth(year, month) {
    let date17 = new Date(year, month + 1, 0)
    return date17.getDate()
  }
  
  document.write(getLastDayOfMonth(2012, 0))
  document.write('<br>' + getLastDayOfMonth(2012, 1))
  document.write('<br>' + getLastDayOfMonth(2013, 1))


  function getSecondsToTomorrow() {
    let now = new Date();
  
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  
    let diff = tomorrow - now; 
    return Math.round(diff / 1000); 
  }
document.write('<br>' + getSecondsToTomorrow())


document.write('<h2>Індивідуальне завдання 4:</h2>')
  function formatDate(date) {
      let diff = new Date() - date;
    
      if (diff < 1000) { 
        return 'прямо зараз';
      }
    
      let sec = Math.floor(diff / 1000); 
    
      if (sec < 60) {
        return sec + ' сек. назад';
      }
    
      let min = Math.floor(diff / 60000); 
      if (min < 60) {
        return min + ' хв. назад';
      }
    
      let d = date;
      d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
      ].map(component => component.slice(-2)); 

      return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
    }
    document.write(formatDate(new Date(new Date - 1)) ); // "прямо зараз"
    document.write('<br>' + formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
    document.write('<br>' + formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 хв. назад"
    document.write('<br>' + formatDate(new Date(new Date - 86400 * 1000)) );



//document.write('<h2>Завдання 16:</h2>')
year.addEventListener('change', friday13)

function friday13(year3) {
    year3 = this.value || year3
    let str = ''
    for(let i = 0; i<12; i++) {
        let d = new Date(year3, i, 13)
        if(d.getDay() == 5)
        str += `<p>П'ятниця, ${d.toLocaleDateString()}</p>`
    }
    output13.innerHTML = str
}



