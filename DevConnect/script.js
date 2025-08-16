
// Mock feed + boards + local chat. Replace with real APIs/WebSocket later.
const posts = [
  {user:'Aditi', text:'Seeking a UI dev for a fintech dashboard.'},
  {user:'Liam', text:'Open-source auth templates. PRs welcome!'},
  {user:'Mehdi', text:'Looking for backend partner for Hackathon.'},
];
const skillsDb = ['React','TypeScript','Node','D3','Tailwind','WebSocket'];
const postsEl = document.getElementById('posts');
posts.forEach(p=>{
  const el=document.createElement('article'); el.className='card';
  el.innerHTML=`<h3>@${p.user}</h3><p>${p.text}</p>`;
  postsEl.appendChild(el);
});

const boardsEl = document.getElementById('boards');
['Ideas','In Progress','Done'].forEach(col=>{
  const c=document.createElement('div'); c.className='column';
  c.innerHTML=`<h3>${col}</h3>`; boardsEl.appendChild(c);
});

// Local-only chat mock
const messages=document.getElementById('messages');
const form=document.getElementById('chat-form');
const input=document.getElementById('chat-input');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const v=input.value.trim(); if(!v) return;
  const msg=document.createElement('div'); msg.textContent='You: '+v;
  messages.appendChild(msg); messages.scrollTop=messages.scrollHeight; input.value='';
});

// Profile + endorsements demo
const nameEl=document.getElementById('name');
const skillsEl=document.getElementById('skills');
const prof=document.getElementById('profile-form');
const endors=document.getElementById('endorsements');
prof.addEventListener('submit',(e)=>{
  e.preventDefault();
  const s=(skillsEl.value||'').split(',').map(x=>x.trim()).filter(Boolean);
  endors.innerHTML='<h3>Endorsements</h3>' + s.slice(0,8).map(k=>`<span class="badge">${k}</span>`).join('');
});
