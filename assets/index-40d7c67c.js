import{j as n,r as v,m as C,A,M as j,L as D,l as U}from"./index-f6bc1dfc.js";const f=({filters:s,setFilters:t,applications:a})=>{const u=Array.from(new Set(a==null?void 0:a.map(i=>i.country))),c=Array.from(new Set(a==null?void 0:a.map(i=>i.university))),g=Array.from(new Set(a==null?void 0:a.map(i=>i.language))),r=Array.from(new Set(a==null?void 0:a.map(i=>i.duration))),x=()=>{t({country:"All",university:"All",duration:"0",costRange:{min:0,max:15e3},language:""})},l=i=>{const{name:d,value:h}=i.target;t(p=>{if(d==="min"||d==="max"){const e={...p.costRange,[d]:parseInt(h)},o=a==null?void 0:a.filter(m=>{if(m.cost>e.min&&m.cost<e.max)return m});return{...p,costRange:{...p.costRange,...e},applications:o}}else return{...p,[d]:h}})};return n.jsxs("div",{className:"flex-wrap p-4 bg-gray-100 rounded-lg flex  md:flex-col md: gap-2 md:items-center w-[100%] justify-center",children:[n.jsx("div",{children:n.jsxs("label",{className:"md:flex-col md:items-center justify-center md:flex",children:["Country:",n.jsxs("select",{name:"country",value:s.country,onChange:l,className:"ml-2 p-1 md:flex md:flex-col",children:[n.jsx("option",{value:"All",children:"All"}),u.map(i=>n.jsx("option",{value:i,children:i},i))]})]})}),n.jsx("div",{children:n.jsxs("label",{className:"md:flex-col md:items-center justify-center md:flex",children:["University:",n.jsxs("select",{name:"university",value:s.university,onChange:l,className:"ml-2 p-1 md:flex md:flex-col md:items-center",children:[n.jsx("option",{value:"All",children:"All"}),c.map(i=>n.jsx("option",{value:i,children:i},i))]})]})}),n.jsx("div",{children:n.jsxs("label",{children:["Duration:",n.jsxs("select",{name:"duration",value:s.duration,onChange:l,className:"ml-2 p-1 md:flex md:flex-col md:items-center",children:[n.jsx("option",{value:"0",children:"All"}),r.map(i=>n.jsxs("option",{value:i,children:[i," Years"]},i))]})]})}),n.jsx("div",{children:n.jsxs("label",{className:"flex gap-2 md:flex-col md:items-center justify-center md:flex",children:["Cost Range:",n.jsx("input",{type:"number",name:"min",value:s.costRange.min,onChange:l,placeholder:"Min",className:"ml-2 p-1 max-w-[200px] bg-gray-200"}),n.jsx("input",{type:"number",name:"max",value:s.costRange.max,onChange:l,placeholder:"Max",className:"ml-2 p-1 max-w-[200px] bg-gray-200 "})]})}),n.jsxs("div",{children:[n.jsx("label",{className:"md:flex-col md:items-center justify-center md:flex",children:"Language:"}),n.jsxs("select",{name:"language",value:s.language,onChange:l,className:"ml-2 p-1",multiple:!1,children:[n.jsx("option",{value:"",children:"All"}),g.map(i=>n.jsx("option",{value:i,children:i},i))]})]}),n.jsx("button",{className:"bg-blue-500 disabled:bg-blue-300 text-white font-semibold py-2 px-4 rounded ",onClick:x,children:"Reset all filters"})]})},N=({currentPage:s,totalPages:t,onPageChange:a})=>{const u=[];for(let c=1;c<=t;c++)u.push(c);return n.jsx("div",{className:"w-[100%] mb-4 mt-auto",children:n.jsx("ul",{className:"flex wrap justify-center gap-4 mt-4",children:u.map(c=>n.jsx("li",{onClick:()=>a(c),className:c===s?"bg-slate-500 rounded-md justify-center flex items-center w-10 h-10 cursor-pointer":"bg-slate-100 rounded-md justify-center flex items-center w-10 h-10 cursor-pointer",children:c},c))})})},X=[{name:"Application 1",university:"University b",country:"Country X",duration:"2",cost:1e4,applicationDeadline:"2023-12-31",language:"English"},{name:"dasasd",university:"Unidsasddsa",country:"Country Y",duration:"3",cost:12e3,applicationDeadline:"2023-11-30",language:"French"},{name:"Application 1",university:"Univsdaasdas A",country:"Country X",duration:"2",cost:1e4,applicationDeadline:"2023-12-31",language:"English"},{name:"Application 2",university:"UnivasdasdsaB",country:"Country Y",duration:"3",cost:12e3,applicationDeadline:"2023-11-30",language:"French"},{name:"Application 1",university:"Unsadasddas A",country:"Country X",duration:"2",cost:1e4,applicationDeadline:"2023-12-31",language:"English"},{name:"Application 2",university:"UnasdasddsaB",country:"Country Y",duration:"3",cost:12e3,applicationDeadline:"2023-11-30",language:"French"},{name:"Application 1",university:"University A",country:"Country X",duration:"2",cost:1e4,applicationDeadline:"2023-12-31",language:"English"},{name:"Application 2",university:"University B",country:"Country Y",duration:"3",cost:12e3,applicationDeadline:"2023-11-30",language:"French"},{name:"Application 1",university:"University A",country:"Country X",duration:"2",cost:1e4,applicationDeadline:"2023-12-31",language:"English"},{name:"Application 2",university:"University B",country:"Country Y",duration:"3",cost:12e3,applicationDeadline:"2023-11-30",language:"French"},{name:"Application 1",university:"University A",country:"Country X",duration:"2",cost:1e4,applicationDeadline:"2023-12-31",language:"English"},{name:"Application 2",university:"University B",country:"Country Y",duration:"3",cost:12e3,applicationDeadline:"2023-11-30",language:"French"},{name:"Application 1",university:"University B",country:"Country X",duration:"2",cost:1e4,applicationDeadline:"2023-12-31",language:"English"},{name:"Application 2",university:"University C",country:"Country Y",duration:"3",cost:12e3,applicationDeadline:"2023-11-30",language:"French"},{name:"Application 3",university:"University D",country:"Country X",duration:"2",cost:13e3,applicationDeadline:"2023-12-31",language:"Spanish"},{name:"Application 4",university:"University E",country:"Country Z",duration:"1",cost:1e3,applicationDeadline:"2023-10-15",language:"German"},{name:"Application 5",university:"University F",country:"Country W",duration:"4",cost:1e4,applicationDeadline:"2023-09-30",language:"English"},{name:"Application 6",university:"University G",country:"Country X",duration:"2",cost:12e3,applicationDeadline:"2023-12-31",language:"French"},{name:"Application 7",university:"University H",country:"Country Y",duration:"3",cost:13e3,applicationDeadline:"2023-11-30",language:"Spanish"},{name:"Application 8",university:"University I",country:"Country Z",duration:"1",cost:1e3,applicationDeadline:"2023-10-15",language:"German"},{name:"Application 9",university:"University J",country:"Country X",duration:"2",cost:1e4,applicationDeadline:"2023-12-31",language:"English"},{name:"Application 10",university:"University K",country:"Country Y",duration:"3",cost:12e3,applicationDeadline:"2023-11-30",language:"French"},{name:"Application 11",university:"University L",country:"Country X",duration:"2",cost:13e3,applicationDeadline:"2023-12-31",language:"Spanish"},{name:"Application 12",university:"University M",country:"Country Z",duration:"1",cost:1e3,applicationDeadline:"2023-10-15",language:"German"},{name:"Application 13",university:"University N",country:"Country W",duration:"4",cost:1e4,applicationDeadline:"2023-09-30",language:"English"},{name:"Application 14",university:"University O",country:"Country X",duration:"2",cost:12e3,applicationDeadline:"2023-12-31",language:"French"},{name:"Application 15",university:"University P",country:"Country Y",duration:"3",cost:13e3,applicationDeadline:"2023-11-30",language:"Spanish"},{name:"Application 16",university:"University Q",country:"Country Z",duration:"1",cost:1e3,applicationDeadline:"2023-10-15",language:"German"},{name:"Application 17",university:"University R",country:"Country X",duration:"2",cost:1e4,applicationDeadline:"2023-12-31",language:"English"},{name:"Application 18",university:"University S",country:"Country Y",duration:"3",cost:12e3,applicationDeadline:"2023-11-30",language:"French"},{name:"Application 19",university:"University T",country:"Country X",duration:"2",cost:13e3,applicationDeadline:"2023-12-31",language:"Spanish"},{name:"Application 20",university:"University U",country:"Country Z",duration:"1",cost:1e3,applicationDeadline:"2023-10-15",language:"German"},{name:"Application 21",university:"University V",country:"Country W",duration:"4",cost:1e4,applicationDeadline:"2023-09-30",language:"English"},{name:"Application 22",university:"University W",country:"Country X",duration:"2",cost:12e3,applicationDeadline:"2023-12-31",language:"French"},{name:"Application 23",university:"University X",country:"Country Y",duration:"3",cost:13e3,applicationDeadline:"2023-11-30",language:"Spanish"},{name:"Application 24",university:"University Y",country:"Country Z",duration:"1",cost:1e3,applicationDeadline:"2023-10-15",language:"German"},{name:"Application 25",university:"University Z",country:"Country X",duration:"2",cost:1e4,applicationDeadline:"2023-12-31",language:"English"},{name:"Application 26",university:"University AA",country:"Country Y",duration:"3",cost:12e3,applicationDeadline:"2023-11-30",language:"French"},,{name:"Application 1",university:"University B",country:"Country X",duration:"2",cost:1e4,applicationDeadline:"2023-12-31",language:"English"},{name:"Application 2",university:"University C",country:"Country Y",duration:"3",cost:12e3,applicationDeadline:"2023-11-30",language:"French"},{name:"Application 3",university:"University D",country:"Country X",duration:"2",cost:13e3,applicationDeadline:"2023-12-31",language:"Spanish"},{name:"Application 4",university:"University E",country:"Country Z",duration:"1",cost:1e3,applicationDeadline:"2023-10-15",language:"German"},{name:"Application 5",university:"University F",country:"Country W",duration:"4",cost:1e4,applicationDeadline:"2023-09-30",language:"English"},{name:"Application 6",university:"University G",country:"Country X",duration:"2",cost:12e3,applicationDeadline:"2023-12-31",language:"French"},{name:"Application 7",university:"University H",country:"Country Y",duration:"3",cost:13e3,applicationDeadline:"2023-11-30",language:"Spanish"},{name:"Application 8",university:"University I",country:"Country Z",duration:"1",cost:1e3,applicationDeadline:"2023-10-15",language:"German"},{name:"Application 9",university:"University J",country:"Country X",duration:"2",cost:1e4,applicationDeadline:"2023-12-31",language:"English"},{name:"Application 10",university:"University K",country:"Country Y",duration:"3",cost:12e3,applicationDeadline:"2023-11-30",language:"French"},{name:"Application 11",university:"University L",country:"Country X",duration:"2",cost:13e3,applicationDeadline:"2023-12-31",language:"Spanish"},{name:"Application 12",university:"University M",country:"Country Z",duration:"1",cost:1e3,applicationDeadline:"2023-10-15",language:"German"},{name:"Application 13",university:"University N",country:"Country W",duration:"4",cost:1e4,applicationDeadline:"2023-09-30",language:"English"},{name:"Application 14",university:"University O",country:"Country X",duration:"2",cost:12e3,applicationDeadline:"2023-12-31",language:"French"},{name:"Application 15",university:"University P",country:"Country Y",duration:"3",cost:13e3,applicationDeadline:"2023-11-30",language:"Spanish"},{name:"Application 16",university:"University Q",country:"Country Z",duration:"1",cost:1e3,applicationDeadline:"2023-10-15",language:"German"},{name:"Application 17",university:"University R",country:"Country X",duration:"2",cost:1e4,applicationDeadline:"2023-12-31",language:"English"},{name:"Application 18",university:"University S",country:"Country Y",duration:"3",cost:12e3,applicationDeadline:"2023-11-30",language:"French"},{name:"Application 19",university:"University T",country:"Country X",duration:"2",cost:13e3,applicationDeadline:"2023-12-31",language:"Spanish"},{name:"Application 20",university:"University U",country:"Country Z",duration:"1",cost:1e3,applicationDeadline:"2023-10-15",language:"German"},{name:"Application 21",university:"University V",country:"Country W",duration:"4",cost:1e4,applicationDeadline:"2023-09-30",language:"English"},{name:"Application 22",university:"University W",country:"Country X",duration:"2",cost:12e3,applicationDeadline:"2023-12-31",language:"French"},{name:"Application 23",university:"University X",country:"Country Y",duration:"3",cost:13e3,applicationDeadline:"2023-11-30",language:"Spanish"},{name:"Application 24",university:"University Y",country:"Country Z",duration:"1",cost:1e3,applicationDeadline:"2023-10-15",language:"German"},{name:"Application 25",university:"University Z",country:"Country X",duration:"2",cost:1e4,applicationDeadline:"2023-12-31",language:"English"},{name:"Application 26",university:"University AA",country:"Country Y",duration:"3",cost:12e3,applicationDeadline:"2023-11-30",language:"French"}],E=()=>{const s=X,[t,a]=v.useState({country:"All",university:"All",duration:"0",costRange:{min:0,max:15e3},language:""}),[u,c]=v.useState(1),g=10,[r,x]=v.useState({column:"name",direction:"asc"}),l=e=>{x(o=>o.column===e?{column:e,direction:o.direction==="asc"?"desc":"asc"}:{column:e,direction:"asc"})},i=s.filter(e=>e!==void 0).filter(e=>(t.country==="All"||e&&e.country===t.country)&&(t.university==="All"||e&&e.university===t.university)&&(t.duration==="0"||e&&e.duration.toString()===t.duration)&&(e&&e.cost>=t.costRange.min&&e.cost<=t.costRange.max||t.costRange.min===0&&t.costRange.max===0)&&(t.language===""||e&&e.language===t.language)).sort((e,o)=>{const m=r.column,y=r.direction==="asc"?1:-1;if(!e||!o)return 0;switch(m){case"name":return y*e.name.localeCompare(o.name);case"university":return y*e.university.localeCompare(o.university);case"country":return y*e.country.localeCompare(o.country);case"duration":return y*(parseInt(e.duration)-parseInt(o.duration));case"cost":return y*(e.cost-o.cost);case"applicationDeadline":return y*e.applicationDeadline.localeCompare(o.applicationDeadline);case"language":return y*e.language.localeCompare(o.language);default:return 0}}),d=Math.ceil(i.length/g),h=i.slice((u-1)*g,u*g),p=e=>{c(e)};return n.jsxs("div",{className:"flex justify-center items-center flex-col min-h-full",children:[n.jsx(f,{filters:t,setFilters:a,applications:s.filter(e=>e!==void 0)}),n.jsx("div",{className:"w-full md:max-w-screen overflow-auto ",children:n.jsxs("table",{className:" w-full bg-white border mb-auto ",children:[n.jsx("thead",{className:"bg-gray-50",children:n.jsxs("tr",{children:[n.jsxs("th",{onClick:()=>l("name"),className:"cursor-pointer px-4 py-2 text-left",children:["Name",r.column==="name"&&n.jsx("span",{children:r.direction==="asc"?" ▲":" ▼"})]}),n.jsxs("th",{onClick:()=>l("university"),className:"cursor-pointer px-4 py-2 text-left",children:["University",r.column==="university"&&n.jsx("span",{children:r.direction==="asc"?" ▲":" ▼"})]}),n.jsxs("th",{onClick:()=>l("country"),className:"cursor-pointer px-4 py-2 text-left",children:["Country",r.column==="country"&&n.jsx("span",{children:r.direction==="asc"?" ▲":" ▼"})]}),n.jsxs("th",{onClick:()=>l("duration"),className:"cursor-pointer px-4 py-2 text-left",children:["Duration",r.column==="duration"&&n.jsx("span",{children:r.direction==="asc"?" ▲":" ▼"})]}),n.jsxs("th",{onClick:()=>l("cost"),className:"cursor-pointer px-4 py-2 text-left",children:["Cost",r.column==="cost"&&n.jsx("span",{children:r.direction==="asc"?" ▲":" ▼"})]}),n.jsxs("th",{onClick:()=>l("applicationDeadline"),className:"cursor-pointer px-4 py-2 text-left",children:["Application Deadline",r.column==="applicationDeadline"&&n.jsx("span",{children:r.direction==="asc"?" ▲":" ▼"})]}),n.jsxs("th",{onClick:()=>l("language"),className:"cursor-pointer px-4 py-2 text-left",children:["Language",r.column==="language"&&n.jsx("span",{children:r.direction==="asc"?" ▲":" ▼"})]})]})}),n.jsx("tbody",{children:h.map((e,o)=>n.jsxs("tr",{className:o%2===0?"bg-gray-100":"bg-white",children:[n.jsx("td",{className:"px-4 py-2",children:e==null?void 0:e.name}),n.jsx("td",{className:"px-4 py-2",children:e==null?void 0:e.university}),n.jsx("td",{className:"px-4 py-2",children:e==null?void 0:e.country}),n.jsx("td",{className:"px-4 py-2",children:e==null?void 0:e.duration}),n.jsx("td",{className:"px-4 py-2",children:e==null?void 0:e.cost}),n.jsx("td",{className:"px-4 py-2",children:e==null?void 0:e.applicationDeadline}),n.jsx("td",{className:"px-4 py-2",children:e==null?void 0:e.language})]},o))})]})}),n.jsx("div",{className:"mt-auto",children:n.jsx(N,{currentPage:u,totalPages:d,onPageChange:p})})]})},b=()=>{const s=C.useNavigate(),{status:t,userId:a}=v.useContext(A);return v.useEffect(()=>{t!=="checking"&&t!=="authenticated"&&!a&&s("/auth/login")},[t]),n.jsxs(j,{children:[t==="checking"&&n.jsx(D,{}),t==="authenticated"&&n.jsxs("div",{children:[n.jsxs("div",{className:"h-10 bg-slate-300 mb-6 w-full flex justify-end pr-4",children:[" ",n.jsx("button",{onClick:U,children:"Log Out"})]}),n.jsx(E,{})]})]})};export{b as Homepage};