#[GitHubバージョン](https://o-kalan-project.github.io/okalan/index.html)

## 独自ライブラリ(e-anitor.js)の使い方

[アニメーション一覧](https://o-kalan-project.github.io/okalan/js-library/sample.html)
わかると思いますがclassでアニメーション指定します。

#  _animation()

>アニメーションを有効化

# _sleep(ミリ秒)
  
>指定したミリ秒だけ待つ(await必須)
  
# _id(id)
  
>document.getElementById(id)の短縮形

# _class(className)
  
>getElementsByClassName(className)の短縮形

# _tag(tagName)
  
>getElementsByTagName(tagName)の短縮形

# _appfont(ttfファイルのURL,font-family)
  
>font-familyにttfファイルを登録して使えるようにする

# _text(内容)
  
>ピンク色でkeifont,のテキスト表示(簡易版)

#  _freetext(tag,index,id,font,size,color,pos,animation,delay,where)
  
>自由度の高いテキストを表示(自動改行付き)
>
>  tag:htmlタグ
>
>  index:内容(_sで5スペース挿入) =>   (この文字の間には_sスペースが5つ入ります。)
>
>  id: id
>
>  font:フォントファミリーの名前を指定
>
>  size:文字の大きさの設定
>
>  color:文字色(特別にRainbowが使用可)
>
>  pos: middle(中央),right(右よせ),もしくは%,pxで左からの位置を指定
>
>  animation:[アニメーション一覧](https://o-kalan-project.github.io/okalan/js-library/sample.html)で表示されている種類が使用できます。
>
>  delay:自動改行の時の出現間隔
>
>  where:どこに文字を表示するか(divのIDを指定)
>
#  _nobrtext(tag,index,id,font,size,color,pos,animation,delay,where)

>上と同じだが、自動改行がない。

#  _br(where)

>whereで指定したdivのIDの1番下に<br>を挿入する

#  _nodebr()

>divのIDがtextのところに<br>を挿入する

#await _makechart('ID','タイトル','内容',アニメーション');

> 指定したIDのところにタイトル、内容の年表を生成する。アニメーション指定可
