const layout = `
<div id="top-backgnd">
    <div id="backgnd">
      <h1 class="title">WEATHER APP</h1>
      <form>
        <input id="city" class="input" type="city" placeholder="CITY" required>
        <button id="submit" class="input" type="submit">&#x1f50d;</button>
      </form>
      <img id="imgAPI" src="https://pixabay.com/static/img/logo_square.png" alt="">
    </div>
  </div>
  <div id="bottom" class="unhidden">
    <h4><span class="date">August 19, 2020</span> <img id="flag" src="https://flagpedia.net/data/flags/w580/mx.png" alt=""></h4>
    <div class="info-1">
      <div id="clouds" class="d">
        <p>Sky</p>
        <img id="cloud" src="https://openweathermap.org/img/wn/04d@4x.png" alt="">
        <p id="sky">broken clouds</p>
      </div>
      <div id="temp" class="d">
        <p class="realTemp-p"><span class="realTemp">18.0</span>°</p>
        <div id="degrees" class="celsius">
          <span id="degc">C</span>/
          <span id="degf">F</span>
        </div>
        <p class="feels">Feels like: <span class="temp2">12</span><span class="t2">°</span></p>
        <p class="max-min"><span class="maxTemp t2">26.0</span><span class="t2">°</span> / <span class="minTemp t2">26.0</span><span class="t2">°</span></p>
      </div>
    </div>
    <div class="info-2">
      <p id="speed">1008 m/s</p>
      <p id="humidity">88%</p>
    </div>
  </div>
  <div id="error" class="hidden">
    <img class="errImg" src="https://i.pinimg.com/originals/e1/d9/0a/e1d90a51af2912515fc678acb1c677ae.png" alt="">
    <h3 class="errTitle">City not in planet Earth</h3>
  </div>
`;

export default layout;