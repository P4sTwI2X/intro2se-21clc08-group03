BuyMee Project

## Sửa hai file tên '.env.sample' ở BackEndServer và database lại thành tên '.env'

Cách thực hiện khởi động website:
- Khai báo và tạo database:
1. Mở PostgreSQL cmd (đã tải về PostgreSQL).
2. Đăng nhập vào hệ thống database sử dụng.
3. Gõ lệnh 'create database buymee;' để khởi tạo database tên 'buymee'
4. Thực hiện cấu hình khởi tạo database (file '.env'):
	- HOST = host của hệ thống database của máy (mặc định: localhost).
	- DB_PORT = port của hệ thống database của máy (mặc định: 8080).
	- DB_NAME = tên của database được khai báo (mặc định: buymee cho bước số 3).
	- DB_USERNAME = username của hệ thống database của máy (mặc định: postgres).
	- DB_PASSWORD = password của hệ thống database của máy.
Ghi chú: những thông tin về hệ thống database của máy (mặc định) được cài lúc, 
tải về PostgreSQL và có thể được nhìn thấy khi vào PostgreSQL cmd.
5. cd đến folder 'database'.
6. Gõ lệnh 'yarn' (đã tải về yarn), để thực hiện cài đặt dữ liệu.
7. Gõ lệnh 'yarn prisma migrate dev', để thực hiện việc điền và khai báo 
khởi điểm vào database.

- Khởi động backend (BackEndServer):
1. cd đến folder BackEndServer.
2. Thực hiện cấu hình kết nối database (file '.env'):
	- HOST = host của hệ thống database của máy (mặc định: localhost).
	- PORT_DB = port của hệ thống database của máy (mặc định: 8080).
	- DATABASE = tên của database được khai báo (mặc định: buymee cho bước số 3).
	- USER = username của hệ thống database của máy (mặc định: postgres).
	- PASSWORD = password của hệ thống database của máy.
3. Gõ lệnh 'yarn' (đã tải về yarn), để thực hiện cài đặt dữ liệu.
4. Gõ lệnh 'yarn start', để khởi động phần backend của server.

- Khởi động frontend:
Ghi chú: backend vẫn đang chạy, đây sẽ được chạy ở một tiến trình cmd song song.
1. cd đến folder frontend.
2. Gõ lệnh 'yarn' (đã tải về yarn), để thực hiện cài đặt dữ liệu.
3. Gõ lệnh 'yarn run dev', để khởi động phần frontend của server.
4. Vào trình duyệt (khuyến khích Google Chrome), và gõ vào địa chỉ URL của frontend được hiện lên.
5. Sử dụng trang web.