const characters3_2 = [
  {
    id: 76,
    name: "大丽花",
    type: "火",
    path: "虚无",
    img: "images/大丽花立绘.png",
    stats: {
      attack: Math.round(679.14), // 80级攻击力
      defense: Math.round(606.38), // 80级防御力
      hp: 1087, // 80级生命值
      speed: 96,
      energy: 130,
    },
    desc: "美梦燃烧了永火官邸，也带走关于「她」的点滴。"+
    "「毁灭」、「记忆」…背叛的花朵盛放在所经之地——"+
    "重返无人知晓的梦境，将她再度点燃的会是何方？",
    skills: [
      { name: "普攻 - 拨开…记忆绽开裂隙", 
        levelRange:[1,10],
        growth:{
            damage:[50,140]
        },
        simpleDesc: "对敌方单体造成少量火属性伤害",
        desc: "对指定敌方单体造成等同于大丽花{damage}%攻击力的火属性伤害。",
       },
      { name: "战技 - 舔舐…背叛伸出火舌", levelRange:[1,15],
        growth: {
            damage: [80, 200]      
        },
        simpleDesc: "开启结界。对敌方单体及其相邻目标造成火属性伤害。"+
        "结界持续期间，我方全体的弱点击破效率提高，敌方目标未处于弱点击破状态时也能受到超击破伤害。",
        desc: "开启结界，持续3回合，大丽花回合开始时持续回合数减1。随后对指定敌方单体及其相邻目标造成等同于大丽花{damage}%攻击力的火属性伤害。<br/>"+
        "结界持续期间，我方全体的弱点击破效率提高50%，敌方目标未处于弱点击破状态时承受的削韧值也能够转化为超击破伤害。"
       },
      { name: "终结技 - 沉溺…飞灰邀入墓床", levelRange:[1,15], 
        growth: {
            damage: [180,360],
            defDecrease: [8, 23]   // 全属性抗性穿透（1级10%，15级25%）
        },

        // 独立公式
        customCalc: function(level, curr) {
          const minDamage = 180;
          const minDef = 8;

        if (curr <= 6) damage = minDamage + 12 * (curr - 1), defDecrease = minDef + 1 * (curr - 1);
        else if (curr <= 10) damage = (minDamage+60) + 15 * (curr - 6), defDecrease = (minDef+5) + 1.25 * (curr - 6);
        else damage = (minDamage+120) + 12 * (curr - 10), defDecrease = (minDef+10) + 1 * (curr - 10); 
          
          return {damage,defDecrease};
        },

        simpleDesc: "为敌方全体添加【共舞者】属性的弱点并使其防御力降低。造成大量火属性伤害，由敌方全体均分。",
        desc: "使敌方全体陷入【败谢】状态，持续4回合。随后造成等同于大丽花{damage}%攻击力的火属性伤害，由敌方全体均分。"+
        "<br/>【败谢】状态下，敌方目标防御力降低{defDecrease}%，并且会被添加所有【共舞者】属性的弱点。",
       },
       {name: "天赋 - 谁在害怕康士坦丝？", levelRange:[1,15],
        growth:{
        breakDamage: [30, 75], 
        normDamage: [15, 37.5],
        singleBreakDamage:[100, 250],
        },
        simpleDesc:"进入战斗时，大丽花恢复能量，并使自身和开战队友成为【共舞者】。【共舞者】攻击处于弱点击破状态下的敌方目标后，额外造成超击破伤害。"+
        "<br/>敌方目标受到另一位【共舞者】攻击后，大丽花发动追加攻击，对敌方随机单体造成少量火属性伤害，"+
        "并且对处于弱点击破状态下的敌方目标额外造成超击破伤害，共弹射5次。" ,
        desc:"进入战斗时，大丽花恢复35点能量，并使自身和另一位开战的队友共同成为【共舞者】。每当场上不存在另一位【共舞者】时，使自身和击破特攻最高的队友共同成为【共舞者】。"+
        "【共舞者】攻击处于弱点击破状态的敌方目标后，会将本次攻击的削韧值转化为1次{breakDamage}%的超击破伤害。"+
        "敌方目标受到另一位【共舞者】攻击后，大丽花发动追加攻击，造成5次伤害，每次对敌方随机单体造成等同于大丽花{normDamage}%攻击力的火属性伤害。"+
        "每次对处于弱点击破状态的敌方目标造成伤害后，会将本次伤害的削韧值转化为1次{singleBreakDamage}%的超击破伤害。"+
        "<br/>该效果每回合最多触发1次，若追加攻击施放前目标被消灭则对敌方随机单体发动。"
       },
        { name: "秘技 - 心，是最好的坟茔", levelRange:[1,1],
        growth: {},
        simpleDesc: "制造特殊领域，领域内敌人不会攻击我方目标。与领域内敌人进入战斗后，大丽花立即开启结界，并且对处于弱点击破状态下的敌方目标造成超击破伤害。",
        desc: "使用秘技后，制造1片持续20秒的特殊领域。处于特殊领域内的敌人不会主动攻击我方目标。与处于特殊领域内的敌人进入战斗后，"+
        "大丽花立即开启战技的结界，并且对处于弱点击破状态的敌方目标，会将开战削韧值转化为1次60%的超击破伤害。<br/>我方制造的领域效果最多存在1个。"
        },
    ],
    traces: [
        { name: "又一场葬礼",
            desc:"进入战斗时，使其他角色的击破特攻提高，提高数值等同于24%大丽花的击破特攻+50%，持续1回合。当大丽花受到队友提供的治疗效果或护盾时，再次触发该效果，持续3回合，单个回合内不可重复触发。"
        },
        { name: "致哀，故人",
            desc: "施放天赋的追加攻击时，为我方恢复1个战技点，该效果每施放2次天赋的追加攻击可触发1次。",
        },
        { name: "弃旧，恋新",
            desc:"我方目标为敌方目标添加弱点时，速度提高30%，持续2回合。若我方火属性角色施放攻击期间添加过弱点，则攻击后对每个添加弱点的目标额外造成20点火属性固定削韧，并恢复10%能量上限的能量，最多通过此效果恢复至能量上限的50%。"
        }
    ],

    growStats: [
        { name: "速度", value: "5" },
        { name: "击破特攻", value: "37.3%" },
        { name: "效果抵抗", value: "18%" }
    ],

    constellation: [
    {
      img: "images/大丽花/大丽花星魂1.webp", 
      name: "当一朵花含苞待放",
      desc: "天赋为【共舞者】提供的超击破伤害倍率对我方全体角色生效，其中【共舞者】的倍率额外提高40%。【共舞者】施放攻击后，"+
      "对受到攻击的敌方目标额外造成等同于其韧性上限25%的固定削韧（至少10点，至多300点）。该效果每个敌方目标只能触发1次，敌方目标受到致命攻击后重置该目标的可触发次数。"
    },
    {
      img: "images/大丽花/大丽花星魂2.webp",
      name: "新生，鲜灵，爱怜",
      desc: "大丽花在场时，敌方全体全属性抗性降低20%。敌方目标入场时，立即陷入【败谢】状态，持续3回合。"
    },
    {
      img: "images/大丽花/大丽花星魂3.webp",
      name: "可惜花瓣薄如蝉翼",
      desc: "终结技等级+2，最多不超过15级；普攻等级+1，最多不超过10级。"
    },
    {
      img: "images/大丽花/大丽花星魂4.webp",
      name: "可惜花蕊为虫剥蚀",
      desc: "天赋的追加攻击的伤害次数增加5次，施放时使敌方全体目标受到的伤害提高12%，持续2回合。"
    },
    {
      img: "images/大丽花/大丽花星魂5.webp",
      name: "凋落，腐烂，憎恨",
      desc: "战技等级+2，最多不超过15级；天赋等级+2，最多不超过15级。"
    },
    {
      img: "images/大丽花/大丽花星魂6.webp",
      name: "然而它总是，致命美丽",
      desc: "【共舞者】的击破特攻提高150%。施放天赋的追加攻击时，使所有【共舞者】下一次行动提前20%。"
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
    ],
    traces: [
        { name:"",
            desc:""
        },
        { name: "",
            desc: "",
        },
        { name:"",
            desc:""
        }
    ],

    growStats: [
        { name: "", value: "%" },
        { name: "", value: "%" },
        { name: "", value: "%" }
    ],

    constellation: [
    {
      img: "images/星魂1.webp", 
      name: "",
      desc: ""
    },
    {
      img: "images/星魂2.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂3.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂4.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂5.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂6.webp",
      name: "",
      desc: ""
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
    ],
    traces: [
        { name:"",
            desc:""
        },
        { name: "",
            desc: "",
        },
        { name:"",
            desc:""
        }
    ],

    growStats: [
        { name: "", value: "%" },
        { name: "", value: "%" },
        { name: "", value: "%" }
    ],

    constellation: [
    {
      img: "images/星魂1.webp", 
      name: "",
      desc: ""
    },
    {
      img: "images/星魂2.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂3.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂4.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂5.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂6.webp",
      name: "",
      desc: ""
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
    ],
    traces: [
        { name:"",
            desc:""
        },
        { name: "",
            desc: "",
        },
        { name:"",
            desc:""
        }
    ],

    growStats: [
        { name: "", value: "%" },
        { name: "", value: "%" },
        { name: "", value: "%" }
    ],

    constellation: [
    {
      img: "images/星魂1.webp", 
      name: "",
      desc: ""
    },
    {
      img: "images/星魂2.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂3.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂4.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂5.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂6.webp",
      name: "",
      desc: ""
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
    ],
    traces: [
        { name:"",
            desc:""
        },
        { name: "",
            desc: "",
        },
        { name:"",
            desc:""
        }
    ],

    growStats: [
        { name: "", value: "%" },
        { name: "", value: "%" },
        { name: "", value: "%" }
    ],

    constellation: [
    {
      img: "images/星魂1.webp", 
      name: "",
      desc: ""
    },
    {
      img: "images/星魂2.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂3.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂4.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂5.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂6.webp",
      name: "",
      desc: ""
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
    ],
    traces: [
        { name:"",
            desc:""
        },
        { name: "",
            desc: "",
        },
        { name:"",
            desc:""
        }
    ],

    growStats: [
        { name: "", value: "%" },
        { name: "", value: "%" },
        { name: "", value: "%" }
    ],

    constellation: [
    {
      img: "images/星魂1.webp", 
      name: "",
      desc: ""
    },
    {
      img: "images/星魂2.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂3.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂4.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂5.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂6.webp",
      name: "",
      desc: ""
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
    ],
    traces: [
        { name:"",
            desc:""
        },
        { name: "",
            desc: "",
        },
        { name:"",
            desc:""
        }
    ],

    growStats: [
        { name: "", value: "%" },
        { name: "", value: "%" },
        { name: "", value: "%" }
    ],

    constellation: [
    {
      img: "images/星魂1.webp", 
      name: "",
      desc: ""
    },
    {
      img: "images/星魂2.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂3.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂4.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂5.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂6.webp",
      name: "",
      desc: ""
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
    ],
    traces: [
        { name:"",
            desc:""
        },
        { name: "",
            desc: "",
        },
        { name:"",
            desc:""
        }
    ],

    growStats: [
        { name: "", value: "%" },
        { name: "", value: "%" },
        { name: "", value: "%" }
    ],

    constellation: [
    {
      img: "images/星魂1.webp", 
      name: "",
      desc: ""
    },
    {
      img: "images/星魂2.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂3.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂4.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂5.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂6.webp",
      name: "",
      desc: ""
    }
  ]
  },
];