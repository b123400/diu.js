爲呢個本來已經好多粗口嘅語言再加多啲粗口。

因爲: `屌(a) === a //true`
所以你可以咁樣發泄：
```
document.getElementById('shit')
屌(document).getElementById('shit')
屌(document.getElementById('shit'))
屌(屌(document.getElementById('shit')))
屌(屌(屌(document.getElementById('shit'))))
```

整左幾個return this嘅property，所以可以咁寫：
```
currentUser.logout()
currentUser.老味.logout()
屌(currentUser).老味.logout()
屌.鳩(currentUser).老味 == currentUser // true
```
之不過咁樣access function嘅話會有機會令到function裏面的this改變，比如話
```
你 = {
  報上名來 : function(){
    return this;
  }
}
// 雖然
你.報上名來 === 你.報上名來.啦.仆街 // true
// 但係
你.報上名來() // return 你
你.報上名來.啦.仆街() // return accessor function

```
所以就整左個function去bind你個function：
```
屌(你,'報上名來').啦.仆街() // return 你
```
仲可以咁：
```
屌(document,'get啲ElementById') -> docment.getElementById
屌(User,'log乜撚野in') -> User.login
```



呀仲有：
```
頂(err)  // throw err
```