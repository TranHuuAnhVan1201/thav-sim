import React, {useEffect, useState} from 'react'
import { que } from '../../constants';

function HomeViews() {

  const [inputView, setInputView] = useState({
        sdt: '0394705333',
        ngay_sinh: '23',
        thang_sinh: '01',
        nam_sinh: '1997',
        gio_sinh: '5',
        phut_sinh: '01',
        gioi_tinh: 'nam',
        lich: 'dl',
        point: 0,

  });

  const [responseHexagram, setResponseHexagram] = useState({
    id: 0,
    primary: '',
    des: '',
    options: '',
    point: 0

  })
  const mod = (value) => {
     const result = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0)  % 8;
        return  result.toString();
  }

  const hexagram = () => {
    const first = inputView.sdt.slice(0, 5);
    const last = inputView.sdt.slice(6, 10);
    const modFirst =  mod(first);
    const modLast = mod(last)
    const modValue =  modFirst + modLast;
    const find = que.find(value => value.id.toString() === modValue);
    setResponseHexagram(find)
    return inputView.point

  }

  const supportHexagram = (last) => {
    return inputView.point

  }

  const getFengShui = () => {
    hexagram()
    supportHexagram()

  }


  useEffect(() => {
    if(inputView) {
     getFengShui()
    }

  }, [inputView])

 

  return (
    <div>home.views
     {JSON.stringify(inputView)}
     {JSON.stringify(responseHexagram)}
    </div>
  )
}

export default HomeViews;