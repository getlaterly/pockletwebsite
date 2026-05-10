const LATERLY_LANG_KEY = 'laterly_language_preference';

function testLang(browserLangs) {
  for (const lang of browserLangs) {
    if (!lang) continue;
    
    const lowerLang = lang.toLowerCase();
    
    if (['zh-hant', 'zh-tw', 'zh-hk', 'zh-mo'].some(code => lowerLang.includes(code))) {
      return 'zh-TW';
    }
    
    if (['zh-hans', 'zh-cn', 'zh-sg'].some(code => lowerLang.includes(code))) {
      return 'zh-CN';
    }
    
    if (lowerLang === 'zh') {
      return 'zh-CN';
    }
    
    if (lowerLang.startsWith('ja')) {
      return 'ja';
    }
    
    if (lowerLang.startsWith('en')) {
      return 'en';
    }
  }
  return 'en';
}

console.log('zh-TW:', testLang(['zh-TW', 'en-US']));
console.log('zh-Hant-TW:', testLang(['zh-Hant-TW', 'en-US']));
console.log('zh-HK:', testLang(['zh-HK', 'en-US']));
console.log('zh-CN:', testLang(['zh-CN', 'en-US']));
console.log('zh-Hans-CN:', testLang(['zh-Hans-CN', 'en-US']));
console.log('zh:', testLang(['zh', 'en-US']));
console.log('ja-JP:', testLang(['ja-JP', 'en-US']));
console.log('en-GB:', testLang(['en-GB', 'en-US']));
console.log('fr-FR:', testLang(['fr-FR', 'en-US']));
console.log('fr-FR only:', testLang(['fr-FR']));
console.log('zh-Hant:', testLang(['zh-Hant', 'en-US']));
console.log('zh-Hans:', testLang(['zh-Hans', 'en-US']));
