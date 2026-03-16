# Lesson 01 Key Takeaways

## 1. Giới thiệu chung
- Team Playwright VN
- Course & stages introduction
- Advices from mentor
- Tools to use in the course

## 2. Giới thiệu Playwright
### 2.1. PLaywright là gì?
- Là một framework
- Tiền thân là Puppeteer, được Microsoft tài trợ và phát triển lên.
- https://playwright.dev/
- Ra đời 31/01/2020
- Version mới nhất: v1.57

### 2.2. Ưu điểm Playwright
- Cross browser
    - Hỗ trợ các trình duyệt phổ biến: Chrome, Edge, Firefox, Safari
    - Hỗ trợ lên tới 143 phiên bản trình duyệt
- Cross platform
    - Code một lần, chạy trên các hệ điều hành phổ biến: Windows, Linux, MacOS
- Tính năng “xịn sò”
    - auto waiting, auto-retry assertion giúp giảm flaky tests (lúc pass, lúc fail)
- Report đầy đủ thông tin
    - Pass/fail theo từng loại trình duyệt
    - Chi tiết ở từng thời điểm: “gọi API nào”, “response trả về gì”, “ứng với dòng code nào
- Code gen:
    - Thao tác để sinh ra code

## 3. Tại sao chọn học Playwright TypeScript?
- Học Playwright vì:
    - Dễ cài đặt
    - Cú pháp đơn giản, dễ học
    - Framework trending, nhiều cơ hội việc làm.


``` 
* Công ty dùng tool khác thì có nên học khoá này không?

=> Có! Vì: 

-- Khóa học dạy về tư duy, hiểu bản chất 
-- Hiểu bản chất thì các tools tương tự nhau
-- Mentor có kiến thức đa dạng các tools, có thể hỏi về tools của công ty, mentor sẽ hỗ trợ
```

## 4. Giải thích về các công cụ đã cài
### 4.1. NVM

- NVM = Node Version Manager = quản lý các phiên bản NodeJs
- NodeJs = Công cụ để chạy code
- 2 options:
    - Cài trực tiếp NodeJS vào máy
    - Cài thông qua NVM
- Chọn thông qua NVM vì
    - Dễ chuyển đổi nhiều phiên bản NodeJS (các dự án khác nhau có thể làm ở phiên bản NodeJS khác nhau)


### 4.2. Git & GitHub
- Git: quản lý source code
- GitHub: chia sẻ code, làm việc nhóm
- Cấu hình Git: Trước khi làm việc với Git, cần một số cấu hình mặc định:
    - Config username (tên người dùng):
        - git config --global user.name “<tên bạn>”
    - Config email (địa chỉ email):
        - git config --global user.email “<email của bạn>”
    -  Config branch default (nhánh mặc định):
        - git config --global init.defaultBranch main

### 4.3. VS Code

## 5. Kết nối với GitHub