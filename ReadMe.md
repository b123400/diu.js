爲呢個本來已經好多粗口嘅語言再加多啲粗口。

因爲: `屌(a) === a //true`
所以你可以咁樣發泄：
```javascript
document.getElementById('shit')
屌(document).getElementById('shit')
屌(document.getElementById('shit'))
屌(屌(document.getElementById('shit')))
屌(屌(屌(document.getElementById('shit'))))
```

整左幾個return this嘅property，所以可以咁寫：
```javascript
currentUser.logout()
currentUser.老味.logout()
屌(currentUser).老味.logout()
屌.鳩(currentUser).老味 == currentUser // true
```
之不過咁樣access function嘅話會有機會令到function裏面的this改變，比如話
```javascript
user = {
  echo : function(){
    return this;
  }
}
// 雖然
user.echo === user.echo.啦.仆街 // true
// 但係
user.echo() // return user
user.echo.啦.仆街() // return accessor function

```
所以就整左個function去bind你個function：
```javascript
屌(user,'echo').啦.仆街() // return 你
```
爲左可以靈活講粗口，`屌`呢個function會filter非英文字數字，於是可以咁寫：
```javascript
屌(document,'get啲ElementById') -> docment.getElementById
屌(User,'log乜撚野in') -> User.login
```


呀仲有：
```javascript
頂(err)  // throw err
```