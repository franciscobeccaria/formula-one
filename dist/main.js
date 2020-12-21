(()=>{"use strict";const t={routes:[],mode:null,root:"/",config:function(t){return this.mode=t&&t.mode&&"history"==t.mode&&history.pushState?"history":"hash",this.root=t&&t.root?"/"+this.clearSlashes(t.root)+"/":"/",this},getFragment:function(){var t="";if("history"===this.mode)t=(t=this.clearSlashes(decodeURI(location.pathname+location.search))).replace(/\?(.*)$/,""),t="/"!=this.root?t.replace(this.root,""):t;else{var e=window.location.href.match(/#(.*)$/);t=e?e[1]:""}return this.clearSlashes(t)},clearSlashes:function(t){return t.toString().replace(/\/$/,"").replace(/^\//,"")},add:function(t,e){return"function"==typeof t&&(e=t,t=""),this.routes.push({re:t,handler:e}),this},remove:function(t){for(var e,n=0;this.routes.length,e=this.routes[n];n++)if(e.handler===t||e.re.toString()===t.toString())return this.routes.splice(n,1),this;return this},flush:function(){return this.routes=[],this.mode=null,this.root="/",this},check:function(t){for(var e=t||this.getFragment(),n=0;n<this.routes.length;n++){var i=e.match(this.routes[n].re);if(i)return i.shift(),this.routes[n].handler.apply({},i),this}return this},listen:function(){var t=this,e=t.getFragment();return clearInterval(this.interval),this.interval=setInterval((function(){e!==t.getFragment()&&(e=t.getFragment(),t.check(e))}),50),this},navigate:function(t){return t=t||"","history"===this.mode?history.pushState(null,null,this.root+this.clearSlashes(t)):window.location.href=window.location.href.replace(/#(.*)$/,"")+"#"+t,this}};t.config({mode:"history"}),t.navigate();const e=t,n={headers:{"x-rapidapi-key":"8e24c1ddadmsh14d300e160f7af5p1e6e9cjsnf29317490fbd","x-rapidapi-host":"api-formula-1.p.rapidapi.com"}},i=document.getElementById("spa-container");class a{constructor(t,e,n,i,a,s){this.id=t,this.name=e,this.image=n,this.nationality=i,this.birthdate=a,this.teams=s}getDriverCardContainerHtml(){return`\n                <div class="driver-card">\n                    <div class="driver-card-superior">\n                        <div class="driver-card-image"><img src="${this.image}" alt=""></div>\n                        <div class="driver-card-info">\n                            <div class="driver-card-info-image"><img src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div>\n                            <div class="driver-card-info-born">Born in ${this.birthdate}</div>\n                            <div class="driver-card-info-age">25 years old</div>\n                        </div>\n                    </div>\n                    <div class="driver-card-inferior"><p class="driver-link">${this.name}</p></div>\n                </div>\n                <div class="driver-card-footer center">Wikipedia <span><i class="fas fa-external-link-alt"></i></span></div>\n      `}getDriverPageTableHtml(t,e,n){return`\n                    \n                    <tr>\n                        <td>${t}</td>\n                        <td class="team-link">${e}</td>\n                        <td class="no-show"><div><img src="${n}" alt="Team Image"></div></td>\n                        <td>Champion</td>\n                    </tr>\n      `}}class s{constructor(t,e,n,i,a,s,r,c){this.id=t,this.name=e,this.logo=n,this.president=i,this.director=a,this.technicalManager=s,this.engine=r,this.tyres=c}getTeamPageHtml(){return`\n            <div class="div-title center"><h1>${this.name}</h1></div>\n            <div class="div-team-info">\n                <div class="team-image-div-container"><img src="${this.logo}" alt="Team Image"></div>\n                <div>\n                    <p><strong>President:</strong> ${this.president}</p>\n                    <p><strong>Director:</strong> ${this.director}</p>\n                    <p><strong>Technical manager:</strong> ${this.technicalManager}</p>\n                </div>\n            </div>\n            <div class="div-team-engine center">\n                <p><strong>Engine:</strong> ${this.engine}</p>\n                <p><strong>Tyres:</strong> ${this.tyres}</p>\n            </div>\n      `}}class r{constructor(t,e,n,i,a,s,r,c,o,d){this.round=t,this.season=e,this.circuit=n,this.competition=i,this.date=a,this.id=s,this.laps=r,this.status=c,this.type=o,this.weather=d}getRaceInformationHtml(){return`\n      <p><strong>${this.date.slice(0,10)}</strong></p>\n                    <p>${this.circuit.name} in <br>\n                        <strong>${this.competition.location.city}, ${this.competition.location.country}</strong>\n                    </p>\n                    <p><strong>Race</strong> #1<br><strong>Season</strong> ${this.season}</p>\n                    <p><strong>Weather:</strong> ${this.weather}   <span><i class="fas fa-sun"></i></span></p>\n                    <p><strong>Status:</strong> ${this.status}</p>\n                    <button id="see-race-information-btn">See Complete GP Information</button>\n                    <div class="no-show">${this.id}</div>\n      `}getRaceCard(){return`\n            <div class="race-card">\n                <div class="center"><h4>${this.competition.name}</h4></div>\n                <div class="center">${this.circuit.name}</div>\n                <div class="center">${this.date.slice(0,9)}7</div>\n                <div class="center">${this.status}</div>\n                <div class="no-show">${this.id}</div>\n            </div>\n      `}}class c{constructor(t,e,n,i,a,s,r){this.id=t,this.name=e,this.image=n,this.competition=i,this.km=a,this.capacity=s,this.opened=r}getCircuitCard(){return`\n            <div class="circuit-card">\n                <div class="center">${this.competition.name}</div>\n                <div class="center">${this.name}</div>\n                <div class="center">${this.competition.location.city}, ${this.competition.location.country}</div>\n                <div class="no-show">${this.id}</div>\n            </div>\n      `}getCircuitPageHtml(){return`\n        <div class="div-title center text-align-center"><h1>${this.competition.name}</h1></div>\n          <div class="circuit-container center">\n              <div class="circuit-image-bg"><div class="circuit-image-container"><img src="${this.image}" alt="Circuit Image"></div></div>\n              <div class="circuit-info">\n                  <h4>${this.competition.name} in <br><strong>${this.competition.location.city}, ${this.competition.location.country}</strong></h4>\n                  <p><strong>Length: </strong>${this.km}</p>\n                  <p><strong>Capacity: </strong>${this.capacity}</p>\n                  <p><strong>Opened: </strong>${this.opened}</p>\n              </div>\n        </div>\n      `}}class o{constructor(t){this.year=t}getSeasonCard(){return`\n            <div class="season-card">\n                <div class="center">Season</div>\n                <div class="center">${this.year}</div>\n            </div>\n      `}}class d{constructor(t,e,n,i,a,s,r,c,o){this.raceId=t,this.driver=e,this.team=n,this.position=i,this.time=a,this.laps=s,this.grid=r,this.pits=c,this.gap=o}getRacesRowHtml(){return`\n      <tr>\n          <td>${this.position}°</td>\n          <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="${this.driver.image}" alt="Driver Image"></div></td>\n          <td class="driver-link">${this.driver.name}</td>\n          <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>\n          <td class="team-link">${this.team.name}</td>\n          <td class="team-link"><img src="" alt=""></td>\n          <td>${this.time}</td>\n          <td class="no-show">1'20.486</td>\n          <td>${this.laps}</td>\n          <td>${this.pits}</td>\n          <td>${this.grid}°</td>\n      </tr>\n`}}class l{constructor(t,e,n,i,a,s,r){this.position=t,this.driver=e,this.team=n,this.points=i,this.wins=a,this.behind=s,this.season=r}getDriversRowHtml(){return`\n                    <tr>\n                        <td>${this.position}°</td>\n                        <td class="driver-link"><div class="driver-image-div"><img class="driver-image" src="${this.driver.image}" alt="Driver Image"></div></td>\n                        <td class="driver-link">${this.driver.name}</td>\n                        <td><div class="nation-image-div"><img class="nation-image" src="/197373-countrys-flags/197373-countrys-flags/svg/united-kingdom.svg" alt=""></div></td>\n                        <td class="team-link">${this.team.name}</td>\n                        <td class="team-link"><img src="" alt=""></td>\n                        <td>${this.points}</td>\n                        <td>${this.behind}</td>\n                        <td>${this.wins}</td>\n                    </tr>\n      `}}class h{constructor(t,e,n,i){this.position=t,this.team=e,this.points=n,this.season=i}getTeamsRowHtml(){return`\n                    <tr>\n                        <td>${this.position}°</td>\n                        <td class="team-link">${this.team.name}</td>\n                        <td><img src="" alt=""></td>\n                        <td>${this.points}</td>\n                        <td>1'20.486</td>\n                    </tr>\n      `}}function m(t,e){let n;return n=t?`${e}=${t}&`:"",n}class g{static async getCircuits(t,e,i){const a=[m(t,"search"),m(e,"competition"),m(i,"id")];let s="";a.forEach((t=>{s=s.concat(t)})),""!==s&&(s=`?${s}`);const r=`https://api-formula-1.p.rapidapi.com/circuits${s}`;return await axios.get(r,n)}static async getCompetitions(t,e,i,a,s){const r=[m(t,"country"),m(e,"name"),m(i,"search"),m(a,"city"),m(s,"id")];let c="";r.forEach((t=>{c=c.concat(t)})),""!==c&&(c=`?${c}`);const o=`https://api-formula-1.p.rapidapi.com/competitions${c}`;await axios.get(o,n).then((function(t){console.log(t.data)}))}static async getDrivers(t,e,i){const a=[m(t,"name"),m(e,"search"),m(i,"id")];let s="";a.forEach((t=>{s=s.concat(t)})),""!==s&&(s=`?${s}`);const r=`https://api-formula-1.p.rapidapi.com/drivers${s}`;return await axios.get(r,n)}static async getTeams(t,e,i){const a=[m(t,"name"),m(e,"search"),m(i,"id")];let s="";a.forEach((t=>{s=s.concat(t)})),""!==s&&(s=`?${s}`);const r=`https://api-formula-1.p.rapidapi.com/teams${s}`;return await axios.get(r,n)}static async getTeamsRankings(t,e){const i=[m(t,"season"),m(e,"team")];let a="";i.forEach((t=>{a=a.concat(t)})),""!==a&&(a=`?${a}`);const s=`https://api-formula-1.p.rapidapi.com/rankings/teams${a}`;return await axios.get(s,n)}static async getDriversRankings(t,e,i){const a=[m(t,"season"),m(e,"team"),m(i,"driver")];let s="";a.forEach((t=>{s=s.concat(t)})),""!==s&&(s=`?${s}`);const r=`https://api-formula-1.p.rapidapi.com/rankings/drivers${s}`;return await axios.get(r,n)}static async getRaceRankings(t,e,i){const a=[m(t,"race"),m(e,"team"),m(i,"driver")];let s="";a.forEach((t=>{s=s.concat(t)})),""!==s&&(s=`?${s}`);const r=`https://api-formula-1.p.rapidapi.com/rankings/races${s}`;return await axios.get(r,n)}static async getRaces(t,e,i,a,s,r,c,o){const d=[m(t,"competition"),m(e,"season"),m(i,"id"),m(a,"type"),m(s,"timezone"),m(r,"date"),m(c,"next"),m(o,"last")];let l="";d.forEach((t=>{l=l.concat(t)})),""!==l&&(l=`?${l}`);const h=`https://api-formula-1.p.rapidapi.com/races${l}`;return await axios.get(h,n)}static async getSeasons(){return await axios.get("https://api-formula-1.p.rapidapi.com/seasons",n)}}class v{static async drawDriversRanking(t,e,n,a,s){let r="\n                    <tr>\n                        <th>P.</th>\n                        <th></th>\n                        <th>Driver</th>\n                        <th></th>\n                        <th>Team</th>\n                        <th></th>\n                        <th>Time</th>\n                        <th>Diff.</th>\n                        <th>L</th>\n                    </tr>\n      ";await g.getDriversRankings(n,a,s).then((function(n){n.data.response.slice(0,e).forEach((t=>{const e=new l(t.position,t.driver,t.team,t.points,t.wins,t.behind,t.season);r=r.concat(e.getDriversRowHtml())})),document.getElementById(t).innerHTML=r})),"/"===location.pathname&&sessionStorage.setItem("home-page",i.innerHTML)}static async drawTeamsRanking(t,e,n,a){let s="\n                    <tr>\n                        <th>P.</th>\n                        <th>Team</th>\n                        <th></th>\n                        <th>Points</th>\n                        <th>Diff.</th>\n                    </tr>\n      ";await g.getTeamsRankings(n,a).then((function(n){n.data.response.slice(0,e).forEach((t=>{const e=new h(t.position,t.team,t.points,t.season);s=s.concat(e.getTeamsRowHtml())})),document.getElementById(t).innerHTML=s})),"/"===location.pathname&&sessionStorage.setItem("home-page",i.innerHTML)}static async drawRaceRanking(t,e,n,a){let s='\n    <tr>\n        <th>P.</th>\n        <th></th>\n        <th>Driver</th>\n        <th></th>\n        <th>Team</th>\n        <th></th>\n        <th>Time</th>\n        <th class="no-show">Diff.</th>\n        <th>L</th>\n        <th>B</th>\n        <th>G</th>\n    </tr>\n';await g.getRaceRankings(e,n,a).then((function(e){e.data.response.slice(0,t).forEach((t=>{const e=new d(t.race.id,t.driver,t.team,t.position,t.time,t.laps,t.grid,t.pits,t.gap);s=s.concat(e.getRacesRowHtml())}))})),document.getElementById("last-race-rankings").innerHTML=s,"/"===location.pathname&&sessionStorage.setItem("home-page",i.innerHTML)}static async drawRaceInformation(t,e,n,a,s,c,o,d,l){await g.getRaces(e,n,a,s,c,o,d,l).then((function(e){const n=e.data.response[0];console.log(n);const i=new r("",n.season,n.circuit,n.competition,n.date,n.id,n.laps,n.status,n.type,n.weather);document.getElementById("last-race-info").innerHTML=i.getRaceInformationHtml(),document.getElementById("last-race-title").innerText=i.competition.name,p=i.id,v.drawRaceRanking(t,p)})),"/"===location.pathname?sessionStorage.setItem("home-page",i.innerHTML):document.getElementById("see-race-information-btn").classList.add("no-show")}static async drawDriver(t,e,n){let i='\n                    <tr>\n                        <th>Season</th>\n                        <th>Team</th>\n                        <th class="no-show"></th>\n                        <th>Result</th>\n                    </tr>\n      ';await g.getDrivers(t,e,n).then((function(t){const e=t.data.response[0],n=new a(e.id,e.name,e.image,e.nationality,e.birthdate,e.teams);document.getElementById("driver-card-container").innerHTML=n.getDriverCardContainerHtml(),n.teams.forEach((t=>{i=i.concat(n.getDriverPageTableHtml(t.season,t.team.name,t.team.image))})),document.getElementById("driver-page-table").innerHTML=i}))}static async drawTeam(t,e,n){await g.getTeams(t,e,n).then((function(t){console.log(t.data.response[0]);const e=t.data.response[0],n=new s(e.id,e.name,e.logo,e.president,e.director,e.technicalManager,e.engine,e.tyres);document.getElementById("section-team-page").innerHTML=n.getTeamPageHtml()}))}static async drawCircuits(t,e,n){g.getCircuits(t,e,n).then((function(t){t.data.response.forEach((t=>{const e=new c(t.id,t.name,t.image,t.competition,t.length,t.capacity,t.opened).getCircuitCard();document.getElementById("circuit-card-container-circuits-page").insertAdjacentHTML("beforeend",e)}))}))}static async drawCircuit(t,e,n){await g.getCircuits(t,e,n).then((function(t){console.log(t.data.response[0]);const e=t.data.response[0],n=new c(e.id,e.name,e.image,e.competition,e.length,e.capacity,e.opened);i.innerHTML=n.getCircuitPageHtml()}))}static async drawSeasons(){await g.getSeasons().then((function(t){t.data.response.forEach((t=>{const e=new o(t).getSeasonCard();document.getElementById("circuit-card-container-circuits-page").insertAdjacentHTML("beforeend",e)}))}))}static async drawSeason(t,e,n,i,a,s,c,o){await g.getRaces(t,e,n,i,a,s,c,o).then((function(t){console.log(t.data.response),t.data.response.forEach((t=>{const e=new r("",t.season,t.circuit,t.competition,t.date,t.id,t.laps,t.status,t.type,t.weather).getRaceCard();document.getElementById("race-card-container-season-page").insertAdjacentHTML("beforeend",e)}))}))}}let p;const u=document.getElementById("main-header-nav"),f=document.getElementById("close-menu"),w=document.getElementById("toggle-menu"),$=document.getElementById("toggle-search"),y=document.getElementById("search-modal"),E=document.getElementById("close-search-modal");w.addEventListener("click",(()=>{u.classList.add("show-modal-menu")})),f.addEventListener("click",(()=>{u.classList.remove("show-modal-menu")})),$.addEventListener("click",(()=>{y.classList.remove("no-show")})),E.addEventListener("click",(()=>{y.classList.add("no-show")}));const L='\n        <section class="last-race-section">\n            <div class="div-title center"><h2 id="last-race-title"></h2></div>\n            <div class="div-container">\n                <div id="last-race-info" class="div-info"></div>\n                <div class="div-table">\n                    <table id="last-race-rankings"></table>\n                </div>\n            </div>\n        </section>\n        <section>\n            <div class="div-title center">\n                <h2>Standings Preview</h2>\n            </div>\n            <div class="standings-tables">\n                <table id="home-drivers-rankings"></table>\n                <table id="home-teams-rankings"></table>\n            </div>\n            <div class="div-title center">\n                <button id="see-complete-standings-btn">See Complete Standings</button>\n            </div>\n        </section>\n',k=()=>{document.getElementById("see-complete-standings-btn")&&document.getElementById("see-complete-standings-btn").addEventListener("click",(()=>{e.navigate("/standings")})),document.getElementById("see-race-information-btn")&&document.getElementById("see-race-information-btn").addEventListener("click",(()=>{const t=document.getElementById("see-race-information-btn").parentElement.lastElementChild.textContent;e.navigate(`/race/${t}`)}))};document.addEventListener("click",(t=>{t.target.classList.contains("circuit-card")&&e.navigate(`/circuit/${t.target.lastElementChild.innerHTML}`),t.target.parentElement.classList.contains("circuit-card")&&e.navigate(`/circuit/${t.target.parentElement.lastElementChild.innerHTML}`),t.target.classList.contains("race-card")&&e.navigate(`/race/${t.target.lastElementChild.innerHTML}`),t.target.parentElement.classList.contains("race-card")&&e.navigate(`/race/${t.target.parentElement.lastElementChild.innerHTML}`),t.target.classList.contains("season-card")&&e.navigate(`/season/${t.target.lastElementChild.innerHTML}`),t.target.parentElement.classList.contains("season-card")&&e.navigate(`/season/${t.target.parentElement.lastElementChild.innerHTML}`)})),document.addEventListener("click",(t=>{if(t.target.classList.contains("driver-link")){console.log(t.target.textContent);const n=t.target.textContent;e.navigate(`/driver/${n.toLowerCase().replace(/ /g,"_")}`)}if(t.target.classList.contains("driver-image")){console.log(t.target.parentElement.parentElement.nextElementSibling.textContent);const n=t.target.parentElement.parentElement.nextElementSibling.textContent;e.navigate(`/driver/${n.toLowerCase().replace(/ /g,"_")}`)}if(t.target.classList.contains("team-link")){console.log(t.target.textContent);const n=t.target.textContent;e.navigate(`/team/${n.toLowerCase().replace(/ /g,"_")}`)}t.target.classList.contains("item")&&u.classList.remove("show-modal-menu")})),document.getElementById("header-logo").addEventListener("click",(()=>{e.navigate()})),document.getElementById("standings-item").addEventListener("click",(()=>{e.navigate("/standings")})),document.getElementById("circuits-item").addEventListener("click",(()=>{e.navigate("/circuits")})),document.getElementById("season-item").addEventListener("click",(()=>{e.navigate("/seasons")})),document.addEventListener("DOMContentLoaded",(()=>{null!==sessionStorage.getItem("home-page")?i.innerHTML=sessionStorage.getItem("home-page"):(i.innerHTML=`\n    ${L}\n    `,v.drawRaceInformation(7,"","2020","","","","","","1"),v.drawDriversRanking("home-drivers-rankings",7,"2020"),v.drawTeamsRanking("home-teams-rankings",7,"2020")),k()})),e.add(/seasons/,(()=>{i.innerHTML='\n        \n    <div class="div-title center"><h1>Seasons</h1></div>\n        <div id="circuit-card-container-circuits-page" class="div-list"></div>\n',v.drawSeasons(),k()})).listen(),e.add(/season/,(()=>{const t=window.location.pathname.slice(8);i.innerHTML='\n        \n        <div class="div-title center"><h1>Season</h1></div>\n        <div id="race-card-container-season-page" class="div-list"></div>\n',v.drawSeason("",t,"","race","","","","99"),k()})).listen(),e.add(/race/,(()=>{const t=window.location.pathname.slice(6);i.innerHTML='\n        \n        <section class="last-race-section">\n            <div class="div-title center"><h2 id="last-race-title"></h2></div>\n            <div class="div-container">\n                <div id="last-race-info" class="div-info"></div>\n                <div class="div-table">\n                    <table id="last-race-rankings"></table>\n                </div>\n            </div>\n        </section>\n',v.drawRaceInformation(99,"","",t),k()})).listen(),e.add(/circuits/,(()=>{i.innerHTML='\n      \n    <div class="div-title center"><h1>Circuits</h1></div>\n        <div id="circuit-card-container-circuits-page" class="div-list"></div>\n',v.drawCircuits(),k()})).listen(),e.add(/circuit/,(()=>{const t=window.location.pathname.slice(9);v.drawCircuit("","",t),k()})).listen(),e.add(/standings/,(()=>{i.innerHTML='\n    \n        <section class="season-title-container">\n            <div class="div-title center"><h1>Season info</h1></div>\n            <p class="center"><strong>Season: </strong>2019</p>\n            <p class="center">20 completed races out of 30</p>\n        </section>\n        <section>\n            <div class="div-title center"><h1>Driver Standings</h1></div>\n            <div class="standings-tables">\n                <table id="drivers-table-standings-page"></table>\n            </div>\n        </section>\n        <section>\n            <div class="div-title center"><h1>Team Standings</h1></div>\n            <div class="standings-tables">\n                <table id="teams-table-standings-page"></table>\n            </div>\n        </section>\n',v.drawDriversRanking("drivers-table-standings-page",30,"2020"),v.drawTeamsRanking("teams-table-standings-page",30,"2020"),k()})).listen(),e.add(/driver/,(()=>{console.log(window.location.pathname.slice(8).replace(/_/g," "));const t=window.location.pathname.slice(8).replace(/_/g," ");i.innerHTML='\n      \n        <section class="driver-page">\n            <div id="driver-card-container" class="driver-card-container"></div>\n            <div>\n                <table id="driver-page-table"></table>\n            </div>\n        </section>\n',v.drawDriver(t),k()})).listen(),e.add(/team/,(()=>{let t=window.location.pathname.slice(6).replace(/_/g," ");"mercedes-amg petronas"==t&&(t="mercedes"),i.innerHTML='\n        \n        <section id="section-team-page" class="section-team-page"></section>\n',v.drawTeam("",t),k()})).listen(),e.add((()=>{null!==sessionStorage.getItem("home-page")?i.innerHTML=sessionStorage.getItem("home-page"):(i.innerHTML=`\n    ${L}\n    `,v.drawRaceInformation(7,"","2020","","","","","","1"),v.drawDriversRanking("home-drivers-rankings",7,"2020"),v.drawTeamsRanking("home-teams-rankings",7,"2020")),k()})).listen()})();