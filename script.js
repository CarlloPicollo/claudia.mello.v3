(function(){
var q=function(s){return document.querySelectorAll(s)},L='pt',st=window.localStorage;
var M={pt:'Olá, Claudia! Vim pelo seu site.',es:'¡Hola, Claudia! Vine por tu sitio web.'};
function wa(){q('a[data-n]').forEach(function(a){a.href='https://wa.me/'+a.dataset.n+'?text='+encodeURIComponent(M[L])})}
function set(l){L=l;document.documentElement.lang=l=='es'?'es':'pt-BR';
q('[data-es]').forEach(function(e){if(e.dataset.pt==null)e.dataset.pt=e.innerHTML;e.innerHTML=l=='es'?e.dataset.es:e.dataset.pt});
q('[data-l]').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l==l)});
try{st.setItem('lang',l)}catch(x){}wa()}
var s;try{s=st.getItem('lang')}catch(x){}
set(s||((navigator.language||'').toLowerCase().indexOf('es')==0?'es':'pt'));
q('[data-l]').forEach(function(b){b.onclick=function(){set(b.dataset.l)}});
var f=document.getElementById('cf');
if(f)f.onsubmit=function(e){e.preventDefault();var d=f.elements,
t=M[L]+'\n\n'+(L=='es'?'Nombre: ':'Nome: ')+d.n.value+'\n'+d.m.value;
window.open('https://wa.me/'+f.querySelector('[name=c]:checked').value+'?text='+encodeURIComponent(t),'_blank')};
var lb=document.createElement('div');lb.className='lb';lb.hidden=true;
lb.innerHTML='<div><img alt=""><p><a target="_blank" rel="noopener"></a><button>x</button></p></div>';document.body.appendChild(lb);
function close(){lb.hidden=true}
q('[data-lb]').forEach(function(a){a.onclick=function(e){e.preventDefault();lb.querySelector('img').src=a.href;lb.querySelector('img').alt=a.textContent;
var o=lb.querySelector('a');o.href=a.href;o.textContent=L=='es'?'Abrir en otra pestaña':'Abrir em outra aba';lb.querySelector('button').textContent=L=='es'?'Cerrar':'Fechar';lb.hidden=false;lb.querySelector('button').focus()}});
var hd=document.querySelector('header');function sc(){hd.classList.toggle('s',window.scrollY>30)}sc();window.addEventListener('scroll',sc,{passive:true});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion:reduce)').matches){var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
q('main section:not(.hero)>*,.sec>*,.fn>div,.vals li,.lista li,.sv,.cards>*,.end .w>*').forEach(function(e,i){e.classList.add('rv');e.style.transitionDelay=(i%4)*90+'ms';io.observe(e)})}
lb.onclick=function(e){if(e.target==lb||e.target.tagName=='BUTTON')close()};
document.addEventListener('keydown',function(e){if(e.key=='Escape')close()});
})();