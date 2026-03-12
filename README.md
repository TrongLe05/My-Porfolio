# Portfolio Cá Nhân

Đây là website portfolio cá nhân được xây dựng bằng React và Vite, dùng để giới thiệu bản thân, kỹ năng, các dự án nổi bật và thông tin liên hệ.

## Công nghệ sử dụng

- React 19
- Vite 8
- JavaScript (JSX)
- CSS thuần
- ESLint

## Tính năng chính

- Giao diện portfolio hiện đại, responsive trên desktop và mobile
- Hero section với ảnh đại diện và phần giới thiệu cá nhân
- Dark mode và light mode
- Danh sách kỹ năng theo nhóm
- Danh sách dự án cá nhân kèm ảnh minh họa
- Khu vực liên hệ với email và mạng xã hội
- Hiệu ứng chuyển động nhẹ, phù hợp cho portfolio cá nhân

## Cấu trúc chính

```text
src/
	components/
		Navbar.jsx
		Hero.jsx
		Skills.jsx
		Projects.jsx
		Contact.jsx
	data/
		projects.js
	App.jsx
	index.css
```

## Cài đặt và chạy dự án

Yêu cầu:

- Node.js 18 trở lên
- npm

Các bước chạy local:

```bash
npm install
npm run dev
```

Sau khi chạy, mở trình duyệt tại địa chỉ do Vite cung cấp, thường là:

```text
http://localhost:5173
```

## Các lệnh hữu ích

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Tùy chỉnh nội dung

Bạn có thể cập nhật nội dung portfolio tại các vị trí sau:

- Thông tin tổng quan và layout chính: `src/App.jsx`
- Phần giới thiệu cá nhân: `src/components/Hero.jsx`
- Danh sách kỹ năng: `src/components/Skills.jsx`
- Dữ liệu dự án: `src/data/projects.js`
- Thông tin liên hệ: `src/components/Contact.jsx`
- Toàn bộ giao diện và màu sắc: `src/index.css`

## Hình ảnh

- Ảnh đại diện đặt trong thư mục `public/`
- Ảnh dự án đặt trong `public/projects/`
- Có thể dùng ảnh local, ảnh từ CDN hoặc icon bên thứ 3 bằng thẻ `img`

## Build production

Để build dự án cho production:

```bash
npm run build
```

Sau khi build, mã nguồn tĩnh sẽ nằm trong thư mục `dist/`.

## Ghi chú

- Dự án này phù hợp để làm portfolio cá nhân và có thể mở rộng thêm blog, trang chi tiết dự án hoặc form liên hệ.
- Nếu muốn deploy nhanh, có thể dùng Vercel, Netlify hoặc GitHub Pages.

## Tác giả

Lê Minh Trọng

Nếu muốn sử dụng dự án này làm template, hãy thay toàn bộ thông tin cá nhân, link mạng xã hội và nội dung dự án bằng dữ liệu của bạn.
