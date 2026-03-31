import{r as i,W as Se,_ as Ce,z as ke,C as je,X as we,Y as Te,Z as De,$ as We,E as Ie,j as e,B as p,x as f,T as C,J as Ae,O as B,a0 as ve,a1 as Fe,a2 as ze,a3 as Oe,D as A,y as R,a4 as Me,n as Ee}from"./index-BGXtnOaH.js";import{U as Ne}from"./UIHelper-Du2uBKwO.js";import{A as G,C as Be}from"./ArrowBack-lchWDz0L.js";var Re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"},Ge=function(v,F){return i.createElement(Se,Ce({},v,{ref:F,icon:Re}))},Pe=i.forwardRef(Ge);const Ke=({recordId:u})=>{const v=ke(),[F,z]=i.useState(!1),[Y,k]=i.useState(!1),[b,j]=i.useState(null),[r,q]=i.useState(null),[m,X]=i.useState(r),[Le,$e]=i.useState(null),[w,Ue]=i.useState(null),[l,He]=i.useState(null),[Qe,_]=i.useState(0),[Z,K]=i.useState(0),[Ve,Je]=i.useState(0),[P,Ye]=i.useState(0),[ee,te]=i.useState(!1),[oe,re]=i.useState(!1),[ne,L]=i.useState(!1),[ie,O]=i.useState(!1),[ae,$]=i.useState(""),[se,T]=i.useState(!1),[de,D]=i.useState(null),[U,W]=i.useState(!1),[qe,le]=i.useState(0),[x,M]=i.useState([]),[pe,H]=i.useState(!0),Q=Ie.workOrder,I=Q.configId,V=je.getItem("isAdmin")==="true",y=i.useMemo(()=>{const t=we(I),n=new Te({}).constructConfig(t,De),a=We.enhanceFormConfig(n),s={...a,formFields:a.formFields};return s.columns=s.formFields,console.log("Filtered Config for Edit Form:",s),s},[I]),ce=t=>{try{if(t!=null&&t.WorkOrderScopeJson){let o=[];typeof t.WorkOrderScopeJson=="string"?o=JSON.parse(t.WorkOrderScopeJson):Array.isArray(t.WorkOrderScopeJson)&&(o=t.WorkOrderScopeJson),M(o)}else M([])}catch(o){console.error("Error parsing WorkOrderScopeJson:",o),M([])}},h=()=>{if(u){const t={Guid:u,action:"LoadView"};A.triggerPost(I,t).then(o=>{console.log("API Response:",o),o!=null&&o.data?(console.log("Work Order data loaded:",o.data),q(o.data),X(o.data),ce(o.data)):console.error("Failed to load work order - no data in response:",o)}).catch(o=>{console.error("Error loading work order:",o)}).finally(()=>{H(!1)})}else console.log("No workOrderId provided"),H(!1)};i.useEffect(()=>{h()},[u]),i.useEffect(()=>{const t=()=>{var n,a;let o=null;if((n=l==null?void 0:l.props)!=null&&n.data)o=l.props.data;else if((a=l==null?void 0:l.state)!=null&&a.data)o=l.state.data;else if(l!=null&&l.gridApi){const s=[];l.gridApi.forEachNode(d=>s.push(d.data)),s.length>0&&(o=s)}if(o&&Array.isArray(o)&&o.length>0){const s=o.reduce((d,g)=>d+(parseFloat(g.TotalPrice)||0),0);return console.log("useEffect - Calculated financial total:",s,"from data:",o),le(s),!0}return!1};if(!t()){const o=setTimeout(t,100),n=setTimeout(t,300),a=setTimeout(t,500),s=setTimeout(t,1e3),d=setTimeout(t,1500);return()=>{clearTimeout(o),clearTimeout(n),clearTimeout(a),clearTimeout(s),clearTimeout(d)}}},[Z,l,r]);const E=()=>{v(-1)},xe=()=>{console.log("Current work order data for editing:",m),console.log("Available keys:",Object.keys(m||{})),window.workOrderRefreshCallback=()=>{h()},z(!0)},ge=()=>{const t=document.querySelector(".MuiCard-root").innerHTML,o=new Date,n=String(o.getDate()).padStart(2,"0"),a=String(o.getMonth()+1).padStart(2,"0"),s=o.getFullYear(),d=`${n}-${a}-${s}`,g=new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),N=String((r==null?void 0:r.WorkOrderLabelId)||"").padStart(4,"0"),c=document.createElement("iframe");c.style.position="absolute",c.style.width="0",c.style.height="0",c.style.border="none",document.body.appendChild(c);const S=c.contentWindow.document;S.open(),S.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            @page {
              size: A4;
              margin-top: 18mm;
              margin-bottom: 15mm;
              margin-left: 12mm;
              margin-right: 12mm;
            }
            
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: Arial, sans-serif;
              background: white;
            }
            
            /* Header table that repeats on every page */
            .print-header-table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 0;
            }
            
            .print-header-table thead {
              display: table-header-group; /* This makes it repeat on every page */
            }
            
            .print-header-table thead td {
              border: none;
              border-bottom: 1px solid #ddd;
              padding: 10px 0;
              font-size: 11px;
              vertical-align: middle;
            }
            
            .print-header-left {
              font-weight: 600;
              text-align: left;
              width: 33.33%;
            }
            
            .print-header-center {
              font-size: 14px;
              font-weight: bold;
              text-align: center;
              width: 33.33%;
            }
            
            .print-header-right {
              text-align: right;
              width: 33.33%;
            }
            
            /* Add spacing below header */
            .print-header-table tbody td {
              padding-top: 25px;
            }
            
            .print-content {
              margin-top: 0;
              padding-top: 0;
            }
            
            /* Work Order Details heading - force left alignment */
            .print-content > div:first-child {
              text-align: left !important;
            }
            
            .print-content h1:first-of-type,
            .print-content h2:first-of-type,
            .print-content h3:first-of-type,
            .print-content h4:first-of-type,
            .print-content h5:first-of-type,
            .print-content h6:first-of-type,
            .print-content .MuiTypography-h6:first-of-type {
              text-align: left !important;
            }
            
            /* All section headings - LEFT aligned */
            h1, h2, h3, h4, h5, h6,
            .MuiTypography-h6,
            .MuiTypography-root {
              font-size: 14pt;
              font-weight: 600;
              margin: 20px 0 10px 0;
              color: black;
              page-break-after: avoid;
              text-align: left !important;
            }
            
         
            p {
              font-size: 10pt;
              margin: 3px 0;
              color: black;
            }
            
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 10px 0 20px 0;
              page-break-inside: auto;
              table-layout: fixed;
            }
            
            thead {
              display: table-header-group;
            }
            
            th {
              border: 1px solid black;
              padding: 6px 4px;
              font-size: 9pt;
              font-weight: bold;
              text-align: center;
              background: #f5f5f5;
              word-wrap: break-word;
            }
            
            td {
              border: 1px solid black;
              padding: 6px 4px;
              font-size: 9pt;
              text-align: left;
              word-wrap: break-word;
            }
            
            tr {
              page-break-inside: avoid;
            }
            
            /* Optimize column widths for Scope of Work table */
            table th:nth-child(1),
            table td:nth-child(1) { width: 7%; text-align: center; } /* S.no */
            table th:nth-child(2),
            table td:nth-child(2) { width: 10%; } /* Item order */
            table th:nth-child(3),
            table td:nth-child(3) { width: 14%; } /* Description */
            table th:nth-child(4),
            table td:nth-child(4) { width: 14%; } /* Delivery date */
            table th:nth-child(5),
            table td:nth-child(5) { width: 10%; text-align: center; } /* Quantity */
            table th:nth-child(6),
            table td:nth-child(6) { width: 10%; text-align: center; } /* UOM */
            table th:nth-child(7),
            table td:nth-child(7) { width: 10%; text-align: right; } /* Net unit cost */
            table th:nth-child(8),
            table td:nth-child(8) { width: 8%; text-align: center; } /* sgst % */
            table th:nth-child(9),
            table td:nth-child(9) { width: 8%; text-align: center; } /* cgst % */
            table th:nth-child(10),
            table td:nth-child(10) { width: 8%; text-align: center; } /* igst % */
            table th:nth-child(11),
            table td:nth-child(11) { width: 12%; text-align: right; } /* Amount */
          </style>
        </head>
        <body>
          <table class="print-header-table">
            <thead>
              <tr>
                <td class="print-header-left">${N}</td>
                <td class="print-header-center">Plantiqx</td>
                <td class="print-header-right">${d}; ${g}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="3" style="padding: 0; border: none;">
                  <div class="print-content">
                    ${t}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    `),S.close(),c.contentWindow.focus(),setTimeout(()=>{c.contentWindow.print(),setTimeout(()=>{document.body.removeChild(c),window.location.reload()},100)},250)},he=()=>{z(!1),h();try{w&&w.loadData({currentPage:1,limit:50}),l&&l.loadData({currentPage:1,limit:50})}catch{}},fe=(t=!1)=>{te(!1),t&&(h(),setTimeout(()=>{_(o=>o+1)},300))},J=(t=!1)=>{re(!1),t&&(h(),setTimeout(()=>{K(o=>o+1)},300))},be=()=>{Me.confirm({title:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{width:"48px",height:"48px",backgroundColor:"#ff4d4f",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("img",{src:"Alert-popup.svg",alt:"Alert-popup.svg"})}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"18px",fontWeight:"600",color:"#000"},children:"Close Work Order"}),e.jsx("div",{style:{fontSize:"14px",color:"#666",marginTop:"4px"},children:"Are you sure , you want to close ?"})]})]}),content:null,icon:null,okText:"Confirm",cancelText:"Cancel",okButtonProps:{danger:!0,style:{backgroundColor:"#B54708",borderColor:"#B54708"}},cancelButtonProps:{style:{color:"#04080B",borderColor:"#F9FAFB"}},centered:!0,width:480,onOk:async()=>{var t;if(!(r!=null&&r.WorkOrderId)){console.error("Work Order ID not found");return}try{W(!0);const o={WorkOrderId:r.WorkOrderId,IsClosed:!0,action:"update"},n=await A.triggerMultiPartPost(I,o);if(!((n==null?void 0:n.success)===!0||((t=n==null?void 0:n.data)==null?void 0:t.success)===!0)){console.error("Failed to close work order:",n),W(!1);return}L(!0),W(!1)}catch(o){console.error("Error closing work order:",o),W(!1)}}})},ue=(t=4)=>Ee({title:"Work Order Details",fields:Q.fields.filter(o=>o.conditional&&r?o.conditional(r):!0),rowData:r,columnCount:t,styles:{label:{fontSize:"11px",color:"#475467",margin:"0 0 4px 0"},value:{fontSize:"11px",fontWeight:600,margin:0}}});return pe?e.jsxs(p,{p:3,children:[e.jsx(f,{startIcon:e.jsx(G,{}),onClick:E,sx:{mb:2},children:"Back"}),e.jsx(C,{children:"Loading work order details..."})]}):r?e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @media print {
          @page {
            size: A4;
            margin: 15mm;
          }

          /* Hide buttons and navigation */
          button,
          .MuiButton-root,
          .no-print,
          nav,
          aside,
          .ant-drawer,
          .ant-modal,
          svg {
            display: none !important;
          }

          /* Show only main content */
          body * {
            visibility: hidden;
          }

          .MuiCard-root,
          .MuiCard-root *,
          .MuiCardContent-root,
          .MuiCardContent-root * {
            visibility: visible;
          }

          /* Reset backgrounds */
          html, body {
            background: white !important;
            margin: 0;
            padding: 0;
          }

          * {
            background: white !important;
            background-color: white !important;
            color: black !important;
          }

          /* Position content */
          .MuiCard-root {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          .MuiCardContent-root {
            padding: 0 !important;
          }

          /* Add "Work Order Details" heading before first section */
          .MuiCardContent-root > .MuiBox-root:first-child:before {
            content: "Work Order Details";
            display: block;
            font-size: 16pt;
            font-weight: bold;
            margin-bottom: 15px;
            color: black;
            text-align: left;
          }

          /* Typography */
          h1, h2, h3, h4, h5, h6,
          .MuiTypography-h6 {
            font-size: 14pt !important;
            font-weight: bold !important;
            margin: 20px 0 10px 0 !important;
            color: black !important;
            page-break-after: avoid;
            visibility: visible !important;
            display: block !important;
          }

          p {
            font-size: 10pt !important;
            margin: 3px 0 !important;
            color: black !important;
          }

          /* Tables - ensure full width */
          table {
            width: 100% !important;
            border-collapse: collapse !important;
            margin: 10px 0 20px 0 !important;
            page-break-inside: auto;
            table-layout: fixed !important;
          }

          thead {
            display: table-header-group;
          }

          th {
            border: 1px solid black !important;
            padding: 8px 4px !important;
            font-size: 9pt !important;
            font-weight: bold !important;
            text-align: center !important;
            background: white !important;
            word-wrap: break-word !important;
          }

          td {
            border: 1px solid black !important;
            padding: 8px 4px !important;
            font-size: 9pt !important;
            text-align: left !important;
            background: white !important;
            word-wrap: break-word !important;
          }

          tr {
            page-break-inside: avoid;
            page-break-after: auto;
          }

          /* Ensure all sections are visible */
          .MuiBox-root {
            visibility: visible !important;
            display: block !important;
          }

          /* Work Order Details grid */
          .MuiCardContent-root > .MuiBox-root:first-child {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 10px !important;
            margin-bottom: 20px !important;
            border: 1px solid black !important;
            padding: 10px !important;
          }

          /* Remove status badge styling */
          span {
            border-radius: 0 !important;
            padding: 2px 5px !important;
            border: 1px solid black !important;
          }

          /* Ensure Financial Details section is visible */
          .MuiBox-root:has(> .MuiBox-root > .MuiTypography-h6) {
            page-break-before: auto;
            margin-top: 20px !important;
          }
        }
      `}),e.jsxs(p,{sx:{backgroundColor:"#f8f9fa",minHeight:"100vh",p:2},children:[e.jsxs(p,{className:"no-print",sx:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",mb:3},children:[e.jsxs(p,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(f,{startIcon:e.jsx(G,{}),onClick:E,sx:{color:"#6366f1","&:hover":{backgroundColor:"rgba(99, 102, 241, 0.04)"},minWidth:"auto",p:1}}),e.jsx(p,{children:e.jsx(C,{variant:"h5",component:"h1",sx:{fontWeight:600,color:"#111827",mb:.5,display:"flex",alignItems:"center",gap:1},children:e.jsxs("span",{style:{color:"#18181A",fontWeight:600,display:"flex",alignItems:"center",gap:1},children:[String(r.WorkOrderLabelId).padStart(4,"0"),(r==null?void 0:r.IsClosed)!==void 0&&e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"6px",height:"23px",padding:"0 20px",borderRadius:"9999px",fontSize:"12px",lineHeight:"20px",color:r.IsClosed?"#B42318":"#027A48",backgroundColor:r.IsClosed?"#FEF3F2":"#ECFDF3",fontFamily:"Poppins, sans-serif",textTransform:"capitalize",boxSizing:"border-box"},children:[e.jsx("span",{style:{display:"inline-block",width:"6px",height:"6px",borderRadius:"50%",backgroundColor:r.IsClosed?"#F04438":"#12B76A"}}),r.IsClosed?"Closed":"Open"]})]})})})]}),e.jsxs(p,{sx:{display:"flex",gap:2},children:[e.jsxs(f,{onClick:ge,variant:"contained",sx:{backgroundColor:"#FFFFFF",color:"#344054",border:"1px solid #D0D5DD",boxShadow:"0px 1px 2px rgba(16, 24, 40, 0.05)","&:hover":{backgroundColor:"#F9FAFB",border:"1px solid #D0D5DD",boxShadow:"0px 1px 2px rgba(16, 24, 40, 0.05)"},borderRadius:"8px",textTransform:"none",fontWeight:600,fontSize:"14px",padding:"10px 18px",gap:"8px"},children:[e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5 7.5V4.16667C5 3.70643 5.3731 3.33333 5.83333 3.33333H14.1667C14.6269 3.33333 15 3.70643 15 4.16667V7.5M5 14.1667H4.16667C3.70643 14.1667 3.33333 13.7936 3.33333 13.3333V9.16667C3.33333 8.70643 3.70643 8.33333 4.16667 8.33333H15.8333C16.2936 8.33333 16.6667 8.70643 16.6667 9.16667V13.3333C16.6667 13.7936 16.2936 14.1667 15.8333 14.1667H15M5.83333 11.6667H14.1667V16.6667H5.83333V11.6667Z",stroke:"#344054",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"})}),"Print"]}),!(r!=null&&r.IsClosed)&&V&&e.jsx(f,{onClick:be,disabled:U,variant:"contained",sx:{backgroundColor:"#039855","&:hover":{backgroundColor:"#039855"},borderRadius:"8px",textTransform:"none",fontWeight:500,padding:"10px 24px",gap:"10px",color:"#FFFFFF"},children:U?"Processing...":"Approve & Close"}),!(r!=null&&r.IsClosed)&&V&&e.jsxs(f,{onClick:xe,variant:"contained",sx:{backgroundColor:"#6941C6","&:hover":{backgroundColor:"#6941C6"},borderRadius:"8px",textTransform:"none",fontWeight:500,padding:"10px 24px",gap:"10px"},children:[e.jsx("img",{src:"edit-icon.svg",alt:"",style:{width:"20px",height:"20px"}}),"Edit Details"]})]})]}),e.jsx(Ae,{elevation:0,sx:{backgroundColor:"white",borderRadius:"12px",border:"1px solid #e5e7eb"},children:e.jsxs(Be,{sx:{p:4},children:[e.jsx(p,{sx:{mb:4},children:ue()}),e.jsxs(p,{sx:{mb:10},children:[e.jsx(p,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2},children:e.jsx(C,{variant:"h6",sx:{fontWeight:600,fontSize:"18px",color:"#1F2937"},children:"Scope Of Work Order"})}),e.jsx(p,{sx:{backgroundColor:"white",borderRadius:"8px",overflow:"auto"},children:!x||x.length===0?e.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#666"},children:"No scope items found"}):e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",border:"1px solid #f0f0f0"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"#f9fafb"},children:[e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left"},children:"S.no"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left"},children:"Item order"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left"},children:"Description"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left"},children:"Delivery date"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left"},children:"Quantity"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left"},children:"UOM"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left"},children:"Net unit cost"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left"},children:"sgst %"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left"},children:"cgst %"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left"},children:"igst %"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left"},children:"Amount (without taxes)"})]})}),e.jsx("tbody",{children:Array.isArray(x)&&x.map((t,o)=>{let n=t.DeliveryDate||"";if(n){const a=new Date(n);if(!isNaN(a.getTime())){const s=String(a.getDate()).padStart(2,"0"),d=String(a.getMonth()+1).padStart(2,"0"),g=a.getFullYear();n=`${s}-${d}-${g}`}}return e.jsxs("tr",{children:[e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:o+1}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:t.ItemOrder}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:t.ItemDescription||t.Description}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:n}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:t.Quantity}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:t.UOM||""}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:t.Cost||t.NetUnitCost?parseFloat(String(t.Cost||t.NetUnitCost).replace(/,/g,"")).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2}):""}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:t.Sgst||t.SGSTTax?parseFloat(String(t.Sgst||t.SGSTTax)).toFixed(2):""}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:t.Cgst||t.CGSTTax?parseFloat(String(t.Cgst||t.CGSTTax)).toFixed(2):""}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:t.Igst||t.IGSTTax?parseFloat(String(t.Igst||t.IGSTTax)).toFixed(2):""}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:t.Amount?parseFloat(String(t.Amount).replace(/,/g,"")).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2}):""})]},o)})})]})})]}),e.jsxs(p,{sx:{mb:4},children:[e.jsx(p,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2},children:e.jsx(C,{variant:"h6",sx:{fontWeight:600,fontSize:"18px",color:"#1F2937"},children:"Financial Details"})}),e.jsx(p,{sx:{backgroundColor:"white",borderRadius:"8px",overflow:"hidden"},children:e.jsxs("table",{style:{width:"100%",border:"1px solid rgb(229, 231, 235)",borderCollapse:"collapse",backgroundColor:"#fff"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{border:"1px solid rgb(229, 231, 235)",padding:"12px 16px",fontWeight:600,fontSize:"14px",backgroundColor:"#fff",textAlign:"center"},children:"BASIC AMOUNT"}),e.jsx("th",{style:{border:"1px solid rgb(229, 231, 235)",padding:"12px 16px",fontWeight:600,fontSize:"14px",backgroundColor:"#fff",textAlign:"center"},children:"FRIEGHT"}),e.jsx("th",{style:{border:"1px solid rgb(229, 231, 235)",padding:"12px 16px",fontWeight:600,fontSize:"14px",backgroundColor:"#fff",textAlign:"center"},children:"TAXES"}),e.jsx("th",{style:{border:"1px solid rgb(229, 231, 235)",padding:"12px 16px",fontWeight:600,fontSize:"14px",backgroundColor:"#fff",textAlign:"center"},children:"GRANDTOTAL"})]})}),e.jsx("tbody",{children:(()=>{const t=x.reduce((s,d)=>s+(parseFloat(d.Amount)||0),0),o=x.reduce((s,d)=>{const g=parseFloat(d.Quantity)||0,N=parseFloat(d.Cost||d.NetUnitCost)||0,c=parseFloat(d.Sgst||d.SGSTTax)||0,S=parseFloat(d.Cgst||d.CGSTTax)||0,me=parseFloat(d.Igst||d.IGSTTax)||0,ye=g*N*(c+S+me)/100;return s+ye},0),n=parseFloat(r==null?void 0:r.Frieght)||0,a=t+n+o;return e.jsxs("tr",{children:[e.jsx("td",{style:{border:"1px solid rgb(229, 231, 235)",padding:"12px 16px",fontSize:"14px",backgroundColor:"#fff",textAlign:"center"},children:t.toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})}),e.jsx("td",{style:{border:"1px solid rgb(229, 231, 235)",padding:"12px 16px",fontSize:"14px",backgroundColor:"#fff",textAlign:"center"},children:n.toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})}),e.jsx("td",{style:{border:"1px solid rgb(229, 231, 235)",padding:"12px 16px",fontSize:"14px",backgroundColor:"#fff",textAlign:"center"},children:o.toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})}),e.jsx("td",{style:{border:"1px solid rgb(229, 231, 235)",padding:"12px 16px",fontSize:"14px",fontWeight:600,backgroundColor:"#fff",textAlign:"center"},children:a.toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})})]})})()})]})})]})]})}),e.jsx(B,{open:F,onClose:he,title:"Edit Work Order Details",width:"82%",containerStyle:{padding:"20px"},children:e.jsx(ve,{selectedRow:m,columns:y.formFields,identifier:y.identifier,apiIdentifier:y.apiIdentifier,closable:!0,activeRecordId:m?m.WorkOrderId:"NEW_RECORD",config:y,enhanceFormConfig:y.enhanceFormConfig,resetProps:()=>{},mode:"edit",toggle:()=>{setTimeout(()=>{z(!1),h();try{w&&w.loadData({currentPage:1,limit:50}),l&&l.loadData({currentPage:1,limit:50})}catch{}},800)},onReload:h})}),e.jsx(B,{open:ee,onClose:fe,title:"Edit Scope Of Work Order",containerStyle:{padding:"0 32px"},children:e.jsxs("div",{style:{marginTop:"50px"},children:[e.jsx("div",{style:{marginBottom:"16px",display:"flex",justifyContent:"flex-end"},children:e.jsx(f,{variant:"contained",onClick:()=>{j(null),k(!0)},sx:{backgroundColor:"#6941C6","&:hover":{backgroundColor:"#6941C6"},textTransform:"none"},children:"New"})}),!x||x.length===0?e.jsx("div",{style:{padding:"40px",textAlign:"center",color:"#666",border:"1px solid #e5e7eb",borderRadius:"8px"},children:'No scope items found. Click "New" to add items.'}):e.jsx("div",{style:{overflowX:"auto",border:"1px solid #f0f0f0",borderRadius:"8px"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"#f9fafb"},children:[e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left",minWidth:"60px"},children:"S.no"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left",minWidth:"120px"},children:"Item order"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left",minWidth:"200px"},children:"Description"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left",minWidth:"130px"},children:"Delivery date"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left",minWidth:"100px"},children:"Quantity"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left",minWidth:"100px"},children:"UOM"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left",minWidth:"130px"},children:"Net unit cost"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left",minWidth:"80px"},children:"sgst"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left",minWidth:"80px"},children:"cgst"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left",minWidth:"80px"},children:"igst"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"left",minWidth:"150px"},children:"Amount (without taxes)"}),e.jsx("th",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",fontWeight:600,textAlign:"center",minWidth:"100px"},children:"Action"})]})}),e.jsx("tbody",{children:Array.isArray(x)&&x.map((t,o)=>{let n=t.DeliveryDate||"";if(n){const a=new Date(n);if(!isNaN(a.getTime())){const s=String(a.getDate()).padStart(2,"0"),d=String(a.getMonth()+1).padStart(2,"0"),g=a.getFullYear();n=`${s}-${d}-${g}`}}return e.jsxs("tr",{children:[e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:o+1}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:t.ItemOrder}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:t.ItemDescription||t.Description}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:n}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:t.Quantity}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:t.UOM||""}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:t.Cost||t.NetUnitCost}),e.jsxs("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:[t.Sgst||t.SGSTTax,"%"]}),e.jsxs("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:[t.Cgst||t.CGSTTax,"%"]}),e.jsxs("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:[t.Igst||t.IGSTTax,"%"]}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px"},children:t.Amount}),e.jsx("td",{style:{border:"1px solid #e5e7eb",padding:"12px",fontSize:"12px",textAlign:"center"},children:e.jsx(Fe,{menu:{items:[{key:"edit",label:"Edit",onClick:()=>{const a={WorkOrderScopeId:t.WorkOrderScopeId,ItemOrder:t.ItemOrder,Description:t.ItemDescription||t.Description,DeliveryDate:t.DeliveryDate,Quantity:t.Quantity,NetUnitCost:t.Cost||t.NetUnitCost,SGSTTax:t.Sgst||t.SGSTTax,CGSTTax:t.Cgst||t.CGSTTax,IGSTTax:t.Igst||t.IGSTTax,Amount:t.Amount,index:o};j(a),k(!0)}},{key:"delete",label:"Delete",onClick:()=>{D(t),T(!0)}}]},trigger:["click"],children:e.jsx(ze,{type:"text",icon:e.jsx(Pe,{style:{fontSize:"20px",fontWeight:"bold",color:"#374151"}}),style:{padding:"4px 8px",color:"#374151"}})})})]},o)})})]})})]})}),e.jsx(B,{open:oe,onClose:J,title:"Edit Financial Details",containerStyle:{padding:"0 32px"},children:r.WorkOrderId&&e.jsx("div",{style:{marginTop:"20px"},children:Ne.createChildGrid("10820","WorkOrder",r,{hidePaging:!0,pagination:!1,readOnly:!1,isReadOnly:!1,hideToolbar:!1,showActions:!0,uniqueIdentifier:`10820-drawer-${P}`,toggle:t=>{t&&J(!0)}})},`financial-drawer-${P}`)}),e.jsx(Oe,{visible:Y,onClose:()=>{k(!1),j(null)},onSave:async t=>{try{const o={WorkOrderId:u,ItemOrder:t.ItemOrder,ItemDescription:t.Description,DeliveryDate:t.DeliveryDate,Quantity:t.Quantity,Cost:t.NetUnitCost,Sgst:t.SGSTTax,Cgst:t.CGSTTax,Igst:t.IGSTTax,Amount:t.Amount};b&&b.WorkOrderScopeId?(o.WorkOrderScopeId=b.WorkOrderScopeId,o.action="update"):o.action="insert",console.log("Saving scope item with payload:",o),await A.triggerMultiPartPost("10819",o),k(!1),j(null),$(b&&b.WorkOrderScopeId?"Scope item updated successfully!":"Scope item added successfully!"),O(!0)}catch(o){console.error("Error saving scope item:",o),alert("Failed to save scope item. Please try again.")}},editingRecord:b}),e.jsx(R,{open:se,onClose:()=>{T(!1),D(null)},title:"Are you sure you want to delete this item?",iconType:"warning",showCancelButton:!0,confirmButtonText:"Yes, Delete",onConfirm:async()=>{try{const t={WorkOrderScopeId:de.WorkOrderScopeId,action:"delete"};console.log("Deleting scope item with payload:",t);const o=await A.triggerPost("10819",t);console.log("Delete response:",o),T(!1),D(null),$("Scope item deleted successfully!"),O(!0)}catch(t){console.error("Error deleting scope item:",t),console.error("Error details:",t.response||t.message),alert("Failed to delete scope item. Please try again."),T(!1),D(null)}}}),e.jsx(R,{open:ie,onClose:()=>{O(!1),loadScopeData()},title:ae,iconType:"success"}),e.jsx(R,{open:ne,onClose:()=>{L(!1),h()},title:"Work Order Closed Successfully!",message:"The Work Order has been approved and marked as closed. The team has been notified.",buttonText:"Dismiss",iconType:"success"})]})]}):e.jsxs(p,{p:3,children:[e.jsx(f,{startIcon:e.jsx(G,{}),onClick:E,sx:{mb:2},children:"Back"}),e.jsx(C,{children:"No data found for this Work Order."})]})};export{Ke as default};
