var assert = require("assert")
require('../diu')

describe('屌', function(){

  it('should return itself', function(){
    var something = {}
    assert.equal(something, 屌(something));
  });

  it('should return property when second argument is present',function(){
    var something = {
      x : 'X',
      y : 'Y'
    };

    assert.equal( 屌(something,'x'), something.x );
    assert.equal( 屌(something,'y'), something.y );
    assert.equal( 屌(something,'z'), undefined );
  });

  it('should ignore non-English character in second argument',function(){
    var something = {
      'test' : 'TEST'
    };

    assert.equal( 屌(something,'鳩test'), something.test );
    assert.equal( 屌(something,'test乜撚野'), something.test );
    assert.equal( 屌(something,'te %^&*() st'), something.test );
  });

  it('should bind to the correct object', function(){
    var something = {
      me : function(){
        return this
      }
    }
    assert.equal( 屌(something,'me')(), something.me() )
    assert.equal( 屌(something,'me')(), something )
  })

});

describe('accessor',function(){
  it('should return self',function(){
    var something = {}

    assert.equal( something, something.老味 );
    assert.equal( something, something.仆街.啦 );
  });
});

describe('overall',function(){
  it('should works', function(){

    var something = {
      method : function(){
        return this;
      }
    }

    assert.equal( 屌(something).method(), 屌.老味(something).method() )
    assert.equal( 屌(something).method(), 屌(something.老味).method() )
    assert.equal( 屌(something).method(), 屌(something).老味.method() )
    assert.equal( 屌(something).method(), 屌(something,'method').老味() )
  })
})

describe('頂', function(){
  it('should throw',function(){
    assert.throws(function(){
      頂('大檸樂');
    },
    '大檸樂');
  });
});