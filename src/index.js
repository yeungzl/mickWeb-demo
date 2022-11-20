import { getName } from './app1';
import { omit } from 'loadsh';
import './css/test1.css';
import { axios } from './api/base';
import {speak} from './voice/voice';

const component = () => {
  const element = document.createElement('div');
  element.innerText = getName('遇事不决，可问春风。');
  element.classList.add('myFont');

  return element;
};

async function batchQueryData() {
  var arr = new Array(10).fill({ id: 1 });
  var resL = [];
  const resAll = [];
  for (var i = 0; i < arr.length; i++) {
    const request = axios.get(`publicApi/posts/${i + 1}`);
    resL.push({
      id: arr[i].id,
      request,
    });
    resAll.push(request);
  }
  const a = await axios.all(resAll); // 这里会按照发送的顺序返回结果

  console.log(a);
}
function init() {
  document.body.appendChild(component());
  // batchQueryData();

  const str = '我们一路奋战，不是为了改变世界，而是为了不让世界改变我';
  console.log(str);
  speak(str);
}
init();
