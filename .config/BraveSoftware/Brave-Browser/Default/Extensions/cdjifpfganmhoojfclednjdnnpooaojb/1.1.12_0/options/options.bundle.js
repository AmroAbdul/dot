(()=>{"use strict";const e="auto",t="Summarize the following in 5 bullet points.",a={Default:"en",English:"en",Chinese:"zh-cn",Spanish:"es",French:"fr",German:"de",Italian:"it",Japanese:"ja",Korean:"ko",Portuguese:"pt",Russian:"ru",Turkish:"tr",Arabic:"ar",Hindi:"hi",Indonesian:"id",Bengali:"bn",Vietnamese:"vi",Ukrainian:"uk",Chezch:"cs"},n={default:"ref=glasp","gpt_3.5":"model=text-davinci-002-render-sha&ref=glasp",gpt_4:"model=gpt-4&ref=glasp",gpt_4o:"model=gpt-4o&ref=glasp",gpt_4o_mini:"model=gpt-4o-mini&ref=glasp",plugins:"model=gpt-4-plugins&ref=glasp",browsing:"model=gpt-4-browsing&ref=glasp",code_interpreter:"model=gpt-4-code-interpreter&ref=glasp",claude:"",mistral_ai:"",gemini:""},r=["plugins"],o={theme:e,copyformat:"plaintext",customPrompt:t,followupPrompts:{1:"",2:"",3:""},language:a.Default,chatGPTModel:"default",summaryStrategy:"chunks",keyboardShortcut:{shortcut_summary:!1},summaryIconVisibility:"hidden",ytSummaryWidgetVisibility:"visible",customGPTsURL:"https://chatgpt.com/g/g-JvAs2IMCT-glaspgpt",geminiURL:"https://gemini.google.com/u/0/app",showWidgetMessage:!0};async function s(e){return await chrome.storage.local.set(e)}const i={en:{title:"Title",transcript:"Transcript",summary:"Summary",summaryPrompt:"Summarize the following in 5 bullet points.",asideNote:"From our experience, it takes longer to get answer in non-English language. So we'd recommend getting answer in English and translate it into your native language using DeepL or Google Translate.",text:"Text"},"zh-cn":{title:"标题",transcript:"文字稿",summary:"摘要",summaryPrompt:"用5个要点总结以下内容。",asideNote:"根据我们的经验，获得非英语语言的答案需要更长的时间。因此，我们建议您在英语中获得答案，并使用DeepL或Google Translate将其翻译成您的母语。",text:"文本"},es:{title:"Título",transcript:"Transcripción",summary:"Resumen",summaryPrompt:"Resuma lo siguiente en 5 puntos.",asideNote:"De nuestra experiencia, toma más tiempo obtener una respuesta en un idioma que no sea inglés. Por lo tanto, le recomendamos que obtenga una respuesta en inglés y la traduzca a su idioma nativo usando DeepL o Google Translate.",text:"Texto"},fr:{title:"Titre",transcript:"Transcription",summary:"Résumé",summaryPrompt:"Résumez ce qui suit en 5 points.",asideNote:"D'expérience, il faut plus de temps pour obtenir une réponse dans une langue autre que l'anglais. Nous vous recommandons donc d'obtenir une réponse en anglais et de la traduire dans votre langue maternelle à l'aide de DeepL ou de Google Translate.",text:"Texte"},de:{title:"Titel",transcript:"Transkript",summary:"Zusammenfassung",summaryPrompt:"Fassen Sie die folgenden Punkte in 5 Punkten zusammen.",asideNote:"Aus unserer Erfahrung dauert es länger, eine Antwort in einer nicht englischen Sprache zu erhalten. Daher empfehlen wir Ihnen, eine Antwort in Englisch zu erhalten und sie in Ihre Muttersprache mit DeepL oder Google Translate zu übersetzen.",text:"Text"},it:{title:"Titolo",transcript:"Trascrizione",summary:"Sommario",summaryPrompt:"Riassumi quanto segue in 5 punti.",asideNote:"Dalla nostra esperienza, ci vuole più tempo per ottenere una risposta in una lingua diversa dall'inglese. Quindi ti consigliamo di ottenere una risposta in inglese e di tradurla nella tua lingua madre utilizzando DeepL o Google Translate.",text:"Testo"},ja:{title:"タイトル",transcript:"書き起こし",summary:"要約",summaryPrompt:"以下を5つの要点で要約してください。",asideNote:"経験上、英語以外の言語で回答を得るには時間がかかります。そのため、英語で回答を得て、DeepLやGoogle翻訳を使用して母国語に翻訳することをお勧めします。",text:"テキスト"},ko:{title:"제목",transcript:"텍스트",summary:"요약",summaryPrompt:"다음을 5개의 핵심으로 요약하십시오.",asideNote:"경험상 영어가 아닌 언어로 답변을 받는 데 더 많은 시간이 걸립니다. 따라서 영어로 답변을 받고 DeepL 또는 Google 번역을 사용하여 모국어로 번역하는 것이 좋습니다.",text:"텍스트"},pt:{title:"Título",transcript:"Transcrição",summary:"Resumo",summaryPrompt:"Resuma o seguinte em 5 pontos.",asideNote:"De acordo com a nossa experiência, demora mais tempo para obter uma resposta em um idioma que não seja o inglês. Portanto, recomendamos obter uma resposta em inglês e traduzi-la para sua língua nativa usando o DeepL ou o Google Tradutor.",text:"Texto"},ru:{title:"Заголовок",transcript:"Транскрипт",summary:"Резюме",summaryPrompt:"Суммируйте следующее в 5 пунктах.",asideNote:"Из нашего опыта следует, что получение ответа на языке, отличном от английского, занимает больше времени. Поэтому мы рекомендуем получать ответ на английском языке и переводить его на родной язык с помощью DeepL или Google Translate.",text:"Текст"},tr:{title:"Başlık",transcript:"Transkript",summary:"Özet",summaryPrompt:"Aşağıdakileri 5 noktada özetleyin.",asideNote:"Deneyimimize göre, İngilizce olmayan bir dilde yanıt almak daha uzun sürer. Bu nedenle, yanıtı İngilizce almanızı ve DeepL veya Google Translate kullanarak anadilinize çevirmenizi öneririz.",text:"Metin"},ar:{title:"العنوان",transcript:"النص",summary:"ملخص",summaryPrompt:"لخص ما يلي في 5 نقاط.",asideNote:"من خبرتنا، يستغرق الحصول على إجابة في لغة أخرى من الإنجليزية أكثر وقتًا. لذلك، نوصي بالحصول على إجابة باللغة الإنجليزية وترجمتها إلى لغتك الأم باستخدام DeepL أو Google Translate.",text:"نص"},hi:{title:"शीर्षक",transcript:"ट्रांसक्रिप्ट",summary:"सारांश",summaryPrompt:"निम्नलिखित को 5 बिंदुओं में सारांशित करें।",asideNote:"हमारे अनुभव से यह बताते हैं कि अंग्रेजी नहीं होने वाली भाषा में एक उत्तर प्राप्त करने में अधिक समय लगता है। इसलिए हम आपको अंग्रेजी में एक उत्तर प्राप्त करने की सलाह देते हैं और इसे अपनी मातृभाषा में DeepL या Google Translate का उपयोग करके अनुवाद करने की सलाह देते हैं।",text:"पाठ"},id:{title:"Judul",transcript:"Transkrip",summary:"Ringkasan",summaryPrompt:"Ringkasan berikut dalam 5 poin.",asideNote:"Menurut pengalaman kami, membutuhkan waktu lebih lama untuk mendapatkan jawaban dalam bahasa selain bahasa Inggris. Oleh karena itu, kami sarankan Anda mendapatkan jawaban dalam bahasa Inggris dan menerjemahkannya ke bahasa asli Anda menggunakan DeepL atau Google Translate.",text:"Teks"},bn:{title:"শিরোনাম",transcript:"ট্রান্সক্রিপ্ট",summary:"সারাংশ",summaryPrompt:"পরবর্তীতে 5 টি পয়েন্টে সারাংশ করুন।",asideNote:"আমাদের অভিজ্ঞতার উপর ভিত্তি করে, ইংরেজি নয় বাংলা বা অন্য কোন ভাষায় উত্তর পাওয়ার জন্য আরও বেশি সময় লাগে। তাই আমরা আপনাকে ইংরেজি ভাষায় উত্তর পাওয়ার জন্য সুপারিশ করি এবং এটি আপনার মাতৃভাষায় ব্যবহার করুন ডিপল বা গুগল ট্রান্সলেট ব্যবহার করে।",text:"পাঠ"},vi:{title:"Tiêu đề",transcript:"Phiên âm",summary:"Tóm tắt",summaryPrompt:"Tóm tắt những điều sau đây trong 5 điểm.",asideNote:"Theo kinh nghiệm của chúng tôi, việc nhận câu trả lời trong một ngôn ngữ khác tiếng Anh sẽ mất nhiều thời gian hơn. Do đó, chúng tôi khuyên bạn nhận câu trả lời bằng tiếng Anh và dịch nó sang ngôn ngữ mẹ đẻ của bạn bằng cách sử dụng DeepL hoặc Google Translate.",text:"Văn bản"},uk:{title:"Заголовок",transcript:"Транскрипт",summary:"Резюме",summaryPrompt:"Сумуйте наступне в 5 пунктах.",asideNote:"З нашого досвіду випливає, що отримання відповіді на мові, відмінній від англійської, займає більше часу. Тому ми радимо отримувати відповідь на англійській мові і перекладати її на рідну мову за допомогою DeepL або Google Translate.",text:"Текст"},cs:{title:"Název",transcript:"Transkript",summary:"Shrnutí",summaryPrompt:"Shrnutí následujících 5 bodů.",asideNote:"Podle našich zkušeností trvá získání odpovědi v jazyce jiném než angličtina déle. Proto vám doporučujeme získat odpověď v angličtině a přeložit ji do mateřského jazyka pomocí DeepL nebo Google Translate.",text:"Text"}};function m(e){const t=document.getElementById("option_code_input"),a=document.getElementById("option_prompt_title"),n=document.getElementById("option_prompt_transcript"),r=document.getElementById("language_select_aside");t.value=`${i[e].summaryPrompt}`,a.innerHTML=`${i[e].title}: "<span class="option_span_code">{{${i[e].title}}}</span>"`,n.innerHTML=`${i[e].transcript}: "<span class="option_span_code">{{${i[e].transcript}}}</span>"`,r.innerHTML="en"===e?"":`<aside>${i[e].asideNote}</aside>`}window.onload=async()=>{!function(){const e=chrome.runtime.getManifest().version;document.getElementById("glasp_extension_version").innerHTML=`(version ${e})`}();const l=await async function(){const e=await chrome.storage.local.get(Object.keys(o))??{};if(0===Object.keys(e).length||!e)return Object.assign(e,o),e.lang="English",e.searchParams="ref=glasp",e.textLimit=28e3,e;for(const t of Object.keys(o))t in e||(e[t]=o[t]);return e.lang=Object.keys(a).find((t=>a[t]===e.language))??"English",e.searchParams=n[e.chatGPTModel]??"ref=glasp",e.textLimit=(r.includes(e.chatGPTModel),28e3),e}();m(l.language);const u=document.getElementsByClassName("theme_input"),d=document.getElementsByClassName("copyformat_input"),c=document.getElementById("language_select"),g=document.querySelectorAll("#language_select > option"),p=document.getElementsByClassName("option_llm_models"),y=document.getElementById("custom_gpts_div"),h=document.getElementById("gemini_detail_div"),_=document.getElementById("custom_gpts_input"),b=document.getElementById("gemni_url_input"),v=document.getElementsByClassName("option_summary_strategy"),f=document.getElementsByClassName("option_keyboard_shortcut"),k=document.getElementsByClassName("yt_summary_widget_visibility"),T=document.getElementsByClassName("article_summary_icons");let E=l.theme===e?document.querySelector("body > ytd-app")&&"rgb(255, 255, 255)"!==window.getComputedStyle(document.querySelector("body > ytd-app")).backgroundColor||window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":l.theme;document.body.classList.add(`theme_${E}`),Array.from(u).forEach((e=>{e.getAttribute("value")===l.theme&&(e.checked=!0),e.addEventListener("change",(e=>{s({theme:e.target.value}),document.body.className="",document.body.classList.add(`theme_${e.target.value}`)}))})),Array.from(d).forEach((e=>{e.getAttribute("value")===l.copyformat&&(e.checked=!0),e.addEventListener("change",(e=>{s({copyformat:e.target.value})}))})),Array.from(g).forEach((e=>{e.getAttribute("value")===l.language&&(e.selected=!0)})),c.addEventListener("change",(e=>{const t=e.target.value;s({language:t}),s({customPrompt:`${i[t].summaryPrompt}`}),m(t)})),Array.from(p).forEach((e=>{const t=e.getAttribute("data-value");t===l.chatGPTModel&&e.classList.add("option_llm_models_selected"),e.addEventListener("click",(()=>{y.style.display="custom_gpts"===t?"block":"none",h.style.display="gemini"===t?"block":"none",Array.from(p).forEach((e=>{e.classList.remove("option_llm_models_selected")})),e.classList.add("option_llm_models_selected"),s({chatGPTModel:t})}))})),"custom_gpts"===l.chatGPTModel?y.style.display="block":"gemini"===l.chatGPTModel&&(h.style.display="block"),_.value=l.customGPTsURL,_?.addEventListener("input",(e=>{s({customGPTsURL:e.target.value})})),b.value=l.geminiURL,b?.addEventListener("input",(e=>{s({geminiURL:e.target.value})}));const L=l.customPrompt,P=L.split("\n").length;document.getElementById("option_code_input").value=L,document.getElementById("option_code_input").style.height=1.5*P+"em",document.getElementById("option_code_input").addEventListener("input",(e=>{const a=document.getElementById("option_code_input"),n=a.value.split("\n").length;a.style.height=1.5*n+"em",s({customPrompt:""===e.target.value.trim().replace(/s+/g,"")?t:e.target.value.trim()})})),Array.from(document.getElementsByClassName("option_followup_prompt")).forEach(((e,t,a)=>{e.value=l.followupPrompts[e.getAttribute("data-id")],e.addEventListener("change",(e=>{const t={};Array.from(a).forEach((e=>{t[e.getAttribute("data-id")]=e.value})),s({followupPrompts:t})}))})),Array.from(v).forEach((e=>{e.getAttribute("data-value")===l.summaryStrategy&&e.classList.add("option_summary_strategy_selected"),e.addEventListener("click",(()=>{Array.from(v).forEach((e=>{e.classList.remove("option_summary_strategy_selected")})),e.classList.add("option_summary_strategy_selected"),s({summaryStrategy:e.getAttribute("data-value")})}))})),Array.from(f).forEach(((e,t,a)=>{e.checked=l.keyboardShortcut[e.getAttribute("data-value")]})),Array.from(f).forEach(((e,t,a)=>{e.addEventListener("change",(e=>{const t={};Array.from(a).forEach((e=>{t[e.getAttribute("data-value")]=e.checked})),s({keyboardShortcut:t})}))})),Array.from(k).forEach(((e,t,a)=>{e.getAttribute("value")===l.ytSummaryWidgetVisibility&&(e.checked=!0),e.addEventListener("change",(e=>{s({ytSummaryWidgetVisibility:e.target.value})}))})),Array.from(T).forEach(((e,t,a)=>{e.getAttribute("value")===l.summaryIconVisibility&&(e.checked=!0),e.addEventListener("change",(e=>{s({summaryIconVisibility:e.target.value})}))}))}})();