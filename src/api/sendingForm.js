import axios from "axios";

export function sendToSheets(data){
   const dateTime = new Date();
   const date = dateTime.toLocaleDateString('uk')
   const time = dateTime.toLocaleTimeString('uk');
   console.log("date",date)
   const formData = new FormData();
   formData.append("Name", data.name)
   formData.append("Email", data.email)
   formData.append("Phone", data.phone)
   formData.append("Course", data.course)
   formData.append("Date", date)
   formData.append("Time", time)

   return fetch(
      "https://script.google.com/macros/s/AKfycbxZZR7Yjr7-zSdRRMveF1uBzxJUA02jcKTlxG95UoGkfJMcOzJBtSuSKiPhiuud26AlDg/exec",
      {
         method: "POST",
         body: formData
      }
   )
      .then(response => response.json())
      .catch(err => console.error(err))
}
export function sendToTelegram(data){
   const token = '6296788234:AAHCKuS2IgZNPHvZfUe3J25W2cwO7wBSpHo';
   const URL = `https://api.telegram.org/bot${ token }/sendMessage`;
   const chat_id = '-1001847351865';
   const parse_mode = 'html'
   const message = `<b>Добавлена новая заявка!</b>\n<b>Имя:</b> ${data.name}\n<b>Почта:</b> ${data.email}\n<b>Телефон:</b> ${data.phone}\n<b>Курс:</b> ${data.course}`

   const request = {
      chat_id,
      parse_mode,
      text: message
   }
   return axios.post(URL, request).then(r => console.log(r.data))
}


