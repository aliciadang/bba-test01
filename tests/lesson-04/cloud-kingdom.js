let playerName = "Mario";
let currentLives = 3;

const levelOne = 25;
const levelTwo = 30;
const levelThree = 45;

// Tính tổng coin của 3 level, sau đó tính giá trị trung bình (tổng / 3)
const tongCoin = levelOne + levelTwo + levelThree;
const giaTriTB = tongCoin / 3;

console.log(`Tổng coin 3 level: ${tongCoin} | Giá trị trung bình: ${giaTriTB}`);


/* // Cách 2

const coinsArr = [25, 30, 45];
let tongCoin = 0;

coinsArr.forEach((coin) => {
    tongCoin += coin;
});

const giaTriTB = tongCoin / coinsArr.length;

console.log(`Tổng coin 3 level: ${tongCoin} | Giá trị trung bình: ${giaTriTB}`); */




// In ra số coin dư khi chia tổng số coin cho 3
const soDuCoin = tongCoin % 3;
console.log(`Số coin dư khi chia tổng số coin cho 3: ${soDuCoin}`);