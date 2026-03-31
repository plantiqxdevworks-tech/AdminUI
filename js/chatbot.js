/* =============================================
   PlantIQX Chatbot Widget — v1.0
   ============================================= */

(function () {
  'use strict';

  /* ============================================================
     KNOWLEDGE BASE
     Each entry has: keywords (array), response (HTML string)
  ============================================================ */
  const KB = [
    // --- GREETINGS ---
    {
      keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'greetings', 'sup', 'start'],
      response: `Hello! 👋 Welcome to <strong>PlantIQX</strong>!<br><br>I'm IQX, your virtual assistant. I can answer questions about our platform, products, technology, and more.<br><br>What would you like to know today?`,
      quickReplies: ['What is PlantIQX?', 'Our Products', 'Contact Us', 'Request a Demo']
    },

    // --- WHAT IS PLANTIQX ---
    {
      keywords: ['what is plantiqx', 'what is plant iqx', 'about plantiqx', 'tell me about', 'who are you', 'what do you do', 'what does plantiqx do', 'overview', 'introduction'],
      response: `<strong>PlantIQX</strong> is an <strong>Intelligent Industrial Operations Platform</strong> built on the vision of <em>"Where Minds and Machines Merge."</em><br><br>We help industries <strong>monitor, analyze, and centralize</strong> their production with data-driven precision. Our platform integrates seamlessly with existing equipment and combines:<ul><li>Real-time IoT monitoring</li><li>AI-powered predictive analytics</li><li>Edge computing & video analytics</li><li>Cloud-based dashboards</li></ul>Our mission is to help industries move from traditional control to <strong>intelligent command</strong>.`,
      quickReplies: ['Our Products', 'Our Technology', 'Our Impact', 'Contact Us']
    },

    // --- MISSION & VISION ---
    {
      keywords: ['mission', 'vision', 'goal', 'purpose', 'objective', 'aim'],
      response: `<strong>🎯 Mission</strong><br>To help industries monitor, analyze, and centralize their production with data-driven precision — enabling smarter, faster, and more informed decisions.<br><br><strong>🔭 Vision</strong><br>We envision a world where every factory <em>thinks, learns, and evolves</em>. A world where industries are not just automated but intelligent — where data speaks, machines collaborate, and decisions are made in real time.<br><br><em>"To merge human insight with machine intelligence and build the future of smart industries."</em>`,
      quickReplies: ['Our Values', 'Our Products', 'Our Impact']
    },

    // --- PRODUCTS (GENERAL) ---
    {
      keywords: ['product', 'products', 'solution', 'solutions', 'module', 'modules', 'offering', 'features', 'capabilities', 'what can you do'],
      response: `PlantIQX offers a comprehensive suite across three categories:<br><br><strong>📦 Products</strong><ul><li>Asset Management</li><li>Security & Access Control</li><li>Surveillance (AI-powered)</li><li>Utilities Monitoring</li></ul><strong>⚙️ Automation</strong><ul><li>PLC – Programming Logic Control</li><li>SCADA – Supervisory Control & Data Acquisition</li><li>VFD – Variable Frequency Drive</li><li>HMI – Human Machine Interface</li></ul><strong>💡 Solutions</strong><ul><li>Predictive Maintenance</li><li>Condition Monitoring</li><li>Vision AI</li><li>Energy Management System</li></ul>`,
      quickReplies: ['Asset Management', 'Predictive Maintenance', 'SCADA', 'Vision AI']
    },

    // --- ASSET MANAGEMENT ---
    {
      keywords: ['asset management', 'asset tracking', 'asset monitor'],
      response: `<strong>📊 Asset Management</strong><br><br>Track, monitor, and optimize every asset in your facility with real-time insights.<br><ul><li>Real-time asset tracking & performance monitoring</li><li>Predictive maintenance scheduling</li><li>Asset lifecycle management</li><li>Downtime alerts & analytics</li></ul>Gain complete visibility over downtime, technical events, and component-level details.`,
      quickReplies: ['Predictive Maintenance', 'Our Products', 'Request a Demo']
    },

    // --- PREDICTIVE MAINTENANCE ---
    {
      keywords: ['predictive maintenance', 'predict', 'breakdown', 'downtime', 'failure', 'equipment failure', 'preventive', 'maintenance'],
      response: `<strong>🔧 Predictive Maintenance</strong><br><br>Anticipate equipment failures <em>before they happen</em> using AI-driven analytics.<ul><li>Machine learning-based failure predictions</li><li>Failure pattern recognition</li><li>Automated maintenance scheduling</li><li>ROI optimization through reduced downtime</li></ul><strong>Impact:</strong> Our clients achieve an average <strong>35% reduction in unplanned downtime</strong>.`,
      quickReplies: ['Condition Monitoring', 'Our Impact', 'Request a Demo']
    },

    // --- CONDITION MONITORING ---
    {
      keywords: ['condition monitoring', 'vibration', 'temperature', 'equipment health', 'health monitoring'],
      response: `<strong>❤️ Condition Monitoring</strong><br><br>Continuous monitoring of equipment health through:<ul><li>Vibration & temperature analysis</li><li>Real-time health monitoring</li><li>Early fault detection</li><li>Performance trending over time</li></ul>This helps catch issues early — before they escalate into costly breakdowns.`,
      quickReplies: ['Predictive Maintenance', 'Asset Management', 'Request a Demo']
    },

    // --- SCADA ---
    {
      keywords: ['scada', 'supervisory control', 'data acquisition'],
      response: `<strong>🖥️ SCADA — Supervisory Control and Data Acquisition</strong><br><br>Comprehensive supervisory control for managing industrial processes at scale:<ul><li>Centralized monitoring & control</li><li>Real-time data acquisition</li><li>Historical data logging</li><li>Alarm management & reporting</li></ul>`,
      quickReplies: ['PLC', 'HMI', 'Our Products']
    },

    // --- PLC ---
    {
      keywords: ['plc', 'programmable logic', 'programming logic control', 'controller'],
      response: `<strong>⚡ PLC — Programmable Logic Controller</strong><br><br>Robust programmable logic controllers for reliable industrial automation:<ul><li>Real-time process control</li><li>Flexible programming options</li><li>High reliability & durability</li><li>Seamless integration with other systems</li></ul>`,
      quickReplies: ['SCADA', 'HMI', 'VFD']
    },

    // --- HMI ---
    {
      keywords: ['hmi', 'human machine interface', 'touchscreen', 'operator interface'],
      response: `<strong>👆 HMI — Human Machine Interface</strong><br><br>Intuitive interfaces that bridge operators and industrial systems:<ul><li>User-friendly touchscreen interfaces</li><li>Real-time visualization</li><li>Customizable dashboards</li><li>Remote access capabilities</li></ul>`,
      quickReplies: ['SCADA', 'PLC', 'Our Products']
    },

    // --- VFD ---
    {
      keywords: ['vfd', 'variable frequency drive', 'motor control', 'drive'],
      response: `<strong>🔄 VFD — Variable Frequency Drive</strong><br><br>Precision motor control for energy efficiency and optimal performance:<ul><li>Energy-efficient motor control</li><li>Speed & torque optimization</li><li>Soft start/stop capabilities</li><li>Reduced mechanical stress on equipment</li></ul>`,
      quickReplies: ['PLC', 'SCADA', 'Energy Management']
    },

    // --- VISION AI ---
    {
      keywords: ['vision ai', 'computer vision', 'visual inspection', 'defect detection', 'quality inspection', 'image recognition'],
      response: `<strong>👁️ Vision AI</strong><br><br>Computer vision & AI-powered visual inspection for quality and process control:<ul><li>Automated visual inspection of products/processes</li><li>Defect detection & classification</li><li>Quality assurance automation</li><li>Real-time anomaly detection</li></ul>Replaces manual inspection with fast, accurate, consistent AI analysis.`,
      quickReplies: ['Condition Monitoring', 'Our Solutions', 'Request a Demo']
    },

    // --- ENERGY MANAGEMENT ---
    {
      keywords: ['energy management', 'energy', 'utilities', 'electricity', 'power consumption', 'sustainability', 'green'],
      response: `<strong>🌱 Energy Management System</strong><br><br>Monitor and optimize energy consumption across your entire facility:<ul><li>Real-time energy consumption tracking</li><li>Cost optimization strategies</li><li>Carbon footprint reduction</li><li>Sustainability reporting</li></ul>Also includes <strong>Utilities Monitoring</strong> for electricity, water, gas, and other resources — with anomaly detection and cost analysis.`,
      quickReplies: ['Our Solutions', 'Our Impact', 'Request a Demo']
    },

    // --- SECURITY ---
    {
      keywords: ['security', 'access control', 'rbac', 'authentication', 'encryption', 'data protection', 'compliance'],
      response: `<strong>🔒 Security & Administration</strong><br><br>Enterprise-grade security built into every layer:<ul><li>Role-Based Access Control (RBAC)</li><li>Multi-factor authentication (MFA)</li><li>End-to-end encryption & data protection</li><li>Compliance management & audit trails</li></ul>Your data and operations are protected with industry-leading security standards.`,
      quickReplies: ['Surveillance', 'Our Products', 'Contact Us']
    },

    // --- SURVEILLANCE ---
    {
      keywords: ['surveillance', 'camera', 'cctv', 'video monitoring', 'threat detection'],
      response: `<strong>📹 Surveillance</strong><br><br>Integrated video surveillance with AI-powered analytics:<ul><li>Real-time video monitoring</li><li>AI-powered threat detection</li><li>Incident recording & playback</li><li>Integration with access control systems</li></ul>`,
      quickReplies: ['Security', 'Vision AI', 'Our Products']
    },

    // --- IOT ---
    {
      keywords: ['iot', 'internet of things', 'sensors', 'connected', 'machine to machine', 'm2m', 'integration', 'connect equipment'],
      response: `<strong>🌐 IoT & Machine-to-Machine Integration</strong><br><br>PlantIQX connects every piece of equipment to a single, unified platform:<ul><li>Seamless IoT device integration</li><li>Real-time data streaming from machines</li><li>Machine-to-machine (M2M) communication</li><li>Cross-system analytics and alerts</li></ul>Our platform integrates with your existing equipment — no rip-and-replace required.`,
      quickReplies: ['Edge Computing', 'Asset Management', 'Request a Demo']
    },

    // --- AI / ANALYTICS ---
    {
      keywords: ['ai', 'artificial intelligence', 'analytics', 'data analytics', 'machine learning', 'insights', 'dashboard', 'reporting', 'real-time'],
      response: `<strong>🤖 AI-Powered Insights & Analytics</strong><br><br>PlantIQX turns raw industrial data into clear, actionable intelligence:<ul><li><strong>AI Powered Insights</strong> — pattern recognition, anomaly detection, and predictions</li><li><strong>Advanced Analytics</strong> — deep-dive into production KPIs</li><li><strong>Real-time Dashboards</strong> — 360° view of your operations</li><li><strong>Automated Reporting</strong> — reduce manual reporting by up to 80%</li></ul>Make smarter, faster decisions with data at the core.`,
      quickReplies: ['Predictive Maintenance', 'Our Impact', 'Request a Demo']
    },

    // --- EDGE COMPUTING ---
    {
      keywords: ['edge computing', 'edge', 'video analytics', 'on-premise', 'local processing'],
      response: `<strong>⚡ Edge Computing & Video Analytics</strong><br><br>PlantIQX leverages edge computing to process data closer to the source:<ul><li>Low-latency real-time processing at the machine level</li><li>Video analytics powered by AI at the edge</li><li>Works even in limited-connectivity environments</li><li>Reduced data transfer costs</li></ul>`,
      quickReplies: ['IoT Integration', 'Vision AI', 'Cloud Technology']
    },

    // --- CLOUD ---
    {
      keywords: ['cloud', 'cloud technology', 'saas', 'hosted', 'deployment'],
      response: `<strong>☁️ Cloud Technology</strong><br><br>PlantIQX is built on a secure, scalable cloud infrastructure:<ul><li>Accessible from anywhere — browser or mobile app</li><li>Auto-scaling to match your operations</li><li>Secure data storage and backups</li><li>Regular updates with no downtime</li></ul>We support cloud, on-premise, and hybrid deployment models.`,
      quickReplies: ['Security', 'Mobile Access', 'Request a Demo']
    },

    // --- MOBILE ---
    {
      keywords: ['mobile', 'app', 'ios', 'android', 'phone', 'tablet', 'on the go'],
      response: `<strong>📱 Mobile Access</strong><br><br>Stay connected to your operations from anywhere:<ul><li>Full-featured mobile apps for <strong>iOS and Android</strong></li><li>Access dashboards, alerts, and reports on the go</li><li>Real-time notifications for critical events</li><li>Same powerful platform, optimized for mobile</li></ul>`,
      quickReplies: ['Our Products', 'Cloud Technology', 'Request a Demo']
    },

    // --- IMPACT / STATS ---
    {
      keywords: ['impact', 'results', 'statistics', 'stats', 'numbers', 'roi', 'efficiency', 'performance', 'benefit', 'how much', 'savings'],
      response: `<strong>📈 Real Intelligence. Real Results.</strong><br><br>PlantIQX delivers measurable transformation:<ul><li>🔻 <strong>35%</strong> average reduction in unplanned downtime</li><li>📊 <strong>25–30%</strong> improvement in operational efficiency</li><li>⚡ <strong>50%</strong> faster decision-making through intelligent workflows</li><li>📋 <strong>80%</strong> reduction in manual reporting with unified dashboards</li></ul>`,
      quickReplies: ['Predictive Maintenance', 'Our Products', 'Request a Demo']
    },

    // --- VALUES ---
    {
      keywords: ['values', 'value', 'culture', 'principles', 'what do you believe', 'ethics'],
      response: `<strong>💎 Our Core Values</strong><br><ul><li><strong>Innovation-First</strong> — We don't just follow trends; we create them</li><li><strong>Integrity Always</strong> — Ethical AI, secure data, and full transparency</li><li><strong>Sustainability Matters</strong> — Reducing waste and optimizing energy for a greener future</li><li><strong>Customer Success</strong> — Your success is our success</li><li><strong>Collaboration Over Competition</strong> — We succeed together with clients and partners</li><li><strong>Results-Driven</strong> — Measurable ROI, efficiency gains, and smarter operations</li></ul>`,
      quickReplies: ['Our Vision', 'Our Story', 'Contact Us']
    },

    // --- STORY / HISTORY ---
    {
      keywords: ['story', 'history', 'founded', 'origin', 'how did you start', 'background', 'journey'],
      response: `<strong>📖 Our Story</strong><br><br>PlantIQX was born from a vision to bridge the gap between people and technology in the industrial world.<br><br>We started as a team of <strong>data scientists, engineers, and tech-first thinkers</strong> who saw that most industries were rich in machinery but poor in actionable insights. Machines generated data — but it wasn't being used effectively.<br><br>We built a unified platform combining real-time monitoring, predictive analytics, and automation — empowering teams to make informed decisions faster than ever. Today, PlantIQX powers smarter factories worldwide.`,
      quickReplies: ['Our Values', 'Our Team', 'What is PlantIQX?']
    },

    // --- TEAM ---
    {
      keywords: ['team', 'people', 'employees', 'staff', 'who works', 'engineers', 'founders'],
      response: `<strong>👥 Our Team — Engineers of Intelligence</strong><br><br>Behind every PlantIQX innovation is a team of passionate thinkers, engineers, and data visionaries.<br><br>We come from diverse backgrounds — bringing together expertise in:<ul><li>Industrial automation</li><li>IoT engineering</li><li>Data science & AI-driven analytics</li></ul>We believe in creativity, collaboration, and continuous learning. Together, we're not just building software — we're shaping the future of intelligent industry.`,
      quickReplies: ['Our Story', 'Career Opportunities', 'Contact Us']
    },

    // --- CAREERS ---
    {
      keywords: ['career', 'job', 'jobs', 'hiring', 'work with us', 'join', 'opportunities', 'employment', 'vacancy', 'openings'],
      response: `<strong>🚀 Career Opportunities at PlantIQX</strong><br><br>We're always looking for passionate people to join our team and help shape the future of industrial operations.<br><br>If you're interested in working with us, visit our <a href="career.html">Careers page</a> or reach out directly:<br><br>📧 <strong>info@plantiqx.com</strong><br>📞 <strong>+91 6302288170</strong>`,
      quickReplies: ['Our Team', 'Contact Us', 'What is PlantIQX?']
    },

    // --- CONTACT ---
    {
      keywords: ['contact', 'reach', 'phone', 'email', 'address', 'location', 'office', 'hyderabad', 'india', 'get in touch', 'call'],
      response: `<strong>📬 Contact PlantIQX</strong><br><br><strong>PlantIQX (India)</strong><br>📞 <strong>+91 6302288170</strong><br>📧 <strong>info@plantiqx.com</strong><br>📍 Office No. 812, Fairmount Downtown, Kompally, Hyderabad, Telangana 500100<br><br>Our team will respond within <strong>one business day</strong>. You can also <a href="contact.html">fill out our contact form</a> for a personalized response.`,
      quickReplies: ['Request a Demo', 'What is PlantIQX?', 'Our Products']
    },

    // --- DEMO ---
    {
      keywords: ['demo', 'demonstration', 'trial', 'try', 'see it', 'show me', 'request demo', 'schedule', 'book'],
      response: `<strong>🎯 Request a Demo</strong><br><br>Experience the full power of PlantIQX with a <strong>personalized demonstration</strong>:<ul><li>Witness real-time monitoring and intelligent insights in action</li><li>See how predictive analytics reduces downtime</li><li>Understand how to optimize assets, workflows, and maintenance</li><li>Get guidance tailored to your plant's specific needs</li></ul>👉 <a href="contact.html">Fill out the demo request form</a> or contact us at:<br>📞 <strong>+91 6302288170</strong> | 📧 <strong>info@plantiqx.com</strong>`,
      quickReplies: ['Contact Us', 'Our Products', 'Our Impact']
    },

    // --- PRICING ---
    {
      keywords: ['price', 'pricing', 'cost', 'how much', 'fee', 'subscription', 'plan', 'package', 'quote'],
      response: `For <strong>pricing and custom quotes</strong>, we'd love to understand your specific requirements first.<br><br>PlantIQX solutions are tailored to each organization's scale and needs. Please get in touch with our team:<br><br>📧 <strong>info@plantiqx.com</strong><br>📞 <strong>+91 6302288170</strong><br><br>Or <a href="contact.html">request a demo</a> — our experts will discuss the right package for your operations.`,
      quickReplies: ['Request a Demo', 'Contact Us', 'Our Products']
    },

    // --- INDUSTRIES ---
    {
      keywords: ['industry', 'industries', 'sector', 'manufacturing', 'factory', 'plant', 'who uses', 'customers'],
      response: `<strong>🏭 Industries We Serve</strong><br><br>PlantIQX is designed for any industry that relies on industrial operations and equipment, including:<ul><li>Manufacturing & production facilities</li><li>Process industries (chemical, pharmaceutical)</li><li>Energy & utilities</li><li>Automotive & heavy industries</li><li>Food & beverage processing</li></ul>Our platform is <strong>scalable and adaptable</strong> — it integrates with your existing equipment regardless of industry.`,
      quickReplies: ['Our Products', 'Our Impact', 'Request a Demo']
    },

    // --- TECHNOLOGY STACK ---
    {
      keywords: ['technology', 'tech', 'stack', 'how does it work', 'built on', 'platform'],
      response: `<strong>🛠️ PlantIQX Technology</strong><br><br>Our platform is powered by five core technology pillars:<ul><li>🤖 <strong>AI Powered Insights</strong> — Machine learning and predictive analytics</li><li>🌐 <strong>IoT & Machine-to-Machine</strong> — Connect every asset to the platform</li><li>⚡ <strong>Edge Computing & Video Analytics</strong> — Process data at the source</li><li>📊 <strong>Advanced Analytics</strong> — Deep operational intelligence</li><li>☁️ <strong>Cloud Technology</strong> — Secure, scalable, always available</li></ul>`,
      quickReplies: ['IoT Integration', 'AI & Analytics', 'Cloud Technology']
    },

    // --- NEWS ---
    {
      keywords: ['news', 'blog', 'updates', 'latest', 'announcement', 'press'],
      response: `Stay up to date with the latest PlantIQX news, updates, and insights on our <a href="news.html">News page</a>.<br><br>For official announcements, reach out to us at 📧 <strong>info@plantiqx.com</strong>.`,
      quickReplies: ['Contact Us', 'What is PlantIQX?', 'Our Products']
    },

    // --- THANK YOU / BYE ---
    {
      keywords: ['thank', 'thanks', 'thank you', 'bye', 'goodbye', 'see you', 'that\'s all', 'done', 'great', 'awesome', 'helpful'],
      response: `You're welcome! 😊 It was a pleasure helping you learn about <strong>PlantIQX</strong>.<br><br>If you have more questions or are ready to see the platform in action, don't hesitate to <a href="contact.html">request a demo</a>.<br><br>Have a great day! 🚀`,
      quickReplies: ['Request a Demo', 'Contact Us']
    }
  ];

  // Default fallback response
  const FALLBACK = {
    response: `I'm sorry, I didn't quite catch that. I can help you with questions about:<ul><li>PlantIQX products & modules</li><li>Technology & features</li><li>Company story, values & team</li><li>Contact & demo requests</li></ul>Try asking something like <em>"What products do you offer?"</em> or <em>"How can I contact you?"</em>`,
    quickReplies: ['What is PlantIQX?', 'Our Products', 'Request a Demo', 'Contact Us']
  };

  const DEFAULT_QUICK_REPLIES = ['What is PlantIQX?', 'Our Products', 'Our Impact', 'Contact Us'];

  /* ============================================================
     MATCHING LOGIC
  ============================================================ */
  function findResponse(input) {
    const text = input.toLowerCase().trim();
    let best = null;
    let bestScore = 0;

    for (const entry of KB) {
      for (const kw of entry.keywords) {
        if (text.includes(kw)) {
          const score = kw.length; // prefer longer/more specific keyword matches
          if (score > bestScore) {
            bestScore = score;
            best = entry;
          }
        }
      }
    }
    return best || FALLBACK;
  }

  /* ============================================================
     RENDER WIDGET HTML
  ============================================================ */
  function buildWidget() {
    // Toggle button
    const toggle = document.createElement('button');
    toggle.id = 'piqx-chat-toggle';
    toggle.setAttribute('aria-label', 'Open PlantIQX Chat');
    toggle.innerHTML = `
      <svg class="icon-chat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h3l3 3 3-3h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM7 9h10v2H7zm0 3h7v2H7z"/>
      </svg>
      <svg class="icon-close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
      <span class="notif-dot"></span>
    `;

    // Chat window
    const win = document.createElement('div');
    win.id = 'piqx-chat-window';
    win.setAttribute('role', 'dialog');
    win.setAttribute('aria-label', 'PlantIQX Chat Assistant');
    win.innerHTML = `
      <div id="piqx-chat-header">
        <div class="chat-avatar">
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
        </div>
        <div class="chat-header-info">
          <h4>IQX Assistant</h4>
          <span>Online — PlantIQX</span>
        </div>
        <button class="chat-close-btn" aria-label="Close chat">
          <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </div>
      <div id="piqx-chat-messages" aria-live="polite"></div>
      <div id="piqx-quick-replies"></div>
      <div id="piqx-chat-input-area">
        <input id="piqx-chat-input" type="text" placeholder="Ask me anything…" autocomplete="off" maxlength="200">
        <button id="piqx-chat-send" aria-label="Send message">
          <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </div>
    `;

    document.body.appendChild(toggle);
    document.body.appendChild(win);
    return { toggle, win };
  }

  /* ============================================================
     MESSAGE HELPERS
  ============================================================ */
  const messagesEl = () => document.getElementById('piqx-chat-messages');
  const quickRepliesEl = () => document.getElementById('piqx-quick-replies');

  function scrollToBottom() {
    const el = messagesEl();
    if (el) el.scrollTop = el.scrollHeight;
  }

  function addMessage(html, sender) {
    const el = messagesEl();
    const wrapper = document.createElement('div');
    wrapper.className = `chat-msg ${sender}`;

    if (sender === 'bot') {
      wrapper.innerHTML = `
        <div class="msg-bot-avatar">
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
        </div>
        <div class="msg-bubble">${html}</div>
      `;
    } else {
      wrapper.innerHTML = `<div class="msg-bubble">${escapeHtml(html)}</div>`;
    }

    el.appendChild(wrapper);
    scrollToBottom();
    return wrapper;
  }

  function showTyping() {
    const el = messagesEl();
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-msg bot typing-indicator';
    wrapper.innerHTML = `
      <div class="msg-bot-avatar">
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
      </div>
      <div class="msg-bubble">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    el.appendChild(wrapper);
    scrollToBottom();
    return wrapper;
  }

  function setQuickReplies(replies) {
    const el = quickRepliesEl();
    el.innerHTML = '';
    if (!replies || !replies.length) return;
    replies.forEach(text => {
      const btn = document.createElement('button');
      btn.className = 'quick-reply-btn';
      btn.textContent = text;
      btn.addEventListener('click', () => handleUserInput(text));
      el.appendChild(btn);
    });
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ============================================================
     CORE LOGIC
  ============================================================ */
  function handleUserInput(text) {
    if (!text.trim()) return;

    // Clear quick replies immediately
    setQuickReplies([]);

    // Show user message
    addMessage(text, 'user');

    // Show typing indicator
    const typing = showTyping();

    // Simulate response delay (400–800ms)
    const delay = 400 + Math.random() * 400;
    setTimeout(() => {
      typing.remove();
      const { response, quickReplies } = findResponse(text);
      addMessage(response, 'bot');
      setQuickReplies(quickReplies || DEFAULT_QUICK_REPLIES);
    }, delay);
  }

  /* ============================================================
     INIT
  ============================================================ */
  function init() {
    const { toggle, win } = buildWidget();
    const input = document.getElementById('piqx-chat-input');
    const sendBtn = document.getElementById('piqx-chat-send');
    const closeBtn = win.querySelector('.chat-close-btn');
    let isOpen = false;

    // Remove notification dot after first open
    function openChat() {
      isOpen = true;
      toggle.classList.add('open');
      win.classList.add('visible');
      const dot = toggle.querySelector('.notif-dot');
      if (dot) dot.remove();
      input.focus();
    }

    function closeChat() {
      isOpen = false;
      toggle.classList.remove('open');
      win.classList.remove('visible');
    }

    toggle.addEventListener('click', () => {
      if (isOpen) closeChat(); else openChat();
    });
    closeBtn.addEventListener('click', closeChat);

    // Send on button click
    sendBtn.addEventListener('click', () => {
      const val = input.value.trim();
      if (val) { handleUserInput(val); input.value = ''; }
    });

    // Send on Enter
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = input.value.trim();
        if (val) { handleUserInput(val); input.value = ''; }
      }
    });

    // Greeting message on load (after short delay)
    setTimeout(() => {
      const greet = findResponse('hello');
      addMessage(greet.response, 'bot');
      setQuickReplies(greet.quickReplies || DEFAULT_QUICK_REPLIES);
    }, 600);
  }

  // Run after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
