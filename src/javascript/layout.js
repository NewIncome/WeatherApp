const layout = `
<div id="top-backgnd">
    <div id="backgnd">
      <h1 class="title">WEATHER APP</h1>
      <form action="">
        <input id="city" class="input" type="city" placeholder="CITY" required>
        <button class="submit input">&#x1f50d;</button>
      </form>
    </div>
  </div>
  <div class="bottom">
    <h4 class="date">August 19, 2020 <img id="flag" src="https://flagpedia.net/data/flags/w580/mx.png" alt=""></h4>
    <div class="info-1">
      <div id="clouds" class="d">
        <p>Sky</p>
        <img id="cloud" src="https://openweathermap.org/img/wn/04d@4x.png" alt="">
        <p>broken clouds</p>
      </div>
      <div id="temp" class="d">
        <p class="realTemp">18°</p>
        <div id="degrees">
          <span id="degc">C</span>/
          <span id="degf">F</span>
        </div>
        <p class="feels">Feels like: <span class="temp2">12°</span></p>
        <p class="max-min"><span class="temp2">26°</span> / <span class="temp2">26°</span></p>
      </div>
    </div>
    <div class="info-2">
      <p id="speed">1008 m/s</p>
      <p id="humidity">88%</p>
    </div>
  </div>
`;

export default layout;