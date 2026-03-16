# Lesson 04 Key Takeaways # 
**(JavaScript nâng cao)**

## 1. Object

### 1.1. Object là gì? Tại sao cần Object?

Object (Đối tượng) là kiểu dữ liệu dùng để lưu trữ một tập hợp các cặp key – value (khoá – giá trị).

**Vấn đề khi không có Object**

Giả sử bạn cần lưu thông tin 1 sinh viên:

```
let hoTen = "Nguyễn Văn A";
let tuoi = 20;
let lop = "WEB01";
```
→ 3 biến rời rạc, khó quản lý. Nếu có 100 sinh viên thì sao?

**Giải pháp: dùng Object**

```
let sinhVien = {
hoTen: "Nguyễn Văn A",
tuoi: 20,

lop: "WEB01"
};
```

→ Gom gọn trong 1 biến duy nhất, dễ quản lý, dễ truyền đi.

> Quy tắc nhớ: Object giống như một hồ sơ (record) — mỗi mục trong hồ sơ có tên (key) và nội
dung (value).

### 1.2. Cách khai báo Object

**Cách 1: Object Literal (phổ biến nhất)**

```
let xe = {
hang: "Toyota",
mau: "Trắng",
namSanXuat: 2023
};
```

**Cách 2: Dùng new Object()**

```
let xe = new Object();
xe.hang = "Toyota";
xe.mau = "Trắng";
xe.namSanXuat = 2023;
```

> Thực tế: Cách 1 (Object Literal) được dùng gần như 100% vì ngắn gọn hơn.

**Quy tắc đặt tên key**

Key thường là string, không cần đặt trong dấu ngoặc kép nếu là tên hợp lệ (không có dấu cách, ký
tự đặc biệt).

Nếu key có dấu cách hoặc ký tự đặc biệt → bắt buộc đặt trong ngoặc kép.

```
let person = {
"full name": "Nguyen Van A", // key có dấu cách → cần ngoặc kép
age: 25 // key bình thường → không cần
};
```

### 1.3. Truy xuất dữ liệu trong Object

**Cách 1: Dot notation (Dấu chấm) — phổ biến**

```
let sinhVien = { hoTen: "Lan", tuoi: 22 };
console.log(sinhVien.hoTen); // "Lan"
console.log(sinhVien.tuoi); // 22
```

**Cách 2: Bracket notation (Dấu ngoặc vuông)**

```
console.log(sinhVien["hoTen"]); // "Lan"
```

**Khi nào BẮT BUỘC dùng bracket notation?**

### 1.4. Gán giá trị cho Object

```
let sinhVien = { hoTen: "Lan", tuoi: 22 };
// Sửa giá trị
sinhVien.tuoi = 23;
console.log(sinhVien.tuoi); // 23
// Thêm key mới (key chưa tồn tại → tự tạo mới)
sinhVien.email = "lan@gmail.com";
console.log(sinhVien);
// { hoTen: "Lan", tuoi: 23, email: "lan@gmail.com" }
// 1. Key có dấu cách hoặc ký tự đặc biệt
let obj = { "full name": "Lan" };
console.log(obj["full name"]); // ✅
// console.log(obj.full name); // ❌ Lỗi cú pháp
// 2. Key là biến
let keyName = "hoTen";
console.log(sinhVien[keyName]); // "Lan"
// console.log(sinhVien.keyName); // ❌ undefined — tìm key tên "keyName"
```

> Lưu ý: Gán vào key chưa tồn tại = thêm mới. Gán vào key đã tồn tại = cập nhật.


### 1.5. Thêm, sửa, xoá thuộc tính

**Thêm**
```
let product = { ten: "Áo thun" };
product.gia = 150000; // thêm bằng dot
product["mauSac"] = "Đen"; // thêm bằng bracket
```

**Sửa**
```
product.gia = 180000; // cập nhật giá
```

**Xoá**
```
delete product.mauSac;
console.log(product); // { ten: "Áo thun", gia: 180000 }
```

> Cảnh báo: delete chỉ xoá thuộc tính khỏi Object. Nó không xoá biến.

### 1.6. Object lồng nhau (Nested Object)

Giá trị (value) của một key có thể là bất kỳ kiểu dữ liệu nào, kể cả một Object khác.

```
let sinhVien = {
hoTen: "Minh",
tuoi: 21,
diaChi: {
soNha: "12",
duong: "Lê Lợi",
thanhPho: "Hồ Chí Minh"
}
};
```

**Truy xuất Object lồng nhau**
```
console.log(sinhVien.diaChi.duong); // "Lê Lợi"
console.log(sinhVien["diaChi"]["soNha"]); // "12"
```

**Ví dụ thực tế: Dữ liệu API trả về**

Khi gọi API, dữ liệu thường có dạng Object lồng nhau:

```
// Ví dụ response từ https://jsonplaceholder.typicode.com/users/1
let user = {
id: 1,
name: "Leanne Graham",
address: {
street: "Kulas Light",
city: "Gwenborough",
geo: {
lat: "-37.3159",
lng: "81.1496"
}
},
company: {
name: "Romaguera-Crona"
}
};
// Lấy tên thành phố
console.log(user.address.city); // "Gwenborough"
// Lấy toạ độ
console.log(user.address.geo.lat); // "-37.3159"
// Lấy tên công ty
console.log(user.company.name); // "Romaguera-Crona"
```

> Bạn có thể mở link https://jsonplaceholder.typicode.com/users/1 trên trình duyệt để xem dữ
liệu thật.

### 1.7. Tổng kết nhanh

| Thao tác | Cú pháp | Ví dụ |
|-------|-------|-------|
| Khai báo | {} hoặc new Object() | let obj = { a: 1 } |
| Truy xuất | .key hoặc ["key"] | obj.a hoặc obj["a"] |
| Thêm / Sửa | obj.key = value | obj.b = 2 |
| Xoá delete | delete obj.key | delete obj.a |
| Lồng nhau | value là Object | obj.x.y.z |


## 2. Array

### 2.1. Array là gì? Tại sao cần Array?

Array (Mảng) là kiểu dữ liệu dùng để lưu trữ một danh sách có thứ tự các giá trị.

**Vấn đề khi không có Array**

Giả sử bạn cần lưu danh sách 5 môn học:

```
let mon1 = "Toán";
let mon2 = "Lý";
let mon3 = "Hoá";
let mon4 = "Anh";
let mon5 = "Tin";
```

→ 5 biến rời rạc. Nếu có 50 môn thì sao? Không thể viết 50 biến được.

**Giải pháp: dùng Array**

```
let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
```

→ 1 biến duy nhất chứa toàn bộ danh sách, dễ quản lý, dễ duyệt qua.

> Quy tắc nhớ: Array giống một danh sách đánh số — mỗi phần tử có vị trí (index) bắt đầu từ 0.

```
Index:  0 1 2 3 4
        ┌───────┬──────┬──────┬──────┬──────┐
        │ "Toán"│ "Lý" │ "Hoá"│ "Anh"│ "Tin"│
        └───────┴──────┴──────┴──────┴──────┘
```

### 2.2. Cách khai báo Array

**Cách 1: Array Literal (phổ biến nhất)**

```
let traiCay = ["Táo", "Cam", "Xoài"];
let diemSo = [8, 9, 7.5, 10];
let hocSinh = []; // mảng rỗng
```

**Cách 2: Dùng new Array()**

```
let traiCay = new Array("Táo", "Cam", "Xoài");
```

> Thực tế: Cách 1 (Array Literal) được dùng gần như 100% vì ngắn gọn hơn.

**Array có thể chứa nhiều kiểu dữ liệu khác nhau**

```
let honHop = ["Lan", 22, true, null, { lop: "WEB01" }];
```

→ Hợp lệ, nhưng trong thực tế nên giữ các phần tử cùng kiểu để dễ xử lý.

### 2.3. Truy xuất dữ liệu trong Array

**Lấy phần tử theo index (chỉ số)**

Index bắt đầu từ 0, không phải từ 1.

```
let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
console.log(monHoc[0]); // "Toán" — phần tử đầu tiên
console.log(monHoc[2]); // "Hoá" — phần tử thứ 3
console.log(monHoc[4]); // "Tin" — phần tử cuối cùng
console.log(monHoc[5]); // undefined — không tồn tại
```

**Lấy phần tử cuối cùng**
```
let cuoi = monHoc[monHoc.length - 1]; // "Tin"
```

**Đếm số phần tử: .length**
```
console.log(monHoc.length); // 5
```

**Gán lại giá trị theo index**
```
monHoc[1] = "Vật lý";
console.log(monHoc); // ["Toán", "Vật lý", "Hoá", "Anh", "Tin"]
```

### 2.4. Thêm, xoá phần tử

**Thêm vào cuối: .push()**
```
let monHoc = ["Toán", "Lý"];
monHoc.push("Hoá");
console.log(monHoc); // ["Toán", "Lý", "Hoá"]
```

**Xoá phần tử cuối: .pop()**
```
let monBiXoa = monHoc.pop();
console.log(monBiXoa); // "Hoá"
console.log(monHoc); // ["Toán", "Lý"]
```

**Thêm vào đầu: .unshift()**
```
monHoc.unshift("Anh");
console.log(monHoc); // ["Anh", "Toán", "Lý"]
```

**Xoá phần tử đầu: .shift()**
```
monHoc.shift();
console.log(monHoc); // ["Toán", "Lý"]
```

**Tóm tắt nhanh**
| Thao tác | Phương thức | Vị trí |
|-------|-------|-------|
| Thêm cuối | .push() | → cuối mảng |
| Xoá cuối | .pop() | ← cuối mảng |
| Thêm đầu | .unshift() | → đầu mảng |
| Xoá đầu | .shift() | ← đầu mảng |



### 2.5. Kết hợp Array với vòng lặp

Đây là sức mạnh thực sự của Array — xử lý hàng loạt dữ liệu.

**Dùng for truyền thống**

```
let diemSo = [8, 6, 9, 7, 10];
for (let i = 0; i < diemSo.length; i++) {
console.log("Học sinh " + (i + 1) + ": " + diemSo[i] + " điểm");
}
// Học sinh 1: 8 điểm
// Học sinh 2: 6 điểm
// Học sinh 3: 9 điểm
// Học sinh 4: 7 điểm
// Học sinh 5: 10 điểm
```

> Lưu ý: i < diemSo.length chứ không phải i <= diemSo.length (vì index bắt đầu từ 0).

**Dùng for...of — gọn hơn khi không cần index**

```
let traiCay = ["Táo", "Cam", "Xoài"];
for (let qua of traiCay) {
console.log(qua);
}
// Táo
// Cam
// Xoài
```

**Dùng .forEach() — cách hiện đại**

```
let traiCay = ["Táo", "Cam", "Xoài"];
traiCay.forEach(function(qua, viTri) {
console.log(viTri + ": " + qua);
});
// 0: Táo
// 1: Cam
// 2: Xoài
```

### 2.6. Ví dụ thực tế tổng hợp

**Bài toán: Tính điểm trung bình lớp**

```
let diemSo = [8, 6, 9, 7, 10, 5, 8];
let tongDiem = 0;
for (let i = 0; i < diemSo.length; i++) {
tongDiem = tongDiem + diemSo[i];
}
let diemTB = tongDiem / diemSo.length;
console.log("Điểm trung bình: " + diemTB); // Điểm trung bình: 7.571...
```

**Bài toán: Lọc học sinh giỏi (điểm >= 8)**

```
let diemSo = [8, 6, 9, 7, 10, 5, 8];
let hocSinhGioi = [];
for (let i = 0; i < diemSo.length; i++) {
if (diemSo[i] >= 8) {
hocSinhGioi.push(diemSo[i]);
}
}
console.log(hocSinhGioi); // [8, 9, 10, 8]
console.log("Số học sinh giỏi: " + hocSinhGioi.length); // 4
```

**Bài toán: Hiển thị danh sách sản phẩm (giống thực tế web)**

```
let sanPham = ["Áo thun", "Quần jean", "Giày sneaker", "Mũ lưỡi trai"];
let html = "<ul>";
for (let sp of sanPham) {
html = html + "<li>" + sp + "</li>";
}
html = html + "</ul>";
console.log(html);
// <ul><li>Áo thun</li><li>Quần jean</li><li>Giày sneaker</li><li>Mũ lưỡi
```

> Đây chính là cách các website render danh sách sản phẩm từ dữ liệu.

**Ví dụ thực tế: Dữ liệu API trả về dạng Array** -->

Khi gọi API, dữ liệu thường là **Array chứa nhiều Object**:

```
// Ví dụ response từ https://jsonplaceholder.typicode.com/users
let users = [
{ id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
{ id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
{ id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net" }
];
let sanPham = ["Áo thun", "Quần jean", "Giày sneaker", "Mũ lưỡi trai"];
let html = "<ul>";
for (let sp of sanPham) {
html = html + "<li>" + sp + "</li>";
}
html = html + "</ul>";
console.log(html);
// <ul><li>Áo thun</li><li>Quần jean</li><li>Giày sneaker</li><li>Mũ lưỡi

// In danh sách tên user
for (let user of users) {
console.log(user.name);
}
// Leanne Graham
// Ervin Howell
// Clementine Bauch
```

> Mở link https://jsonplaceholder.typicode.com/users trên trình duyệt để xem dữ liệu thật — đó là
một Array chứa 10 Object.

### 2.7. Tổng kết nhanh

| Thao tác | Cú pháp | Ví dụ |
|-------|-------|-------|
| Khai báo | [] | let arr = [1, 2, 3] |
| Truy xuất | arr[index] | arr[0] → 1 |
| Đếm phần tử | arr.length | 3 |
| Thêm cuối | arr.push(val) | arr.push(4) |
| Xoá cuối | arr.pop() | arr.pop() |
| Duyệt | for , for...of , .forEach() | xem mục 5 ||

## 3. Function

### 3.1. Function là gì? Tại sao cần Function?

Function (Hàm) là một khối lệnh được đặt tên, có thể gọi lại nhiều lần mà không cần viết lại code.

**Vấn đề khi không có Function**

Giả sử bạn cần in lời chào ở 3 chỗ khác nhau trong chương trình:

```
// Chỗ 1
console.log("===========================");
console.log("Xin chào! Chào mừng bạn đến với HocTest.com");
console.log("===========================");

// ... code khác ...

// Chỗ 2 — copy paste lại
console.log("===========================");
console.log("Xin chào! Chào mừng bạn đến với HocTest.com");
console.log("===========================");

// ... code khác ...

// Chỗ 3 — copy paste lại
console.log("===========================");
console.log("Xin chào! Chào mừng bạn đến với HocTest.com");
console.log("===========================");
```
→ Lặp lại 3 lần cùng một đoạn code. Nếu cần sửa → phải sửa 3 chỗ. Dễ sót, dễ sai.

**Giải pháp: dùng Function**

```
// Khai báo 1 lần
function chaoMung() {
console.log("===========================");
console.log("Xin chào! Chào mừng bạn đến với HocTest.com");
console.log("===========================");
}

// Gọi bao nhiêu lần tuỳ thích
chaoMung(); // Chỗ 1
chaoMung(); // Chỗ 2
chaoMung(); // Chỗ 3
```

→ Viết 1 lần, dùng nhiều lần. Cần sửa → sửa 1 chỗ duy nhất.

> Quy tắc nhớ: Function giống như một công thức nấu ăn — viết công thức 1 lần, nấu bao nhiêu lần cũng được.

### 3.2. Cách khai báo Function

**Cú pháp cơ bản**

```
function tenHam() {
// các dòng lệnh bên trong
}
```

- `function` — từ khoá bắt buộc
- `tenHam` — tên do bạn đặt
- `{}` — thân hàm, chứa code sẽ thực thi

**Ví dụ**

```
function ngoiSao() {
console.log("⭐⭐⭐⭐⭐");
}

function xinChao() {
console.log("Hello World!");
}
```

**Quy tắc đặt tên hàm**

- Dùng camelCase: `tinhTong` , `layDuLieu` , `hienThiSanPham`
- Nên bắt đầu bằng động từ: `tinh...` , `lay...` , `hienThi...` , `kiemTra...`
- Tên phải diễn tả hành động mà hàm thực hiện

```
// ✅ Tên tốt
function tinhDiemTrungBinh() { ... }
function hienThiDanhSach() { ... }

// ❌ Tên tệ
function abc() { ... }
function hamCuaToi() { ... }
```

> Quan trọng: Khai báo function chưa chạy code bên trong. Code chỉ chạy khi bạn gọi hàm.

### 3.3. Gọi hàm — Function thực thi

**Khai báo ≠ Thực thi**

```
// Khai báo — chỉ "ghi công thức", chưa có gì xảy ra
function demNguocPhongTen() {
console.log("3...");
console.log("2...");
console.log("1...");
console.log("🚀 Phóng!");
}

// Gọi hàm — code bên trong MỚI chạy
demNguocPhongTen();

Kết quả:
3...
2...
1...
🚀 Phóng!
```

**Gọi hàm = tên hàm + dấu ()**

```
demNguocPhongTen(); // ✅ Gọi hàm — có ()
demNguocPhongTen; // ❌ Chỉ tham chiếu tới hàm, KHÔNG chạy
```

**Gọi nhiều lần**

```
function veDuong() {
console.log("──────────");
}

veDuong();
console.log("Phần 1: Giới thiệu");
veDuong();
console.log("Phần 2: Nội dung");
veDuong();
```

Kết quả:

```
──────────
Phần 1: Giới thiệu
──────────
Phần 2: Nội dung
──────────
```

### 3.4. Function với tham số (Parameter)

Hàm chaoMung() ở trên luôn in cùng một nội dung. Nếu muốn chào từng người khác nhau thì sao?

**Tham số = "nguyên liệu" truyền vào cho hàm**

```
// tham số ↓
function chao(ten) {
console.log("Xin chào " + ten + "!");
}
chao("Lan"); // "Xin chào Lan!"
chao("Minh"); // "Xin chào Minh!"
chao("Hoa"); // "Xin chào Hoa!"
```

> Cách nhớ: Tham số giống như ô trống cần điền — khi gọi hàm, bạn điền giá trị cụ thể vào.

**Phân biệt: Parameter vs Argument**

```
// parameter (tham số) — biến giữ chỗ khi khai báo
function chao(ten) {
console.log("Xin chào " + ten + "!");
}
// argument (đối số) — giá trị thật khi gọi
chao("Lan");
```

- **Parameter (tham số)**: Tên biến đặt trong () khi khai báo → ten
- **Argument (đối số): Giá** trị truyền vào () khi gọi → "Lan"

> Trong thực tế, hai từ này thường dùng thay thế nhau. Không cần phân biệt quá kỹ.
Nhiều tham số

```
function tinhTong(a, b) {
console.log(a + b);
}

tinhTong(3, 5); // 8
tinhTong(10, 20); // 30

function gioiThieu(ten, tuoi, lop) {
console.log("Tôi là " + ten + ", " + tuoi + " tuổi, lớp " + lop);
}

gioiThieu("Lan", 20, "WEB01");
// "Tôi là Lan, 20 tuổi, lớp WEB01"

gioiThieu("Minh", 22, "WEB02");
// "Tôi là Minh, 22 tuổi, lớp WEB02"
```

> Thứ tự quan trọng: Argument truyền vào theo đúng thứ tự parameter khai báo.

**Nếu thiếu argument?**

```
function chao(ten) {
console.log("Xin chào " + ten + "!");
}

chao(); // "Xin chào undefined!"
```
→ Tham số không được truyền giá trị sẽ là undefined .

### 3.5. Function có giá trị trả về: return

Ngoài việc làm gì đó (in ra console), hàm còn có thể trả về kết quả để dùng tiếp.

**Không có return — chỉ "làm"**

```
function inTong(a, b) {
console.log(a + b); // in ra, nhưng không trả về
}

let ketQua = inTong(3, 5); // in 8
console.log(ketQua); // undefined — vì hàm không return
```

**Có return — "làm" xong "trả kết quả"**

```
function tinhTong(a, b) {
return a + b; // trả kết quả về cho nơi gọi
}

let ketQua = tinhTong(3, 5);
console.log(ketQua); // 8

// Dùng trực tiếp trong biểu thức
console.log(tinhTong(10, 20) * 2); // 60
```

> Cách nhớ: return giống như giao hàng — hàm xử lý xong thì gửi kết quả về cho người gọi.

**return dừng hàm ngay lập tức**

```
function kiemTraTuoi(tuoi) {
if (tuoi < 0) {
return "Tuổi không hợp lệ"; // dừng hàm tại đây
}
return "Tuổi của bạn là " + tuoi;
}

console.log(kiemTraTuoi(-5)); // "Tuổi không hợp lệ"
console.log(kiemTraTuoi(20)); // "Tuổi của bạn là 20"
```

### 3.6. Ví dụ thực tế tổng hợp

**Bài toán: Tính diện tích hình chữ nhật**

```
function tinhDienTich(chieuDai, chieuRong) {
return chieuDai * chieuRong;
}
console.log(tinhDienTich(5, 3)); // 15
console.log(tinhDienTich(10, 4)); // 40
```

**Bài toán: Kiểm tra điểm đỗ/trượt**

```
function ketQuaHocTap(ten, diem) {
if (diem >= 5) {
return ten + " — ĐỖ (" + diem + " điểm)";
}
return ten + " — TRƯỢT (" + diem + " điểm)";
}

console.log(ketQuaHocTap("Lan", 8)); // "Lan — ĐỖ (8 điểm)"
console.log(ketQuaHocTap("Minh", 3)); // "Minh — TRƯỢT (3 điểm)"
```

**Bài toán: Kết hợp Function + Array + Vòng lặp**

```
function tinhDiemTB(danhSachDiem) {
let tong = 0;
for (let i = 0; i < danhSachDiem.length; i++) {
tong = tong + danhSachDiem[i];
}
return tong / danhSachDiem.length;
}

let lopA = [8, 6, 9, 7, 10];
let lopB = [5, 4, 6, 7, 3];

console.log("Lớp A: " + tinhDiemTB(lopA)); // Lớp A: 8
console.log("Lớp B: " + tinhDiemTB(lopB)); // Lớp B: 5
```

> Đây là sức mạnh thực sự: viết hàm 1 lần, dùng cho nhiều bộ dữ liệu khác nhau.

**Ví dụ thực tế: Function xử lý dữ liệu API**

```
// Dữ liệu từ https://jsonplaceholder.typicode.com/users
let users = [
{ id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
{ id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
{ id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net" }
];

function timUser(danhSach, tenCanTim) {
for (let user of danhSach) {
if (user.name === tenCanTim) {
return user;
}
}
return null; // không tìm thấy
}

let ketQua = timUser(users, "Ervin Howell");
console.log(ketQua);

// { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" }
let khongCo = timUser(users, "Ai Đó");
console.log(khongCo); // null
```

> Mở link https://jsonplaceholder.typicode.com/users trên trình duyệt để xem dữ liệu thật.

### 3.7. Tổng kết nhanh

| Khái niệm | Cú pháp | Ý nghĩa |
|-------|-------|-------|
| Khai báo | function tenHam() { ... } | Tạo hàm, chưa chạy |
| Gọi hàm  | tenHam() | Chạy code bên trong |
| Tham số | function tenHam(a, b) { ... } | "Nguyên liệu" truyền vào |
| Trả kết quả | return giaTriTraVe | Gửi kết quả về nơi gọi |



## 4. Phạm vi của biến
- Phạm vi (scope) xác định nơi mà biến có thể truy cập JavaScript có ba loại phạm vi:
    - Block scope (khối)
    - Function scope (hàm)
    - Toàn cục (global)
- Block scope (khối): biến được khai báo trong cặp ngoặc nhọn
    - var: không bị giới hạn bởi cặp ngoặc nhọn
    - let/const: bị giới hạn bởi cặp ngoặc nhọn. Ra ngoài bị undefined
        ```
        if (true) {
        var varVariable = "var không có block scope";
        let letVariable = "let có block scope";
        const constVariable = "const cũng có block scope";
        }

        console.log(varVariable); // OK - var không bị giới hạn bởi block
        console.log(letVariable); // Error: letVariable is not defined
        console.log(constVariable); // Error: constVariable is not defined
        ```

- Function scope (hàm): biến được khai báo trong một hàm
    - Cả let/var/const ra ngoài hàm đều bị undefined
        ```
        function myFunction() {
        var functionScoped = "Chỉ có thể truy cập trong hàm này";
        let alsoFunctionScoped = "Tương tự";

        console.log(functionScoped); // OK
        }

        console.log(functionScoped); // Error: functionScoped is not defined
        ```

- Toàn cục (global): biến được khai báo ở một dòng code tự do, không nằm trong khối hay hàm
    - Ví dụ
        ```
        var globalVar = "Tôi là biến toàn cục";
        let globalLet = "Tôi cũng là biến toàn cục";

        function testFunction() {
        console.log(globalVar); // Truy cập được
        console.log(globalLet); // Truy cập được
        }
        ```
        





## 5. break & continue
- break dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức.
    ```
    // Ví dụ thực tế: Tìm phần tử đầu tiên
    const numbers = [1, 3, 8, 7, 9, 11];
    let firstEven = null;

    for (let num of numbers) {
    if (num % 2 === 0) {
    firstEven = num;
    break; // Dừng ngay khi tìm thấy
    }
    }
    ```

- continue dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo.
    ```
    // Ví dụ thực tế: Lọc dữ liệu
    const scores = [85, 92, 78, 95, 60, 88];
    console.log("Điểm >= 80:");
    for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    if (score < 80) {
    continue; // Bỏ qua điểm < 80
    }
    console.log(score);
    }
    // Output: 85, 92, 95, 88
    ```

## 6. Câu điều kiện nâng cao

- Câu điều kiện if...else: Thực thi code khác nhau cho trường hợp true và false
- Câu điều kiện if...else...if: Kiểm tra nhiều điều kiện theo thứ tự
- Ternary operator (toán tử điều kiện): Cách viết ngắn gọn cho if...else đơn giản

## 7. Vòng lặp nâng cao

- for...in Loop
- forEach Method: Method của Array để thực thi một function cho mỗi phần tử. Không thể dùng break hoặc continue.

## 8. Utils function

Utils = tiện ích

Utils function là các hàm có sẵn của JavaScript, giúp việc code trở nên nhanh hơn, gọn hơn.

Trong bài này, ta học 2 loại utils function thường sử dụng là:
- String utils: các hàm xử lý chuỗi
- Array utils: các hàm xử lý mảng

### 8.1. Utils function - String

- Bỏ khoảng trắng
    - Dùng hàm `trim`
        - `trim()`: bỏ khoảng trắng 2 đầu
        - `trimStart()`: bỏ khoảng trắng bên trái
        - `trimEnd()`: bỏ khoảng trắng bên phải

        ```
        let text = " Hello World ";

        // trim() - bỏ khoảng trắng 2 đầu
        console.log(text.trim());
        // "Hello World"

        // trimStart() - bỏ khoảng trắng bên trái
        console.log(text.trimStart());
        // "Hello World "

        // trimEnd() - bỏ khoảng trắng bên phải
        console.log(text.trimEnd());
        // " Hello World"
        ```

- Chuyển đổi HOA → THƯỜNG
    - Chữ thường → chữ hoa: `toUpperCase`
    - Chữ hoa → chữ thường: `toLowerCase`
        
        ```
        let str = "JavaScript";

        str.toUpperCase(); // "JAVASCRIPT";
        str.toLowerCase(); // "javascript";

        console.log(str.toUpperCase());
        console.log(str.toLowerCase());
        ```

- Kiểm tra chuỗi có bao gồm chuỗi con không
    - Dùng hàm `includes`

        ```
        let text = "Hello World";
        // Kiểm tra chuỗi có chứa chuỗi con không
        console.log(text.includes("World"));        
        // true
        console.log(text.includes("JavaScript"));
        // false

        // Phân biệt hoa thường
        console.log(text.includes("world"));
        // false

        console.log(text.includes("Hello"));
        // true
        ```
- Cắt chuỗi
    - Dùng hàm `split`

        ```
        let text = "Hello World JavaScript";
        // Cắt chuỗi theo khoảng trắng
        console.log(text.split(" "));
        // ["Hello", "World", "JavaScript"]

        // ------
        let email = "user@gmail.com";

        email.split("@");
        // ["user", "gmail.com"]

        let date = "2024-01-25";
        date.split("-");
        // ["2024", "01", "25"]
        ```
- Thay thế chuỗi con bằng chuỗi con khác
    - Dùng hàm `replace`

        ```
        let text = "Hello World";

        // Thay thế chuỗi con
        console.log(text.replace("World","JavaScript"))
        ;
        // "Hello JavaScript"
        ```

- Thêm các String utils function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


### 8.2. Utils function - Array

Tổng quan các loại thao tác với mảng:

- Thêm phần tử vào mảng
    - Thêm vào cuối: `push(<phần tử>)`
    - Thêm vào đầu: `unshift(<phần tử>)`
    - Thêm vào giữa: `splice(<vị trí>, <số phần tử cần xoá>, <phần tử cần thêm vào>)`

    ```
    let arr = [1, 2, 3];

    // Thêm vào cuối - push()
    arr.push(4);
    console.log(arr);
    // [1, 2, 3, 4]

    // Thêm vào đầu - unshift()
    arr.unshift(0);
    console.log(arr);
    // [0, 1, 2, 3, 4]

    // Thêm vào giữa - splice(vị trí, 0, phần tử)
    arr.splice(2, 0, 1.5);
    console.log(arr);
    // [0, 1, 1.5, 2, 3, 4]
    ```

- Xóa phần tử khỏi mảng
    - Xóa ở cuối: `pop()`
    - Xóa ở đầu: `shift()`
    - Xóa ở vị trí bất kỳ: `splice(<vị trí>, <số phần tử cần xóa>)`

    ```
    let arr = [1, 2, 3, 4, 5];

    // Xóa phần tử cuối - pop()
    arr.pop();
    console.log(arr);
    // [1, 2, 3, 4]

    // Xóa phần tử đầu - shift()
    arr.shift();
    console.log(arr);
    // [2, 3, 4]

    // Xóa phần tử ở vị trí bất kỳ - splice(vị trí, số lượng)
    arr.splice(1, 1);

    // Xóa 1 phần tử tại vị trí index 1
    console.log(arr);
    // [2, 4]
    ```

- Tìm kiếm phần tử
    - Trả về phần tử đầu tiên hợp lệ - `find()`
    - Trả về tất cả các phần tử hợp lệ - `filter()`
    ```
    const numbers = [5, 12, 8, 130, 44];

    // find() - Trả về phần tử đầu tiên > 10
    let first = numbers.find(num => num > 10);
    console.log(first);
    // 12

    // filter() - Trả về tất cả phần tử > 10
    let all = numbers.filter(num => num > 10);
    console.log(all);
    // [12, 130, 44]
    ```

- Biến đổi mảng
    - `map()`: Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài

    ```
    let numbers = [1, 2, 3, 4, 5];

    // Nhân mỗi phần tử với 2
    let doubled = numbers.map(num => num * 2);
    console.log(doubled);
    // [2, 4, 6, 8, 10]
    ```

- Sắp xếp mảng
    - `sort((a, b) => a - b)`
        - So sánh từng cặp phần tử a và b
        - Trả về số âm: a đứng trước b
        - Trả về số dương: b đứng trước a
        - Trả về 0: giữ nguyên thứ tự
            ```
            let numbers = [40, 100, 1, 5, 25, 10];

            // Sắp xếp tăng dần
            numbers.sort((a, b) => a - b);
            console.log(numbers);
            // [1, 5, 10, 25, 40, 100]

            // Sắp xếp giảm dần
            numbers.sort((a, b) => b - a);
            console.log(numbers);
            // [100, 40, 25, 10, 5, 1]
            ```
    - Thêm các Array utils function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



