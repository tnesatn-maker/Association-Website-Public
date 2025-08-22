
// Simple TNESA site JS - no frameworks
const membersUrl = './data/members.json';
let members = [];
let filtered = [];

async function loadMembers(){
  const res = await fetch(membersUrl);
  members = await res.json();
  filtered = members.slice();
  renderDirectory();
}

function el(tag,cls=''){const e=document.createElement(tag);if(cls)e.className=cls;return e}

function renderDirectory(){
  const container = document.getElementById('directory-list');
  if(!container) return;
  container.innerHTML='';
  filtered.forEach(m=>{
    const card = el('div','card member-item');
    const info = el('div');
    const title = el('div');
    title.innerHTML = `<strong>${m.company}</strong> <span class="small">(${m.city})</span>`;
    const meta = el('div','small');
    meta.innerHTML = `Services: ${m.services} · <span class="rating">⭐ ${m.customer_rating.toFixed(1)}</span> · <span class="badge">${m.badge}</span>`;
    const btn = el('a','btn');
    btn.href = `profile.html?id=${m.id}`;
    btn.textContent='View Profile';
    btn.className='btn btn-primary';
    info.appendChild(title);
    info.appendChild(meta);
    card.appendChild(info);
    card.appendChild(btn);
    container.appendChild(card);
  });
}

function applyFilters(){
  const q = document.getElementById('q').value.trim().toLowerCase();
  const city = document.getElementById('filter-city').value;
  const badge = document.getElementById('filter-badge').value;
  const sort = document.getElementById('sort').value;
  filtered = members.filter(m=>{
    if(city && m.city !== city) return false;
    if(badge && m.badge !== badge) return false;
    if(q){
      const hay = `${m.name} ${m.company} ${m.city} ${m.services}`.toLowerCase();
      if(!hay.includes(q)) return false;
    }
    return true;
  });
  if(sort === 'customer_desc') filtered.sort((a,b)=>b.customer_rating - a.customer_rating);
  if(sort === 'admin_desc') filtered.sort((a,b)=>b.admin_rating - a.admin_rating);
  renderDirectory();
}

function populateFilters(){
  const citySel = document.getElementById('filter-city');
  const badgeSel = document.getElementById('filter-badge');
  const cities = Array.from(new Set(members.map(m=>m.city))).sort();
  cities.forEach(c=>{
    const o=document.createElement('option');o.value=c;o.textContent=c;citySel.appendChild(o);
  });
  const badges = Array.from(new Set(members.map(m=>m.badge))).sort();
  badges.forEach(b=>{
    const o=document.createElement('option');o.value=b;o.textContent=b;badgeSel.appendChild(o);
  });
}

function initDirectoryPage(){
  loadMembers().then(()=>populateFilters());
  document.getElementById('apply-filters').addEventListener('click',applyFilters);
  document.getElementById('reset-filters').addEventListener('click',()=>{
    document.getElementById('q').value='';document.getElementById('filter-city').value='';document.getElementById('filter-badge').value='';document.getElementById('sort').value='';filtered = members.slice();renderDirectory();
  });
}

// PROFILE PAGE
function renderProfile(){
  const params = new URLSearchParams(location.search);
  const id = Number(params.get('id'));
  if(!id) return;
  const m = members.find(x=>x.id===id);
  if(!m) return;
  document.getElementById('profile-company').textContent = m.company;
  document.getElementById('profile-city').textContent = m.city;
  document.getElementById('profile-services').textContent = m.services;
  document.getElementById('profile-contact').innerHTML = `<div>Email: <a href="mailto:${m.email}">${m.email}</a></div><div>Phone: <a href="tel:${m.phone}">${m.phone}</a></div>`;
  document.getElementById('profile-badge').textContent = `${m.badge} · Admin Rating: ${m.admin_rating}`;
  // reviews
  const rv = document.getElementById('reviews');
  rv.innerHTML='';
  if(m.customer_reviews && m.customer_reviews.length){
    m.customer_reviews.forEach(r=>{
      const c = el('div','card');
      c.innerHTML = `<strong>${r.author}</strong> · ⭐ ${r.rating} <div class="small">${r.text}</div>`;
      rv.appendChild(c);
    });
  } else {
    rv.innerHTML = '<div class="small">No reviews yet.</div>';
  }
  // review form
  document.getElementById('review-form').addEventListener('submit',e=>{
    e.preventDefault();
    const author = document.getElementById('rv-author').value||'Anonymous';
    const rating = Number(document.getElementById('rv-rating').value)||5;
    const text = document.getElementById('rv-text').value||'';
    m.customer_reviews = m.customer_reviews || [];
    m.customer_reviews.push({author,rating,text});
    // recalc avg
    m.customer_rating = (m.customer_reviews.reduce((s,r)=>s+r.rating,0)/m.customer_reviews.length);
    alert('Thank you for your review — in this demo it updates locally only.');
    renderProfile();
  });
}

// MEMBER LOGIN (simulated)
function memberLoginFlow(){
  const form = document.getElementById('member-login-form');
  if(!form) return;
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const email = document.getElementById('ml-email').value.trim();
    const found = members.find(m=>m.email===email);
    if(found){
      localStorage.setItem('member_email', email);
      alert('Logged in as ' + found.company + ' (demo). Redirecting to dashboard.');
      location.href='member-dashboard.html';
    } else {
      alert('No member found with that email in demo data.');
    }
  });
}

// MEMBER DASHBOARD
function renderMemberDashboard(){
  const email = localStorage.getItem('member_email');
  if(!email){
    document.getElementById('md-body').innerHTML = '<div class="card">Please login from <a href="member-dashboard.html">Member Login</a>.</div>';
    return;
  }
  const m = members.find(x=>x.email===email);
  if(!m) { document.getElementById('md-body').innerHTML = '<div class="card">Member not found.</div>'; return; }
  const c = el('div');
  c.innerHTML = `<h3>${m.company}</h3><div class="small">City: ${m.city} · Badge: ${m.badge}</div><div style="margin-top:12px">Membership Status: <strong>${m.approved? 'Active' : 'Pending'}</strong></div>`;
  document.getElementById('md-body').appendChild(c);
}

// ADMIN (simulated credentials: admin@tnesa / password: admin123)
function adminLogin(){
  const form = document.getElementById('admin-login-form');
  if(!form) return;
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const u = document.getElementById('admin-user').value;
    const p = document.getElementById('admin-pass').value;
    if(u==='admin@tnesa' && p==='admin123'){
      localStorage.setItem('admin', '1');
      location.href='admin-dashboard.html';
    } else alert('Invalid credentials (demo). Use admin@tnesa / admin123');
  });
}

function renderAdminDashboard(){
  if(!localStorage.getItem('admin')) {
    document.getElementById('ad-body').innerHTML = '<div class="card">Please login as admin first.</div>'; return;
  }
  const list = document.getElementById('admin-members');
  list.innerHTML='';
  members.forEach(m=>{
    const row = el('div','card');
    row.innerHTML = `<strong>${m.company}</strong> · ${m.city} · Badge: ${m.badge} · Approved: ${m.approved ? 'Yes' : 'No'}`;
    const btns = el('div');
    const approve = el('button'); approve.textContent='Approve'; approve.onclick=()=>{ m.approved=true; renderAdminDashboard(); alert('Member approved (demo)'); };
    const reject = el('button'); reject.textContent='Reject'; reject.onclick=()=>{ m.approved=false; renderAdminDashboard(); alert('Member rejected (demo)'); };
    btns.appendChild(approve); btns.appendChild(reject); row.appendChild(btns);
    list.appendChild(row);
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  // detect which page by id on body
  const bodyId = document.body.id;
  if(bodyId==='directory') initDirectoryPage();
  if(bodyId==='profile') { loadMembers().then(()=>renderProfile()); }
  if(bodyId==='member-login') { loadMembers().then(()=>memberLoginFlow()); }
  if(bodyId==='member-dashboard') { loadMembers().then(()=>renderMemberDashboard()); }
  if(bodyId==='admin-login') { adminLogin(); }
  if(bodyId==='admin-dashboard') { loadMembers().then(()=>renderAdminDashboard()); }
});
