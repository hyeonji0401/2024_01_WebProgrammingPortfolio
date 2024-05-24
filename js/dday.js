const historyDay = document.querySelector("#historyTime");
const SQLDDay = document.querySelector("#SQLDTime");

function find_day(){
  const history = new Date("2024-8-10");  //디데이 설정
  const SQLD = new Date("2024-8-24");
  const today = new Date();  //밀리세컨드 단위의 시간 표시 1초=1000
  
  day_gap1 = history - today;  //시험까지 남은 밀리세컨드 초 값
  day_gap2 = SQLD - today;

  const day1 = Math.floor(day_gap1 / (1000*60*60*24));  //디데이까지 남은 밀리세컨드초 / 하루의 밀리세컨드초 = 남은 일수
  const hour1 = Math.floor(day_gap1 / (1000*60*60) % 24);
  const min1= Math.floor(day_gap1 / (1000*60) % 60);
  const sec1 = Math.floor(day_gap1 / 1000%60);
  
  historyDay.innerHTML=day1+"일 "+hour1+"시간 "+min1+"분 "+sec1+"초";


  const day2 = Math.floor(day_gap2 / (1000*60*60*24));  
  const hour2 = Math.floor(day_gap2 / (1000*60*60) % 24);
  const min2 = Math.floor(day_gap2 / (1000*60) % 60);
  const sec2 = Math.floor(day_gap2 / 1000%60);

  SQLDDay.innerHTML=day2+"일 "+hour2+"시간 "+min2+"분 "+sec2+"초";

}
find_day();
setInterval(find_day, 1000);  //초마다 디데이 기능 실행