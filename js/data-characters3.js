const characters3 = [
  {
    id: 76,
    name: "大丽花",
    type: "火",
    path: "虚无",
    img: "images/大丽花立绘.png",
    stats: {
      attack: Math.round(465.7), // 80级攻击力
      defense: Math.round(654.88), // 80级防御力
      hp: Math.round(1242) // 80级生命值
    },
    desc: "神秘，大胆，激进，求变之举令人瞠目结舌。"+
    "以巡猎之「眼」遍观吉凶，明知天意难违，「戎韬将军」仍旧孤身涉险。"+
    "这一支下下签，如何能够改运换天？",
    skills: [
      { name: "普攻 - 雀翎鸣镝，过招有喜", 
        levelRange:[1,10],
        growth:{
            mainDamage:[45,126],
            adjacentDamage:[15,42]
        },
        desc: "对指定敌方单体造成等同于爻光{mainDamage}%"+
        "攻击力的物理属性伤害，同时对其相邻目标造成等同于爻光{adjacentDamage}%"+
        "攻击力的物理属性伤害。普攻恢复的能量提高至30点"
       },
      { name: "战技 - 十方光映，万法皆明", levelRange:[1,15],
        growth: {
            joyBoost: [10, 25]      // 欢愉度提高比例（1级10%，15级30%）
        },
        desc: "展开结界，持续3回合, 自身每回合开始时结界持续回合数减1。结界持续期间, "+
        "我方全体目标欢愉度提高，提高数值等同于爻光欢愉度的{joyBoost}%"+
        "，且爻光施放普攻、战技后获得笑点"
       },
      { name: "终结技 - 霓裳铁羽，六爻皆吉", levelRange:[1,15], 
        growth: {
            penetration: [10, 25]   // 全属性抗性穿透（1级10%，15级25%）
        },
        desc: "获得5个笑点。使阿哈立即获得1个固定计入20笑点的额外回合，该回合不消耗笑点，"+
        "并使我方全体目标全属性抗性穿透提高{penetration}%"+
        ", 持续3回合"
       },
       {name: "天赋 - 屏开千光，遍观自在", levelRange:[1,15],
        growth:{
        joydamage: [10, 25] //欢愉伤害倍率 1级 10，15级25
        },
        desc:"爻光持有【好活当赏】时:<br/>"+"使我方目标施放攻击后触发【大吉大利】效果，"+
        "对随机1个击中的目标额外造成1次{joydamage}%的对应属性的欢愉伤害，本次攻击若消耗战技点，"+
        "则额外触发1次【大吉大利】效果。触发【大吉大利】效果时若攻击者欢愉度低于爻光，则该次"+
        "欢愉伤害使用爻光欢愉度来计算。触发【大吉大利】效果不视为1次攻击。"
       }
    ]
  },
  {
    id: 75,
    name: "昔涟",
    type: "冰",
    path: "记忆",
    img: "images/昔涟立绘.jpg",
    stats: {
      attack: Math.round(465.7), // 80级攻击力
      defense: Math.round(654.88), // 80级防御力
      hp: Math.round(1242) // 80级生命值
    },
    desc: "神秘，大胆，激进，求变之举令人瞠目结舌。"+
    "以巡猎之「眼」遍观吉凶，明知天意难违，「戎韬将军」仍旧孤身涉险。"+
    "这一支下下签，如何能够改运换天？",
    skills: [
      { name: "普攻 - 雀翎鸣镝，过招有喜", 
        levelRange:[1,10],
        growth:{
            mainDamage:[45,126],
            adjacentDamage:[15,42]
        },
        desc: "对指定敌方单体造成等同于爻光{mainDamage}%"+
        "攻击力的物理属性伤害，同时对其相邻目标造成等同于爻光{adjacentDamage}%"+
        "攻击力的物理属性伤害。普攻恢复的能量提高至30点"
       },
      { name: "战技 - 十方光映，万法皆明", levelRange:[1,15],
        growth: {
            joyBoost: [10, 25]      // 欢愉度提高比例（1级10%，15级30%）
        },
        desc: "展开结界，持续3回合, 自身每回合开始时结界持续回合数减1。结界持续期间, "+
        "我方全体目标欢愉度提高，提高数值等同于爻光欢愉度的{joyBoost}%"+
        "，且爻光施放普攻、战技后获得笑点"
       },
      { name: "终结技 - 霓裳铁羽，六爻皆吉", levelRange:[1,15], 
        growth: {
            penetration: [10, 25]   // 全属性抗性穿透（1级10%，15级25%）
        },
        desc: "获得5个笑点。使阿哈立即获得1个固定计入20笑点的额外回合，该回合不消耗笑点，"+
        "并使我方全体目标全属性抗性穿透提高{penetration}%"+
        ", 持续3回合"
       },
       {name: "天赋 - 屏开千光，遍观自在", levelRange:[1,15],
        growth:{
        joydamage: [10, 25] //欢愉伤害倍率 1级 10，15级25
        },
        desc:"爻光持有【好活当赏】时:<br/>"+"使我方目标施放攻击后触发【大吉大利】效果，"+
        "对随机1个击中的目标额外造成1次{joydamage}%的对应属性的欢愉伤害，本次攻击若消耗战技点，"+
        "则额外触发1次【大吉大利】效果。触发【大吉大利】效果时若攻击者欢愉度低于爻光，则该次"+
        "欢愉伤害使用爻光欢愉度来计算。触发【大吉大利】效果不视为1次攻击。"
       }
    ]
  },
  {
    id: 77,
    name: "丹恒·腾荒",
    type: "物理",
    path: "存护",
    img: "images/腾荒立绘.jpg",
    stats: {
      attack: Math.round(465.7), // 80级攻击力
      defense: Math.round(654.88), // 80级防御力
      hp: Math.round(1242) // 80级生命值
    },
    desc: "神秘，大胆，激进，求变之举令人瞠目结舌。"+
    "以巡猎之「眼」遍观吉凶，明知天意难违，「戎韬将军」仍旧孤身涉险。"+
    "这一支下下签，如何能够改运换天？",
    skills: [
      { name: "普攻 - 雀翎鸣镝，过招有喜", 
        levelRange:[1,10],
        growth:{
            mainDamage:[45,126],
            adjacentDamage:[15,42]
        },
        desc: "对指定敌方单体造成等同于爻光{mainDamage}%"+
        "攻击力的物理属性伤害，同时对其相邻目标造成等同于爻光{adjacentDamage}%"+
        "攻击力的物理属性伤害。普攻恢复的能量提高至30点"
       },
      { name: "战技 - 十方光映，万法皆明", levelRange:[1,15],
        growth: {
            joyBoost: [10, 25]      // 欢愉度提高比例（1级10%，15级30%）
        },
        desc: "展开结界，持续3回合, 自身每回合开始时结界持续回合数减1。结界持续期间, "+
        "我方全体目标欢愉度提高，提高数值等同于爻光欢愉度的{joyBoost}%"+
        "，且爻光施放普攻、战技后获得笑点"
       },
      { name: "终结技 - 霓裳铁羽，六爻皆吉", levelRange:[1,15], 
        growth: {
            penetration: [10, 25]   // 全属性抗性穿透（1级10%，15级25%）
        },
        desc: "获得5个笑点。使阿哈立即获得1个固定计入20笑点的额外回合，该回合不消耗笑点，"+
        "并使我方全体目标全属性抗性穿透提高{penetration}%"+
        ", 持续3回合"
       },
       {name: "天赋 - 屏开千光，遍观自在", levelRange:[1,15],
        growth:{
        joydamage: [10, 25] //欢愉伤害倍率 1级 10，15级25
        },
        desc:"爻光持有【好活当赏】时:<br/>"+"使我方目标施放攻击后触发【大吉大利】效果，"+
        "对随机1个击中的目标额外造成1次{joydamage}%的对应属性的欢愉伤害，本次攻击若消耗战技点，"+
        "则额外触发1次【大吉大利】效果。触发【大吉大利】效果时若攻击者欢愉度低于爻光，则该次"+
        "欢愉伤害使用爻光欢愉度来计算。触发【大吉大利】效果不视为1次攻击。"
       }
    ]
  },
  {
    id: 73,
    name: "长夜月",
    type: "冰",
    path: "记忆",
    img: "images/长夜月立绘.png",
    stats: {
      attack: Math.round(465.7), // 80级攻击力
      defense: Math.round(654.88), // 80级防御力
      hp: Math.round(1242) // 80级生命值
    },
    desc: "神秘，大胆，激进，求变之举令人瞠目结舌。"+
    "以巡猎之「眼」遍观吉凶，明知天意难违，「戎韬将军」仍旧孤身涉险。"+
    "这一支下下签，如何能够改运换天？",
    skills: [
      { name: "普攻 - 雀翎鸣镝，过招有喜", 
        levelRange:[1,10],
        growth:{
            mainDamage:[45,126],
            adjacentDamage:[15,42]
        },
        desc: "对指定敌方单体造成等同于爻光{mainDamage}%"+
        "攻击力的物理属性伤害，同时对其相邻目标造成等同于爻光{adjacentDamage}%"+
        "攻击力的物理属性伤害。普攻恢复的能量提高至30点"
       },
      { name: "战技 - 十方光映，万法皆明", levelRange:[1,15],
        growth: {
            joyBoost: [10, 25]      // 欢愉度提高比例（1级10%，15级30%）
        },
        desc: "展开结界，持续3回合, 自身每回合开始时结界持续回合数减1。结界持续期间, "+
        "我方全体目标欢愉度提高，提高数值等同于爻光欢愉度的{joyBoost}%"+
        "，且爻光施放普攻、战技后获得笑点"
       },
      { name: "终结技 - 霓裳铁羽，六爻皆吉", levelRange:[1,15], 
        growth: {
            penetration: [10, 25]   // 全属性抗性穿透（1级10%，15级25%）
        },
        desc: "获得5个笑点。使阿哈立即获得1个固定计入20笑点的额外回合，该回合不消耗笑点，"+
        "并使我方全体目标全属性抗性穿透提高{penetration}%"+
        ", 持续3回合"
       },
       {name: "天赋 - 屏开千光，遍观自在", levelRange:[1,15],
        growth:{
        joydamage: [10, 25] //欢愉伤害倍率 1级 10，15级25
        },
        desc:"爻光持有【好活当赏】时:<br/>"+"使我方目标施放攻击后触发【大吉大利】效果，"+
        "对随机1个击中的目标额外造成1次{joydamage}%的对应属性的欢愉伤害，本次攻击若消耗战技点，"+
        "则额外触发1次【大吉大利】效果。触发【大吉大利】效果时若攻击者欢愉度低于爻光，则该次"+
        "欢愉伤害使用爻光欢愉度来计算。触发【大吉大利】效果不视为1次攻击。"
       }
    ]
  },
  {
    id: 72,
    name: "刻律德菈",
    type: "风",
    path: "同谐",
    img: "images/刻律德菈立绘.jpg",
    stats: {
      attack: Math.round(465.7), // 80级攻击力
      defense: Math.round(654.88), // 80级防御力
      hp: Math.round(1242) // 80级生命值
    },
    desc: "神秘，大胆，激进，求变之举令人瞠目结舌。"+
    "以巡猎之「眼」遍观吉凶，明知天意难违，「戎韬将军」仍旧孤身涉险。"+
    "这一支下下签，如何能够改运换天？",
    skills: [
      { name: "普攻 - 雀翎鸣镝，过招有喜", 
        levelRange:[1,10],
        growth:{
            mainDamage:[45,126],
            adjacentDamage:[15,42]
        },
        desc: "对指定敌方单体造成等同于爻光{mainDamage}%"+
        "攻击力的物理属性伤害，同时对其相邻目标造成等同于爻光{adjacentDamage}%"+
        "攻击力的物理属性伤害。普攻恢复的能量提高至30点"
       },
      { name: "战技 - 十方光映，万法皆明", levelRange:[1,15],
        growth: {
            joyBoost: [10, 25]      // 欢愉度提高比例（1级10%，15级30%）
        },
        desc: "展开结界，持续3回合, 自身每回合开始时结界持续回合数减1。结界持续期间, "+
        "我方全体目标欢愉度提高，提高数值等同于爻光欢愉度的{joyBoost}%"+
        "，且爻光施放普攻、战技后获得笑点"
       },
      { name: "终结技 - 霓裳铁羽，六爻皆吉", levelRange:[1,15], 
        growth: {
            penetration: [10, 25]   // 全属性抗性穿透（1级10%，15级25%）
        },
        desc: "获得5个笑点。使阿哈立即获得1个固定计入20笑点的额外回合，该回合不消耗笑点，"+
        "并使我方全体目标全属性抗性穿透提高{penetration}%"+
        ", 持续3回合"
       },
       {name: "天赋 - 屏开千光，遍观自在", levelRange:[1,15],
        growth:{
        joydamage: [10, 25] //欢愉伤害倍率 1级 10，15级25
        },
        desc:"爻光持有【好活当赏】时:<br/>"+"使我方目标施放攻击后触发【大吉大利】效果，"+
        "对随机1个击中的目标额外造成1次{joydamage}%的对应属性的欢愉伤害，本次攻击若消耗战技点，"+
        "则额外触发1次【大吉大利】效果。触发【大吉大利】效果时若攻击者欢愉度低于爻光，则该次"+
        "欢愉伤害使用爻光欢愉度来计算。触发【大吉大利】效果不视为1次攻击。"
       }
    ]
  },
  {
    id: 71,
    name: "海瑟音",
    type: "物理",
    path: "虚无",
    img: "images/海瑟音立绘.png",
    stats: {
      attack: Math.round(465.7), // 80级攻击力
      defense: Math.round(654.88), // 80级防御力
      hp: Math.round(1242) // 80级生命值
    },
    desc: "",
    skills: [
      { name: "普攻 - 雀翎鸣镝，过招有喜", 
        levelRange:[1,10],
        growth:{
            mainDamage:[45,126],
            adjacentDamage:[15,42]
        },
        desc: ""
       },
      { name: "战技 - 十方光映，万法皆明", levelRange:[1,15],
        growth: {
            joyBoost: [10, 25]      // 欢愉度提高比例（1级10%，15级30%）
        },
        desc: ""
       },
      { name: "终结技 - 霓裳铁羽，六爻皆吉", levelRange:[1,15], 
        growth: {
            penetration: [10, 25]   // 全属性抗性穿透（1级10%，15级25%）
        },
        desc: ""
       },
       {name: "天赋 - 屏开千光，遍观自在", levelRange:[1,15],
        growth:{
        joydamage: [10, 25] //欢愉伤害倍率 1级 10，15级25
        },
        desc:""
       }
    ]
  },
  {
    id: 70,
    name: "Archer",
    type: "量子",
    path: "巡猎",
    img: "images/archer立绘.jpg",
    stats: {
      attack: Math.round(465.7), // 80级攻击力
      defense: Math.round(654.88), // 80级防御力
      hp: Math.round(1242) // 80级生命值
    },
    desc: "",
    skills: [
      { name: "普攻 - 雀翎鸣镝，过招有喜", 
        levelRange:[1,10],
        growth:{
            mainDamage:[45,126],
            adjacentDamage:[15,42]
        },
        desc: ""
       },
      { name: "战技 - 十方光映，万法皆明", levelRange:[1,15],
        growth: {
            joyBoost: [10, 25]      // 欢愉度提高比例（1级10%，15级30%）
        },
        desc: ""
       },
      { name: "终结技 - 霓裳铁羽，六爻皆吉", levelRange:[1,15], 
        growth: {
            penetration: [10, 25]   // 全属性抗性穿透（1级10%，15级25%）
        },
        desc: ""
       },
       {name: "天赋 - 屏开千光，遍观自在", levelRange:[1,15],
        growth:{
        joydamage: [10, 25] //欢愉伤害倍率 1级 10，15级25
        },
        desc:""
       }
    ]
  },
  {
    id: 69,
    name: "Saber",
    type: "风",
    path: "毁灭",
    img: "images/saber立绘.jpg",
    stats: {
      attack: Math.round(465.7), // 80级攻击力
      defense: Math.round(654.88), // 80级防御力
      hp: Math.round(1242) // 80级生命值
    },
    desc: "",
    skills: [
      { name: "普攻 - 雀翎鸣镝，过招有喜", 
        levelRange:[1,10],
        growth:{
            mainDamage:[45,126],
            adjacentDamage:[15,42]
        },
        desc: ""
       },
      { name: "战技 - 十方光映，万法皆明", levelRange:[1,15],
        growth: {
            joyBoost: [10, 25]      // 欢愉度提高比例（1级10%，15级30%）
        },
        desc: ""
       },
      { name: "终结技 - 霓裳铁羽，六爻皆吉", levelRange:[1,15], 
        growth: {
            penetration: [10, 25]   // 全属性抗性穿透（1级10%，15级25%）
        },
        desc: ""
       },
       {name: "天赋 - 屏开千光，遍观自在", levelRange:[1,15],
        growth:{
        joydamage: [10, 25] //欢愉伤害倍率 1级 10，15级25
        },
        desc:""
       }
    ]
  },
  {
    id: 68,
    name: "白厄",
    type: "物理",
    path: "毁灭",
    img: "images/白厄立绘.jpg",
    stats: {
      attack: Math.round(465.7), // 80级攻击力
      defense: Math.round(654.88), // 80级防御力
      hp: Math.round(1242) // 80级生命值
    },
    desc: "",
    skills: [
      { name: "普攻 - 雀翎鸣镝，过招有喜", 
        levelRange:[1,10],
        growth:{
            mainDamage:[45,126],
            adjacentDamage:[15,42]
        },
        desc: ""
       },
      { name: "战技 - 十方光映，万法皆明", levelRange:[1,15],
        growth: {
            joyBoost: [10, 25]      // 欢愉度提高比例（1级10%，15级30%）
        },
        desc: ""
       },
      { name: "终结技 - 霓裳铁羽，六爻皆吉", levelRange:[1,15], 
        growth: {
            penetration: [10, 25]   // 全属性抗性穿透（1级10%，15级25%）
        },
        desc: ""
       },
       {name: "天赋 - 屏开千光，遍观自在", levelRange:[1,15],
        growth:{
        joydamage: [10, 25] //欢愉伤害倍率 1级 10，15级25
        },
        desc:""
       }
    ]
  },
  {
    id: 67,
    name: "赛飞儿",
    type: "量子",
    path: "虚无",
    img: "images/赛飞儿立绘.jpg",
    stats: {
      attack: Math.round(465.7), // 80级攻击力
      defense: Math.round(654.88), // 80级防御力
      hp: Math.round(1242) // 80级生命值
    },
    desc: "",
    skills: [
      { name: "普攻 - 雀翎鸣镝，过招有喜", 
        levelRange:[1,10],
        growth:{
            mainDamage:[45,126],
            adjacentDamage:[15,42]
        },
        desc: ""
       },
      { name: "战技 - 十方光映，万法皆明", levelRange:[1,15],
        growth: {
            joyBoost: [10, 25]      // 欢愉度提高比例（1级10%，15级30%）
        },
        desc: ""
       },
      { name: "终结技 - 霓裳铁羽，六爻皆吉", levelRange:[1,15], 
        growth: {
            penetration: [10, 25]   // 全属性抗性穿透（1级10%，15级25%）
        },
        desc: ""
       },
       {name: "天赋 - 屏开千光，遍观自在", levelRange:[1,15],
        growth:{
        joydamage: [10, 25] //欢愉伤害倍率 1级 10，15级25
        },
        desc:""
       }
    ]
  },
];