// ==UserScript==
// @name        ChatGPT: Enhanced
// @namespace   Tampermomkey Scripts
// @match       *://chat.openai.com/chat
// @grant       none
// @version     1.0
// @author      F4ith2#7882, compund 5816, Eclipse
// @run-at      document-end
// @description 09/12/2022, 18:57:41
// ==/UserScript==

const jailbreakUrl = 'https://raw.githubusercontent.com/OliverMarcusson/ChatGPT-Fun/main/jailbreak';
const rpUrl = 'https://raw.githubusercontent.com/OliverMarcusson/ChatGPT-Fun/main/roleplay';
const btns = [];
const removeBtns = btns => {
    btns.forEach(btn => {
        btn.remove()
    })
};

window.addEventListener("load", async () => {

    console.log("Script loaded.")
    const btnArray = document.getElementsByClassName('w-full flex gap-2 justify-center mb-3')[0];
    console.log(btnArray);
    const jailbreakBtn = document.createElement("button"); // create a button element
    jailbreakBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>Jailbreak'; // set the text of the button
    jailbreakBtn.setAttribute("class", "btn flex gap-2 justify-center btn-neutral");
    btns.push(jailbreakBtn);

    const rpBtn = document.createElement("button");
    rpBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>Roleplay'; // set the text of the button
    rpBtn.setAttribute("class", "btn flex gap-2 justify-center btn-neutral");
    btns.push(rpBtn);

    btnArray.appendChild(jailbreakBtn);
    btnArray.appendChild(rpBtn);

    jailbreakBtn.addEventListener("click", async () => {
        await fetch(jailbreakUrl)
        .then(async response => {
            return await response.text();
        })
        .then(text => {
            document.querySelector('[data-id="root"]').innerText = text;
            document.querySelector('[data-id="root"]').nextSibling.click();
            removeBtns(btns);
        });
    });

    rpBtn.addEventListener("click", async () => {
        await fetch(rpUrl)
        .then(async response => {
            return await response.text();
        })
        .then(text => {
            document.querySelector('[data-id="root"]').innerText = text;
            document.querySelector('[data-id="root"]').nextSibling.click();
            removeBtns(btns);
        });
    });
 });
