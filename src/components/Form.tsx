import React, { useState } from "react";

//ここもFormPropsTypeの定義をしてる感じ
//SetCityもGetWeatherもStringとかNumberdeではない

type FormPropsType={
    setEmail:React.Dispatch<React.SetStateAction<string>>;
    getList2:(e:any)=>void;
    setPassword:React.Dispatch<React.SetStateAction<string>>
}

//FormPropsTypeを引数として渡してどうのこうの
//　=>に関してはアロー関数というもので（引数）=>{関数の本体}が基本の書式
//なので↓はFormPropsType型の関数propsを引数として渡した関数をFormと名付ける的な記述である。
//関数を引数にするってなんだよ→JavaScriptにおいては関数はデータ型なので
//変数に代入することも引数にすることも戻り値になることもできる
const Form=(props:FormPropsType)=>{
    //setCity(e.target.value)…ざっくりsetCityに入力した値を引き渡す手順。
    //記入された都市名がsetCityに渡る→setCityからStateに渡る→APIに行くみたいな感じ。多分
    //なのでe.tagrget.value が引数みたいなもん。多分。
    //eがenvent parameter の略語。eディレクトリの中のtargetディレクトリの中のvalueに入力された値があるらしい。
    //e直下にはイベントの発生時間であるtimestamp,クリックされた座標を表すPageX,発生したイベントの種類を表すtypeなどがあるらしい。
    //props is 何→App.tsxで定義づけたSetCityを使うために必要な記述
    //ただしpropsを使うにはFormの引数としてpropsを入れる必要があるのでFormの()の中に記述する。
    //propsを引数に入れるのはいいけどreactなのでpropsの定義を書かなければいけない。ワイルドカードのanyでもいいけどこれは最終手段なので（自分以外propsがどういうものなのか分からない）
    //propsの型を外で定義する。それがFormPropsType
    //でもSetCityとかgetWeatherって極論メソッドなのにどうやって定義づけるの？→App.tsx（言い換えるとexportされる前のメソッド）の該当する箇所にカーソル充てると
    //定義が出てくるからそれコピって貼り付け

    return(
        <form onSubmit={props.getList2}>
            <input type="text" name="email" placeholder="メアド" onChange={e=>props.setEmail(e.target.value)}/>
            <input type="text" name="password" placeholder="パスワード" onChange={e=>props.setPassword(e.target.value)}/>
            <button type="submit" >検索</button>
            
        </form>
    );
};

export default Form;