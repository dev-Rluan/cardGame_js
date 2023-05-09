// 카드팩
// 형식은 {num, emblem, status}
// num : 1 = 1~13까지
// emblem = [s(스페이드), d(다이아), c(클로버), h(하트)]
// status = [u(UP: 위(숫자)), d(DOWN : 아래(뒷면))] 
const cardPack =    [   
    {num : 1, emblem: "s", status : "u"},
    {num : 1, emblem: "s", status : "u"},
    {num : 2, emblem: "s", status : "u"},
    {num : 3, emblem: "s", status : "u"},
    {num : 4, emblem: "s", status : "u"},
    {num : 5, emblem: "s", status : "u"},
    {num : 6, emblem: "s", status : "u"},
    {num : 7, emblem: "s", status : "u"},
    {num : 8, emblem: "s", status : "u"},
    {num : 9, emblem: "s", status : "u"},
    {num : 10, emblem: "s", status : "u"},
    {num : 11, emblem: "s", status : "u"},
    {num : 12, emblem: "s", status : "u"},
    {num : 13, emblem: "s", status : "u"},

    {num : 1, emblem: "d", status : "u"},
    {num : 1, emblem: "d", status : "u"},
    {num : 2, emblem: "d", status : "u"},
    {num : 3, emblem: "d", status : "u"},
    {num : 4, emblem: "d", status : "u"},
    {num : 5, emblem: "d", status : "u"},
    {num : 6, emblem: "d", status : "u"},
    {num : 7, emblem: "d", status : "u"},
    {num : 8, emblem: "d", status : "u"},
    {num : 9, emblem: "d", status : "u"},
    {num : 10, emblem: "d", status : "u"},
    {num : 11, emblem: "d", status : "u"},
    {num : 12, emblem: "d", status : "u"},
    {num : 13, emblem: "d", status : "u"},

    {num : 1, emblem: "c", status : "u"},
    {num : 1, emblem: "c", status : "u"},
    {num : 2, emblem: "c", status : "u"},
    {num : 3, emblem: "c", status : "u"},
    {num : 4, emblem: "c", status : "u"},
    {num : 5, emblem: "c", status : "u"},
    {num : 6, emblem: "c", status : "u"},
    {num : 7, emblem: "c", status : "u"},
    {num : 8, emblem: "c", status : "u"},
    {num : 9, emblem: "c", status : "u"},
    {num : 10, emblem: "c", status : "u"},
    {num : 11, emblem: "c", status : "u"},
    {num : 12, emblem: "c", status : "u"},
    {num : 13, emblem: "c", status : "u"},

    {num : 1, emblem: "h", status : "u"},
    {num : 1, emblem: "h", status : "u"},
    {num : 2, emblem: "h", status : "u"},
    {num : 3, emblem: "h", status : "u"},
    {num : 4, emblem: "h", status : "u"},
    {num : 5, emblem: "h", status : "u"},
    {num : 6, emblem: "h", status : "u"},
    {num : 7, emblem: "h", status : "u"},
    {num : 8, emblem: "h", status : "u"},
    {num : 9, emblem: "h", status : "u"},
    {num : 10, emblem: "h", status : "u"},
    {num : 11, emblem: "h", status : "u"},
    {num : 12, emblem: "h", status : "u"},
    {num : 13, emblem: "h", status : "u"},
   
];


function getCardPack(){
    return cardPack;
}

function getCardByNum(num){
    return cardPack[num];
}


  

