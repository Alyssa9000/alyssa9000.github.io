const translations = {
  zh: {
    'nav.home': '首页',
    'nav.aiSkills': 'AI 技能',
    'nav.experience': '工作经历',
    'nav.education': '教育与资格',
    'nav.contact': '联系',

    'hero.eyebrow': 'AI 技术售前 & Builder',
    'hero.name': '佟昕阳 Alyssa',
    'hero.subtitle': '连接业务问题与 AI 解决方案。',
    'hero.tag1': '中英双语 (CN / EN)',
    'hero.tag2': 'LLM · Agent',
    'hero.tag3': 'AI-Native 工作流',
    'hero.btn.cn': '下载中文简历',
    'hero.btn.en': 'Download English CV',
    'hero.card.title': '我的工作方式',
    'hero.card.heading': '',
    'hero.trait1.kicker': '思考',
    'hero.trait1.body':
      '把复杂的技术系统转化为清晰的业务逻辑',
    'hero.trait2.kicker': '沟通',
    'hero.trait2.body':
      '同时面向管理层与技术团队清晰表达方案',
    'hero.trait3.kicker': '学习',
    'hero.trait3.body':
      '善于使用 AI 工具快速验证想法并做出原型',
    'hero.trait4.kicker': 'AI 思维',
    'hero.trait4.body':
      '与 AI 协作重构工作流程并提升执行效率',


    'aiSkills.eyebrow': 'Capabilities',
    'aiSkills.title': 'AI 技能',
    'aiSkills.desc':
      '在真实企业环境中实践 LLM Orchestration、Agent 架构与 Vibe Coding，将复杂技术路径转化为可落地的解决方案。',

    'aiSkills.card1.title': 'Vibe Coding & 独立开发',
    'aiSkills.card1.body':
      '以 Cursor、Antigravity 等 AI-native IDE 为主工作界面，以自然语言驱动从 0 到 1 的工具开发。',
    'aiSkills.card1.point1':
      'Clipoint：构建 AI 驱动的字幕结构化流水线，将 YouTube 视频一键转为分层英语学习笔记，4 小时完成 0→可用版本。',
    'aiSkills.card1.point2':
      'Hover：面向知识管理的查词插件，集成多源词典与真人发音，实现知识库内的沉浸式阅读体验。',

    'aiSkills.card2.title': 'Agent 架构与 Orchestration',
    'aiSkills.card2.body':
      '基于 OpenClaw 框架搭建自主智能体，设计可解释的任务拆解与技能编排链路，让 Agent 真正「可控」。',
    'aiSkills.card2.point1':
      '通过定义 SOUL.md / USER.md 协议实现 Alignment，保证 Agent 对角色、边界与目标的统一理解。',
    'aiSkills.card2.point2':
      '设计多层级任务拆解与工具路由策略，支撑从方案撰写到演示材料生成的端到端自动化。',

    'aiSkills.card3.title': 'Prompt Engineering & Tool Calling',
    'aiSkills.card3.body':
      '在生产环境中迭代 System Prompt 与 Tool Schema，以稳定性和可控性为目标优化模型表现。',
    'aiSkills.card3.point1':
      '精通 Few-shot / Zero-shot 诱导与指令约束，针对幻觉问题建立可观测、可回溯的纠偏机制。',
    'aiSkills.card3.point2':
      '熟练封装自定义 Skills，通过 Function Calling 将 LLM 与业务逻辑解耦，支持高并发场景下的安全调用。',

    'aiSkills.viewGallery': '查看完整作品集（GitHub Pages）',

    'projects.eyebrow': 'Portfolio',
    'projects.title': '作品与实践',
    'projects.desc':
      '从真实需求出发，以交付速度和体验质量为目标，用 AI 驱动的工作流快速验证与迭代产品形态。',

    'projects.clipoint.title': 'Clipoint · YouTube 英语学习助手',
    'projects.clipoint.body':
      '设计并实现完整的字幕处理链路：抓取字幕 → 语义分段 → 分层结构化 → 输出为可直接导入知识库的学习笔记。',
    'projects.clipoint.meta':
      '从需求明确到可用版本落地仅用 4 小时，验证 AI-native 开发在「灵感→产品」路径上的效率上限。',

    'projects.hover.title': 'Hover · Obsidian AI 查词插件',
    'projects.hover.body':
      '在 Obsidian 中实现「划词即查」体验，集成多源词典结果与真人发音，针对长文阅读和专业文档场景优化交互。',
    'projects.hover.meta':
      '以插件形态嵌入现有知识库工作流，提升阅读-记忆-应用的闭环效率。',

    'projects.viewGallery': '查看完整作品集（GitHub Pages）',

    'experience.eyebrow': 'Experience',
    'experience.title': '工作经历',
    'experience.desc':
      '覆盖 AI 科技服务商、数据智能与供应商管理等多个领域，在售前、方案与交付角色中打通「产品 x 数据 x AI」。',

    'experience.item1.period': '2025.07 – 2025.10',
    'experience.item1.location': '北京 · 百融云创',
    'experience.item1.title': '产品售前经理',
    'experience.item1.company': '百融云创 · 金融信贷风控领域 AI 科技服务商',
    'experience.item1.point1':
      '独立承接全产品线推广材料建设，输出 20+ 产品说明文档 / PPT / 海报，为全国销售团队建立统一话术与素材底座。',
    'experience.item1.point2':
      '主导制作的新产品 PPT 成为全国销售团队标准宣讲素材，在多区域银行客户推广中持续沿用。',
    'experience.item1.point3':
      '搭建并维护产品知识库，整合多源资料，显著缩短销售团队的信息检索与培训成本。',

    'experience.item2.period': '2024.07 – 2025.06',
    'experience.item2.location': '北京 · 友谱数据',
    'experience.item2.title': '售前工程师',
    'experience.item2.company': '友谱数据 · 招采风控与供应商管理解决方案提供商',
    'experience.item2.point1':
      '主导并独立完成首版《供应商风险管理解决方案》（94 页），以模块化结构支撑不同客户的组合交付，填补公司方案空白。',
    'experience.item2.point2':
      '将 RAG 知识库与 Agent 工作流能力融入采购场景，使复杂 AI 技术路径具备高可交付性与可演示性。',
    'experience.item2.point3':
      '深度参与招商局、中广核等央国企客户拜访，对接部长/参谋级决策人，沉淀典型案例库，完善售前资产体系。',

    'experience.item3.period': '2023.07 – 2025.03',
    'experience.item3.location': '北京 · 神策数据',
    'experience.item3.title': '大数据应用顾问',
    'experience.item3.company': '神策数据 · 用户行为分析与增长营销平台',
    'experience.item3.point1':
      '参与公司首款 AI 产品孵化（自动化埋点 & 指标体系 Agent），协助 Prompt 调优与内部推广，完成中英双语售前方案。',
    'experience.item3.point2':
      '安克 CDP 标杆项目：负责公司级标签体系建设，交付约 70 个标签并设计全生命周期管理流程，协同 5 部门完成 50+ 标签 UAT，支撑系统提前 4 天上线。',
    'experience.item3.point3':
      '独立负责多家客户从需求到交付全流程，为零一万物、故宫博物院、新华三等搭建数据指标与埋点方案，配置 100+ 行为模型。',
    'experience.item3.point4':
      '以全英文向新加坡客户进行产品 Demo 演示，完整呈现产品价值与使用路径。',

    'education.eyebrow': 'Education',
    'education.title': '教育与资格',

    'education.anu.title': '澳大利亚国立大学 · 金融学硕士（金融管理）',
    'education.anu.degree': 'College of Business and Economics · M.S. in Finance',
    'education.anu.period': '2023.07 – 2024.07 · Canberra, Australia',

    'education.bfsu.title': '北京外国语大学 · 金融学本科',
    'education.bfsu.degree': '国际商学院 · B.Econ. in Finance',
    'education.bfsu.period': '2019.09 – 2023.06 · Beijing, China',

    'education.cert.title': '专业资格',
    'education.cert.body': 'ACCA 高级商业会计（Advanced Business Accounting）',

    'education.lang.title': '语言能力',
    'education.lang.body': '中文（母语） · 英语（TEM-8，雅思 7.5）',

    'contact.eyebrow': 'Contact',
    'contact.title': '联系我',
    'contact.desc':
      '欢迎就 AI 产品、售前方案、数据智能项目或 Agent 工作流实践交流合作。',
    'contact.phoneLabel': '电话',
    'contact.emailLabel': '邮箱',
    'contact.cityLabel': '所在城市',
    'contact.cityValue': '北京',
    'contact.statusLabel': '当前状态',
    'contact.statusValue': '离职，随时到岗',
    'contact.wechatLabel': '微信 · 扫码添加',

    'footer.copy': '© 2026 佟昕阳 Alyssa. All rights reserved.',
    'footer.note': '本站以 AI-native coding 工作流（Cursor + LLM Agents）构建。',
  },

  en: {
    'nav.home': 'Home',
    'nav.aiSkills': 'AI Skills',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'AI Pre-Sales & Builder',
    'hero.name': 'Xinyang Tong · Alyssa',
    'hero.subtitle':
      'Explain complex systems — and build them with AI when needed.',
    'hero.tag1': 'Bilingual (CN / EN)',
    'hero.tag2': 'LLMs · Agents',
    'hero.tag3': 'AI-Native Workflows',
    'hero.btn.cn': 'Download CN CV',
    'hero.btn.en': 'Download EN CV',
    'hero.card.title': 'How I Work',
    'hero.card.heading': '',
    'hero.trait1.kicker': 'Thinking',
    'hero.trait1.body':
      'Translate complex systems into clear business logic',
    'hero.trait2.kicker': 'Communication',
    'hero.trait2.body':
      'Comfortable presenting to both executives and technical teams',
    'hero.trait3.kicker': 'Learning',
    'hero.trait3.body':
      'Rapidly prototype ideas using AI-native tools',
    'hero.trait4.kicker': 'AI Mindset',
    'hero.trait4.body':
      'Use AI as a development partner to reshape workflows',

    'aiSkills.eyebrow': 'Capabilities',
    'aiSkills.title': 'AI Skills',
    'aiSkills.desc':
      'Hands-on experience with LLM orchestration, Agent architecture and AI-native development, applied to real enterprise use cases.',

    'aiSkills.card1.title': 'Vibe Coding & Independent Dev',
    'aiSkills.card1.body':
      'Build end-to-end tools with AI-native IDEs such as Cursor and Antigravity, driving the full flow via natural language.',
    'aiSkills.card1.point1':
      'Clipoint: subtitle processing pipeline that turns YouTube videos into structured English learning notes, completed 0→MVP in 4 hours.',
    'aiSkills.card1.point2':
      'Hover: Obsidian vocabulary plugin with multi-source dictionaries and native audio, optimized for immersive reading in knowledge bases.',

    'aiSkills.card2.title': 'Agent Architecture & Orchestration',
    'aiSkills.card2.body':
      'Design controllable autonomous agents on top of OpenClaw, with explainable task decomposition and skill routing.',
    'aiSkills.card2.point1':
      'Define SOUL.md / USER.md protocols to enforce alignment on role, boundaries and targets.',
    'aiSkills.card2.point2':
      'Implement multi-level task graphs and tool routing strategies to support end-to-end automation from proposals to demo assets.',

    'aiSkills.card3.title': 'Prompt Engineering & Tool Calling',
    'aiSkills.card3.body':
      'Iterate on System Prompts and tool schemas with a focus on stability, safety and observability in production-like environments.',
    'aiSkills.card3.point1':
      'Leverage few-shot / zero-shot prompting and constraint-based instructions to reduce hallucinations with traceable correction loops.',
    'aiSkills.card3.point2':
      'Wrap custom skills behind Function Calling interfaces to decouple LLMs from business logic while remaining scalable under high concurrency.',

    'aiSkills.viewGallery': 'View full gallery (GitHub Pages)',

    'projects.eyebrow': 'Portfolio',
    'projects.title': 'Selected Projects',
    'projects.desc':
      'Real-world projects built from concrete needs, using AI-driven workflows to shorten the path from idea to product.',

    'projects.clipoint.title': 'Clipoint · YouTube Learning Assistant',
    'projects.clipoint.body':
      'End-to-end pipeline from subtitle ingestion to semantic chunking, hierarchical structuring and exportable study notes.',
    'projects.clipoint.meta':
      'Delivered from clarified requirement to working MVP within 4 hours, showcasing the upper bound of AI-native dev velocity.',

    'projects.hover.title': 'Hover · Obsidian Vocabulary Plugin',
    'projects.hover.body':
      'Hover-to-query experience inside Obsidian, aggregating multi-source dictionary results and native audio for long-form reading.',
    'projects.hover.meta':
      'Integrates as a lightweight plugin into existing knowledge workflows, reinforcing the read–remember–apply loop.',

    'projects.viewGallery': 'View full gallery (GitHub Pages)',

    'experience.eyebrow': 'Experience',
    'experience.title': 'Work Experience',
    'experience.desc':
      'Experience across AI fintech, data intelligence and supplier management, connecting product, data and AI in pre-sales and delivery roles.',

    'experience.item1.period': 'Jul 2025 – Oct 2025',
    'experience.item1.location': 'Beijing · Bairong Inc.',
    'experience.item1.title': 'Pre-sales Product Manager',
    'experience.item1.company':
      'Bairong Inc · AI fintech provider for credit risk management',
    'experience.item1.point1':
      'Owned full-line product narrative assets, producing 20+ whitepapers, decks and one-pagers as the baseline for national sales teams.',
    'experience.item1.point2':
      'Authored the flagship product deck that became the standardized pitch across regions for banking clients.',
    'experience.item1.point3':
      'Consolidated scattered materials into a structured knowledge hub, significantly reducing onboarding and enablement time.',

    'experience.item2.period': 'Jul 2024 – Jun 2025',
    'experience.item2.location': 'Beijing · Youpu Data',
    'experience.item2.title': 'Pre-sales Engineer',
    'experience.item2.company':
      'Youpu Data · Supplier risk & procurement governance solutions',
    'experience.item2.point1':
      'Designed and delivered the first 94-page Supplier Risk Management solution with modular components adaptable to client needs.',
    'experience.item2.point2':
      'Embedded RAG knowledge base and Agent workflows into procurement scenarios to make complex AI stacks demonstrable and deliverable.',
    'experience.item2.point3':
      'Supported visits with central SOEs such as China Merchants Group and CGN, engaging director-level stakeholders and building a reusable case library.',

    'experience.item3.period': 'Jul 2023 – Mar 2025',
    'experience.item3.location': 'Beijing · Sensors Data',
    'experience.item3.title': 'Big Data Application Consultant',
    'experience.item3.company':
      'Sensors Data · CDP & growth analytics platform provider',
    'experience.item3.point1':
      'Contributed to incubation of the first AI product (auto-tracking & metrics Agent), and produced a bilingual pre-sales deck and demo.',
    'experience.item3.point2':
      'For the Anker CDP flagship project, led tag system design with ~70 tags and lifecycle processes, coordinating 5 teams for 50+ UAT cases and an ahead-of-schedule go-live.',
    'experience.item3.point3':
      'Independently managed end-to-end delivery for multiple clients including 01.AI, the Palace Museum and H3C, configuring 100+ behavior analysis models.',
    'experience.item3.point4':
      'Delivered a full-English product demo for a Singapore client, clearly articulating product value and usage flows.',

    'education.eyebrow': 'Education',
    'education.title': 'Education & Certifications',

    'education.anu.title': 'Australian National University',
    'education.anu.degree':
      'M.S. in Finance (Financial Management), College of Business and Economics',
    'education.anu.period': 'Jul 2023 – Jul 2024 · Canberra, Australia',

    'education.bfsu.title': 'Beijing Foreign Studies University',
    'education.bfsu.degree':
      'B.Econ. in Finance, International Business School',
    'education.bfsu.period': 'Sep 2019 – Jun 2023 · Beijing, China',

    'education.cert.title': 'Certifications',
    'education.cert.body':
      'ACCA Advanced Business Accounting (Advanced level certification).',

    'education.lang.title': 'Languages',
    'education.lang.body': 'Chinese (native) · English (TEM-8, IELTS 7.5)',

    'contact.eyebrow': 'Contact',
    'contact.title': 'Get in touch',
    'contact.desc':
      'Open to AI product, pre-sales, data intelligence and Agent workflow opportunities.',
    'contact.phoneLabel': 'Phone',
    'contact.emailLabel': 'Email',
    'contact.cityLabel': 'Location',
    'contact.cityValue': 'Beijing, China',
    'contact.statusLabel': 'Status',
    'contact.statusValue': 'Available immediately',
    'contact.wechatLabel': 'WeChat · scan to add',

    'footer.copy': '© 2026 Xinyang Tong (Alyssa). All rights reserved.',
    'footer.note':
      'Built with AI-native coding workflows (Cursor + LLM agents).',
  },
};

function applyTranslations(lang) {
  const dict = translations[lang] || translations.zh;
  const elements = document.querySelectorAll('[data-i18n-key]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n-key');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // update html lang attribute
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh';
}

function initLanguage() {
  const saved =
    typeof window !== 'undefined' && window.localStorage
      ? window.localStorage.getItem('alyssa-lang')
      : null;
  const initial = saved === 'en' ? 'en' : 'zh';
  applyTranslations(initial);
  updateLangButtons(initial);
}

function updateLangButtons(lang) {
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach((btn) => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();

  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyTranslations(lang);
      updateLangButtons(lang);
      try {
        window.localStorage.setItem('alyssa-lang', lang);
      } catch {
        // ignore
      }
    });
  });

  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
    });

    navList.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navList.classList.remove('open');
      }
    });
  }
});

