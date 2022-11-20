// 播放
export function speak(text) {
  const speech = new SpeechSynthesisUtterance();
  speech.pitch = 2; // 获取并设置话语的音调(值越大越尖锐,越低越低沉)
  speech.rate = 1; // 获取并设置说话的速度(值越大语速越快,越小语速越慢)
  speech.volume = 1; // 获取并设置说话的音量
  speech.lang = 'zh-CN'; // 在chrome中我们需要指定语言。不然无法解析
  // speech.text = '我们一路奋战，不是为了改变世界，而是为了不让世界改变我'; // 获取并设置说话时的文本
  // speechSynthesis.speak(speech);
  // 如果没有生效需要重启浏览器
  
  if (speech.onvoiceschanged !== undefined) {
    speech.onvoiceschanged = () => populateVoiceList();
  }
  function populateVoiceList() {
    speech.getVoices(); // now should have an array of all voices
    console.log(speech.getVoices());
  }
  createSelect();

  
  const input = document.createElement('input');
  document.body.appendChild(input);
  const button = document.createElement('button');
  button.innerText = '播放';
  document.body.appendChild(button);
  button.onclick = function () {
    console.log(speechSynthesis.getVoices());
    speech.voice = speechSynthesis.getVoices()[0]; // 设置播放语言，测试没效果
    speech.text = input.value;
    speechSynthesis.speak(speech);
  };
  // speech.volume = 1 // 获取并设置说话的音量
  // speech.lang = speechSynthesis.getVoices()[0] // 设置播放语言，测试没效果
  // speech.lang = 'zh-CN'; // 在chrome中我们需要指定语言。不然无法解析
  // speech.cancel() // 删除队列中所有的语音.如果正在播放,则直接停止
  // speech.text = '大家好，我是渣渣辉111'; // 获取并设置说话时的文本
  // speechSynthesis.speak(speech);
  // 如果没有生效需要重启浏览器
  // speechSynthesis.speak(speech);
}

function createSelect() {
  const select = document.createElement('select');
  select.style.width = '50px';
  const voices = speechSynthesis.getVoices();
  console.log(voices);
  for (const voiceItem of speechSynthesis.getVoices()) {
    const option = document.createElement('option');
    option.label = voiceItem.name;
    option.value = voiceItem.lang;
    select.appendChild(option);
  }
}
