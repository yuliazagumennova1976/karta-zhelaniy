const SCENES = [{"id":"forest","chapter":"Утро","place":"Волшебный лес","image":"story/forest.jpg","portrait":"story/pip.jpg","lines":[{"speaker":"narrator","name":"Рассказчик","text":"Пип тащит огромную ветку. Тото идёт рядом и смотрит на него внимательно."},{"speaker":"toto","name":"Тото","text":"Пип, зачем тебе эта ветка?"},{"speaker":"pip","name":"Пип","text":"Это не ветка. Это мой волшебный посох. Потому что я так решил!"},{"speaker":"narrator","name":"Рассказчик","text":"Пип взмахивает веткой. С дерева сыплется целое облако розовых лепестков."},{"speaker":"pip","name":"Пип","text":"Видишь? Магия!"},{"speaker":"toto","name":"Тото","text":"Кажется, дерево тоже так решило."},{"speaker":"narrator","name":"Рассказчик","text":"Между деревьями вспыхивает золотой свет. На земле лежит старинная карта. Она сама разворачивается. Над городом горят семь звёзд, и три уже почти погасли."},{"speaker":"map","name":"Карта","text":"Когда желания перестают быть услышанными, звёзды теряют свой свет. Помогите вернуть потерянные желания, пока не погасла последняя звезда."},{"speaker":"pip","name":"Пип","text":"Ну что, Тото? Отправляемся за желаниями!"},{"speaker":"toto","name":"Тото","text":"Только давай сначала узнаем, что именно потерялось."},{"speaker":"pip","name":"Пип","text":"Узнаем по дороге!"}]},{"id":"lumi","chapter":"Город","place":"Город звонких колокольчиков","image":"story/city.jpg","portrait":"story/lumi.jpg","star":1,"starNote":"Желание Луми услышано","lines":[{"speaker":"narrator","name":"Рассказчик","text":"Домики похожи на леденцы, мосты — на радужное стекло. Но жители грустные. На площади сидит снежный зайчонок Луми."},{"speaker":"lumi","name":"Луми","text":"Я хочу золотую трубу! Огромную! Чтобы все слышали меня за тысячу километров!"},{"speaker":"narrator","name":"Рассказчик","text":"Пип за минуту собирает супер-трубу. Луми дует — и с крыш сыплются цветочные горшки."},{"speaker":"lumi","name":"Луми","text":"Но я хотел не просто шуметь…"},{"speaker":"toto","name":"Тото","text":"А чего ты хочешь на самом деле?"},{"speaker":"lumi","name":"Луми","text":"Я сочиняю музыку. Но никто не слушает. Все думают, что я только пищу и прыгаю."},{"speaker":"narrator","name":"Рассказчик","text":"Луми тихо играет на свирели. Мелодия оказывается удивительно красивой."},{"speaker":"pip","name":"Пип","text":"Это ты сам придумал? Почему раньше не играл нам?"},{"speaker":"lumi","name":"Луми","text":"Потому что никто не спрашивал."},{"speaker":"toto","name":"Тото","text":"А мы теперь спрашиваем."}],"choice":{"question":"Чего на самом деле хочет Луми?","options":[{"text":"Огромную золотую трубу","correct":false},{"text":"Чтобы услышали его музыку","correct":true},{"text":"Стать самым громким в городе","correct":false}],"feedback":"Луми не хочет шуметь. Он хочет, чтобы друзья заметили, что он умеет сочинять."},"song":{"title":"Услышь меня","who":"Луми, Пип и Тото","lyrics":"Я не громкий барабан,\nНе раскатистый фонтан.\nВ сердце музыка живёт —\nТолько кто её поймёт?\n\nЕсли хочешь рассказать —\nМы готовы слушать, ждать.\nНе кричи и не спеши,\nГовори от всей души!\n\nУслышь меня, услышь меня,\nВ каждом сердце есть мечта.\nНе по словам её найдёшь —\nА если рядом подождёшь!"}},{"id":"boom","chapter":"Море","place":"Берег ледяных корабликов","image":"story/sea.jpg","portrait":"story/boom.jpg","star":2,"starNote":"Желание Бума услышано","lines":[{"speaker":"narrator","name":"Рассказчик","text":"Вода переливается синим. На берегу стоит морской котёнок Бум рядом со сломанной лодочкой."},{"speaker":"boom","name":"Бум","text":"Я хочу самый быстрый корабль! Чтобы он обгонял ветер!"},{"speaker":"narrator","name":"Рассказчик","text":"Пип строит корабль без дна. Бум садится — и мгновенно тонет."},{"speaker":"boom","name":"Бум","text":"Я хотел быстро плыть, а не быстро тонуть!"},{"speaker":"toto","name":"Тото","text":"Ты хочешь самый быстрый корабль или хочешь куда-то отправиться?"},{"speaker":"boom","name":"Бум","text":"Я мечтаю увидеть далёкие острова. Там горы из розового льда. Но я боюсь плыть один."},{"speaker":"pip","name":"Пип","text":"А если мы поплывём вместе?"},{"speaker":"narrator","name":"Рассказчик","text":"Вместе они собирают маленький устойчивый кораблик. На парусе появляются три звезды."},{"speaker":"boom","name":"Бум","text":"Я не один!"}],"choice":{"question":"Чего не хватает Буму?","options":[{"text":"Самого быстрого корабля","correct":false},{"text":"Друга рядом в путешествии","correct":true},{"text":"Самого большого паруса","correct":false}],"feedback":"Буму нужен не рекорд скорости. Ему нужен кто-то, кто отправится вместе."}},{"id":"mira","chapter":"Долина","place":"Долина цветов","image":"story/flowers.jpg","portrait":"story/mira.jpg","star":3,"starNote":"Желание Миры услышано","lines":[{"speaker":"narrator","name":"Рассказчик","text":"Над огромными цветами порхают сотни бабочек. Только Мира сидит на камне и прячет крылья."},{"speaker":"mira","name":"Мира","text":"Мои крылья недостаточно красивые. Я хочу самые яркие крылья во всём мире!"},{"speaker":"narrator","name":"Рассказчик","text":"Пип украшает её крылья камешками. Мира взлетает и тут же падает в корзину с цветами: крылья стали слишком тяжёлыми."},{"speaker":"mira","name":"Мира","text":"Кажется, я стала красивой… и неподвижной."},{"speaker":"toto","name":"Тото","text":"Мира, а ты сама любишь свои крылья?"},{"speaker":"mira","name":"Мира","text":"Иногда. Но когда я волнуюсь, свет исчезает. И мне кажется, что тогда я никому не интересна."},{"speaker":"toto","name":"Тото","text":"А если твоя красота не зависит от того, светятся крылья или нет?"},{"speaker":"narrator","name":"Рассказчик","text":"Мира обмахивает поникший цветок. Долина оживает. Крылья загораются сами — мягким розово-золотым светом."},{"speaker":"mira","name":"Мира","text":"Я не хочу быть самой яркой. Я хочу просто быть собой."}],"choice":{"question":"Что поможет Мире?","options":[{"text":"Самые блестящие украшения","correct":false},{"text":"Быть собой, не сравнивая","correct":true},{"text":"Совсем новые крылья","correct":false}],"feedback":"Мире не нужны украшения. Ей нужно разрешение светиться по-своему."},"song":{"title":"Будь собой","who":"Мира и Тото","lyrics":"Я искала блеск вокруг,\nСравнивала всех подруг.\nДумала: чтоб ярче стать,\nНужно крылья украшать.\n\nНо не нужно притворяться,\nЧтобы светом наполняться.\nКаждый создан не случайно —\nВ каждом сердце есть сиянье.\n\nБудь собой, лети смелей,\nМир становится светлей!\nНе сравнивай себя с другими —\nТы прекрасна уже сейчас!"}},{"id":"fog","chapter":"Вечер","place":"Долина Эха","image":"story/fog.jpg","star":4,"starNote":"Желание Тумана услышано","lines":[{"speaker":"narrator","name":"Рассказчик","text":"У горы стоит голубовато-фиолетовый туман. Внутри кружатся обрывки слов, нот и погасших звёзд."},{"speaker":"fog","name":"Туман Эха","text":"Хочу трубу… быстрый корабль… яркие крылья…"},{"speaker":"pip","name":"Пип","text":"Отдай наши желания!"},{"speaker":"toto","name":"Тото","text":"Он не знает, чего они хотят. Он только повторяет чужие слова."},{"speaker":"fog","name":"Туман Эха","text":"Когда-то я зажигал звёзды. Но все стали говорить сразу. Никто не слушал. Я забыл, как звучит настоящее желание."},{"speaker":"fog","name":"Туман Эха","text":"Я хотел, чтобы меня услышали. Но никто не спрашивал, чего хочу я."},{"speaker":"pip","name":"Пип","text":"Мы тоже не спросили."},{"speaker":"toto","name":"Тото","text":"А чего ты хочешь теперь?"},{"speaker":"fog","name":"Туман Эха","text":"Чтобы кто-нибудь остался рядом. Не потому, что я исполню желание. А просто так."},{"speaker":"pip","name":"Пип","text":"Тогда мы останемся."}]},{"id":"voice","chapter":"Ночь","place":"Седьмая звезда","image":"story/fog.jpg","portrait":"story/toto.jpg","star":7,"starNote":"Желание Тото услышано","lines":[{"speaker":"narrator","name":"Рассказчик","text":"На вершине горы стоит музыкальный кристалл. Шесть искр уже кружат вокруг него. Седьмой нет. Карта показывает силуэт Тото."},{"speaker":"pip","name":"Пип","text":"Тото, карта показывает тебя. Что ты скрываешь?"},{"speaker":"toto","name":"Тото","text":"Я хочу петь. Не просто подпевать. Я хочу сочинять песни для всех. Но боюсь, что мой голос никому не понравится."},{"speaker":"pip","name":"Пип","text":"Почему ты мне не говорил?"},{"speaker":"toto","name":"Тото","text":"Потому что ты всегда поёшь громче всех."},{"speaker":"pip","name":"Пип","text":"Я думал, что помогаю. Сегодня я буду слушать."}],"song":{"title":"Мой голос","who":"Тото и Пип","lyrics":"Тихо-тихо в сердце\nМузыка живёт.\nЯ боялся, что никто\nПесню не поймёт.\n\nНо у каждой звёздочки\nЕсть своя мечта.\nДаже если голос тихий —\nОн услышан неспроста.\n\nЯ тебя услышу, друг,\nДаже если стихнет звук.\nПусть сегодня песня твоя\nЗазвучит для всех вокруг.\n\nЯ не стану громче ветра,\nЯ не стану, как другие.\nЯ хочу звучать по-своему,\nЧтобы песни были живые."}},{"id":"finale","chapter":"Праздник","place":"Город снова поёт","image":"story/city.jpg","lines":[{"speaker":"narrator","name":"Рассказчик","text":"Город оживает. Луми играет на свирели, Бум показывает карту островов, Мира кружит над площадью. Семь звёзд складываются в сияющее сердце."},{"speaker":"map","name":"Карта","text":"Самое важное желание — быть услышанным."},{"speaker":"pip","name":"Пип","text":"Чтобы исполнить желание, сначала нужно спросить."},{"speaker":"toto","name":"Тото","text":"И дослушать ответ."},{"speaker":"pip","name":"Пип","text":"А теперь можно спросить: кто хочет рыбку?"},{"speaker":"narrator","name":"Рассказчик","text":"Все поднимают крылья и лапки. Над городом загорается надпись: услышь другого. И не бойся рассказать о своей мечте."}],"song":{"title":"Слушай сердце","who":"Все","lyrics":"Слушай сердце, слушай друга,\nНе спеши и не перебивай!\nВ каждом сердце есть мечта —\nТолько ты её услышь и угадай!\n\nПусть сияют наши звёзды,\nПусть звучит вокруг весна!\nЕсли слышим друг друга —\nНе погаснет ни одна мечта!"}}];
const VOICE = { narrator:{pitch:1,rate:0.95}, pip:{pitch:1.25,rate:1.05}, toto:{pitch:0.95,rate:0.9}, lumi:{pitch:1.35,rate:1}, boom:{pitch:1.12,rate:1.05}, mira:{pitch:1.3,rate:0.95}, fog:{pitch:0.72,rate:0.82}, map:{pitch:0.88,rate:0.88} };
let index = 0, sound = true, picked = null;
const app = document.getElementById("app");

function speak(text, speaker) {
  if (!sound || !window.speechSynthesis) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ru-RU";
  const v = VOICE[speaker] || VOICE.narrator;
  u.pitch = v.pitch; u.rate = v.rate;
  const ru = speechSynthesis.getVoices().find(x => x.lang.toLowerCase().startsWith("ru"));
  if (ru) u.voice = ru;
  speechSynthesis.speak(u);
}
function stop() { speechSynthesis && speechSynthesis.cancel(); }

function cover() {
  app.innerHTML = `
    <img class="hero" src="story/forest.jpg" alt="Волшебный лес">
    <p class="kicker">Музыкальная сказка</p>
    <h1>Карта потерянных желаний</h1>
    <p class="lead">Приключение Пипа и Тото. Кнопка «Начать» открывает первую сцену. «Дальше» листает сказку. Нажатие на реплику включает голос.</p>
    <div class="row">
      <button class="gold" id="start" type="button">Начать приключение</button>
    </div>
    <div class="faces">
      <figure><img src="story/pip.jpg" alt="Пип"><figcaption>Пип</figcaption></figure>
      <figure><img src="story/toto.jpg" alt="Тото"><figcaption>Тото</figcaption></figure>
    </div>`;
  document.getElementById("start").onclick = () => show(0);
}

function show(i) {
  stop();
  index = i;
  picked = null;
  if (i >= SCENES.length) return finale();
  const s = SCENES[i];
  const lines = s.lines.map((line, n) => `<button class="line" type="button" data-i="${n}"><b>${line.name}</b><span>${line.text}</span></button>`).join("");
  let choice = "";
  if (s.choice) {
    choice = `<section class="choice"><h3>${s.choice.question}</h3><div id="opts">${s.choice.options.map((o,n)=>`<button type="button" class="opt" data-n="${n}">${o.text}</button>`).join("")}</div><p id="fb" hidden></p></section>`;
  }
  let song = "";
  if (s.song) {
    song = `<section class="song"><p class="kicker">Песня</p><h3>${s.song.title}</h3><p class="who">${s.song.who}</p><pre>${s.song.lyrics}</pre><button type="button" id="sing">Прочитать песню</button></section>`;
  }
  const port = s.portrait ? `<img class="port" src="${s.portrait}" alt="">` : "";
  app.innerHTML = `
    <p class="kicker">${s.chapter} · ${i+1}/${SCENES.length}</p>
    <img class="hero" src="${s.image}" alt="${s.place}">
    ${port}
    <h2>${s.place}</h2>
    <div class="lines">${lines}</div>
    ${choice}${song}
    <div class="nav">
      <button type="button" id="prev" ${i===0?"disabled":""}>Назад</button>
      <button type="button" class="gold" id="next">${i===SCENES.length-1?"Финал":"Дальше"}</button>
    </div>
    <button type="button" id="read">Слушать сцену</button>`;
  app.querySelectorAll(".line").forEach(btn => {
    btn.onclick = () => speak(s.lines[Number(btn.dataset.i)].text, s.lines[Number(btn.dataset.i)].speaker);
  });
  const fb = document.getElementById("fb");
  app.querySelectorAll(".opt").forEach(btn => {
    btn.onclick = () => {
      const opt = s.choice.options[Number(btn.dataset.n)];
      if (opt.correct) {
        btn.classList.add("ok");
        fb.hidden = false;
        fb.textContent = s.choice.feedback;
        speak(s.choice.feedback, "narrator");
      } else {
        btn.classList.add("no");
        speak("Почти. Послушай, чего не хватает сердцу.", "narrator");
      }
    };
  });
  const sing = document.getElementById("sing");
  if (sing) sing.onclick = () => speak(s.song.lyrics.replace(/\n/g, ". "), "toto");
  document.getElementById("read").onclick = () => speak(s.lines.map(l => l.name + ". " + l.text).join(" "), "narrator");
  document.getElementById("prev").onclick = () => show(i - 1);
  document.getElementById("next").onclick = () => show(i + 1);
  window.scrollTo(0, 0);
}

function finale() {
  app.innerHTML = `
    <img class="hero" src="story/city.jpg" alt="">
    <h2>Все желания услышаны</h2>
    <p class="lead">У каждого есть мечта. Иногда ей нужно только одно — чтобы её услышали.</p>
    <button class="gold" type="button" id="again">Сначала</button>`;
  document.getElementById("again").onclick = cover;
}

cover();
speechSynthesis && speechSynthesis.getVoices();
