
//I got the decrypt function from stackoverflow to help me out on where I got stuck 
//Below is the link
//https://stackoverflow.com/questions/77951897/how-to-decrypt-after-adding-random-letter-after-every-two-letters-javascript
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function showMsg (encryptedMessage, shiftValue)
{
  let decryptedMessage = '';

  for (i = 0; i < encryptedMessage.length; i++){
    if ( (i+1) % 3 != 0) { 
      const char = encryptedMessage[i].toLowerCase();
      const idx = alphabet.indexOf(char);
      if (idx >= 0) {
          let newIdx = idx - shiftValue;
          while (newIdx < 0) newIdx += alphabet.length; 
          decryptedMessage += alphabet[newIdx % alphabet.length];
      } else {
        decryptedMessage += char;
      } 
    }
  }
  window.crypto // 
 
  return decryptedMessage;
}

console.log(showMsg('Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv \'zQkhhuubyjkit\' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.', 42));
//===================Encrpt=======================================================
//The hideLetters and hideMsg functions I also got from springboard. Overall they helped me implement and internalize 
//all that was  thought in unit 5. The link is below
//https://lessons.springboard.com/Technical-Skills-Survey-Project-Part-2-Exercise-8-Caesar-s-Cipher-Reloaded-c2173d2be94a45bd94ffaccb04fac3cb
function hideLetters (letter, shift)
{
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
}

function hideMsg (word, shift)
{
  let encryptedMessage = " ";
  for (let i = 0; i < word.length; i++)
  {
    encryptedMessage += hideLetters(word[i], shift);
  }
  return encryptedMessage;
}
console.log(hideMsg('seek the midnight shadow of romulus and remus. there, whisper the word  to the winds. the first to unveil it in our slack channel earns the key to the next quest.', 40 ));